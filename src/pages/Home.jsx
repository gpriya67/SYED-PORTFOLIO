import React, { useEffect, useState } from "react";
import CounterNumber from '../component/CounterNumber';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ===== BACKGROUND BASE ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#053f3a] to-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* ===== GRID IMAGE ===== */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/assets/back.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 min-h-screen px-6 sm:px-10 lg:px-20 pt-28 flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT TEXT (SPACE RESERVED ALWAYS) */}
        <div
          className={`
            max-w-xl text-center lg:text-left
            transition-all duration-700 ease-out
            ${scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"}
          `}
        >
          <img src="/assets/hi.svg" alt="hi" className="mb-4 mx-auto lg:mx-0" />
          <img src="/assets/syed-text.svg" alt="syed" className="mx-auto lg:mx-0" />

          <p className="text-white text-[20px] sm:text-[22px] lg:text-[26px] mt-4 font-medium opacity-90">
            Graphic Designer & Brand Maker
          </p>
        </div>

        {/* RIGHT IMAGE (ALWAYS VISIBLE) */}
        <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px] flex-shrink-0">
          <img
            src="/assets/syed.svg"
            alt="syed"
            className="w-full relative z-20"
          />
        </div>
      </div>
      <CounterNumber/>
    </section>
  );
};

export default Home;
