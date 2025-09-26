const AboutUs = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
        <img
          src="/images/about-us.jpg"
          alt="Warm, welcoming hospital setting"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}

        {/* Mission & Values */}
        <section aria-labelledby="mission">
          <h2
            id="mission"
            className="text-2xl font-semibold text-green-600 mb-3"
          >
            Mission &amp; Values
          </h2>
          <p className="text-gray-800 leading-relaxed">
            To provide expert, compassionate care for seniors with psychiatric
            needs, treating both mind and body with dignity and respect. Our
            care is built on empathy, clinical excellence, and a commitment to
            whole-person wellness.
          </p>
        </section>

        {/* Facility Overview + Media Placeholder */}
        <section aria-labelledby="facility" className="space-y-6">
          <h2 id="facility" className="text-2xl font-semibold text-green-600">
            Facility Overview
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Our safe, modern hospital is designed specifically for older adults
            with behavioral health needs. The facility includes comfortable
            semi‑private rooms, therapeutic activity spaces, dedicated dining
            areas, and secure outdoor courtyards to support healing and
            mobility.
          </p>

          {/* Media placeholders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="aspect-video rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
              <span className="text-sm text-gray-500">
                Facility Photo Placeholder
              </span>
            </div>
            <div className="aspect-video rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
              <span className="text-sm text-gray-500">
                Facility Photo Placeholder
              </span>
            </div>
            <div className="aspect-video rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
              <span className="text-sm text-gray-500">
                Facility Video Placeholder
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            (Photos and videos of our facility coming soon.)
          </p>
        </section>

        {/* Accreditation & Licensing */}
        <section aria-labelledby="accreditation">
          <h2
            id="accreditation"
            className="text-2xl font-semibold text-green-600 mb-3"
          >
            Accreditation &amp; Licensing
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Harmony Health is licensed by the state and accredited by nationally
            recognized organizations, including{" "}
            <span className="font-semibold">The Joint Commission</span>. We are
            committed to the highest standards of safety, quality, and
            continuous improvement in behavioral healthcare.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="h-16 w-32 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center">
              <span className="text-xs text-gray-600">State License</span>
            </div>
            <div className="h-16 w-48 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center">
              <span className="text-xs text-gray-600">
                The Joint Commission
              </span>
            </div>
            <div className="h-16 w-40 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center">
              <span className="text-xs text-gray-600">
                National Accreditation
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
