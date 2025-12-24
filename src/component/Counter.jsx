import React, { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000, leadingZero = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 30); // update every 30ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [end, duration]);

  // Format number with leading zero if required
  const displayNumber = leadingZero && count < 10 ? `0${count}` : count;

  return <span>{displayNumber}</span>;
};

export default Counter;
