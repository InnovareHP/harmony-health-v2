/**
 * Input sanitizing for the appointment request form.
 *
 * Runs before validation, so validators see normalized values. Escaping for
 * HTML output is separate and still applied by the email template — this layer
 * removes characters that have no business in a submitted field at all:
 * control codes, zero-width/bidi tricks, and newlines in single-line values
 * (the name is interpolated into the email subject header).
 */

/**
 * Characters stripped from every field: C0/C1 control codes and DEL (except
 * tab/newline/carriage return, handled per field), plus zero-width, word
 * joiner, line/paragraph separators, bidi overrides and BOM — all used to
 * disguise text or break layout.
 */
const isStrippedCodePoint = (cp: number) =>
  cp <= 0x08 ||
  cp === 0x0b ||
  cp === 0x0c ||
  (cp >= 0x0e && cp <= 0x1f) ||
  (cp >= 0x7f && cp <= 0x9f) ||
  (cp >= 0x200b && cp <= 0x200f) ||
  cp === 0x2028 ||
  cp === 0x2029 ||
  (cp >= 0x202a && cp <= 0x202e) ||
  (cp >= 0x2060 && cp <= 0x206f) ||
  cp === 0xfeff;

/** Unicode-normalize and drop characters that should never appear in input. */
const clean = (value: string) =>
  Array.from(value.normalize("NFKC"))
    .filter((char) => !isStrippedCodePoint(char.codePointAt(0) as number))
    .join("");

/** Single-line field: no newlines or tabs, whitespace runs collapsed. */
export const sanitizeLine = (value: string) =>
  clean(value)
    .replace(/[\t\r\n]+/g, " ")
    .replace(/ {2,}/g, " ")
    .trim();

/**
 * Multi-line field: line breaks kept but normalized to \n, trailing spaces
 * dropped, and runs of blank lines capped at one so the email body stays tidy.
 */
export const sanitizeMultiline = (value: string) =>
  clean(value)
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, " ")
    .split("\n")
    .map((line) => line.replace(/ {2,}/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

/** Lowercased, whitespace-free — addresses are case-insensitive in practice. */
export const sanitizeEmail = (value: string) =>
  sanitizeLine(value).replace(/\s+/g, "").toLowerCase();

/** Keeps only characters that can legitimately appear in a phone number. */
export const sanitizePhone = (value: string) =>
  sanitizeLine(value)
    .replace(/[^\d+()\-. x]/gi, "")
    .replace(/ {2,}/g, " ")
    .trim();

/** ISO date as emitted by <input type="date">; anything else becomes "". */
export const sanitizeDate = (value: string) => {
  const trimmed = sanitizeLine(value);
  return /^\d{4}-\d{2}-\d{2}$/.test(trimmed) ? trimmed : "";
};

/**
 * Header-safe: used for values interpolated into the email subject. Strips
 * anything a mail header must not carry and caps the length.
 */
export const sanitizeHeaderValue = (value: string, max = 120) =>
  sanitizeLine(value)
    .replace(/[\r\n:]+/g, " ")
    .replace(/ {2,}/g, " ")
    .slice(0, max)
    .trim();

/** True when the date is a real calendar date and not in the past. */
export const isFutureIsoDate = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(y, m - 1, d));
  if (
    parsed.getUTCFullYear() !== y ||
    parsed.getUTCMonth() !== m - 1 ||
    parsed.getUTCDate() !== d
  ) {
    return false;
  }
  const now = new Date();
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );
  // Allow yesterday-onward so a submitter in a timezone behind UTC isn't
  // rejected for picking "today" on their own calendar.
  return parsed.getTime() >= todayUtc - 24 * 60 * 60 * 1000;
};
