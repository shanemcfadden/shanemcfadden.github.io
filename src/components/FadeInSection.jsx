import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  });
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "fade-insection--visible" : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
