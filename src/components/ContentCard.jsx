import React from "react";

const ContentCard = ({ title, githubRepo, children }) => {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: children }} />
      <div className="button-row">
        <a href="https://shanemcfadden.github.io/interactive-pathfinder/">
          View project
        </a>
        {githubRepo && <a href={githubRepo}>View code on Github</a>}
      </div>
    </div>
  );
};

export default ContentCard;
