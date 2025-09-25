export default function Insurance() {
  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-3">Insurance & Coverage</h2>
          <p className="text-gray-700">
            We accept Medicare, Medicaid, and most commercial insurance.
            Benefits are verified quickly to avoid delays.
          </p>
        </div>
        <div className="bg-gray-50 border rounded-lg p-6">
          <p className="text-sm text-gray-700">
            Need help checking coverage? Call our admissions team—verification
            typically takes just a few minutes with the patient’s demographics,
            policy info, and presenting concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
