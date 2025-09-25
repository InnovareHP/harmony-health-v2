export default function TreatmentPrograms() {
  const items = [
    {
      title: "Inpatient Program",
      href: "/treatment-programs/inpatient-program",
      description:
        "Provides 24/7 psychiatric and medical support for older adults requiring stabilization. Focused on safety, dignity, and individualized care.",
    },
    {
      title: "Outpatient Programs (PHP/IOP)",
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
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200 text-left hover:bg-gray-50 cursor-pointer"
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
  );
}
