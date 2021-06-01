import React from "react";

const PageCard = ({ position, children }) => {
  return (
    <div className={`page-card${position ? ` page-card--${position}` : ""}`}>
      {children}
    </div>
  );
};

export default PageCard;
