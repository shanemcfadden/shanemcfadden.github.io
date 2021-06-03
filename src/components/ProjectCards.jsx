import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCards = ({ projectNodes }) => {
  return (
    <>
      {projectNodes.map(({ frontmatter, html }, i) => {
        const { githubRepo, postmanDocs, siteLink } = frontmatter;
        return (
          <ProjectCard
            githubRepo={githubRepo}
            siteLink={siteLink}
            postmanDocs={postmanDocs}
            content={html}
            key={i}
            fadeIn={i}
          />
        );
      })}
    </>
  );
};

export default ProjectCards;
