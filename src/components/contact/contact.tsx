import { useState } from "react";

const ContactUs = () => {
  const org = {
    name: "Harmony Health",
    street: "7001 Bryant Irvin Rd",
    cityStateZip: "Fort Worth, TX 76132",
    phoneHuman: "+1 817 529 3170",
    mainLocal: "+1 817 529 3171",
    fax: "+1 844 570 6444",
    mainTollFree: "+1 844 570 7441",
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
            className="text-4xl font-extrabold text-primary-foreground mb-8"
          >
            Contact Us
          </h1>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">{org.name}</h2>
            <p className="text-lg text-primary-foreground leading-relaxed">
              {org.street}
              <br />
              {org.cityStateZip}
            </p>

            <dl className="mt-6 space-y-2 text-lg text-primary-foreground font-medium">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  📞 <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${org.phoneHuman}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.phoneHuman}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Main Local</dt>
                <dd>
                  ☎️ <strong>Main Local:</strong>{" "}
                  <a
                    href={`tel:${org.mainLocal}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.mainLocal}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Main Toll Free</dt>
                <dd>
                  📞 <strong>Main Toll Free:</strong>{" "}
                  <a
                    href={`tel:${org.mainTollFree}`}
                    className="text-blue-700 hover:underline"
                  >
                    {org.mainTollFree}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Fax</dt>
                <dd>
                  🖨️ <strong>Fax:</strong> {org.fax}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* RIGHT: Interactive Map */}
        <aside className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-2">Map</h2>

          {/* ✅ Added 'q=Harmony Health Fort Worth TX' so the map displays the label */}
          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md">
            <iframe
              title="Harmony Health Location"
              src={`https://www.google.com/maps?q=${org.mapQuery}&output=embed&z=15&hl=en`}
              className="w-full h-80 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${org.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg text-blue-600 hover:underline font-medium"
          >
            📍 Click for directions
          </a>
        </aside>
      </main>
    </div>
  );
};

export default ContactUs;
