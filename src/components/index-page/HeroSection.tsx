export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white">
      <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Compassionate Psychiatric Care for Seniors
        </h1>
        <p className="text-lg mb-6">
          Helping older adults and their families find safety, healing, and hope
          in Harmony.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Make a Referral
          </button>
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">
            Learn About Our Programs
          </button>
        </div>
      </div>
    </section>
  );
}
