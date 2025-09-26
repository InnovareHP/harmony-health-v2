const DuringYourStay = () => {
  return (
    <div className="gap-8 items-start">
      <div>
        <h1 className="text-3xl font-bold text-primary-foreground mb-4">
          During Your Stay
        </h1>

        <h2 className="text-xl font-semibold text-green-600 mb-2">
          Orientation
        </h2>
        <p className="text-gray-800 mb-4">
          At Harmony Health, we value each individual and are committed to
          understanding your story and helping you achieve wellness. We
          understand that being admitted to a hospital can be daunting and
          scary. Our staff empathize with this and strive to ensure you feel
          comfortable throughout your stay. For safety reasons, our doors remain
          locked, particularly to safeguard patients experiencing confusion or
          wandering tendencies.
        </p>

        <div className="float-right w-72 ml-6 mb-4">
          <img
            src="/images/during-your-stay.jpg"
            alt="Staff interacting with patient in a friendly setting"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-800 mb-4">
          Our unit specializes in providing acute psychiatric care for adults
          and older adults. We believe our patients deserve individualized care,
          which is why our secure environment is staffed by a dedicated team
          including psychiatrists, mental health technicians, nurses, nurse
          practitioners, nursing assistants, social workers, therapists and
          recreational therapists. Upon arrival, we will introduce you to our
          friendly and experienced staff, who are eager to assist you with the
          challenges that led to hospitalization. Our rooms are semi-private,
          and you may have a roommate.
        </p>

        <p className="text-gray-800 mb-4">
          We operate under the belief that aging does not prohibit learning and
          growth. Our goal is to help you feel valued and engaged within our
          community, empowering you to make the most of each day. As each
          patient is unique, your treatment program will be tailored to match
          your unique strengths, challenges, abilities and needs.
        </p>

        <p className="text-gray-800 mb-4">
          In our commitment to meeting your needs, we strive to create a
          comfortable atmosphere for all our patients. We encourage you to wear
          your own clothing and join fellow patients during meals, fostering a
          sense of camaraderie and offering opportunities for mutual support and
          learning. You have the right to participate in decisions about your
          treatment, free from any bias or influence from the hospital. Whether
          or not you have an advanced directive will not affect your access to
          treatment, services or care.
        </p>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Inpatient Visitation Guidelines
        </h2>
        <p className="text-gray-800 mb-2">
          Visitors must be approved by you or your POA/Guardian to be added to
          your visitor list. Without prior approval, we will not confirm your
          status as a patient, even over the phone. Visitors are expected to
          uphold the patient confidentiality of those they see or meet.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900">Visitation Hours:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Tuesday and Thursday: 2:00 PM – 4:00 PM</li>
            <li>Saturday, Sunday, and Holidays: 1:00 PM – 3:00 PM</li>
          </ul>
          <p className="text-gray-600 text-sm italic mt-1">
            Additional arrangements may be made upon request. Visiting hours are
            subject to change based on safety precautions. Please check unit
            postings.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900">
            Visiting Holidays Include:
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>New Year's Day</li>
            <li>Memorial Day</li>
            <li>Independence Day</li>
            <li>Labor Day</li>
            <li>Thanksgiving Day</li>
            <li>Christmas Day</li>
          </ul>
        </div>

        <h3 className="font-semibold text-gray-900 mt-4 mb-2">
          Visitation Procedure:
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
          <li>Visits must occur in designated supervised areas.</li>
          <li>Visitors must lock up all belongings (phones, bags, etc.).</li>
          <li>Items brought must be searched and inventoried.</li>
          <li>Providing contraband will result in visit restrictions.</li>
          <li>Respectful behavior and boundaries are required.</li>
          <li>Max of two visitors; must be 18 years or older.</li>
          <li>Clergy, attorneys, and court reps may visit any time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Phone Call Guidelines
        </h2>
        <p className="text-gray-800 mb-4">
          You are permitted to make and receive phone calls during designated
          hours. Guardians, attorneys, or clergy may call anytime. Staff may end
          calls deemed inappropriate.
        </p>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Mail Guidelines
        </h2>
        <p className="text-gray-800 mb-4">
          Incoming mail is distributed daily and opened with staff to ensure
          safety. Outgoing mail is collected daily at the Nurses’ Station.
        </p>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Laundry Guidelines
        </h2>
        <p className="text-gray-800 mb-4">
          Please notify nursing staff for laundry assistance.
        </p>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Relaxation Time Guidelines
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
          <li>TV use is allowed during leisure time.</li>
          <li>Only G, PG, and PG-13 movies and non-MA TV shows allowed.</li>
          <li>Only facility-provided movies are permitted.</li>
          <li>No personal MP3 players, tablets, or handheld games allowed.</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-600 mt-8 mb-2">
          Post-Discharge Care
        </h2>
        <p className="text-gray-800 mb-4">
          Discharge planning begins early. A team (social workers, nurses, etc.)
          evaluates your needs for transitioning home or to another care level.
        </p>

        <h3 className="font-semibold text-gray-900 mb-2">
          Typical discharge planning includes:
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Patient evaluation</li>
          <li>Consultation with patient or representative</li>
          <li>Preparation for home or facility transfer</li>
          <li>Caretaker support and training assessment</li>
          <li>Community referrals</li>
          <li>Follow-up coordination</li>
        </ul>
      </div>
    </div>
  );
};

export default DuringYourStay;
