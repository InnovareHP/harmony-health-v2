export default function TreatmentPrograms() {
  const items = [
    {
      title: "Inpatient Program",
      href: "/treatment-programs/inpatient-program",
      description:
        "Provides 24/7 psychiatric and medical support for older adults requiring stabilization. Focused on safety, dignity, and individualized care.",
    },
    {
      title: "Intensive Outpatient Program",
      href: "/treatment-programs/outpatient-program",
      description:
        "Structured therapy for adults and seniors needing support but not full hospitalization. Reduces isolation, maintains independence, and prevents hospital readmission.",
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
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive mental health services designed specifically for older
            adults and their unique needs.
          </p>

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
        "Following stabilization, patients may transition into our Intensive Outpatient Program (IOP), which offers structured therapy while allowing them to live at home. The IOP includes group and individual sessions that focus on coping strategies, relapse prevention, and reintegration into daily life—all while maintaining consistent therapeutic support.",
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

        {/* Card-style steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONTINUUM_PATH.map((step, i) => (
            <div
              key={step.title}
              className="bg-background-secondary rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition duration-200"
            >
              {/* Step number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground text-black font-bold mb-4">
                {i + 1}
              </div>

              {/* Step title */}
              <p className="text-gray-900 font-semibold text-lg mb-2">
                {step.title}
              </p>

              {/* Step description */}
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
