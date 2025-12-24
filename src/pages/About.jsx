import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        px-4 sm:px-10 md:px-16 lg:px-20
        bg-[#020617]
        overflow-hidden
        py-20
      "
    >
      <div className="absolute -translate-x-1/2 w-full max-w-[300px] pointer-events-none"></div>

      {/* HEART */}
      <img
        src="/assets/heart.svg"
        alt="heart"
        className="
          absolute
          left-6 sm:left-20 md:left-40 lg:left-52
          top-16 sm:top-24 md:top-28 lg:top-32
          w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]
          z-20
        "
      />

      {/* RIGHT BLOB */}
      <img
        src="/assets/Rectangle.svg"
        alt="blob"
        className="
          absolute
          right-4 sm:right-10 md:right-14 lg:right-20
          top-24 sm:top-32 md:top-36 lg:top-40
          w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]
          z-20
        "
      />

      {/* TOP GRADIENT */}
      <div className="
        absolute
        -right-20 sm:-right-10 md:-right-8 lg:-right-5
        -top-56 sm:-top-64 md:-top-72 lg:-top-80
        -translate-x-1/2
        w-full
        max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]
        pointer-events-none
      ">
        <img
          src="/assets/skills-rantangale.svg"
          alt="gradient"
          className="w-full opacity-90 absolute top-0"
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[900px] mx-auto text-center z-10">
        <div className="flex justify-center">
          <button
            className="
              animated-border
              font-aileron font-normal
              text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]
              px-6 sm:px-8 md:px-10
              py-2.5 sm:py-3
              rounded-full
              text-white
              mb-10
            "
          >
            About Me
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 md:space-y-8">
        <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-aileron max-w-[723px] leading-relaxed">
          Graphic Designer & Brand Maker with 5+ years of experience, blending
          creativity and strategy to craft compelling designs that align with
          brand goals and drive meaningful engagement.
        </p>

        <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-aileron max-w-[723px] leading-relaxed">
          Passionate about visual storytelling, I specialize in branding, logo
          design, illustrations, layouts, UI/UX design, and digital campaigns,
          creating intuitive and visually impactful user experiences.
        </p>

        <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-aileron max-w-[723px] leading-relaxed">
          I also design and develop modern, responsive websites, focusing on
          usability, performance, and conversion-driven design. Having worked
          across diverse industries, I tailor design, UI/UX, and marketing
          solutions to meet unique business needs with precision and impact.
        </p>

        {/* HR */}
        <hr className="w-40 sm:w-52 md:w-60 border-t-2 border-primary" />

        {/* SPACE AFTER HR */}
        <div className="h-10 sm:h-12 md:h-16" />
      </div>

      {/* BOTTOM DECOR */}
      <img
        src="/assets/Rectangle (1).svg"
        alt="connector"
        className="
          absolute
          -bottom-44 sm:-bottom-52 md:-bottom-60 lg:-bottom-64
          left-4 sm:left-8 md:left-12 lg:left-16
          w-[160px] sm:w-[190px] md:w-[220px] lg:w-[250px]
          z-30
          pointer-events-none
        "
      />

      <img
        src="/assets/smile.svg"
        alt="smile"
        className="
          absolute
          right-6 sm:right-20 md:right-40 lg:right-60
          -bottom-6 sm:-bottom-8 md:-bottom-10
          w-[60px] sm:w-[80px] md:w-[90px] lg:w-[100px]
          z-40
          pointer-events-none
        "
      />
    </section>
  );
};

export default About;
