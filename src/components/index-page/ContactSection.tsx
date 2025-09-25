export default function ContactSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <p>
          <strong>Harmony Health</strong>
        </p>
        <p>[Street Address], [City, State ZIP]</p>
        <p>📞 Phone: (XXX) XXX-XXXX</p>
        <p>📠 Fax: (XXX) XXX-XXXX</p>
        <p>✉️ Email: info@harmonyhealth.org</p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Phone or Email"
            className="p-3 border rounded"
          />
          <select className="p-3 border rounded md:col-span-2">
            <option>Reason for Inquiry</option>
            <option>Referral</option>
            <option>General Question</option>
            <option>Admissions</option>
            <option>Records</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 md:col-span-2">
            Get in Touch Today
          </button>
        </form>
      </div>
    </section>
  );
}
