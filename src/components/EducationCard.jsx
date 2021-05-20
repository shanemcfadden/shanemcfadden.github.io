import React from "react";

const EducationCard = ({
  school,
  degree,
  major,
  graduationMonth,
  graduationYear,
}) => {
  return (
    <div className="flex-grow">
      <h3 className="margin-bottom-zero align-left">{degree}</h3>
      <strong>{major}</strong>
      <br />
      {school}
      <br />
      {`${graduationMonth} ${graduationYear}`}
    </div>
  );
};

export default EducationCard;
