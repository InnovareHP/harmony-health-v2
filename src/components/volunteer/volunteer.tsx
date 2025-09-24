
// Volunteer page that embeds your (Microsoft) form link and includes your writeup.
// TailwindCSS-based layout. Drop this into your Next.js app (e.g., app/volunteer/page.tsx).

export default function VolunteerPage() {
  const formUrl = "https://forms.office.com/r/WSEnnveFnd"; // Provided link
  const embeddedUrl = `${formUrl}?embed=true`;

  return (
    <main className="bg-white">
      {/* Hero / Intro */}
      <section className="py-16 md:py-24 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
              Join Our Mission
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-600">
              Volunteer at Rivers Residence
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
              At Rivers Residence, we believe care flows best when our community comes together. Volunteers are an important part of our mission to provide dignity, companionship, and joy for our residents. Whether you’re a student, professional, or neighbor, you can share your time and talents through activities, conversation, events, and support. Every visit brings comfort, connection, and healing.
            </p>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-600">
              We welcome pre-health students who are looking for experience to guide them in their future careers and anyone else looking to give back.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-2xl border border-emerald-600 px-5 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
              >
                Open Form in New Tab
              </a>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700 transition"
              >
                Apply on this Page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ways you can help</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Companionship & Conversation",
                desc: "Spend time with residents through casual chats, reading, letter writing, or listening to music.",
              },
              {
                title: "Activities & Events",
                desc: "Assist with group activities like arts & crafts, games, gentle exercise, or seasonal celebrations.",
              },
              {
                title: "Support & Service",
                desc: "Help staff with setup, decor, organizing supplies, and event coordination.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-emerald-700">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Form */}
      <section id="apply" className="py-12 md:py-16 bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">1</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Volunteer Application Form</h2>
          </div>
          <p className="mt-3 text-gray-600">
            Fill out the form below to get started. If it doesn’t load, use the button above to open it in a new tab.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border shadow-sm bg-white">
            {/* Note: Some form providers block embedding with X-Frame-Options. The fallback button above ensures access either way. */}
            <iframe
              title="Rivers Residence Volunteer Form"
              src={embeddedUrl}
              className="w-full min-h-[1100px]"
              loading="lazy"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            />
          </div>
        </div>
      </section>



    </main>
  );
}
