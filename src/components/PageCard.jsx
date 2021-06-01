import React from "react";

const PageCard = ({ position, children }) => {
  return (
    <div className={`page-card${position ? ` page-card--${position}` : ""}`}>
      <main>{children}</main>
    </div>
  );
};

export default PageCard;
