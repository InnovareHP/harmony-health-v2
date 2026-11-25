// Per-route <title> and meta description, keyed by path without trailing
// slash. Read by src/layouts/main.astro. Keep titles ≤ ~60 chars and
// descriptions 120–160, and only use facts already on the page.
export const DEFAULT_META = {
  title: "Senior Psychiatric Care in Fort Worth, TX | Harmony Health",
  description:
    "Harmony Health is a psychiatric hospital in Fort Worth, TX caring for adults 45+, with inpatient and outpatient programs and a no-cost, confidential assessment.",
};

export const PAGE_META: Record<string, { title: string; description: string }> =
  {
    "": DEFAULT_META,
    "/about-us": {
      title: "About Harmony Health | Senior Psychiatric Care, Fort Worth",
      description:
        "Learn about Harmony Health, a Fort Worth, TX psychiatric hospital helping adults 45+ and their families find safety, healing, and hope.",
    },
    "/our-focus": {
      title: "Our Focus: Older-Adult Mental Health | Harmony Health",
      description:
        "Harmony Health focuses on psychiatric care for older adults in Fort Worth, TX, supporting patients 45+ and their families through every step of treatment.",
    },
    "/treatment-programs": {
      title: "Senior Treatment Programs | Harmony Health Fort Worth",
      description:
        "Explore inpatient and outpatient psychiatric programs for adults 45+ at Harmony Health in Fort Worth, TX, delivered by an interdisciplinary care team.",
    },
    "/treatment-programs/inpatient-program": {
      title: "Senior Inpatient Psychiatric Care in Fort Worth, TX",
      description:
        "Inpatient psychiatric care for adults 45+ at Harmony Health in Fort Worth, TX. Start with a no-cost, confidential assessment to find the right level of care.",
    },
    "/treatment-programs/outpatient-program": {
      title: "Senior Outpatient Programs (PHP & IOP) | Fort Worth, TX",
      description:
        "Partial hospitalization (PHP) and intensive outpatient (IOP) programs for adults 45+ at Harmony Health in Fort Worth, TX, including a virtual IOP option.",
    },
    "/treatment-programs/interdisciplinary-team": {
      title: "Our Interdisciplinary Care Team | Harmony Health",
      description:
        "Harmony Health's Fort Worth care team includes psychiatrists, nurse practitioners, nurses, social workers, psychologists, therapists, and pharmacists.",
    },
    "/referrals": {
      title: "Make a Referral | Senior Psychiatric Care, Fort Worth",
      description:
        "Refer a patient 45+ to Harmony Health in Fort Worth, TX. See our referral process, who we serve, and how to reach our 24/7 intake team.",
    },
    "/patient-visitor-guide": {
      title: "Patient & Visitor Guide | Harmony Health Fort Worth",
      description:
        "What patients and families can expect at Harmony Health in Fort Worth, TX: preparing for a stay, visitation, discharge planning, follow-up, and FAQs.",
    },
    "/patient-visitor-guide/preparing-your-stay": {
      title: "Preparing for Your Stay | Harmony Health Fort Worth",
      description:
        "How to prepare for a stay at Harmony Health, a senior psychiatric hospital in Fort Worth, TX, including what to bring and what to expect on arrival.",
    },
    "/patient-visitor-guide/during-your-stay": {
      title: "During Your Stay | Harmony Health Fort Worth",
      description:
        "What daily life and treatment look like during a stay at Harmony Health, a psychiatric hospital for adults 45+ in Fort Worth, TX.",
    },
    "/patient-visitor-guide/visitation": {
      title: "Visitation Guidelines | Harmony Health Fort Worth",
      description:
        "Visitation hours, check-in procedure, and guidelines for family and friends visiting patients at Harmony Health in Fort Worth, TX.",
    },
    "/patient-visitor-guide/discharge-follow-up": {
      title: "Discharge & Follow-Up Care | Harmony Health Fort Worth",
      description:
        "How discharge planning and post-discharge follow-up work at Harmony Health in Fort Worth, TX, so patients 45+ keep their progress after leaving.",
    },
    "/patient-visitor-guide/faqs": {
      title: "Frequently Asked Questions | Harmony Health Fort Worth",
      description:
        "Answers to common questions from patients, families, and referral sources about senior psychiatric care at Harmony Health in Fort Worth, TX.",
    },
    "/resources": {
      title: "Resources for Patients & Families | Harmony Health",
      description:
        "Helpful resources for older adults and families navigating mental health care, from Harmony Health, a senior psychiatric hospital in Fort Worth, TX.",
    },
    "/contact": {
      title: "Contact Harmony Health | Fort Worth, TX",
      description:
        "Contact Harmony Health at 7001 Bryant Irvin Rd, Fort Worth, TX 76132. Call our team about senior psychiatric care, referrals, or a confidential assessment.",
    },
    "/book": {
      title: "Request an Appointment | Harmony Health Fort Worth",
      description:
        "Request an appointment or a no-cost, confidential assessment at Harmony Health, a psychiatric hospital for adults 45+ in Fort Worth, TX.",
    },
    "/brochure": {
      title: "Brochure | Harmony Health Fort Worth",
      description:
        "View or download the Harmony Health brochure to learn about senior psychiatric care, programs, and services at our hospital in Fort Worth, TX.",
    },
    "/price-transparency": {
      title: "Price Transparency | Harmony Health Fort Worth",
      description:
        "Hospital price transparency information for Harmony Health in Fort Worth, TX, including standard charges files and how to ask about pricing.",
    },
    "/compliance": {
      title: "Compliance | Harmony Health Fort Worth",
      description:
        "Compliance, patient rights, and regulatory notices for Harmony Health, a senior psychiatric hospital at 7001 Bryant Irvin Rd, Fort Worth, TX.",
    },
  };
