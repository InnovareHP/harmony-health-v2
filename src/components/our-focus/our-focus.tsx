const OurFocus = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
        <img
          src="/images/our-focus.png"
          alt="Healthcare professional talking with a patient"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gradient-to-r from-primary to-primary/10 h-4"></div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary-foreground mb-6">
          Our Focus
        </h1>

        <div className="bg-background-secondary/20 p-6 rounded-lg shadow-sm">
          <p className="text-gray-800 mb-4">
            Harmony Health is committed to providing quality, patient-focused
            care to individuals with primary psychiatric diagnoses.
          </p>

          <p className="text-gray-800 mb-4">
            Recognizing the critical role of environment in patient progress,
            our inpatient hospital, residential services, and intensive
            outpatient program are designed to create a safe and supportive
            atmosphere for effective treatment.
          </p>

          <p className="text-gray-800 mb-4">
            Each patient receives a personalized treatment plan developed by our
            multidisciplinary team.
          </p>

          {/* Updated Who We Serve Section */}
          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
            Who We Serve
          </h2>
          <p className="text-gray-800 mb-4">
            We specialize in psychiatric care for adults 55+ originating from
            hospitals, long-term care facilities, assisted living facilities,
            skilled nursing facilities, emergency room departments, physicians,
            and home and community organizations.
          </p>
          <p className="text-gray-800 mb-4">
            We care for older adults experiencing symptoms such as confusion,
            aggression, hallucinations, suicidal thoughts, or withdrawal.
          </p>

          {/* Conditions We Treat Section */}
          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
            Conditions We Treat
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Alzheimer’s disease and other forms of dementia</li>
            <li>Parkinson’s with behavioral symptoms</li>
            <li>Depression</li>
            <li>Anxiety</li>
            <li>Psychosis</li>
            <li>Schizophrenia</li>
            <li>Brain injury and stroke</li>
            <li>Other psychiatric/neurological disorders</li>
          </ul>
        </div>
      </section>

      {/* Removed Common Referral Sources / WhoWeServe Component */}
    </div>
  );
};

function WhoWeServe() {
  const CONTAINER = "max-w-7xl mx-auto px-6 py-12";
  const SERVE_ITEMS = [
    "Dementia-related behaviors",
    "Acute psychiatric symptoms",
    "Suicidal or harmful thoughts",
    "Aggression or confusion",
    "Complex co-occurring medical and psychiatric needs",
  ];
  return (
    <section className="py-16 bg-white" aria-labelledby="serve-title">
      <div className={`${CONTAINER} grid lg:grid-cols-2 gap-10 items-start`}>
        <div>
          <h2
            id="serve-title"
            className="text-3xl font-bold mb-3 text-primary-foreground"
          >
            Who We Serve
          </h2>
          <p className="text-gray-700 mb-4">
            We specialize in psychiatric care for adults <strong>55+</strong>{" "}
            experiencing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {SERVE_ITEMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <aside className="rounded-lg p-6 border border-primary/20 bg-background-secondary/10">
          <h3 className="font-semibold text-lg mb-2">
            Common Referral Sources
          </h3>
          <p className="text-gray-700">
            Hospitals, physicians, emergency departments, nursing homes, and
            community providers.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default OurFocus;
