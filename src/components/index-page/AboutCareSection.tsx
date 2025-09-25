export default function AboutCareSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-100 flex flex-col lg:flex-row gap-6 items-center justify-between">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Whole-Person, Family-Centered Care
        </h2>
        <p className="mb-6 text-gray-700">
          At Harmony Health, we combine expert medical care with compassion,
          dignity, and respect. Our interdisciplinary team partners with
          families to ensure that every patient has the best chance to heal,
          recover, and return to the highest quality of life possible.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Meet Our Care Team
        </button>
      </div>
      <div className="lg:w-1/2">
        <img
          src="/images/9ebccc50-fb12-40d3-be7e-ff7c31c418e2.png"
          alt="Elderly care"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}
