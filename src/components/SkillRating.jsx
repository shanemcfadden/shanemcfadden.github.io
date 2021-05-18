import React from "react";

const SkillRating = ({ skill, rating }) => {
  return (
    <div className="rating">
      <div>{skill}</div>
      <div className="rating__blocks">
        {Array.from({ length: 5 }).map((el, i) => (
          <div
            className={`rating__block${
              i < rating ? " rating__block--filled" : ""
            }`}
            key={`block-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillRating;
