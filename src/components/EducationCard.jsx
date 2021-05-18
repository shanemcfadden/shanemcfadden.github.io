import React from "react";

const EducationCard = ({ school, degree, major, startYear, endYear }) => {
  return (
    <div className="flex-grow">
      <h3 className="margin-zero align-left">{degree}</h3>
      <strong>{major}</strong>
      <br />
      {school}
      <br />
      {startYear}-{endYear}
    </div>
  );
};

export default EducationCard;
