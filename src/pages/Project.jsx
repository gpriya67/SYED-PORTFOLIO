import React from "react";

const Project = () => {
  return (
    <section className="w-full px-5 sm:px-10 lg:px-20 min-h-screen bg-[#05050F] flex items-center justify-center relative overflow-hidden">
      <div className="relative w-full bg-[#05050F] overflow-hidden">
        <div className="flex justify-center mt-[8%] sm:mt-[10%]">
          <button className="animated-border px-6 sm:px-10 font-aileron font-normal text-[20px] sm:text-[26px] lg:text-[30px] py-2 sm:py-3 rounded-full text-white mb-10">
            My Portfolio
          </button>
        </div>

        <div>
          <img
            src="/assets/radial-right.svg"
            alt="radial-right"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] opacity-70"
          />
        </div>

        <img
          src="/assets/radient-testimonal.svg"
          alt="gradient"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] lg:w-[900px] opacity-90 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row gap-10 justify-center mb-24 mt-[5%]">
            {[
              { img: "/assets/border-2.svg", title: "Logos" },
              { img: "/assets/border-3.svg", title: "Packaging design" },
              { img: "/assets/border-3.svg", title: "Posters" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="relative scale-90 sm:scale-100">
                  <img src="/assets/border.svg" alt="border" />
                  <img
                    src={item.img}
                    className="absolute top-1 md:top-5 md:left-6"
                    alt="item"
                  />
                </div>
                <p className="text-white text-[18px] sm:text-[22px] font-bold font-aileron text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="font-aileron font-bold text-center lg:text-left">
              <h1 className="text-[60px] sm:text-[80px] lg:text-9xl font-bold text-primary">
                250K+
              </h1>
              <p className="text-gray-300 mt-2 flex gap-2 justify-center lg:justify-start font-bold text-base sm:text-lg">
                Monthly project views on
                <img src="/assets/pintrest-text.svg" alt="pinterer" />
              </p>
            </div>

            <button
              className="
                relative
                px-8 sm:px-12
                py-3 sm:py-4
                rounded-full
                bg-white/20
                shadow-[0_8px_40px_rgba(255,255,255,0.25)]
                backdrop-blur-lg
                border border-white/25
                text-white
                text-[18px] sm:text-[22px]
                transition-all duration-300
                font-aileron font-bold
                hover:scale-105
              "
            >
              View my Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
