import React from "react";
import PageCard from "./PageCard";

const PageCardDisplay = ({ selectedIndex, children }) => {
  console.log(React.Children.toArray(children));

  // TODO: Dynamically resize height depending on which card is selected
  const getPosition = (i) => {
    if (i === selectedIndex) return null;
    if (i < selectedIndex) return "left";
    if (i > selectedIndex) return "right";
  };
  return (
    <div className="page-card__display">
      {React.Children.toArray(children).map((card, i) => (
        <PageCard key={i} position={getPosition(i)}>
          {card}
        </PageCard>
      ))}
    </div>
  );
};

export default PageCardDisplay;
