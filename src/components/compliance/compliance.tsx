const toc = [
  { id: "medical-disclaimer", label: "Medical Disclaimer" },
  { id: "notice-of-nondiscrimination", label: "Notice of Nondiscrimination" },
  { id: "language-assistance", label: "Language Assistance" },
  { id: "accessibility", label: "Accessibility Statement" },
  { id: "privacy-policy", label: "Website Privacy Policy" },
  { id: "cookie-policy", label: "Cookie Policy" },
  { id: "cookie-banner", label: "Cookie Banner Language" },
  { id: "form-disclaimer", label: "Form Disclaimer" },
  { id: "price-transparency", label: "Price Transparency" },
  { id: "no-surprises-act", label: "No Surprises Act" },
];

const ComplianceLegalPolicies = () => {
  return (
    <div>
      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">
        {/* LEFT: Main copy */}
        <article className="space-y-10">
          <header>
            <h1 className="text-3xl font-bold text-primary">
              Compliance, Legal, and Policies
            </h1>
            <p className="text-gray-700 mt-2">
              Our commitment to safety, compliance, and transparency for
              patients, families, and visitors.
            </p>
          </header>

          <section
            id="medical-disclaimer"
            aria-labelledby="medical-disclaimer-heading"
          >
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="medical-disclaimer-heading"
            >
              Medical Disclaimer
            </h2>
            <p className="text-gray-800 leading-relaxed">
              The information on this website is provided for general
              informational and educational purposes only and is not intended as
              a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have
              regarding a medical condition. Never disregard professional
              medical advice or delay seeking it because of something you have
              read on this website. If you are experiencing a medical or
              psychiatric emergency, call 911 immediately.
            </p>
          </section>

          <section
            id="notice-of-nondiscrimination"
            aria-labelledby="notice-heading"
          >
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="notice-heading"
            >
              Notice of Nondiscrimination
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Harmony Health complies with applicable federal civil rights laws
              and does not discriminate on the basis of race, color, national
              origin, age, disability, or sex. Harmony Health does not exclude
              people or treat them differently because of race, color, national
              origin, age, disability, or sex.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Harmony Health provides free aids and services to people with
              disabilities, such as qualified sign language interpreters and
              written information in other formats (large print, audio,
              accessible electronic formats). Harmony Health also provides free
              language services to people whose primary language is not English,
              such as qualified interpreters and information written in other
              languages.
            </p>
            <p className="text-gray-800 leading-relaxed">
              If you need these services, please contact our Civil Rights
              Coordinator at
              <span className="font-semibold"> (XXX) XXX-XXXX</span>.
            </p>
          </section>

          <section id="language-assistance" aria-labelledby="language-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="language-heading"
            >
              Language Assistance
            </h2>
            <p className="text-gray-800 leading-relaxed mb-2">
              <span className="font-semibold">ATTENTION:</span> If you speak a
              language other than English, language assistance services, free of
              charge, are available to you. Call
              <span className="font-semibold"> (XXX) XXX-XXXX</span>.
            </p>
            <p className="text-sm text-gray-600">
              (Insert top 15 non‑English language taglines here as required by
              Section 1557.)
            </p>
          </section>

          <section id="accessibility" aria-labelledby="accessibility-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="accessibility-heading"
            >
              Accessibility Statement
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Harmony Health is committed to ensuring digital accessibility for
              people with disabilities. We are continually improving the user
              experience for everyone and applying the relevant accessibility
              standards (WCAG 2.1).
            </p>
          </section>

          <section id="privacy-policy" aria-labelledby="privacy-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="privacy-heading"
            >
              Website Privacy Policy
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Harmony Health respects the privacy of our patients, visitors, and
              website users. This Privacy Policy describes how we collect, use,
              and protect information through our website.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">
              Information We Collect:
            </h3>
            <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
              <li>
                Contact details provided through forms (name, phone, email).
              </li>
              <li>
                Non‑identifiable information through cookies and analytics
                (browser type, site usage).
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-2">
              How We Use Information:
            </h3>
            <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
              <li>To respond to inquiries and referrals.</li>
              <li>To improve website performance and user experience.</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-2">
              How We Protect Information:
            </h3>
            <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
              <li>Secure servers and encryption for data transmission.</li>
              <li>
                No selling or sharing of personal information for marketing
                purposes.
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-2">Your Rights:</h3>
            <ul className="list-disc list-inside text-gray-800 mb-2 space-y-1">
              <li>
                Request access to or deletion of your personal information.
              </li>
              <li>
                California residents may have additional rights under the
                CCPA/CPRA.
              </li>
            </ul>
            <p className="text-gray-700">
              This Privacy Policy applies only to website use and does not
              replace our HIPAA Notice of Privacy Practices.
            </p>
          </section>

          <section id="cookie-policy" aria-labelledby="cookie-policy-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="cookie-policy-heading"
            >
              Cookie Policy
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Harmony Health uses cookies to improve browsing experience,
              analyze site traffic, and understand how visitors use our website.
              Cookies are small files stored on your device that allow us to
              remember preferences and track usage trends.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">
              Types of Cookies We Use:
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>
                <span className="font-semibold">Essential cookies</span>:
                required for core site functionality.
              </li>
              <li>
                <span className="font-semibold">Analytics cookies</span>: help
                us measure site traffic and usage.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              By using this website, you consent to the use of cookies in
              accordance with this policy. You may disable cookies in your
              browser settings; however, some parts of the site may not function
              properly.
            </p>
          </section>

          <section id="cookie-banner" aria-labelledby="cookie-banner-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="cookie-banner-heading"
            >
              Cookie Banner Language
            </h2>
            <blockquote className="border-l-4 border-green-600 pl-4 text-gray-800 italic">
              “We use cookies to improve your browsing experience and analyze
              site traffic. By continuing to use this site, you consent to our
              use of cookies. To learn more, see our Privacy Policy.”
            </blockquote>
          </section>

          <section
            id="form-disclaimer"
            aria-labelledby="form-disclaimer-heading"
          >
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="form-disclaimer-heading"
            >
              Form Disclaimer
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Please do not submit personal medical information or protected
              health information (PHI) through website forms. For clinical
              matters, call our Referral Line directly. Website forms are
              intended for general inquiries only.
            </p>
          </section>

          <section
            id="price-transparency"
            aria-labelledby="price-transparency-heading"
          >
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="price-transparency-heading"
            >
              Price Transparency
            </h2>
            <p className="text-gray-800 leading-relaxed mb-3">
              In compliance with the CMS Price Transparency Rule, Harmony Health
              provides access to standard charge information. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 mb-3">
              <li>
                A comprehensive machine‑readable file of all items and services.
              </li>
              <li>A consumer‑friendly list of shoppable services.</li>
            </ul>
            <p className="text-gray-700">
              These files are available for download on our{" "}
              <a
                href="/price-transparency"
                className="text-blue-600 hover:underline"
              >
                Price Transparency
              </a>{" "}
              page.
            </p>
          </section>

          <section id="no-surprises-act" aria-labelledby="nsa-heading">
            <h2
              className="text-2xl font-semibold text-primary mb-3"
              id="nsa-heading"
            >
              No Surprises Act
            </h2>
            <p className="text-gray-800 leading-relaxed">
              You have the right to receive a “Good Faith Estimate” explaining
              how much your medical care will cost. This applies to all
              uninsured or self‑pay patients. For more information, please see
              our{" "}
              <a
                href="/no-surprises-act"
                className="text-blue-600 hover:underline"
              >
                No Surprises Act
              </a>{" "}
              page.
            </p>
          </section>
        </article>

        {/* RIGHT: Table of contents */}
        <aside className="hidden lg:block border-l border-gray-200 pl-6">
          <nav aria-label="On this page" className="space-y-3">
            {toc.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="block text-primary hover:underline"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </aside>
      </section>
    </div>
  );
};

export default ComplianceLegalPolicies;
