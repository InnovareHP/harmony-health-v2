import { useState } from "react";

const ContactUs = () => {
  // Replace with your real address/phone/email
  const org = {
    name: "Harmony Health",
    street: "7001 Bryant Irvin Rd",
    cityStateZip: "Fort Worth, TX 76132",
    phoneHuman: "1-888-391-0229",
    fax: "412-706-9202",
    email: "info@harmonyhealth.org",
    // Used for the map + directions link
    mapQuery: encodeURIComponent(
      "Harmony Health, [Street Address], [City, State ZIP]"
    ),
  };

  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire up to your API / email service
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12">
        {/* LEFT: Contact info + form */}
        <section aria-labelledby="contact-heading">
          <h1
            id="contact-heading"
            className="text-3xl font-bold text-green-700 mb-6"
          >
            Contact Us
          </h1>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              {org.name}
            </h2>
            <p className="text-gray-800">
              {org.street}
              <br />
              {org.cityStateZip}
            </p>

            <dl className="mt-4 space-y-1 text-gray-800">
              <div>
                <dt className="sr-only">Fax</dt>
                <dd>Fax: {org.fax}</dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${org.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {org.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4"
          >
            <h2 className="text-xl font-semibold text-green-600">
              Get in Touch Today
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
                  placeholder="Your full name"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone/Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
                  placeholder="(555) 555-5555 or you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason for Inquiry<span className="text-red-600">*</span>
              </label>
              <select
                id="reason"
                name="reason"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="Referral">Referral</option>
                <option value="General Question">General Question</option>
                <option value="Admissions">Admissions</option>
                <option value="Records">Records</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
                placeholder="How can we help?"
              />
            </div>

            <p className="text-xs text-gray-500">
              Please do not submit personal medical information or PHI through
              this form. For clinical matters, call our Referral Line directly.
            </p>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800 disabled:opacity-60"
            >
              {status === "sent"
                ? "Thanks! We’ll be in touch."
                : "Get in Touch Today"}
            </button>
          </form>
        </section>

        {/* RIGHT: Interactive Map */}
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-green-600">Map</h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Harmony Health Location"
              src={`https://www.google.com/maps?q=${org.mapQuery}&output=embed`}
              className="w-full h-64 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${org.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:underline"
          >
            Click for directions
          </a>
        </aside>
      </main>
    </div>
  );
};

export default ContactUs;
