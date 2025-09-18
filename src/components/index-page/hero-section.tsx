
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-8 lg:pt-16 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-emerald-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-emerald-900 mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Where Care Flows{" "}
              <span className="text-yellow-600">Everything Follows</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a href="#facilities">
                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium transition-transform hover:scale-105 shadow-lg">
                  View Our Home
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Solid emerald border frame */}
            <motion.div
              className="absolute inset-0 bg-emerald-200 rounded-2xl lg:rounded-3xl transform rotate-2 lg:rotate-3"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="relative bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/banner/rr_banner.jpg"
                alt="Rivers Residence - A peaceful care home surrounded by nature"
                className="w-full h-full sm:h-80 lg:h-[500px] object-cover rounded-xl lg:rounded-2xl"
              />
            </motion.div>

            {/* Callout Tag */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
