import React, { useState } from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      title: "Asvini Devi",
      work: "Dental Doctor",
      content:
        "Absolutely professional work. He patiently understood every requirement I had and delivered exactly what I envisioned with great ease. Highly reliable and a pleasure to work with him.",
    },
    {
      id: 2,
      title: "Rahul Sharma",
      work: "Business Owner",
      content:
        "Exceptional experience from start to finish. Communication was smooth and the final output exceeded my expectations.",
    },
    {
      id: 3,
      title: "Priya Mehta",
      work: "Startup Founder",
      content:
        "Very professional and creative. Delivered on time with excellent quality. Highly recommended.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const { title, work, content } = testimonialData[currentIndex];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#05050F] overflow-hidden">
      <img
        src="/assets/back.svg"
        alt="bg-circle"
        className="
      absolute
      top-28
      left-1/2
      -translate-x-1/2 -translate-y-1/2
     
      opacity-40
      z-0
      pointer-events-none
    "
      />

      <div className="mt-[10%] z-10">
        <button className="animated-border font-aileron font-normal text-[26px] px-10 py-3 rounded-full text-white mb-10">
          Testimonials
        </button>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-20 top-1/2 -translate-y-1/2 w-12 h-12 border border-emerald-400 rounded-full
    flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-black transition z-10"
      >
        <img src="/assets/arrow.svg" alt="arrow" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-12 h-12 border border-emerald-400 rounded-full
    flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-black transition z-10"
      >
        <img src="/assets/left-arrow.svg" alt="arrow" />
      </button>

      <div
        className="
    relative z-10
    w-full max-w-[900px] h-auto min-h-[360px]
    rounded-3xl
    mt-10
    px-6 md:px-20 py-14
    flex flex-col items-center justify-center
    text-center text-white

    bg-white/20
    backdrop-blur-2xl
    border border-white/30

 
    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  "
      >
        <div
          className="
      absolute inset-0 rounded-3xl
      bg-gradient-to-tr
      from-white/30
      via-white/5
      to-transparent
      
      pointer-events-none
    "
        />

        <img
          src="/assets/heart-red.svg"
          alt="Heart"
          className="
      absolute
      -top-12 -right-12
      w-[160px] md:w-[220px]
      
    
    "
        />

        <div className="flex gap-2 mb-6 z-10">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="/assets/sta.svg" alt="" className="w-6" />
          ))}
        </div>

        <p className="text-xl md:text-3xl leading-8 md:leading-10 opacity-90 z-10">
          {content}
        </p>

        <div className="mt-8 z-10">
          <h4 className="text-xl md:text-2xl font-bold font-aileron">
            {title}
          </h4>
          <span className="text-base md:text-lg opacity-80">{work}</span>
        </div>
      </div>

      <img
        src="/assets/star-blur.svg"
        className="absolute left-20 top-56 w-[200px] opacity-80 z-0"
        alt="start"
      />

      <div className="mt-[10%] flex flex-col items-center text-white z-10">
        <img src="/assets/google.svg" alt="google" />
      </div>
    </section>
  );
};

export default Testimonials;
