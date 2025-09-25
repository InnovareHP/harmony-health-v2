const DischargeToFacility = () => {
  return (
    <div className=" gap-8 items-start">
      {/* LEFT content */}
      <div>
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Discharge to a Facility
        </h1>
        <div className="float-right w-96 ml-6 mb-4">
          <img
            src="/images/discharge-to-facility.jpg"
            alt="Nurse assisting patient in a care facility"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <p className="text-gray-800 mb-4">
          When transitioning to a rehabilitation facility or nursing home,
          thorough transition planning ensures continuity of care. This includes
          clarifying the patient’s current health status and abilities,
          reviewing medications, and assisting in selecting the appropriate
          facility for your needs.
        </p>
        <p className="text-gray-800">
          Deciding on a facility can be a stressful process for families. Our
          social workers and discharge planners are available to provide
          essential advice and support.
        </p>
      </div>

      {/* RIGHT image */}
    </div>
  );
};

export default DischargeToFacility;
