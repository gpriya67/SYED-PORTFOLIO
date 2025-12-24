import React from "react";
import Counter from "./Counter";

const CounterNumber = () => {
  const data = [
    { label: "Successful Projects", value: 500 },
    { label: "Happy Clients", value: 100 },
    { label: "Years of Experience", value: "05" },
  ];

  return (
    <>
    <section className="hidden md:block relative bg-black  overflow-hidden px-10 ">
      <div className="flex justify-center items-center">
        <div className="w-[1079px] h-[379px] ">
          <img
            src="/assets/circle-ven.svg"
            alt="Circle Background"
            className=" object-contain opacity-90 w-full"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="flex flex-wrap justify-center gap-44 w-full max-w-6xl">
          {data.map((item, i) => {
            const words = item.label.split(" ");
            const firstLine = words.slice(0, -1).join(" ");
            const lastWord = words[words.length - 1];

            return (
              <div
                key={i}
                className="relative group w-[250px] h-[170px] rounded-3xl overflow-hidden flex-shrink-0"
              >
                <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 border border-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" />

                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-80 pointer-events-none" />

                <div className="absolute inset-[1.5px] rounded-3xl border border-white/20 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-row md:flex-col items-center justify-center h-full text-center px-4">
                  <p className="text-white font-aileron font-bold opacity-90 text-[20px] md:text-[25px]">
                    {firstLine} <br /> {lastWord}
                  </p>
                  <p className="text-[#13b593] text-3xl md:text-7xl font-bold font-aileron mt-2">
                    <Counter end={item.value} leadingZero={item.value < 10} />+
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="bg-black px-4 py-10 flex flex-col items-center gap-6 sm:hidden">
      {data.map((item, i) => {
        const words = item.label.split(" ");
        const firstLine = words.slice(0, -1).join(" ");
        const lastWord = words[words.length - 1];

        return (
          <div
            key={i}
            className="relative w-full max-w-[300px] h-[170px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 border border-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-[1.5px] rounded-3xl border border-white/20 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <p className="text-white font-aileron font-bold opacity-90 text-[18px]">
                {firstLine} <br /> {lastWord}
              </p>
              <p className="text-[#13b593] text-5xl font-bold font-aileron mt-2">
                <Counter end={item.value} leadingZero={item.value < 10} />+
              </p>
            </div>
          </div>
        );
      })}
    </section>
    </>
  );
};

export default CounterNumber;
