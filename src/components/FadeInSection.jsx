import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    const ref = domRef.current;
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "fade-in-section--visible" : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
