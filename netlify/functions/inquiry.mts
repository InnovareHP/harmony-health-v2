import type { Config, Context } from "@netlify/functions";
import { ORG, renderInquiryEmail } from "../lib/email-template.js";
import {
  EMAIL_HINT,
  isValidEmail,
  normalizeUsPhone,
  PHONE_HINT,
} from "../../src/lib/contact-validation.js";
import {
  isFutureIsoDate,
  sanitizeDate,
  sanitizeEmail,
  sanitizeHeaderValue,
  sanitizeLine,
  sanitizeMultiline,
} from "../lib/sanitize.js";

// Serves POST /api/inquiry — the appointment request form on /book.
export const config: Config = {
  path: "/api/inquiry",
  method: ["POST"],
};

const MAX_LENGTHS = {
  name: 120,
  organization: 160,
  email: 160,
  phone: 40,
  relationship: 60,
  preferredDate: 20,
  preferredTime: 40,
  contactMethod: 20,
  message: 2000,
} as const;

type Field = keyof typeof MAX_LENGTHS;

const REQUIRED: Field[] = ["name", "email", "phone", "preferredDate"];

const ALLOWED_TIMES = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Late afternoon (4pm - 6pm)",
  "No preference",
];

const ALLOWED_CONTACT = ["Phone", "Email"];

const ALLOWED_RELATIONSHIPS = [
  "Myself",
  "Family member / caregiver",
  "Referring provider",
  "Facility / case manager",
  "Other",
];

const SANITIZERS: Record<Field, (value: string) => string> = {
  name: sanitizeLine,
  organization: sanitizeLine,
  email: sanitizeEmail,
  phone: sanitizeLine,
  relationship: sanitizeLine,
  preferredDate: sanitizeDate,
  preferredTime: sanitizeLine,
  contactMethod: sanitizeLine,
  message: sanitizeMultiline,
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default async (request: Request, _context: Context) => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Missing RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL"
    );
    return json(
      { error: "Email is not configured on the server. Please call us instead." },
      500
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot: real users never fill this field.
  if (
    typeof payload.company_website === "string" &&
    payload.company_website.trim() !== ""
  ) {
    return json({ ok: true }, 200);
  }

  const fields = {} as Record<Field, string>;
  for (const key of Object.keys(MAX_LENGTHS) as Field[]) {
    const raw = payload[key];
    // Reject oversize input before sanitizing, so a huge string can't be
    // trimmed down into something that passes the cap.
    if (typeof raw === "string" && raw.length > MAX_LENGTHS[key] * 2) {
      return json({ error: `${key} is too long.` }, 400);
    }
    const value = typeof raw === "string" ? SANITIZERS[key](raw) : "";
    if (value.length > MAX_LENGTHS[key]) {
      return json({ error: `${key} is too long.` }, 400);
    }
    fields[key] = value;
  }

  const missing = REQUIRED.filter((key) => fields[key] === "");
  if (missing.length > 0) {
    return json(
      { error: `Missing required field(s): ${missing.join(", ")}.` },
      400
    );
  }

  if (!isValidEmail(fields.email)) {
    return json({ error: EMAIL_HINT }, 400);
  }

  // Replaces the submitted phone with a normalized "(817) 555-0100" form, so
  // the email always shows one consistent format.
  const normalizedPhone = normalizeUsPhone(fields.phone);
  if (!normalizedPhone) {
    return json({ error: PHONE_HINT }, 400);
  }
  fields.phone = normalizedPhone;

  // sanitizeDate already blanked anything that wasn't ISO yyyy-mm-dd.
  if (!fields.preferredDate || !isFutureIsoDate(fields.preferredDate)) {
    return json(
      { error: "Please choose a valid date that isn't in the past." },
      400
    );
  }

  if (fields.preferredTime && !ALLOWED_TIMES.includes(fields.preferredTime)) {
    return json({ error: "Please choose a valid preferred time." }, 400);
  }

  if (fields.contactMethod && !ALLOWED_CONTACT.includes(fields.contactMethod)) {
    return json({ error: "Please choose a valid contact method." }, 400);
  }

  if (
    fields.relationship &&
    !ALLOWED_RELATIONSHIPS.includes(fields.relationship)
  ) {
    return json({ error: "Please choose a valid option." }, 400);
  }

  const rows: Array<[string, string]> = [
    ["Name", fields.name],
    ["Organization", fields.organization || "—"],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Preferred date", fields.preferredDate],
    ["Preferred time", fields.preferredTime || "No preference"],
    ["Best way to reach", fields.contactMethod || "Phone"],
  ];

  const { html, text } = renderInquiryEmail({
    rows,
    message: fields.message,
    name: fields.name,
    email: fields.email,
    phone: fields.phone,
    siteUrl: process.env.PUBLIC_SITE_URL ?? ORG.siteUrl,
  });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: fields.email,
        subject: sanitizeHeaderValue(
          `Appointment request — ${fields.name} (${fields.preferredDate})`,
          150
        ),
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("Resend send failed", response.status, detail.slice(0, 500));
      return json(
        { error: "We couldn't send your request. Please call us instead." },
        502
      );
    }
  } catch (err) {
    console.error("Resend request threw", err);
    return json(
      { error: "We couldn't send your request. Please call us instead." },
      502
    );
  }

  return json({ ok: true }, 200);
};
