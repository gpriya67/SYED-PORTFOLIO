import React, { useEffect, useState } from "react";

const CursorPointer = ({ trailDelay = 0.05 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;

    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * trailDelay,
        y: prev.y + (position.y - prev.y) * trailDelay,
      }));
      animationFrame = requestAnimationFrame(follow);
    };

    follow();
    return () => cancelAnimationFrame(animationFrame);
  }, [position, trailDelay]);

  return (
    <>
      <div
        className="fixed bg-primary h-2 w-2 rounded-full pointer-events-none z-[9999]"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        className="fixed border-2 border-primary h-10 w-10 rounded-full pointer-events-none z-[9998]"
        style={{
          top: trail.y,
          left: trail.x,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};

export default CursorPointer;
