export default function PatientVisitorGuide() {
  const items = [
    {
      title: "Preparing for Your Stay",
      href: "/patient-visitor-guide/preparing-your-stay",
      description:
        "Information on what to bring, what to leave at home, and orientation for new patients and families.",
    },
    {
      title: "During Your Stay",
      href: "/patient-visitor-guide/during-your-stay",
      description:
        "Daily schedules include therapy, group activities, meals, and recreational programs.",
    },
    {
      title: "Visitation",
      href: "/patient-visitor-guide/visitation",
      description:
        "Visiting hours and guidelines to ensure a safe, supportive environment.",
    },
    {
      title: "Discharge & Follow-Up",
      href: "/patient-visitor-guide/discharge-and-follow-up",
      description:
        "Transition planning for home or another care setting, family education, follow-up appointments, community resource referrals.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Patient Visitor Guide
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Helping you and your family feel informed, supported, and comfortable
          at every step of your stay.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className="border border-gray-200 bg-[#212121]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200 text-left hover:bg-gray-50 cursor-pointer"
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
