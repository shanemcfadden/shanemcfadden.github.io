import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ContentCard = ({ githubRepo, postmanDocs, siteLink, children }) => {
  return (
    <div className="content-card">
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
    </div>
  );
};

export default ContentCard;
