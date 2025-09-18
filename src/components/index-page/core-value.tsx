const HighlightsSection = () => {
    const highlights = [
      {
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Comfortable living spaces with natural light",
        title: "Naturally Lit Living Spaces",
        description:
          "Home-like rooms flooded with natural light, featuring earth-tone furnishings and personal touches that honor each resident's journey.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Therapeutic gardens and walking paths",
        title: "Therapeutic Gardens",
        description:
          "Meandering paths through carefully curated gardens, offering spaces for reflection, gentle exercise, and connection with seasonal rhythms.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Farm-to-table dining experience",
        title: "Farm-to-Table Dining",
        description:
          "Nourishing meals crafted from locally-sourced, seasonal ingredients, honoring dietary preferences while celebrating the bounty of our region.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Holistic wellness programs",
        title: "Holistic Wellness",
        description:
          "Compassionate care that honors the whole person, with programs that nurture physical, emotional, and spiritual well-being in harmony with nature.",
      },
    ];

    return (
      <section
        id="highlights"
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #d1fae5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-emerald-500  mb-4 lg:mb-6">
              Where Nature Meets Care
            </h2>
            <p className="text-lg lg:text-xl text-stone-700 max-w-3xl mx-auto font-light">
              Every corner of Rivers Residence is designed to connect our
              residents with the healing power of nature, creating spaces that
              nurture both body and soul.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 border border-transparent hover:border-yellow-300">
                  <div className="overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.alt}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-emerald-800 group-hover:text-yellow-600 transition-colors mb-3 lg:mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-sm lg:text-base text-stone-700 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-emerald-100 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-500 mb-4 lg:mb-6">
              Experience Our Natural Approach to Care
            </h3>
            <p className="text-base lg:text-xl text-stone-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              We invite you to walk our gardens, feel the warmth of our community,
              and discover how Rivers Residence creates a sanctuary where care
              flows as naturally as water over stone.
            </p>
            <button className="text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium transition-all transform hover:scale-105 shadow-lg bg-emerald-500">
              <span className="hidden sm:inline">
                Schedule Your Nature Walk & Tour
              </span>
              <span className="sm:hidden">Schedule Tour</span>
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default HighlightsSection;
