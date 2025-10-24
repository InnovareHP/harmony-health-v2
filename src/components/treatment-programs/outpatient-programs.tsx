const OutpatientPrograms = () => {
  return (
    <div className="bg-background-secondary/20 p-6 rounded-lg shadow-sm">
      <p className="text-gray-800 mb-4">
        Outpatient programs for adults at Harmony Health are designed for
        individuals who may benefit from treatment in a less restrictive
        environment than inpatient hospitalization, allowing them to return home
        between programming hours.
      </p>

      <p className="text-gray-800 mb-4">
        The{" "}
        <span className="font-semibold">
          Adult Partial Hospitalization Program (PHP)
        </span>
        at Harmony Health serves patients ages 55 years and older who need a
        structured therapeutic program but do not require 24-hour continuous
        care.
      </p>

      <p className="text-gray-800 mb-4">
        The{" "}
        <span className="font-semibold">
          Adult Psychiatric Intensive Outpatient Program (IOP)
        </span>
        is for adults ages 55 years and older who require intensive psychiatric
        treatment while maintaining the ability to return home between sessions.
        A <span className="italic">Virtual IOP</span> option is also available
        for those who prefer or require remote participation.
      </p>

      <p className="text-gray-800 mb-4">
        The{" "}
        <span className="font-semibold">
          Adult Chemical Dependency Outpatient Program
        </span>
        is designed for patients ages 55 years and older who are struggling with
        chemical dependency or substance abuse issues, but who do not require
        medical detoxification or inpatient rehabilitation.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
        Assessment and Program Matching
      </h2>
      <p className="text-gray-800 mb-4">
        A no-cost, confidential assessment is available to help determine which
        program may be the best fit for you or a loved one. Our team will guide
        you toward the most appropriate level of care based on your individual
        needs and goals.
      </p>
    </div>
  );
};

export default OutpatientPrograms;
