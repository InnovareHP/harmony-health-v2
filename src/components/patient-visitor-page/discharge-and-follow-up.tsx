"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DischargeToFacility = () => {
  return (
    <div className="gap-8 items-start">
      {/* Title & Banner */}
      <div>
        <h1 className="text-3xl font-bold text-primary-foreground mb-4">
          Post-Discharge Care
        </h1>

        <div className="float-right w-96 ml-6 mb-4">
          <img
            src="/images/discharge-follow-up.png"
            alt="Nurse assisting patient post discharge"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <p className="text-gray-800 mb-4">
          A hospital visit can be overwhelming and intimidating for patients and
          their families. As a caretaker, your primary focus is on your family
          member's medical care, and the hospital staff shares this commitment.
          While it may not be top-of-mind now, it is important to consider what
          happens after you or your relative is discharged. Patients, family
          caretakers, and healthcare providers all have roles in ensuring the
          patient’s ongoing health post-discharge.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Discharge Planning
        </h2>
        <p className="text-gray-800 mb-4">
          According to Medicare, discharge planning is “a process used to
          determine what a patient needs for a smooth transition from one level
          of care to another.” While only a doctor can authorize a patient’s
          release from the hospital, discharge planning itself can be carried
          out by a social worker, case manager, nurse, or another qualified
          individual. Especially for complex medical conditions, an ideal
          approach to discharge planning involves a team effort.
        </p>

        <p className="text-gray-800 mb-4">
          In essence, a discharge plan typically includes:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Evaluation of the patient by trained personnel</li>
          <li>Consultation with the patient or their representative</li>
          <li>
            Preparation for returning home or transfer of care to another
            facility
          </li>
          <li>
            Assessment of the need for caretaker training or other support
          </li>
          <li>
            Referrals to relevant community support organizations or home care
            agencies
          </li>
          <li>Coordination of follow-up appointments or tests</li>
        </ul>

        <p className="text-gray-800 mt-4">
          The discussion should cover the patient’s health status and physical
          condition both before and after hospitalization, specifics regarding
          required care, and whether discharge will be to home or another
          facility.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Harmony Health Post-Discharge Follow-Up
        </h2>
        <p className="text-gray-800 mb-4">
          Our two-week post-discharge follow-up is crucial for the overall
          success of patient treatment. It aims to identify and address the
          patient’s actions, misunderstandings, questions, and any discrepancies
          in the discharge plan, as well as any concerns from caretakers or
          family members. The post-discharge follow-up is conducted roughly two
          weeks after discharge by a Harmony Health nurse or social worker.
        </p>

        <p className="text-gray-800 mb-4">
          The follow-up serves two main functions. Firstly, it ensures that the
          progress made during the patient’s stay at Harmony Health transitions
          effectively to the home environment. Secondly, the nurse or social
          worker is available to answer questions, provide resources, and offer
          recommendations if the patient or their loved ones encounter
          challenges.
        </p>

        <p className="text-gray-800 mb-4">
          During the follow-up call, the nurse or social worker reviews:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>The patient’s current health status</li>
          <li>Medication details</li>
          <li>Scheduled appointments</li>
          <li>Home care services</li>
          <li>Plans for managing any potential issues that may arise</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {/* Inpatient Hospitalization */}
          <AccordionItem value="inpatient">
            <AccordionTrigger className="text-lg font-semibold">
              Inpatient Hospitalization
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Why is someone admitted?</strong> Admission typically
                occurs when a person poses an imminent risk to themselves or
                others, cannot complete activities of daily living, or cannot
                care for themselves due to an immediate crisis.
              </p>

              <p>
                <strong>How is admission decided?</strong> A mental health
                professional evaluates the individual’s condition. Involuntary
                admission may occur if safety is a concern.
              </p>

              <p>
                <strong>How long is the average stay?</strong> Most inpatient
                stays last between 14 to 21 days, depending on the severity of
                symptoms and treatment response.
              </p>

              <p>
                <strong>What happens during the stay?</strong> Patients receive
                structured care including:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Psychiatric evaluation</li>
                <li>Medication management</li>
                <li>Group therapy</li>
                <li>Discharge planning</li>
              </ul>

              <p>
                <strong>What’s the daily routine like?</strong> Days include
                meals, therapy sessions, recreational activities, and rest
                periods. Staff monitor progress and adjust treatment as needed.
                There is one or more Registered Nurses on site 24/7.
              </p>

              <p>
                <strong>Are personal items allowed?</strong> Yes, but with
                restrictions. Patients may bring:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>3–4 days of comfortable clothing</li>
                <li>Toiletries (e.g., toothbrush)</li>
                <li>Slip-on or Velcro shoes (no laces or strings)</li>
                <li>Minimal personal belongings</li>
              </ul>

              <p>
                <strong>Can patients bring food?</strong> Those with special
                dietary needs or provider orders may bring food from home.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Intensive Outpatient Program */}
          <AccordionItem value="iop">
            <AccordionTrigger className="text-lg font-semibold">
              Intensive Outpatient Program (IOP)
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>What is an IOP?</strong> A non-residential treatment
                program for individuals needing more support than traditional
                therapy but not requiring 24/7 care.
              </p>
              <p>
                <strong>Typical Schedule:</strong> IOPs run 3 days per week
                (Mon, Wed, Fri) with sessions lasting 4 hours per day.
              </p>

              <p>
                <strong>Who is it for?</strong> Adults 18+ with moderate to
                severe mental health symptoms, individuals transitioning from
                inpatient care, or those needing structured support while
                managing daily life.
              </p>

              <p>
                <strong>What services are included?</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Group therapy focused on coping skills and peer support</li>
                <li>Individual therapy with a dedicated therapist</li>
                <li>Medication management and psychiatric evaluation</li>
              </ul>

              <p>
                <strong>What’s a typical day like?</strong> Morning or afternoon
                sessions include psychoeducation, mindfulness, relaxation
                techniques, and skill-building activities.
              </p>

              <p>
                <strong>Can I still work?</strong> Yes. IOPs are designed to be
                flexible so participants can maintain work, school, or family
                obligations while receiving care.
              </p>

              <p>
                <strong>What happens after IOP?</strong> Discharge planning
                includes referrals to outpatient therapy, support groups, or
                continued psychiatric care.
              </p>

              <p>
                <strong>How do I enroll?</strong> Start with a mental health
                assessment from a licensed provider. You may be referred by a
                therapist, psychiatrist, or hospital after discharge.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default DischargeToFacility;
