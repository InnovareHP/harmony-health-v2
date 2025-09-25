export default function ReferralContact() {
  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Referral Contact</h2>
        <div className="space-y-2 text-gray-800">
          <p>
            📞 <strong>Referral Line:</strong> (XXX) XXX-XXXX
          </p>
          <p>
            📠 <strong>Fax:</strong> (XXX) XXX-XXXX
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:referrals@harmonyhealth.org"
            >
              referrals@harmonyhealth.org
            </a>
          </p>
          <p>
            📝 <strong>Online Referral Form:</strong>{" "}
            <a className="text-blue-600 underline" href="/referral-form">
              Start a referral
            </a>
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:XXXXXXXXXX"
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Call Now
          </a>
          <a
            href="/referral-form"
            className="px-6 py-3 rounded border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Submit Online
          </a>
        </div>
      </div>
    </section>
  );
}
