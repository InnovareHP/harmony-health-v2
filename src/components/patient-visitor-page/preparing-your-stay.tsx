const PreparingYourStay = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div>
        <h1 className="text-3xl font-bold text-primary-foreground mb-4">
          Preparing for Your Stay
        </h1>

        <h2 className="text-xl font-semibold text-primary mb-2">
          Personal Items
        </h2>

        <p className="text-gray-800 mb-4">
          You will only need casual clothing during your hospital stay. Please
          bring no more than three changes of clothing, as laundry services are
          available. We encourage you to wear your own comfortable attire.
          Consider a sweater if you tend to feel cold. Your days will be active,
          so avoid bringing expensive clothing or jewelry as it is prohibited
          and we cannot accept responsibility for loss or damage.
        </p>

        <p className="text-gray-800 mb-4">
          Upon admission, our staff will inventory your personal belongings,
          including any items brought throughout the duration of your stay.
          Please consult the Contraband List in your patient handbook for
          guidance.
        </p>

        <h3 className="font-semibold text-gray-900 mb-2">
          In summary, you will need:
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>3 changes of comfortable clothing</li>
          <li>1 sweater</li>
          <li>2 pairs of pajamas</li>
          <li>1 pair of shoes</li>
          <li>(Note: toiletries are provided)</li>
          <li>Labeling your clothing is helpful for staff</li>
        </ul>
      </div>

      <div className="w-full">
        <img
          src="/images/preparing-your-stay.jpg"
          alt="Senior patients being assisted outdoors"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default PreparingYourStay;
