export default function ReferralsPage() {
  return (
    <main>
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

/* ===========================
   Sections (all in one file)
   =========================== */

function ReferralHero() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/clipboard-stethoscope.jpg')" }}
      aria-label="Partnering with Providers"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-6xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Partnering with Providers to Support Seniors in Crisis
        </h1>
        <p className="text-lg max-w-2xl">
          Fast, compassionate admissions and clear communication—so your
          patients get safe, specialized care.
        </p>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const items = [
    "Dementia-related behaviors",
    "Acute psychiatric symptoms",
    "Suicidal or harmful thoughts",
    "Aggression or confusion",
    "Complex co-occurring medical and psychiatric needs",
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-3">Who We Serve</h2>
          <p className="text-gray-700 mb-4">
            We specialize in psychiatric care for adults <strong>55+</strong>{" "}
            experiencing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg p-6 border border-primary/20 bg-primary/5">
          <h3 className="font-semibold text-lg mb-2">
            Common Referral Sources
          </h3>
          <p className="text-gray-700">
            Hospitals, physicians, emergency departments, nursing homes, and
            community providers.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReferralProcess() {
  const steps = [
    ["Call Referral Line", "(XXX) XXX-XXXX"],
    ["Submit referral form", "Online, fax, or email"],
    ["Safe transfer coordination", "Our staff assists every step"],
    ["Admission & Family Support", "Families included from day one"],
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Referral Process</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([title, subtitle], idx) => (
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
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Commitment to Families</h2>
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
  const path = [
    "Inpatient stabilization",
    "PHP/IOP programs",
    "Outpatient therapy / community resources",
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Continuum of Care</h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          {path.map((step, i) => (
            <div key={step} className="flex items-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {i + 1}
              </span>
              <span className="ml-3 font-medium text-gray-900">{step}</span>
              {i < path.length - 1 && (
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
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-3">Insurance & Coverage</h2>
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
  const points = [
    "Geriatric psychiatry expertise",
    "Accredited & licensed",
    "Interdisciplinary team",
    "Family-centered approach",
    "Strong discharge planning & continuum of care",
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Why Refer to Harmony Health?
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {points.map((p) => (
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
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Referral Contact</h2>

        <div className="space-y-2 text-gray-800">
          <p>
            📞 <strong>Referral Line:</strong> (XXX) XXX-XXXX
          </p>
          <p>
            📠 <strong>Fax:</strong> (XXX) XXX-XXXX
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a
              className="text-primary underline"
              href="mailto:referrals@harmonyhealth.org"
            >
              referrals@harmonyhealth.org
            </a>
          </p>
          <p>
            📝 <strong>Online Referral Form:</strong>{" "}
            <a className="text-primary underline" href="/referral-form">
              Start a referral
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:XXXXXXXXXX"
            className="px-6 py-3 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Call Now
          </a>
          <a
            href="/referral-form"
            className="px-6 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Submit Online
          </a>
        </div>
      </div>
    </section>
  );
}
