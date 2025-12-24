import React from "react";

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen bg-[#05050F] flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500/30 blur-[160px]" />

      <div className="relative z-10 w-full max-w-[1200px] px-10">

        {/* Title */}
        <div className="flex justify-center mb-16">
          <div className="px-12 py-3 border border-emerald-400 rounded-full text-white text-xl">
            My Portfolio
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">

          {/* Card 1 */}
          <div className="group relative w-[260px] h-[260px] rounded-3xl border border-emerald-400/40 bg-black/30 backdrop-blur-xl flex flex-col items-center justify-center">

            {/* Inner White Card */}
            <div className="w-[160px] h-[160px] bg-white rounded-2xl flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="w-24"
              />
            </div>

            <p className="text-white mt-6">Logos</p>
          </div>

          {/* Card 2 */}
          <div className="relative w-[260px] h-[260px] rounded-3xl border border-emerald-400/40 bg-emerald-500 flex items-center justify-center">
            <p className="text-white font-medium">Packaging design</p>
          </div>

          {/* Card 3 */}
          <div className="relative w-[260px] h-[260px] rounded-3xl border border-emerald-400/40 bg-emerald-500 flex items-center justify-center">
            <p className="text-white font-medium">Posters</p>
          </div>

        </div>

        {/* Stats + Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20">

          {/* Stats */}
          <div>
            <h1 className="text-6xl font-bold text-emerald-400">
              250k+
            </h1>
            <p className="text-gray-300 mt-2">
              Monthly project views on <span className="text-emerald-400">Pinterest</span>
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 md:mt-0 px-10 py-3 rounded-full bg-emerald-400 text-black font-medium hover:scale-105 transition">
            View my Portfolio
          </button>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
