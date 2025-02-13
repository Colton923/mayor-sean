"use client";
import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const yOffset = window.scrollY * 0.1;
        backgroundRef.current.style.backgroundPosition = `center ${yOffset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed top-0 left-0 w-full z-[-1]"
      style={{
        backgroundImage:
          "linear-gradient(30deg, #972520 25%, #262C3C 25% 50%, #972520 50% 75%, #262C3C 75%)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        height: "150vh", // Ensures enough coverage
        opacity: 0.5,
        filter: "brightness(0.5)",
      }}
    />
  );
};

export default ParallaxBackground;
