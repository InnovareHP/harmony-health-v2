export default function WhoWeServe() {
  const items = [
    "Dementia-related behaviors",
    "Acute psychiatric symptoms",
    "Suicidal or harmful thoughts",
    "Aggression or confusion",
    "Complex co-occurring medical and psychiatric needs",
  ];
  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-3">Who We Serve</h2>
          <p className="text-gray-700 mb-4">
            We specialize in psychiatric care for adults <strong>55+</strong>{" "}
            experiencing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 border">
          <h3 className="font-semibold text-lg mb-2">
            Common Referral Sources
          </h3>
          <p className="text-gray-700">
            Hospitals, physicians, emergency departments, nursing homes, and
            community providers.
          </p>
        </div>
      </div>
    </section>
  );
}
