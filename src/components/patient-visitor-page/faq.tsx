export default function FAQsPage() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-12">
          {/* Inpatient Hospitalization FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Inpatient Hospitalization
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
              <li>
                <strong>Why is someone admitted?</strong> Admission typically
                occurs when a person poses an imminent risk to themselves or
                others, cannot perform daily activities, or needs immediate
                crisis care.
              </li>
              <li>
                <strong>How is admission decided?</strong> A mental health
                professional evaluates the individual’s condition. Involuntary
                admission may occur if safety is a concern.
              </li>
              <li>
                <strong>How long is the average stay?</strong> Most inpatient
                stays last 14–21 days, depending on severity and treatment
                response.
              </li>
              <li>
                <strong>What happens during the stay?</strong> Patients receive
                psychiatric evaluation, medication management, group therapy,
                and discharge planning.
              </li>
              <li>
                <strong>What’s the daily routine like?</strong> Days include
                meals, therapy, recreation, and rest. Staff monitor and adjust
                treatment. A registered nurse is on-site 24/7.
              </li>
              <li>
                <strong>Are personal items allowed?</strong> Yes, but with
                restrictions—3–4 days of clothing, basic toiletries, and slip-on
                shoes. No items with strings or laces.
              </li>
              <li>
                <strong>Can patients bring food?</strong> Only if permitted by a
                provider for dietary reasons.
              </li>
            </ul>
          </div>

          {/* Treatment & Recovery */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Treatment & Recovery
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
              <li>
                <strong>What kind of treatment is provided?</strong> Treatment
                includes medication, cognitive behavioral therapy (CBT), family
                counseling, and crisis intervention.
              </li>
              <li>
                <strong>Is recovery possible?</strong> Yes. Inpatient care
                stabilizes symptoms and prepares individuals for long-term
                recovery.
              </li>
              <li>
                <strong>What happens after discharge?</strong> Patients receive
                a discharge plan with follow-up appointments, referrals,
                medication instructions, and support group recommendations.
              </li>
            </ul>
          </div>

          {/* Intensive Outpatient Program (IOP) */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Intensive Outpatient Program (IOP)
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
              <li>
                <strong>What is an IOP?</strong> A non-residential treatment
                program offering structured therapy 3 days per week for 4 hours
                per day.
              </li>
              <li>
                <strong>Who is it for?</strong> Adults 18+ with moderate to
                severe symptoms, often transitioning from inpatient care.
              </li>
              <li>
                <strong>What services are included?</strong> Group therapy,
                individual therapy, and medication management.
              </li>
              <li>
                <strong>What’s a typical day like?</strong> Sessions include
                psychoeducation, mindfulness, skill-building, and goal-setting.
              </li>
              <li>
                <strong>Can I still work?</strong> Yes. IOPs are flexible to
                accommodate work, school, or family obligations.
              </li>
              <li>
                <strong>What happens after IOP?</strong> Discharge planning
                includes referrals to therapy, support groups, or continued
                care.
              </li>
              <li>
                <strong>How do I enroll?</strong> Start with a mental health
                assessment or a referral from a provider.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
