import React from "react";

const ContentCard = ({
  title,
  githubRepo,
  postmanDocs,
  siteLink,
  children,
}) => {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: children }} />
      <div className="button-row">
        {siteLink && (
          <a className="button" href={siteLink}>
            Project site
          </a>
        )}
        {postmanDocs && (
          <a className="button button--postman" href={postmanDocs}>
            Project Documentation
          </a>
        )}
        {githubRepo && (
          <a className="button button--github" href={githubRepo}>
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
