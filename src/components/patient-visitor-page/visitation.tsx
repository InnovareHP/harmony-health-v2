const Visitation = () => {
  return (
    <div className="items-start">
      {/* LEFT: copy */}
      <div>
        <h1 className="text-3xl font-bold text-primary-foreground mb-6">
          Visitation
        </h1>

        <h2 className="text-xl font-semibold text-primary mb-2">
          Visitation Guidelines
        </h2>
        <div className="float-right w-96 ml-6 mb-4">
          <img
            src="/images/visitation.jpg"
            alt="Visitors seated in a waiting area"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <p className="text-gray-800 mb-6">
          Visitors must be approved by you or your POA/Guardian in order to be
          added to your visitor list. Without prior approval, we will not
          confirm your status as a patient, even over the phone. Visitors are
          expected to uphold the patient confidentiality of those they see or
          meet.
        </p>

        <h2 className="text-xl font-semibold text-primary mb-2">
          Visitation Hours:
        </h2>
        <p className="text-gray-900 font-semibold">
          Tuesday and Thursday: 2:00 PM – 4:00 PM
          <br />
          Saturday, Sunday and Holidays: 1:00 PM – 3:00 PM
        </p>
        <p className="text-sm italic text-gray-600 mt-2">
          ADDITIONAL ARRANGEMENTS MAY BE MADE UPON REQUEST
        </p>
        <p className="text-gray-700 mt-2 mb-6">
          <span className="italic">Note:</span> Visiting hours are subject to
          change in relation to safety precautions related to illness. Please
          see postings on unit for the most up‑to‑date information.
        </p>

        <h3 className="text-primary font-semibold mb-2">
          Visiting Holidays Include:
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-900">
          <li className="font-semibold">New Year&apos;s Day</li>
          <li className="font-semibold">Memorial Day</li>
          <li className="font-semibold">Independence Day</li>
          <li className="font-semibold">Labor Day</li>
          <li className="font-semibold">Thanksgiving Day</li>
          <li className="font-semibold">Christmas Day</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mb-2">
          Visitation Procedure:
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            All visits must take place in designated visiting areas where they
            can be supervised by staff.
          </li>
          <li>
            Visitors are required to empty their pockets and lock up all
            belongings prior to entering the unit, including purses, bags, cell
            phones, wallets, keys, smart watches, etc.
          </li>
          <li>
            Any item brought by visitors must be searched and inventoried before
            they are given to the patient.
          </li>
          <li>
            Any visitor bringing or providing contraband on the unit may be
            restricted from future visits.
          </li>
          <li>
            Patients and visitors must demonstrate appropriate boundaries and be
            respectful of others.
          </li>
          <li>
            Harmony Health values the care partners of our clients. Visitors are
            asked to arrive 15 minutes prior to the visitation to check in. Only
            visitors listed on the patient’s visitor/phone list may be allowed
            in.
          </li>
          <li>
            Patient safety is our primary concern. Please do not give patients:
            medication, cigarettes, lighting materials, sharp objects, glass
            items, plastic bags, or safety razors.
          </li>
          <li>
            The number of visitors allowed is two but may be subject to change
            based on any illness status of unit milieu.
          </li>
          <li>Visitors must be at least 18 years old.</li>
          <li>
            Clergy, court representatives, and attorneys have unrestricted
            visiting hours and may visit at any time.
          </li>
        </ul>
      </div>

      {/* RIGHT: image */}
    </div>
  );
};

export default Visitation;
