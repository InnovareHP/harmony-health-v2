const OurFocus = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
        <img
          src="/images/our-focus.jpg"
          alt="A healthcare professional talking with a patient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.6fr_1fr] gap-12">
        {/* LEFT: Main Content */}
        <div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-4">
            Our Focus
          </h1>

          <p className="text-gray-800 mb-4">
            Harmony Health is committed to providing quality, patient-focused
            care to individuals with primary psychiatric diagnoses.
          </p>

          <p className="text-gray-800 mb-4">
            Recognizing the critical role of environment in patient progress,
            our inpatient hospital, residential services, and intensive
            outpatient program are intentionally designed to create a safe and
            pleasant atmosphere conducive to effective and successful treatment.
          </p>

          <p className="text-gray-800 mb-4">
            Each patient receives a tailored treatment plan put together
            specifically for the individual by our multidisciplinary team.
          </p>

          <p className="text-gray-800 mb-4">
            We treat older adults experiencing symptoms such as confusion,
            aggression, hallucinations, suicidal thoughts, or withdrawal.
          </p>

          <p className="text-gray-800 mb-2">
            We specialize in treating conditions such as:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-8 space-y-1">
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
    </div>
  );
};

export default OurFocus;
