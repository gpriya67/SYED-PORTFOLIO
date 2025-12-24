import React, { useEffect, useState } from "react";

const ScrollPercentage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = Math.round((scrollTop / docHeight) * 100);
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circle math
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (scrollPercent / 100) * circumference;

  return (
   <div className="w-20 h-20 relative">
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 80 80"
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#1f2937"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#14f1c0"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-200"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
        {scrollPercent}%
      </span>
    </div>
  );
};

export default ScrollPercentage;
