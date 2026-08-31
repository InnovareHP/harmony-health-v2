/**
 * Phone and email rules shared by the booking form (client-side feedback) and
 * the /api/inquiry Netlify function (authoritative check). Keeping one copy
 * means the browser can never accept something the server would reject.
 */

export const PHONE_HINT =
  "Enter a 10-digit US phone number, e.g. (817) 555-0100.";

export const EMAIL_HINT = "Enter a valid email address, e.g. name@example.com.";

/**
 * North American Numbering Plan check. Returns the number formatted as
 * "(817) 555-0100" (plus " ext. 22" when an extension was supplied), or null
 * when it isn't a dialable US/Canada number.
 *
 * Rejects: wrong digit count, area or exchange code starting 0 or 1, N11
 * service codes (411, 911, …), and repdigit junk like 1111111111.
 */
export const normalizeUsPhone = (value: string): string | null => {
  const raw = value.trim();

  // Pull off a trailing extension before touching the rest.
  const extMatch = raw.match(/(?:ext|x|#)\.?\s*(\d{1,6})\s*$/i);
  const extension = extMatch ? extMatch[1] : "";
  const base = extMatch ? raw.slice(0, extMatch.index) : raw;

  let digits = base.replace(/\D/g, "");

  // Strip the country code for +1 / 1-prefixed numbers.
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  if (digits.length !== 10) return null;

  const area = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);
  const line = digits.slice(6);

  // Area and exchange codes never begin with 0 or 1.
  if (/^[01]/.test(area) || /^[01]/.test(exchange)) return null;

  // N11 codes (211, 411, 911) are service numbers, not subscriber lines.
  if (area[1] === "1" && area[2] === "1") return null;
  if (exchange[1] === "1" && exchange[2] === "1") return null;

  // 1231231231233 and 5555555555 style filler.
  if (/^(\d)\1{9}$/.test(digits)) return null;

  const formatted = `(${area}) ${exchange}-${line}`;
  return extension ? `${formatted} ext. ${extension}` : formatted;
};

/**
 * Structural email check. Deliberately stricter than the browser's
 * type="email", which accepts things like "a@b" and "a@b..c".
 *
 * Expects an already-lowercased, whitespace-free value.
 */
const EMAIL_PATTERN =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/;

export const isValidEmail = (value: string): boolean => {
  const email = value.trim().toLowerCase();

  if (email.length < 6 || email.length > 254) return false;
  if (email.includes("..")) return false;

  const at = email.lastIndexOf("@");
  if (at < 1) return false;
  // RFC 5321 caps the local part at 64 octets.
  if (at > 64) return false;

  const domain = email.slice(at + 1);
  if (domain.length > 253) return false;
  // A dotted-quad host would pass the pattern below but isn't wanted here.
  if (/^\d+(\.\d+)*$/.test(domain)) return false;

  return EMAIL_PATTERN.test(email);
};
