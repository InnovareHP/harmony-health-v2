export default function MissionVision() {
    return (
      <section id="mission-vision" className="relative bg-gradient-to-br from-emerald-50 via-amber-50 to-yellow-50 py-16 md:py-28 space-y-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image with Sticky Effect */}
            <div className="sticky h-full lg:top-20 self-start">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/banner/rr_trademark.jpg"
                  alt="Mission Vision Graphic"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-2xl blur opacity-25 hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Text (Scrolls Normally) */}
            <div className="space-y-16">
              {/* Mission */}
              <div className="group space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-12 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                    Mission
                  </h3>
                </div>
                <div className="pl-6 border-l-2 border-emerald-100 hover:border-emerald-300 transition-colors duration-300">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    We strive to provide care that flows with{" "}
                    <span className="font-semibold text-emerald-700 px-2 py-1 bg-emerald-50 rounded-md">
                      compassion, purpose, and dignity
                    </span>
                    . Like a river, we support each resident's journey with{" "}
                    <span className="font-semibold text-yellow-600 px-2 py-1 bg-yellow-50 rounded-md">
                      continuity, warmth, and peace
                    </span>{" "}
                    in a comforting home.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
                    Vision
                  </h3>
                </div>
                <div className="pl-6 border-l-2 border-yellow-100 hover:border-yellow-300 transition-colors duration-300">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    To be a{" "}
                    <span className="font-semibold text-emerald-700 px-2 py-1 bg-emerald-50 rounded-md">
                      steady and trusted home
                    </span>{" "}
                    in our community, offering a place of comfort where individuals
                    who are seeking care are{" "}
                    <span className="font-semibold text-yellow-600 px-2 py-1 bg-yellow-50 rounded-md">
                      treated like family
                    </span>{" "}
                    and where families find{" "}
                    <span className="font-semibold text-emerald-700 px-2 py-1 bg-emerald-50 rounded-md">
                      peace in knowing their loved one is in good hands
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Values */}

            </div>


          </div>
          <div className="group space-y-6">
  <div className="flex items-center gap-4">

    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
      Values
    </h3>
  </div>

  {/* Grid Layout for Values */}
  <div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    {[
      {
        title: "Meeting individuals where they are:",
        description:
          "We adapt our care to fit each individual's preferences, beliefs, and values.",
      },
      {
        title: "Respect individual choices:",
        description:
          "We treat everyone with dignity and promote autonomy and independence in every aspect of care.",
      },
      {
        title: "Peaceful environment:",
        description:
          "We foster a calming, comfortable atmosphere that supports healing.",
      },
      {
        title: "Community interaction:",
        description:
          "We serve not only the individual but also their family and community, strengthening bonds and promoting connections.",
      },
      {
        title: "Promoting excellence:",
        description:
          "From the care we provide to the meals we prepare and the companionship we share, we commit to the highest quality in all that we do.",
      },
    ].map((value, index) => (
      <div
        key={index}
        className="flex gap-4 group/item hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
      >
        {/* Number Circle */}
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-sm font-bold">{index + 1}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="font-semibold text-emerald-700 block mb-1">
            {value.title}
          </span>
          <span className="text-stone-700 leading-relaxed">
            {value.description.includes("highest quality") ? (
              <>
                {value.description.split("highest quality")[0]}
                <span className="font-semibold text-yellow-600 px-2 py-1 bg-yellow-50 rounded-md">
                  highest quality
                </span>
                {value.description.split("highest quality")[1]}
              </>
            ) : (
              value.description
            )}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
    );
  }
