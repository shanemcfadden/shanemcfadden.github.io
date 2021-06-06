import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isVisible && entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    const ref = domRef.current;
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, [isVisible]);
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
