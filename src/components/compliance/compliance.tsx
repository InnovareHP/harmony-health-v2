const toc = [
  { id: "medical-disclaimer", label: "Medical Disclaimer" },
  { id: "notice-of-nondiscrimination", label: "Notice of Nondiscrimination" },
  { id: "price-transparency", label: "Price Transparency" },
  { id: "notice-of-privacy-practices", label: "Notice of Privacy Practices" },
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
              and does not discriminate in the provision of services to an
              individual based on the individual’s race, color, national origin,
              age, disability, creed, religion, ethnicity, handicap, sex, gender
              identity, and sexual orientation.
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
              We support price transparency for the patients and families we
              serve. Click on a link below to view our standard pricing and
              shoppable services pricing. You may contact us with questions
              regarding your bill.
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
              <table className="min-w-full text-sm text-left text-gray-800">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                  <tr>
                    <th className="px-4 py-2">Service Description</th>
                    <th className="px-4 py-2">Charge</th>
                    <th className="px-4 py-2">Aetna Rate</th>
                    <th className="px-4 py-2">Anthem Medicare Rate</th>
                    <th className="px-4 py-2">
                      Humana Medicare Replacement Rate
                    </th>
                    <th className="px-4 py-2">IN Medicaid HP Medicaid Rate</th>
                    <th className="px-4 py-2">Optum Behavioral Health Rate</th>
                    <th className="px-4 py-2">Medicare Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">
                      Adult/Geriatric Daily Room and Board
                    </td>
                    <td className="px-4 py-2">$2,100.00</td>
                    <td className="px-4 py-2">$820.86</td>
                    <td className="px-4 py-2">$941.11</td>
                    <td className="px-4 py-2">$866.49</td>
                    <td className="px-4 py-2">$1,310.40</td>
                    <td className="px-4 py-2">$822.75</td>
                    <td className="px-4 py-2">$974.83</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            id="notice-of-privacy-practices"
            aria-labelledby="notice-of-privacy-heading"
            className="mt-10 space-y-4 text-gray-800 leading-relaxed"
          >
            <h2
              id="notice-of-privacy-heading"
              className="text-2xl font-semibold text-primary mb-3"
            >
              Notice of Privacy Practices (HIPAA)
            </h2>

            <p>
              This notice describes how medical information about you may be
              used and disclosed and how you can get access to this information.
              Please review it carefully. Harmony Health will be referred to in
              this Notice of Privacy Practices ("Notice") as "Harmony". This
              Notice is given to you by a Harmony Facility to describe the ways
              in which Harmony may use and disclose your medical information
              (called "protected health information" or "PHI") and to notify you
              of your rights with respect to PHI in the possession of Harmony
              Health. Harmony Health protects the privacy of PHI, which also is
              protected from disclosure by state and federal law. In certain
              circumstances, pursuant to this Notice, patient authorization or
              applicable laws and regulations, PHI can be used by Harmony Health
              or disclosed to other parties. Below are categories describing
              these uses and disclosures, along with some examples to help you
              better understand each category.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">
              Uses and Disclosures for Treatment, Payment and Health Care
              Operations
            </h3>
            <p>
              Harmony Health may use or disclose your PHI for the purposes of
              treatment, payment and health care operations, described in more
              detail below, without obtaining written authorization from you.
            </p>

            <h4 className="font-semibold mt-3">For Treatment:</h4>
            <p>
              Harmony Health may use and disclose PHI in the course of
              providing, coordinating, or managing your medical treatment,
              including the disclosure of PHI for treatment activities at
              another healthcare facility. These types of uses and disclosures
              may take place between physicians, nurses, technicians, students,
              and other health care professionals who provide your health care
              services or are otherwise involved in your care. For example, if
              you are being treated by a primary care physician, that physician
              may need to use/disclose PHI to a specialist physician whom he or
              she consults regarding your condition, or to a nurse who is
              assisting in your care.
            </p>

            <h4 className="font-semibold mt-3">For Payment:</h4>
            <p>
              Harmony Health may use and disclose PHI to collect payment for the
              health care services provided to you. For example, Harmony Health
              may need to give PHI to your health plan to be reimbursed for the
              services provided to you. Harmony Health may also disclose PHI to
              their business associates, such as billing companies, claims
              processing companies, and others that assist in processing health
              claims. Harmony Health may also disclose PHI to other health care
              providers and health plans for the payment activities of such
              providers or health plans.
            </p>

            <h4 className="font-semibold mt-3">For Health Care Operations:</h4>
            <p>
              Harmony Health may use and disclose PHI as part of their
              operations, including for quality assessment and improvement, such
              as evaluating the treatment and services you receive and the
              performance of our staff in caring for you. Other activities
              include hospital training, underwriting activities, compliance and
              risk management activities, planning and development, and
              management and administration. Harmony Health may disclose PHI to
              doctors, nurses, technicians, students, attorneys, consultants,
              accountants, and others for review and learning purposes. These
              disclosures help make sure that Harmony Health is complying with
              all applicable laws and are continuing to provide health care to
              patients at a high level of quality. Harmony Health may also
              disclose PHI to other health care facilities plans for certain of
              their operations, including their quality assessment and
              improvement activities, credentialing and peer review activities,
              and health care fraud and abuse detection or compliance, provided
              that those other facilities and plans have, or have had in the
              past, a relationship with the patient who is the subject of the
              information.
            </p>

            <h4 className="font-semibold mt-3">
              For Sharing PHI Among Harmony Health and Professional Staff:
            </h4>
            <p>
              Harmony Health works together with physicians and other care
              providers on their professional staff to provide medical services
              to you when you are a patient at a Harmony Health Facility.
              Harmony Health and members of their respective professional staff
              will share PHI with each other as needed to perform their
              treatment, payment and health care operations activities.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">
              Other Uses and Disclosures for Which Authorization Is Not Required
            </h3>

            <p>
              In addition to using or disclosing PHI for treatment, payment and
              health care operations, Harmony Health may use and disclose PHI
              without your written authorization under the following
              circumstances:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>As Required by Law and Law Enforcement:</strong> Harmony
                Health may use or disclose PHI when required by law, in response
                to court orders or to report crimes or other law enforcement
                purposes.
              </li>
              <li>
                <strong>
                  For Public Health Activities and Public Health Risks:
                </strong>{" "}
                Harmony Health may disclose PHI to officials in charge of public
                health matters, such as reporting disease, child abuse,
                medication reactions, or product defects.
              </li>
              <li>
                <strong>For Health Oversight Activities:</strong> PHI may be
                disclosed for audits, investigations, inspections, or licensure
                actions.
              </li>
              <li>
                <strong>
                  Coroners, Medical Examiners, and Funeral Directors:
                </strong>{" "}
                PHI may be disclosed to identify a decedent or determine cause
                of death.
              </li>
              <li>
                <strong>Organ, Eye, and Tissue Donation:</strong> PHI may be
                released to facilitate organ, eye, or tissue donation and
                transplantation.
              </li>
              <li>
                <strong>Research:</strong> Under certain circumstances, Harmony
                Health may use and disclose PHI for medical research purposes.
              </li>
              <li>
                <strong>To Avoid a Serious Threat to Health or Safety:</strong>{" "}
                Harmony Health may disclose PHI to prevent or lessen a serious
                threat to a person’s or public’s health or safety.
              </li>
              <li>
                <strong>Specialized Government Functions:</strong> Harmony
                Health may disclose PHI of military personnel or veterans, or
                for national security and intelligence purposes.
              </li>
              <li>
                <strong>Workers' Compensation:</strong> PHI may be disclosed to
                comply with workers' compensation laws.
              </li>
              <li>
                <strong>Health-Related Benefits and Services:</strong> PHI may
                be used to inform you of treatment alternatives or other
                health-related benefits or services.
              </li>
              <li>
                <strong>
                  Disclosures to You or for HIPAA Compliance Investigations:
                </strong>{" "}
                Harmony Health may disclose PHI to you, your representative, or
                to the U.S. Department of Health and Human Services for HIPAA
                compliance investigations.
              </li>
            </ul>

            <h4 className="font-semibold mt-3">
              Confidentiality of Alcohol & Drug Abuse Records:
            </h4>
            <p>
              Harmony Health may not disclose identifying information about a
              patient’s participation in its programs unless you consent, a
              court order allows it, or disclosure is made in a medical
              emergency, for research, or audit purposes.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">
              Uses and Disclosures to Which You May Object
            </h3>
            <p>
              You may object to the inclusion of your information in a patient
              directory available to contacts you designate. You will receive a
              unique patient code for those contacts.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">
              Other Uses and Disclosures of PHI for Which Authorization Is
              Required
            </h3>
            <p>
              Other types of uses and disclosures of your PHI not described
              above will be made only with your written authorization, which you
              have the limited right to revoke in writing.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">
              Regulatory Requirements and Your Rights
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Restriction Requests:</strong> You may request
                restrictions on use and disclosure of your PHI. Harmony Health
                is not required to agree but will honor approved restrictions
                except in emergencies.
              </li>
              <li>
                <strong>Confidential Communications:</strong> You may request
                communications at specific locations or by specific means.
                Requests must be in writing to the Privacy Officer.
              </li>
              <li>
                <strong>Access and Copies:</strong> You may inspect or obtain
                copies of your PHI by submitting a written request. Harmony
                Health may charge reasonable fees for copying or mailing.
              </li>
              <li>
                <strong>Amendments:</strong> You may request corrections to your
                PHI by writing to the Medical Records Department.
              </li>
              <li>
                <strong>Accounting of Disclosures:</strong> You may request a
                list of PHI disclosures made in the past six (6) years,
                excluding specific categories.
              </li>
              <li>
                <strong>Paper Copy:</strong> You have the right to a paper copy
                of this notice even if received electronically.
              </li>
              <li>
                <strong>Complaints:</strong> You may file a complaint with
                Harmony Health’s Privacy Officer or the U.S. Department of
                Health and Human Services without retaliation.
              </li>
            </ul>

            <p className="mt-4">
              You also have the right to file a complaint with the Secretary of
              the Department of Health and Human Services at 200 Independence
              Avenue, S.E., Washington, DC 20201.
            </p>

            <p>
              If you have any questions about this notice, please contact:
              <br />
              <strong>Harmony Health Administrator</strong>
              <br />
              7001 Bryant Irvin Rd, Fort Worth, TX 76152
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
