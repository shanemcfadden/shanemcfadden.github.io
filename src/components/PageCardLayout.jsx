import React from "react";
import ProjectCard from "../components/ProjectCard";
import FadeInSection from "../components/FadeInSection";
import TECHNICAL_SKILLS from "../content/TechnicalSkills";
import PageCardDisplay from "../components/PageCardDisplay";
import PageCardNavigation from "./PageCardNavigation";

const PageCardLayout = ({ aboutMeContent, projects }) => {
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  return (
    <div>
      <PageCardNavigation
        selectedPageIndex={selectedPageIndex}
        setSelectedPageIndex={setSelectedPageIndex}
      />
      <PageCardDisplay selectedIndex={selectedPageIndex}>
        <>
          {projects.map(({ frontmatter, html }, i) => {
            const { githubRepo, postmanDocs, siteLink } = frontmatter;
            return (
              <ProjectCard
                githubRepo={githubRepo}
                siteLink={siteLink}
                postmanDocs={postmanDocs}
                content={html}
                key={i}
              />
            );
          })}
        </>
        <>
          <div dangerouslySetInnerHTML={{ __html: aboutMeContent }} />
          <FadeInSection>
            <div className="content-card flex-grow">
              <h2 className="align-center">Technical Skills</h2>
              <div className="grid grid--auto-fit-8rem-columns">
                {TECHNICAL_SKILLS.map((skill, i) => (
                  <div key={i}>{skill}</div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </>
      </PageCardDisplay>
    </div>
  );
};

export default PageCardLayout;