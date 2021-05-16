import React from "react";

const EducationCard = ({ school, degree, major, startYear, endYear }) => {
  return (
    <p>
      <h3 className="margin-zero align-left">{degree}</h3>
      <div>
        <strong>{major}</strong>
      </div>
      <div>{school}</div>
      <div>
        {startYear}-{endYear}
      </div>
    </p>
  );
};

export default EducationCard;
