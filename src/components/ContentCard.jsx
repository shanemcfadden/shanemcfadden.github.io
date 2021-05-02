import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ContentCard = ({
  title,
  githubRepo,
  postmanDocs,
  siteLink,
  screenshotData,
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
          <a className="button" href={postmanDocs}>
            Project Documentation
          </a>
        )}
        {githubRepo && (
          <a className="button button--github" href={githubRepo}>
            View on GitHub
          </a>
        )}
      </div>
      {screenshotData && (
        <a href={siteLink || postmanDocs || githubRepo}>
          <GatsbyImage
            image={screenshotData}
            alt={title}
            style={{ margin: "1rem 0" }}
          />
        </a>
      )}
    </div>
  );
};

export default ContentCard;
