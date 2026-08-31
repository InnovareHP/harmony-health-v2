"use client";
import { useState } from "react";
import {
  EMAIL_HINT,
  isValidEmail,
  normalizeUsPhone,
  PHONE_HINT,
} from "../../lib/contact-validation";

const org = {
  name: "Harmony Health",
  street: "7001 Bryant Irvin Rd",
  cityStateZip: "Fort Worth, TX 76132",
  mainLocal: "+1 817 529 3170",
  mainTollFree: "+1 844 570 6444",
  email: "contact@harmonyfortworth.com",
};

const TIME_OPTIONS = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Late afternoon (4pm - 6pm)",
  "No preference",
];

const CONTACT_OPTIONS = ["Phone", "Email"];

const RELATIONSHIP_OPTIONS = [
  "Myself",
  "Family member / caregiver",
  "Referring provider",
  "Facility / case manager",
  "Other",
];

const steps = [
  {
    title: "Send your request",
    body: "Tell us who you are and when you'd like to be seen.",
  },
  {
    title: "We review it",
    body: "Our intake team checks provider availability for your requested window.",
  },
  {
    title: "We confirm by phone",
    body: "You get a call or email within one business day to lock in the time.",
  },
];

const today = new Date().toISOString().slice(0, 10);

const emptyForm = {
  name: "",
  organization: "",
  relationship: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  contactMethod: "Phone",
  message: "",
  company_website: "", // honeypot
};

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "preferredDate", string>>;

/** Mirrors the server checks in netlify/functions/inquiry.mts. */
const validateField = (
  key: keyof FieldErrors,
  form: typeof emptyForm
): string | undefined => {
  const value = form[key].trim();

  switch (key) {
    case "name":
      return value.length < 2 ? "Please enter your full name." : undefined;
    case "email":
      if (!value) return "Email is required.";
      return isValidEmail(value) ? undefined : EMAIL_HINT;
    case "phone":
      if (!value) return "Phone is required.";
      return normalizeUsPhone(value) ? undefined : PHONE_HINT;
    case "preferredDate":
      if (!value) return "Please choose a preferred date.";
      return value < today ? "Please choose a date that isn't in the past." : undefined;
  }
};

const labelClass = "block text-sm font-semibold text-primary-foreground mb-1.5";
const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-primary-foreground shadow-sm focus:outline-none focus:ring-2";
const fieldClass = `${fieldBase} border-gray-300 focus:border-primary focus:ring-primary/30`;
const fieldErrorClass = `${fieldBase} border-red-400 focus:border-red-500 focus:ring-red-200`;

