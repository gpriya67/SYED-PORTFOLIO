import React from "react";

const Skills = () => {
  const skills = [
    "Branding & Logo design",
    "Packaging design",
    "Printing design",
    "Website design",
    "Social Media Marketing",
    "Business Consultation",
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-[#020617] py-20  px-20 overflow-hidden"
    >
      {/* TOP GRADIENT GLOW */}
      <div className="absolute -top-full -right-72 -translate-x-1/2 w-full max-w-[1100px] pointer-events-none">
        <div className=" w-full">
          <img
            src="/assets/back.svg"
            alt="bg-circle"
            className="
      absolute
     top-1
     left-0
      -translate-x-1/2 -translate-y-1/2
     
      opacity-40
      z-0
      pointer-events-none w-full
    "
          />
        </div>
        <img
          src="/assets/skills-rantangale.svg"
          alt="gradient"
          className="w-full opacity-90" 
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        {/* SKILLS BUTTON */}
        <div className="flex justify-center ">
          <button className="animated-border font-aileron font-normal text-[26px] px-10 py-3 rounded-full text-white mb-10">
         Skills
        </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[10%]">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
        group
        relative
        h-[62px]
        rounded-full
        flex items-center justify-center

        /* GLASS BASE */
        bg-white/15
        backdrop-blur-2xl
        border border-white/25

        /* TEXT */
        text-white
        text-lg
        font-medium

        /* DEPTH */
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        overflow-hidden

        /* ANIMATION */
        transition-all duration-300 ease-out
        hover:scale-[1.05]
        hover:shadow-[0_15px_60px_rgba(255,255,255,0.25)]
      "
            >
              {/* TOP GLASS SHINE */}
              <span
                className="
          absolute inset-0
          rounded-full
          bg-gradient-to-b
          from-white/45
          via-white/15
          to-transparent
          opacity-70
          group-hover:opacity-90
          transition
          pointer-events-none
        "
              />

              {/* INNER BORDER */}
              <span
                className="
          absolute inset-[2px]
          rounded-full
          border border-white/20
          pointer-events-none
        "
              />

              {/* TEXT */}
              <span className="relative z-10 font-aileron font-bold">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
