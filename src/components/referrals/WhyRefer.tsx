export default function WhyRefer() {
  const points = [
    "Geriatric psychiatry expertise",
    "Accredited & licensed",
    "Interdisciplinary team",
    "Family-centered approach",
    "Strong discharge planning & continuum of care",
  ];
  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Why Refer to Harmony Health?
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {points.map((p) => (
            <li
              key={p}
              className="bg-white border rounded-lg p-4 shadow-sm text-gray-800"
            >
              • {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
