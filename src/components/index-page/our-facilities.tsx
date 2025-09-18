import { useState } from "react";

type Facility = {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function OurFacilities() {
  const [selectedImage, setSelectedImage] = useState<Facility | null>(null);

  const facilities = [
    {
      id: 1,
      image: "/image/Img_1.jpg",
      title: "Spacious Bedrooms",
      description: "Bright, airy rooms with cozy interiors designed for rest and relaxation."
    },
    {
      id: 2,
      image: "/image/Img_2.jpg",
       title: "Modern Kitchen & Dining",
      description: "A blend of functionality and style, serving homely, nutritious meals daily."
    },
    {
      id: 3,
      image: "/image/Img_3.jpg",
      title: "Serene Outdoor Garden",
      description: "Lush green surroundings that create a peaceful escape within your home."
    },
    {
      id: 4,
      image: "/image/Img_4.jpg",
      title: "Recreation & Activity Room",
      description: "Designed for fun, games, and social gatherings to keep everyone engaged."
    },
    {
      id: 5,
      image: "/image/Img_5.jpg",
      title: "Private Care Suite",
      description: "Comfortable, home-style rooms with easy access to personalized care when needed."
    },
    {
      id: 6,
      image: "/image/Img_6.jpg",
      title: "Quality Healthcare",
      description: "Quality healthcare services to ensure the best possible care for our residents."
    },
    {
      id: 7,
      image: "/image/Img_7.jpg",
      title: "Family Lounge",
      description: "A cozy spot for loved ones to gather, connect, and create cherished memories."
    },
    {
      id: 8,
      image: "/image/Img_8.jpg",
      title: "Reading & Quiet Corners",
      description: "Peaceful nooks designed for relaxation, reflection, and quality alone time."
    },
    {
      id: 9,
      image: "/image/Img_9.jpg",
      title: "Comfortable Living Room",
      description: "A cozy space for relaxation, entertainment, and family time."
    },
    {
      id: 10,
      image: "/image/Img_10.jpg",
      title: "Peaceful Environment",
      description: "An inviting environment that instantly feels like stepping into a warm home."
    }
  ];


  return (
    <section id="facilities" className="relative bg-gradient-to-br from-stone-50 via-emerald-50 to-amber-50 py-16 md:py-28 space-y-10 ">

      <div className="relative max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">

            <h2 className="text-4xl md:text-6xl font-bold text-emerald-500">
              Our Facilities
            </h2>

          </div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore our thoughtfully designed spaces that create a warm, caring environment where
            <span className="font-semibold text-emerald-700 px-2 py-1 bg-emerald-50 rounded-md mx-2">
              comfort meets care
            </span>
            and every detail supports wellbeing.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(facility)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-emerald-100 shadow-lg max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-500 mb-4 lg:mb-6">
              Experience Our Natural Approach to Care
            </h3>
            <p className="text-base lg:text-xl text-stone-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              We invite you to walk our gardens, feel the warmth of our community,
              and discover how Rivers Residence creates a sanctuary where care
              flows as naturally as water over stone.
            </p>
            <a target="_blank" href="https://www.google.com/search?client=mobilesearchapp&sca_esv=3dd5e06a00554f5a&authuser=0&bih=878&biw=430&channel=iss&cs=0&hl=en&rlz=1MDAPLA_enUS962US970&source=sh/x/loc/act/m1/5&v=386.1.806391101&kgmid=/g/11xz0dmj4s&q=Rivers+Residence&shndl=30&shem=lsptbl1,shrtsdl">
            <button className="text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium transition-all transform hover:scale-105 shadow-lg bg-emerald-500">
              <span className="hidden sm:inline">
                Schedule Your Tour
              </span>
              <span className="sm:hidden">Schedule Tour</span>
            </button>
            </a>
          </div>
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-yellow-50">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
