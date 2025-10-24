export default function TreatmentPrograms() {
  const items = [
    {
      title: "Inpatient Program",
      href: "/treatment-programs/inpatient-program",
      description:
        "Provides 24/7 psychiatric and medical support for adults aged 55 years and older requiring stabilization. Focused on safety, dignity, and individualized care.",
    },
    {
      title: "Intensive Outpatient Program",
      href: "/treatment-programs/outpatient-program",
      description:
        "Structured therapy for adults and seniors needing support but not full hospitalization. Harmony Health’s IOP reduces isolation, maintains independence, and prevents hospital readmission.",
    },
    {
      title: "Interdisciplinary Team",
      href: "/treatment-programs/interdisciplinary-team",
      description:
        "Team includes psychiatrists, nurse practitioners, physicians, nurses, social workers, psychologists, dietitians, activity therapists, clinical pharmacists, discharge planners, and mental health technicians.",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Treatment & Services
          </h2>

          {/* ✅ Added Plan of Care Overview Section */}
          <div className="text-left max-w-4xl mx-auto mb-16 space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Plan of Care Overview
              </h3>
              <p>
                At Harmony Health, our focus is to ensure our patients return
                home swiftly, safely, and equipped to independently manage the
                challenges they had prior to our care.
              </p>
              <p>
                A typical stay at our hospital is approximately 14–21 days,
                during which a dedicated team works collaboratively to enhance
                the quality of life for both our patients and their families.
              </p>
              <p>
                Our comprehensive approach features activities including
                personalized therapy programs (a combination of individual,
                family, recreation, group, and adjunctive therapies depending on
                the patient) and daily living skills groups designed to improve
                memory, address mood regulation, and provide relaxation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                A Goal-Oriented Approach
              </h3>
              <p>
                Using various methods such as re-motivation, reminiscence, and
                validation, our approach aims to inspire hope in the face of
                despair, facilitate progress amid past setbacks, and foster a
                revived sense of well-being.
              </p>
              <p>
                Each morning, we conduct a brief goal-setting group where
                patients choose one or a few tasks to accomplish that day.
                Around breakfast time, patients will share their daily goals as
                they are able. Staff members provide support throughout the day
                to help patients accomplish these goals.
              </p>
              <p>
                During dinner, patients reflect on their progress and are asked
                to consider how well they have met their daily goals. Goals can
                be simple, such as participating in a group activity or playing
                a game with another group member, and are guided by two key
                questions:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>What am I doing today?</li>
                <li>What can I do to make it better?</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Personalized Therapy Programs
              </h3>
              <p>
                <strong>Individual Therapy:</strong> Tailored sessions where
                patients discuss their treatment plans, discharge preparations,
                and address any current issues with their therapist. The purpose
                of individual therapy is to keep patients involved, track goal
                progress, and improve the patient’s ability to problem-solve.
              </p>
              <p>
                <strong>Family Therapy:</strong> At Harmony Health, we
                prioritize involving family members in patient care due to their
                invaluable knowledge of the patient's family history and
                insights into the patient’s experiences. Family therapy assists
                families in setting goals, evaluating current changes, and
                composing a successful discharge plan. Written consent is
                required to protect patient confidentiality.
              </p>
              <p>
                <strong>Recreation Therapy:</strong> Led by a Certified
                Therapeutic Recreation Specialist, these daily sessions focus on
                using leisure time to improve emotional well-being and
                self-expression. Harmony Health’s recreation therapy is goal and
                outcome-oriented, promoting independence and social connection.
              </p>
              <p>
                <strong>Group Therapy:</strong> Group therapy plays a pivotal
                role in our treatment approach. Each day, patients interact with
                peers who share similar experiences, fostering empathy and
                mutual understanding. Participation is encouraged but voluntary,
                respecting each patient’s autonomy.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item) => (
              <a
                href={item.href}
                key={item.title}
                className="border border-gray-200 bg-background-secondary/10 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200 text-left hover:bg-gray-50 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Continuum />
    </>
  );
}

function Continuum() {
  const CONTINUUM_PATH = [
    {
      title: "Inpatient Stabilization",
      description:
        "Our inpatient program provides 24/7 supervised care in a secure and therapeutic setting. Here, patients receive immediate evaluation, medication management, and structured therapy to stabilize acute psychiatric symptoms. This environment ensures safety, support, and preparation for continued recovery.",
    },
    {
      title: "Intensive Outpatient Programs",
      description:
        "Following stabilization, patients may transition into our Intensive Outpatient Program (IOP) at Harmony Health, which offers structured therapy while allowing them to live at home. The IOP includes group and individual sessions that focus on coping strategies, relapse prevention, and reintegration into daily life—all while maintaining consistent therapeutic support.",
    },
    {
      title: "Outpatient Therapy / Community Resources",
      description:
        "As patients continue their recovery journey, we connect them with ongoing outpatient therapy and trusted community resources. These services help sustain progress, encourage independence, and provide access to long-term counseling, support groups, and wellness programs designed for lasting stability.",
    },
  ] as const;

  const CONTAINER = "max-w-6xl mx-auto px-6";

  return (
    <section className="py-16 bg-primary" aria-labelledby="continuum-title">
      <div className={CONTAINER}>
        <h2
          id="continuum-title"
          className="text-3xl font-bold mb-12 text-black text-center"
        >
          Continuum of Care
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONTINUUM_PATH.map((step, i) => (
            <div
              key={step.title}
              className="bg-background-secondary rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground text-black font-bold mb-4">
                {i + 1}
              </div>
              <p className="text-gray-900 font-semibold text-lg mb-2">
                {step.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-black mt-12 text-center max-w-xl mx-auto">
          We coordinate with referring providers and guide families through
          every step of care—ensuring a seamless and compassionate transition
          from hospitalization to community wellness.
        </p>
      </div>
    </section>
  );
}
