const data = [
  {
    emoji: "🏥",
    title: "Inpatient Care",
    desc: "Crisis stabilization and 24/7 psychiatric support in a safe, compassionate hospital setting.",
  },
  {
    emoji: "🌅",
    title: "Outpatient Programs (PHP/IOP)",
    desc: "Daytime therapy and structured support while allowing patients to live at home.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Visitor & Family Guide",
    desc: "What families need to know about visitation, daily schedules, and discharge planning.",
  },
  {
    emoji: "📞",
    title: "Contact & Directions",
    desc: "Find our address, phone number, and directions quickly.",
  },
];

export default function QuickAccessSection() {
  return (
    <section className="py-12 bg-gray-50 px-6 md:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map(({ emoji, title, desc }) => (
          <div key={title} className="bg-white rounded shadow p-6">
            <div className="text-3xl mb-2">{emoji}</div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
