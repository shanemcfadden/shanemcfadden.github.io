import React from "react";

const SkillRating = ({ skill, rating }) => {
  return (
    <div>
      {skill}
      <div className="rating">
        {Array.from({ length: 5 }).map((el, i) => (
          <div
            className={`rating__block${
              i < rating ? " rating__block--filled" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillRating;
