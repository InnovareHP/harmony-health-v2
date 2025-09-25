export default function ReferralProcess() {
  const steps = [
    ["1. Call Referral Line", "(XXX) XXX-XXXX"],
    ["2. Submit referral form", "Online, fax, or email"],
    ["3. Safe transfer coordination", "Our staff assists every step"],
    ["4. Admission & Family Support", "Families included from day one"],
  ];
  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Referral Process</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([title, subtitle]) => (
            <li
              key={title}
              className="bg-white rounded-lg border p-5 shadow-sm"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
