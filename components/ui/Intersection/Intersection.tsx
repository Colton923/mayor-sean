"use client";

import { useEffect, useRef, useState } from "react";

type TIntersectionProps = {
  [key: string]: any;
};

const Intersection = (WrappedComponent: React.FC<any>) => {
  return (props: TIntersectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={elementRef}
        className={`transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Intersection;
