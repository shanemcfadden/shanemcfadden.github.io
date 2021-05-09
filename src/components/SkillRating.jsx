import React from "react";

const SkillRating = ({ skill, rating }) => {
  return (
    <div>
      {skill}
      {rating}

      <div className="rating">
        {Array.from({ length: 5 }).map(() => (
          <div className="rating__block" />
        ))}
      </div>
    </div>
  );
};

export default SkillRating;
