import React from "react";

const PageCard = ({ position, children }) => {
  return (
    <main className={`page-card${position ? ` page-card--${position}` : ""}`}>
      {children}
    </main>
  );
};

export default PageCard;
