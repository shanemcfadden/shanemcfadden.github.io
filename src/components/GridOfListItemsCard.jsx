import React from "react";

const GridOfListItemsCard = ({ title, listItems }) => {
  return (
    <div className="content-card flex-grow">
      <h2 className="align-center">{title}</h2>
      <div className="grid grid--auto-fit-8rem-columns">
        {listItems.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default GridOfListItemsCard;
