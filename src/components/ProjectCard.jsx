import React from "react";
import FadeInSection from "./FadeInSection";

const ProjectCard = ({
  githubRepo,
  postmanDocs,
  siteLink,
  content,
  fadeIn = true,
}) => {
  const contentCard = (
    <div className="content-card">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="button-row">
        {siteLink && (
          <a className="button" href={siteLink}>
            Project Site
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

  {
    // Doesn't work when deployed. Will fix outside of business hours
    // if (fadeIn) return <FadeInSection>{contentCard}</FadeInSection>;
  }
  return <div>{contentCard}</div>;
};

export default ProjectCard;
