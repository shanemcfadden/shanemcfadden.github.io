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
            View project
          </a>
        )}
        {githubRepo && (
          <a className="button" href={githubRepo}>
            View code on Github
          </a>
        )}
        {postmanDocs && (
          <a className="button" href={postmanDocs}>
            View Documentation on Postman
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
