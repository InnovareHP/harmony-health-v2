const HeroSection = () => {
    return (
      <section
        id="home"
        className="pt-8 lg:pt-16 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-emerald-900 mb-6 lg:mb-8 leading-tight">
                Where Care Flows <span className="text-yellow-600">Everything Follows</span>
              </h1>




              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start">
                <a href="#facilities">
                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-base lg:text-lg font-medium transition-transform hover:scale-105 shadow-lg">
                  <span className="hidden sm:inline">
                   View Our Facilities
                  </span>
                  <span className="sm:hidden">View Our Facilities</span>
                </button>

                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative mt-8 lg:mt-0">
              {/* Solid emerald border frame */}
              <div className="absolute inset-0 bg-emerald-200 rounded-2xl lg:rounded-3xl transform rotate-2 lg:rotate-3"></div>

              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-2xl">
                <img
                  src="/banner/rr_banner.jpg"
                  alt="Rivers Residence - A peaceful care home surrounded by nature"
                  className="w-full h-full sm:h-80 lg:h-[500px] object-cover rounded-xl lg:rounded-2xl"
                />
              </div>

              {/* Callout Tag */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-emerald-700 text-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl">
                <div className="text-lg lg:text-2xl font-bold">A Home</div>
                <div className="text-emerald-100 text-sm lg:text-base">
                  Not Just Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
