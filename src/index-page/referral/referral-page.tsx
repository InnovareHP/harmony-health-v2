/* ReferralsPage.tsx */

const CONTAINER = "max-w-6xl mx-auto px-6";

const SERVE_ITEMS = [
  "Dementia-related behaviors",
  "Acute psychiatric symptoms",
  "Suicidal or harmful thoughts",
  "Aggression or confusion",
  "Complex co-occurring medical and psychiatric needs",
] as const;

const REFERRAL_STEPS: Array<[title: string, subtitle: string]> = [
  ["Call Referral Line", "(XXX) XXX-XXXX"],
  ["Submit referral form", "Online, fax, or email"],
  ["Safe transfer coordination", "Our staff assists every step"],
  ["Admission & Family Support", "Families included from day one"],
];

const CONTINUUM_PATH = [
  "Inpatient stabilization",
  "PHP/IOP programs",
  "Outpatient therapy / community resources",
] as const;

const WHY_REFER = [
  "Geriatric psychiatry expertise",
  "Accredited & licensed",
  "Interdisciplinary team",
  "Family-centered approach",
  "Strong discharge planning & continuum of care",
] as const;

export default function ReferralsPage() {
  return (
    <main aria-labelledby="referrals-title">
      <ReferralHero />
      <WhoWeServe />
      <ReferralProcess />
      <CommitmentFamilies />
      <Continuum />
      <Insurance />
      <WhyRefer />
      <ReferralContact />
    </main>
  );
}

/* ============ Sections ============ */

function ReferralHero() {
  return (
    <section
      role="banner"
      aria-label="Partnering with Providers"
      className="relative"
    >
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Real image for better LCP + decoding */}
        <img
          src="/images/referral.jpg"
          alt="Clipboard and stethoscope symbolizing referrals"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div
          className={`${CONTAINER} relative text-white flex h-full items-center`}
        >
          <div>
            <h1
              id="referrals-title"
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              Partnering with Providers to Support Seniors in Crisis
            </h1>
            <p className="text-lg max-w-2xl">
              Fast, compassionate admissions and clear communication—so your
              patients get safe, specialized care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="py-16 bg-white" aria-labelledby="serve-title">
      <div className={`${CONTAINER} grid lg:grid-cols-2 gap-10 items-start`}>
        <div>
          <h2 id="serve-title" className="text-3xl font-bold mb-3">
            Who We Serve
          </h2>
          <p className="text-gray-700 mb-4">
            We specialize in psychiatric care for adults <strong>55+</strong>{" "}
            experiencing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {SERVE_ITEMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <aside className="rounded-lg p-6 border border-primary/20 bg-primary/5">
          <h3 className="font-semibold text-lg mb-2">
            Common Referral Sources
          </h3>
          <p className="text-gray-700">
            Hospitals, physicians, emergency departments, nursing homes, and
            community providers.
          </p>
        </aside>
      </div>
    </section>
  );
}

function ReferralProcess() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="process-title">
      <div className={CONTAINER}>
        <h2 id="process-title" className="text-3xl font-bold mb-8">
          Referral Process
        </h2>
        <ol
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Steps"
        >
          {REFERRAL_STEPS.map(([title, subtitle], idx) => (
            <li
              key={title}
              className="bg-white rounded-lg border p-5 shadow-sm"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {idx + 1}
              </div>
              <h3 className="font-semibold mt-3">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CommitmentFamilies() {
  return (
    <section className="py-16 bg-white" aria-labelledby="families-title">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 id="families-title" className="text-3xl font-bold mb-3">
            Commitment to Families
          </h2>
          <p className="text-gray-700">
            Every admission includes family meetings with care teams, caregiver
            education, and coordinated discharge planning.
          </p>
        </div>
      </div>
    </section>
  );
}

function Continuum() {
  return (
    <section className="py-16 bg-primary/10" aria-labelledby="continuum-title">
      <div className={CONTAINER}>
        <h2 id="continuum-title" className="text-3xl font-bold mb-6">
          Continuum of Care
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          {CONTINUUM_PATH.map((step, i) => (
            <div key={step} className="flex items-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {i + 1}
              </span>
              <span className="ml-3 font-medium text-gray-900">{step}</span>
              {i < CONTINUUM_PATH.length - 1 && (
                <span className="hidden md:inline mx-4 text-primary">→</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-6">
          We coordinate with referring providers and guide families through
          every step.
        </p>
      </div>
    </section>
  );
}

function Insurance() {
  return (
    <section className="py-16 bg-white" aria-labelledby="insurance-title">
      <div className={`${CONTAINER} grid md:grid-cols-2 gap-8 items-start`}>
        <div>
          <h2 id="insurance-title" className="text-3xl font-bold mb-3">
            Insurance & Coverage
          </h2>
          <p className="text-gray-700">
            We accept Medicare, Medicaid, and most commercial insurance.
            Benefits are verified quickly to avoid delays.
          </p>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
          <p className="text-sm text-gray-700">
            Need help checking coverage? Call our admissions team—verification
            typically takes just a few minutes with the patient’s demographics,
            policy info, and presenting concerns.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyRefer() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="why-title">
      <div className={CONTAINER}>
        <h2 id="why-title" className="text-3xl font-bold mb-4">
          Why Refer to Harmony Health?
        </h2>
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          aria-label="Reasons to refer"
        >
          {WHY_REFER.map((p) => (
            <li
              key={p}
              className="bg-white border rounded-lg p-4 shadow-sm text-gray-800"
            >
              • {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReferralContact() {
  return (
    <section className="py-16 bg-white" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <h2 id="contact-title" className="text-3xl font-bold mb-4">
          Referral Contact
        </h2>

        <div className="space-y-2 text-gray-800">
          <p>
            <strong>Referral Line:</strong>{" "}
            <a
              className="text-blue-600 hover:underline"
              href="tel:+1XXXXXXXXXX"
            >
              (XXX) XXX-XXXX
            </a>
          </p>
          <p>
            <strong>Fax:</strong> (XXX) XXX-XXXX
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              className="text-blue-600 hover:underline"
              href="mailto:referrals@harmonyhealth.org"
            >
              referrals@harmonyhealth.org
            </a>
          </p>
          <p>
            <strong>Online Referral Form:</strong>{" "}
            <a className="text-blue-600 hover:underline" href="/referral-form">
              Start a referral
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+1XXXXXXXXXX"
            className="px-6 py-3 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Call the referral line now"
          >
            Call Now
          </a>
          <a
            href="/referral-form"
            className="px-6 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors"
            aria-label="Open online referral form"
          >
            Submit Online
          </a>
        </div>
      </div>
    </section>
  );
}
