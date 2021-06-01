import React from "react";
import PageCard from "./PageCard";

const PageCardDisplay = ({ selectedIndex, children }) => {
  const [height, setHeight] = React.useState(0);
  const getPosition = (i) => {
    if (i === selectedIndex) return null;
    if (i < selectedIndex) return "left";
    if (i > selectedIndex) return "right";
  };
  return (
    <div
      className="page-card__display"
      style={{
        height: `${height}px`,
      }}
    >
      {React.Children.toArray(children).map((card, i) => (
        <PageCard
          key={i}
          setPageCardDisplayHeight={setHeight}
          position={getPosition(i)}
        >
          {card}
        </PageCard>
      ))}
    </div>
  );
};

export default PageCardDisplay;
