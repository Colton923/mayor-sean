"use client";
import { useState, useEffect } from "react";

export type TParallaxBackground = ({
  imageUrl,
  cssOverrides,
}: {
  imageUrl: string;
  cssOverrides?: React.CSSProperties;
}) => JSX.Element;

const ParallaxBackground: TParallaxBackground = ({
  imageUrl,
  cssOverrides,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set initial height of the image (larger than viewport height)
    setImageHeight(window.innerHeight * 1.5); // 1.5x the viewport height

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-[-1] transition-all ease-out duration-300"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: "fixed",
        backgroundPosition: `center ${-scrollY * 0.3}px`,
        backgroundRepeat: "no-repeat",
        height: `${imageHeight}px`, // Set image height to be larger than the viewport
        ...cssOverrides,
      }}
    />
  );
};

export default ParallaxBackground;
