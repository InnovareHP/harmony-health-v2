"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Facility = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export default function OurFacilities() {
  const [selectedImage, setSelectedImage] = useState<Facility | null>(null);

  const facilities: Facility[] = [
    {
      id: 1,
      image: "/image/Img_1.jpg",
      title: "Spacious Bedrooms",
      description:
        "Bright, airy rooms with cozy interiors designed for rest and relaxation.",
    },
    {
      id: 2,
      image: "/image/Img_2.jpg",
      title: "Modern Kitchen",
      description:
        "A blend of functionality and style, serving homely, nutritious meals daily",
    },
    {
      id: 3,
      image: "/image/Img_11.jpg",
      title: "Dining Room",
      description:
      "A welcoming space where residents gather to enjoy nutritious meals, share stories, and build a sense of community.",
    },
    {
      id: 4,
      image: "/image/Img_3.jpg",
      title: "Welcoming Outdoor Space",
      description:
        "Lush green surroundings that create a peaceful escape within your home.",
    },
    {
      id: 5,
      image: "/image/Img_4.jpg",
      title: "Living Room",
      description:
        "Designed for fun, games, and social gatherings to keep everyone engaged.",
    },
    {
      id: 6,
      image: "/image/Img_5.jpg",
      title: "Private Room",
      description:
        "Comfortable rooms with easy access to personalized care when needed.",
    },
    {
      id: 7,
      image: "/image/Img_6.jpg",
      title: "Lush Backyard",
      description:
        "A space filled with greenery and fresh air, perfect for relaxation, activities, and quiet reflection.",
    },
    {
      id: 8,
      image: "/image/Img_10.jpg",
      title: "Shared Room",
      description:
        "Cozy space for two, combining comfort, companionship, and affordability.",
    },
    {
      id: 9,
      image: "/image/Img_8.jpg",
      title: "Reading & Quiet Corners",
      description:
        "Peaceful nooks designed for relaxation, reflection, and quality alone time.",
    },

  ];

  return (
    <section
      id="ourhome"
      className="relative bg-gradient-to-br from-stone-50 via-emerald-50 to-amber-50 py-16 md:py-28 space-y-10"
    >
      <div className="relative max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-500">
              Our Home
            </h2>
          </div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore our thoughtfully designed spaces that create a warm, caring
            environment where
            <span className="font-semibold text-emerald-700 px-2 py-1 bg-emerald-50 rounded-md mx-2">
              comfort meets care
            </span>
            and every detail supports wellbeing.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(facility)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-emerald-100 shadow-lg max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-emerald-500 mb-4 lg:mb-6">
        Experience Our Topnotch Approach to Care
        </h3>
        <p className="text-base lg:text-xl text-stone-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
        At Rivers Residence, care flows with the ease and continuity of a river. Feel the warmth of our community and discover a sanctuary where every resident is supported with dignity, peace, and purpose.
        </p>
        <a
          target="_blank"
          href="https://www.google.com/search?client=mobilesearchapp&q=Rivers+Residence"
        >
          <button className="text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium transition-all transform hover:scale-105 shadow-lg bg-emerald-500">
            Schedule Your Tour
          </button>
        </a>
      </motion.div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-colors duration-200"
              >
                ✕
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
