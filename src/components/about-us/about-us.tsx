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
      <div className="bg-gradient-to-r from-primary to-primary/10 h-4"></div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}

        {/* Mission & Values */}
        <section aria-labelledby="mission">
          <h2 id="mission" className="text-2xl font-semibold text-primary mb-3">
            Mission &amp; Values
          </h2>
          <p className="text-gray-800 leading-relaxed bg-background-secondary/20 p-6">
            To provide expert, compassionate care for seniors with psychiatric
            needs, treating both mind and body with dignity and respect. Our
            care is built on empathy, clinical excellence, and a commitment to
            whole-person wellness.
          </p>
        </section>

        {/* Facility Overview + Media Placeholder */}
        <section aria-labelledby="facility" className="space-y-6">
          <h2 id="facility" className="text-2xl font-semibold text-primary">
            Facility Overview
          </h2>
          <p className="text-gray-800 leading-relaxed bg-background-secondary/20 p-6">
            Our safe, modern hospital is designed specifically for older adults
            with behavioral health needs. The facility includes comfortable
            semi-private rooms, therapeutic activity spaces, dedicated dining
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

        {/* Chief Medical Director Narrative */}
        <section aria-labelledby="chief-message">
          <h2
            id="chief-message"
            className="text-2xl font-semibold text-primary mb-3"
          >
            About Us from our Chief Medical Director
          </h2>
          <p className="text-gray-800 leading-relaxed italic bg-background-secondary/20 p-6">
            A personal message and narrative statement from{" "}
            <span className="font-semibold">Dr. Harmon, MD</span> will be shared
            here next week.
          </p>
        </section>

        {/* Accreditation & Licensing (optional) */}
        {/* <section aria-labelledby="accreditation"> ... </section> */}
      </main>
    </div>
  );
};

export default AboutUs;
