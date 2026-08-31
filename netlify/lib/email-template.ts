/**
 * Harmony Health branded email template.
 *
 * Table-based layout with inline styles only — Outlook and Gmail strip
 * <style> blocks, flexbox, and grid. Colors mirror the site tokens in
 * src/styles/global.css:
 *   --primary            #71af85  (green)
 *   --background-secondary #c3dac6 (header band)
 *   --primary-foreground #a98a76  (tan accent)
 */

const BRAND = {
  green: "#71af85",
  greenDark: "#4f8a64",
  band: "#c3dac6",
  tan: "#a98a76",
  ink: "#1f2937",
  muted: "#6b7280",
  hairline: "#e5e7eb",
  zebra: "#f7faf8",
  paper: "#ffffff",
  canvas: "#eef3ee",
} as const;

const FONT_STACK =
  "Montserrat, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const HEADING_STACK = "Cinzel, Georgia, 'Times New Roman', serif";

export const ORG = {
  name: "Harmony Health",
  street: "7001 Bryant Irvin Rd",
  cityStateZip: "Fort Worth, TX 76132",
  mainLocal: "+1 817 529 3170",
  mainTollFree: "+1 844 570 6444",
  email: "contact@harmonyfortworth.com",
  siteUrl: "https://harmonyfortworth.com",
} as const;

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const telHref = (value: string) => `tel:${value.replace(/[^\d+]/g, "")}`;

export type InquiryEmailInput = {
  rows: Array<[string, string]>;
  message: string;
  name: string;
  email: string;
  phone: string;
  /** Absolute origin used for the logo and footer link. */
  siteUrl?: string;
};

export function renderInquiryEmail({
  rows,
  message,
  name,
  email,
  phone,
  siteUrl = ORG.siteUrl,
}: InquiryEmailInput) {
  const origin = siteUrl.replace(/\/+$/, "");
  const logoUrl = `${origin}/images/harmony-health-logo.png`;

  const preheader = `New appointment request from ${name} — ${phone}`;

  const detailRows = rows
    .map(
      ([label, value], i) => `
              <tr>
                <td style="padding:12px 16px;background:${
                  i % 2 ? BRAND.paper : BRAND.zebra
                };border-bottom:1px solid ${
        BRAND.hairline
      };font-size:13px;font-weight:700;color:${
        BRAND.muted
      };text-transform:uppercase;letter-spacing:.04em;width:42%;vertical-align:top;">${escapeHtml(
        label
      )}</td>
                <td style="padding:12px 16px;background:${
                  i % 2 ? BRAND.paper : BRAND.zebra
                };border-bottom:1px solid ${
        BRAND.hairline
      };font-size:15px;color:${BRAND.ink};vertical-align:top;">${escapeHtml(
        value
      )}</td>
              </tr>`
    )
    .join("");

  const notesBlock = message
    ? `
              <tr>
                <td colspan="2" style="padding:20px 16px 6px;background:${
                  BRAND.paper
                };">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${
                    BRAND.muted
                  };text-transform:uppercase;letter-spacing:.04em;">Notes from sender</p>
                  <div style="border-left:3px solid ${
                    BRAND.tan
                  };padding:4px 0 4px 14px;font-size:15px;line-height:1.6;color:${
        BRAND.ink
      };white-space:pre-wrap;">${escapeHtml(message)}</div>
                </td>
              </tr>`
    : "";

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>New appointment request</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.canvas};font-family:${FONT_STACK};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(
    preheader
  )}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${
    BRAND.canvas
  };padding:24px 12px;">
    <tr>
      <td align="center">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:${
          BRAND.paper
        };border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(31,41,55,.08);">

          <!-- Brand band -->
          <tr>
            <td align="center" style="background:${
              BRAND.band
            };padding:24px 24px 20px;">
              <a href="${origin}" style="text-decoration:none;">
                <img src="${logoUrl}" width="180" alt="${
    ORG.name
  }" style="display:block;border:0;width:180px;max-width:70%;height:auto;">
              </a>
            </td>
          </tr>

          <!-- Title bar -->
          <tr>
            <td style="background:${BRAND.green};padding:18px 28px;">
              <h1 style="margin:0;font-family:${HEADING_STACK};font-size:22px;line-height:1.3;color:${
    BRAND.paper
  };font-weight:700;">New appointment request</h1>
              <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,.92);">Submitted through the website booking form</p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 24px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${
                BRAND.hairline
              };border-radius:12px;overflow:hidden;">
${detailRows}
${notesBlock}
              </table>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:8px 24px 26px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="${telHref(
                      phone
                    )}" style="display:inline-block;background:${
    BRAND.green
  };color:${
    BRAND.paper
  };font-size:15px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:10px;">Call ${escapeHtml(
    phone
  )}</a>
                  </td>
                  <td>
                    <a href="mailto:${encodeURIComponent(
                      email
                    ).replace(/%40/g, "@")}" style="display:inline-block;background:${
    BRAND.paper
  };color:${BRAND.greenDark};border:2px solid ${
    BRAND.green
  };font-size:15px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:10px;">Reply by email</a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:13px;color:${
                BRAND.muted
              };">Replying to this message goes straight to ${escapeHtml(
    name
  )}.</p>
            </td>
          </tr>

          <!-- Crisis note -->
          <tr>
            <td style="padding:0 24px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;">
                <tr>
                  <td style="padding:14px 16px;font-size:13px;line-height:1.6;color:#7f1d1d;">
                    <strong>Screening reminder:</strong> if this request signals an immediate crisis, follow the 988 / 911 escalation protocol rather than the standard callback queue.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer band -->
          <tr>
            <td style="background:${
              BRAND.band
            };padding:22px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-family:${HEADING_STACK};font-size:16px;font-weight:700;color:#2f4636;">${
    ORG.name
  }</p>
              <p style="margin:0;font-size:13px;line-height:1.7;color:#3f5545;">
                ${ORG.street}, ${ORG.cityStateZip}<br>
                Main Local <a href="${telHref(ORG.mainLocal)}" style="color:#2f4636;">${
    ORG.mainLocal
  }</a> &nbsp;•&nbsp; Toll Free <a href="${telHref(
    ORG.mainTollFree
  )}" style="color:#2f4636;">${ORG.mainTollFree}</a><br>
                <a href="${origin}" style="color:#2f4636;">harmonyfortworth.com</a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 24px;text-align:center;font-size:11px;line-height:1.6;color:${
              BRAND.muted
            };">
              This message was generated by the appointment request form and may contain confidential information. If it reached you in error, delete it and notify ${
                ORG.email
              }.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `${ORG.name} — New appointment request`,
    "Submitted through the website booking form",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(message ? ["", "Notes from sender:", message] : []),
    "",
    `Reply to this email to reach ${name} directly.`,
    "",
    "—",
    `${ORG.name} · ${ORG.street}, ${ORG.cityStateZip}`,
    `Main Local ${ORG.mainLocal} · Toll Free ${ORG.mainTollFree}`,
    origin,
  ].join("\n");

  return { html, text };
}
