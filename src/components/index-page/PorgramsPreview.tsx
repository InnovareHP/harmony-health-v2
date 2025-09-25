const services = [
  {
    emoji: "🏥",
    title: "Inpatient Care",
    desc: "Crisis stabilization and psychiatric/medical care for seniors in need of 24-hour support.",
  },
  {
    emoji: "🌅",
    title: "Outpatient Programs (PHP/IOP)",
    desc: "Structured therapy and psychiatric monitoring during the day, while living at home.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family & Caregiver Support",
    desc: "Visitation, education, and discharge planning for families and caregivers.",
  },
  {
    emoji: "🔄",
    title: "Continuum of Care",
    desc: "Step-down programs and community coordination to support long-term stability.",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Programs & Services
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ emoji, title, desc }) => (
          <div key={title} className="bg-gray-100 p-6 rounded shadow">
            <div className="text-3xl mb-2">{emoji}</div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Explore Our Services
        </button>
      </div>
    </section>
  );
}
