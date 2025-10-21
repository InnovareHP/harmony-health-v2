"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const CONTAINER = "max-w-6xl mx-auto px-6";

const REFERRAL_STEPS: Array<[title: string, subtitle: string]> = [
  ["Call Referral Line", "Main Local: +1 817 529 3170"],
  ["Submit referral form", "Online, fax, or email below"],
];

const WHY_REFER = [
  "Geriatric psychiatry expertise",
  "Interdisciplinary team",
  "Family-centered approach",
  "Strong discharge planning & continuum of care",
] as const;

export default function ReferralsPage() {
  return (
    <main aria-labelledby="referrals-title">
      <ReferralHero />
      <ReferralProcess />
      <CommitmentFamilies />
      <Insurance />
      <WhyRefer />
      <ReferralContact />
    </main>
  );
}

/* ============ Sections ============ */

function ReferralHero() {
  return (
    <section role="banner" className="relative">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/images/referral_process.jpg"
          alt="Clipboard and stethoscope symbolizing referrals"
          className="absolute inset-0 h-full w-full object-cover object-center"
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
              className="text-3xl md:text-5xl font-bold mb-3 text-primary"
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
      <div className="bg-gradient-to-r from-primary to-primary/10 h-4"></div>
    </section>
  );
}

/* ======================= REFERRAL PROCESS ======================= */
function ReferralProcess() {
  const [form, setForm] = useState({
    name: "",
    facility: "",
    phone: "",
    email: "",
    notes: "",
  });

  return (
    <section className="py-16 bg-primary" aria-labelledby="process-title">
      <div className={CONTAINER}>
        <h2 id="process-title" className="text-3xl font-bold mb-8 text-black">
          Referral Process
        </h2>

        <ol
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          aria-label="Steps"
        >
          {REFERRAL_STEPS.map(([title, subtitle], idx) => (
            <li
              key={title}
              className="bg-background-secondary rounded-lg border p-5 shadow-sm relative"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground text-black text-sm font-bold">
                {idx + 1}
              </div>
              <h3 className="font-semibold mt-3">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{subtitle}</p>

              {/* Step 2: Show Referral Form */}
              {title === "Submit referral form" && (
                <div className="mt-4">
                  <a
                    href="https://form.jotform.com/252934911364056"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary-foreground text-black hover:bg-primary-foreground/90"
                    >
                      Submit a Referral
                    </Button>
                  </a>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ======================= COMMITMENT ======================= */
function CommitmentFamilies() {
  return (
    <section className="py-16 bg-white" aria-labelledby="families-title">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl border border-primary/20 bg-[#c3dac6]/10 p-8 text-center">
          <h2
            id="families-title"
            className="text-3xl font-bold mb-3 text-primary-foreground"
          >
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

/* ======================= INSURANCE ======================= */
function Insurance() {
  return (
    <section className="py-16 bg-white" aria-labelledby="insurance-title">
      <div className={`${CONTAINER} grid md:grid-cols-2 gap-8 items-start`}>
        <div>
          <h2
            id="insurance-title"
            className="text-3xl font-bold mb-3 text-primary-foreground"
          >
            Insurance & Coverage
          </h2>
          <p className="text-gray-700">
            Pending Insurance acceptance, call for more information.
          </p>
        </div>

        <div className="rounded-lg border border-primary/20 bg-[#c3dac6]/10 p-6">
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

/* ======================= WHY REFER ======================= */
function WhyRefer() {
  return (
    <section className="py-20 bg-primary" aria-labelledby="why-title">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="why-title"
          className="text-4xl font-bold tracking-wide text-center text-black mb-12"
        >
          Why Refer to Harmony Health?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {WHY_REFER.map((text) => (
            <div
              key={text}
              className="flex items-center justify-center text-center p-8 rounded-xl bg-background-secondary border shadow-lg hover:shadow-xl transition"
            >
              <p className="text-black text-lg leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= CONTACT ======================= */
function ReferralContact() {
  return (
    <section className="py-16 bg-white" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <h2
          id="contact-title"
          className="text-3xl font-bold mb-4 text-primary-foreground"
        >
          Referral Contact
        </h2>

        <div className="space-y-2 text-gray-800">
          <p>
            <strong>Referral Contact:</strong>{" "}
            <a
              className="text-primary-foreground hover:underline"
              href="tel:+18445707444"
            >
              +1 844 570 7444
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+18445707444"
            className="px-6 py-3 rounded bg-primary hover:bg-primary/90 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