const BookAppointment = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const update =
    (key: keyof typeof emptyForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, [key]: value }));
      // Clear an existing error as soon as the value becomes valid again.
      setFieldErrors((prev) => {
        if (!(key in prev)) return prev;
        const errorKey = key as keyof FieldErrors;
        const next = { ...prev };
        delete next[errorKey];
        return next;
      });
    };

  const validateOnBlur = (key: keyof FieldErrors) => () =>
    setFieldErrors((prev) => {
      const error = validateField(key, form);
      const next = { ...prev };
      if (error) next[key] = error;
      else delete next[key];
      return next;
    });

  const describedBy = (key: keyof FieldErrors) =>
    fieldErrors[key] ? `${key}-error` : undefined;

  const classFor = (key: keyof FieldErrors) =>
    fieldErrors[key] ? fieldErrorClass : fieldClass;

  const FieldError = ({ name }: { name: keyof FieldErrors }) =>
    fieldErrors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm text-red-700">
        {fieldErrors[name]}
      </p>
    ) : null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keys: Array<keyof FieldErrors> = [
      "name",
      "email",
      "phone",
      "preferredDate",
    ];
    const errors: FieldErrors = {};
    for (const key of keys) {
      const error = validateField(key, form);
      if (error) errors[key] = error;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          data.error ?? "Something went wrong. Please call us instead."
        );
        setStatus("error");
        return;
      }

      setForm(emptyForm);
      setFieldErrors({});
      setStatus("sent");
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection or call us."
      );
      setStatus("error");
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">
          Request an Appointment
        </h1>
        <p className="text-lg text-primary-foreground leading-relaxed">
          Send us your preferred day and time, and our intake team will confirm
          within one business day. If this is a mental health emergency, call{" "}
          <a
            href="tel:988"
            className="text-blue-700 hover:underline font-semibold"
          >
            988
          </a>{" "}
          or go to your nearest emergency room.
        </p>
      </header>

      <section
        aria-labelledby="inquiry-heading"
        className="mt-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10"
      >
        <div>
          <h2
            id="inquiry-heading"
            className="text-2xl font-semibold text-primary mb-4"
          >
            Appointment request
          </h2>

          {status === "sent" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 shadow-md">
              <h3 className="text-xl font-bold text-green-900">
                Thank you — your request is in.
              </h3>
              <p className="mt-3 text-green-900">
                Our intake team will reach out within one business day to
                confirm your appointment. If you need to speak to someone
                sooner, call{" "}
                <a
                  href={`tel:${org.mainLocal.replace(/\s/g, "")}`}
                  className="font-semibold underline"
                >
                  {org.mainLocal}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-green-700 px-5 py-2.5 font-semibold text-green-900 hover:bg-green-100"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate={false}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md space-y-5"
            >
              {/* Honeypot — hidden from users, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={update("company_website")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Your name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    onBlur={validateOnBlur("name")}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={describedBy("name")}
                    className={classFor("name")}
                    placeholder="Jane Doe"
                  />
                  <FieldError name="name" />
                </div>

                <div>
                  <label className={labelClass} htmlFor="organization">
                    Organization / facility
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    maxLength={160}
                    autoComplete="organization"
                    value={form.organization}
                    onChange={update("organization")}
                    className={fieldClass}
                    placeholder="Sunrise Assisted Living (optional)"
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={160}
                    inputMode="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    onBlur={validateOnBlur("email")}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={describedBy("email")}
                    className={classFor("email")}
                    placeholder="you@example.com"
                  />
                  <FieldError name="email" />
                </div>

                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={40}
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    onBlur={validateOnBlur("phone")}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={describedBy("phone")}
                    className={classFor("phone")}
                    placeholder="(817) 555-0100"
                  />
                  <FieldError name="phone" />
                  <p className="mt-1.5 text-xs text-gray-500">
                    US numbers only. Add an extension as &ldquo;ext. 22&rdquo;.
                  </p>
                </div>

                <div>
                  <label className={labelClass} htmlFor="relationship">
                    This appointment is for
                  </label>
                  <select
                    id="relationship"
                    name="relationship"
                    value={form.relationship}
                    onChange={update("relationship")}
                    className={fieldClass}
                  >
                    <option value="">Select one — e.g. family member</option>
                    {RELATIONSHIP_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="contactMethod">
                    Best way to reach you
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={update("contactMethod")}
                    className={fieldClass}
                  >
                    {CONTACT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="preferredDate">
                    Preferred date <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    min={today}
                    value={form.preferredDate}
                    onChange={update("preferredDate")}
                    onBlur={validateOnBlur("preferredDate")}
                    aria-invalid={Boolean(fieldErrors.preferredDate)}
                    aria-describedby={describedBy("preferredDate")}
                    className={classFor("preferredDate")}
                  />
                  <FieldError name="preferredDate" />
                </div>

                <div>
                  <label className={labelClass} htmlFor="preferredTime">
                    Preferred time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={update("preferredTime")}
                    className={fieldClass}
                  >
                    <option value="">Select a time window</option>
                    {TIME_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Anything else we should know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  value={form.message}
                  onChange={update("message")}
                  className={fieldClass}
                  placeholder="e.g. Mornings work best, we'd need a wheelchair-accessible room, and we have questions about insurance. Please don't include medical details."
                />
                <p className="mt-1.5 text-xs text-gray-500">
                  {form.message.length}/2000
                </p>
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {errorMessage}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-8 py-3 text-lg font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send request"}
                </button>
                <p className="text-sm text-gray-500">
                  Required fields are marked{" "}
                  <span className="text-red-600">*</span>
                </p>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-primary mb-3">
              Prefer to talk to someone?
            </h2>
            <dl className="space-y-2 text-primary-foreground font-medium">
              <div>
                <dt className="sr-only">Main Local</dt>
                <dd>
                  <strong>Main Local:</strong>{" "}
                  <a
                    href={`tel:${org.mainLocal.replace(/\s/g, "")}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.mainLocal}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Main Toll Free</dt>
                <dd>
                  <strong>Main Toll Free:</strong>{" "}
                  <a
                    href={`tel:${org.mainTollFree.replace(/\s/g, "")}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.mainTollFree}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${org.email}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-primary-foreground">
              {org.street}
              <br />
              {org.cityStateZip}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-primary mb-2">
              Please don&apos;t share medical details here
            </h2>
            <p className="text-sm text-primary-foreground">
              This form is for contact and scheduling information only. Save
              diagnoses, medications, and symptoms for the phone intake call, so
              your health information stays protected.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-bold text-red-800 mb-2">
              In a crisis?
            </h2>
            <p className="text-sm text-red-900">
              Call or text{" "}
              <a href="tel:988" className="font-semibold underline">
                988
              </a>{" "}
              (Suicide &amp; Crisis Lifeline), or call{" "}
              <a href="tel:911" className="font-semibold underline">
                911
              </a>{" "}
              for an emergency.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default BookAppointment;
