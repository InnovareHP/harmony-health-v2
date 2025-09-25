export default function ReferralHero() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center"
      aria-label="Partnering with Providers"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-6xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Partnering with Providers to Support Seniors in Crisis
        </h1>
        <p className="text-lg max-w-2xl">
          Fast, compassionate admissions and clear communication—so your
          patients get safe, specialized care.
        </p>
      </div>
    </section>
  );
}
