import React from "react";

const ContentCard = ({ title, content, links }) => {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="button-row">
        <a href="https://shanemcfadden.github.io/interactive-pathfinder/">
          View project
        </a>
        <a href="https://github.com/shanemcfadden/interactive-pathfinder">
          View code on Github
        </a>
      </div>
    </div>
  );
};

export default ContentCard;
