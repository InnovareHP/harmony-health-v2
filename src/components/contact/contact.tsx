import { useState } from "react";

const ContactUs = () => {
  const org = {
    name: "Harmony Health",
    street: "7001 Bryant Irvin Rd",
    cityStateZip: "Fort Worth, TX 76132",
    phoneHuman: "+1 817 529 3170", // Phone Number
    mainLocal: "+1 817 529 3171", // Main Local
    fax: "+1 844 570 6444", // Fax
    mainTollFree: "+1 844 570 7441", // Main Toll Free
    mapQuery: encodeURIComponent(
      "Harmony Health, 7001 Bryant Irvin Rd, Fort Worth, TX 76132"
    ),
  };

  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12">
        {/* LEFT: Contact info + form */}
        <section aria-labelledby="contact-heading">
          <h1
            id="contact-heading"
            className="text-3xl font-bold text-primary-foreground mb-6"
          >
            Contact Us
          </h1>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">
              {org.name}
            </h2>
            <p className="text-primary-foreground">
              {org.street}
              <br />
              {org.cityStateZip}
            </p>

            <dl className="mt-4 space-y-1 text-primary-foreground">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>Phone: {org.phoneHuman}</dd>
              </div>
              <div>
                <dt className="sr-only">Main Local</dt>
                <dd>Main Local: {org.mainLocal}</dd>
              </div>
              <div>
                <dt className="sr-only">Main Toll Free</dt>
                <dd>Main Toll Free: {org.mainTollFree}</dd>
              </div>
              <div>
                <dt className="sr-only">Fax</dt>
                <dd>Fax: {org.fax}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* RIGHT: Interactive Map */}
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">Map</h2>
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
