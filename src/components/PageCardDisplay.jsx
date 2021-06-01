import React from "react";
import PageCard from "./PageCard";

const PageCardDisplay = ({ children }) => {
  console.log(React.Children.toArray(children));

  return (
    <div className="page-card__display">
      {React.Children.toArray(children).map((card) => (
        <PageCard>{card}</PageCard>
      ))}
    </div>
  );
};

export default PageCardDisplay;
