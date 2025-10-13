import { MapPin, Phone, Printer } from "lucide-react";

const resources = [
  { label: "HIPAA Privacy Practices", href: "/compliance" },
  { label: "Price Transparency", href: "/compliance" },
];

const policies = [
  { label: "Medical Disclaimer", href: "/compliance" },
  { label: "Notice of Nondiscrimination", href: "/compliance" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-[#c3dac6] text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
      {/* Top border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand + Address */}
        <div itemScope itemType="https://schema.org/Organization">
          <a href="/" className="inline-flex items-center gap-2">
            <img
              src="/images/harmony-health-logo.png"
              alt="Harmony Health"
              className="w-40 h-20"
            />
          </a>

          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            Compassionate behavioral health services for seniors and families.
          </p>

          <address
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="not-italic mt-5 space-y-2 text-sm text-primary-foreground"
          >
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
              <span className="text-black">
                7001 Bryant Irvin Rd Fort Worth, TX 76132
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Main Local:
              <a
                href="tel:+18175293170"
                className="hover:text-primary text-black"
              >
                +1 817 529 3170
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Printer className="h-4 w-4" aria-hidden="true" />
              Fax:
              <span className="text-black">+1 817 529 3171</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Main Toll Free:
              <a
                href="tel:+18445706444"
                className="hover:text-primary text-black"
              >
                +1 844 570 6444
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              24/7 Intake Assessment Hotline:
              <a
                href="tel:+18445707444"
                className="hover:text-primary text-black"
              >
                +1 844 570 7444
              </a>
            </div>
            {/* <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a
                href="mailto:info@harmonyhealth.org"
                className="hover:text-primary text-black"
              >
                info@harmonyhealth.org
              </a>
            </div> */}
          </address>

          {/* Social */}
          {/* <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border px-3 py-2 hover:border-primary hover:text-primary text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border px-3 py-2 hover:border-primary hover:text-primary text-primary-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div> */}
        </div>

        {/* Resources */}
        <nav aria-labelledby="footer-resources">
          <h3
            id="footer-resources"
            className="mb-3 text-sm font-semibold text-primary-foreground dark:text-neutral-100"
          >
            Patient Resources
          </h3>
          <ul className="space-y-2">
            {resources.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-flex items-center hover:text-primary text-black"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Policies */}
        <nav aria-labelledby="footer-policies">
          <h3
            id="footer-policies"
            className="mb-3 text-sm font-semibold text-primary-foreground dark:text-neutral-100"
          >
            Policies & Notices
          </h3>
          <ul className="space-y-2">
            {policies.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-flex items-center text-/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
      </div>

      {/* Bottom bar */}
      <div className="border-t bg-[#c3dac6] px-6 py-5 text-center text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900">
        <p>© {new Date().getFullYear()} Harmony Health. All rights reserved.</p>
      </div>
    </footer>
  );
}
