import * as React from "react";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.scss";
import ProjectCard from "../components/ProjectCard";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import FadeInSection from "../components/FadeInSection";
import SkillRating from "../components/SkillRating";
import EDUCATION_DATA from "../content/EducationData";
import SOCIAL_LINKS from "../content/SocialLinks";
import TECHNICAL_SKILLS from "../content/TechnicalSkills";
import SocialLinks from "../components/SocialLinks";
import EducationCard from "../components/EducationCard";
import PAGE_DESCRIPTION from "../content/PageDescription";

const IndexPage = ({ data }) => {
  const markdownNodes = data.allMarkdownRemark.nodes;
  const aboutMeContent = markdownNodes.find(
    (node) => !!node.fileAbsolutePath.match(/.*\/about-me\.md$/)
  ).html;
  const projects = markdownNodes
    .filter((node) => !!node.fileAbsolutePath.match(/.*\/projects\/.*\.md$/))
    .sort((a, b) => a.frontmatter.orderIndex - b.frontmatter.orderIndex);
  return (
    <>
      <main>
        <Helmet>
          <html lang="en" />
          <title>Shane McFadden - Software Developer</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <link rel="canonical" href="https://shanemcfadden.github.io" />
          <meta
            property="og:title"
            content="Shane McFadden - Software Developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shanemcfadden.github.io/" />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta
            property="og:image"
            content="https://shanemcfadden.github.io/og-image.jpg"
          />
          <meta
            property="twitter:image"
            content="https://shanemcfadden.github.io/twitter-image.jpg"
          />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shane McFadden",
              "jobTitle": "Software Developer",
              "url": "https://shanemcfadden.github.io"
            }`}
          </script>
        </Helmet>
        <div className="banner">
          <div className="content-container">
            <div>Hi, my name is</div>
            <h1 className="align-center">Shane McFadden</h1>
            <div className="align-center">and I'm a</div>
            <h2 className="align-right">Software Developer</h2>
            <SocialLinks socialLinks={SOCIAL_LINKS} />
          </div>
        </div>
        <div className="content-container">
          <div dangerouslySetInnerHTML={{ __html: aboutMeContent }} />
          <FadeInSection>
            <div className="content-card flex-grow">
              <h2 className="align-center">Technical Skills</h2>
              <div className="grid grid--auto-fit-12rem-columns">
                {TECHNICAL_SKILLS.map(({ skill, rating }, i) => (
                  <SkillRating skill={skill} rating={rating} key={i} />
                ))}
              </div>
            </div>
          </FadeInSection>
          <h1>Projects</h1>
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
        </div>
      </main>
      <footer>
        <SocialLinks socialLinks={SOCIAL_LINKS} color="mc" />
      </footer>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          githubRepo
          orderIndex
          postmanDocs
          siteLink
        }
        fileAbsolutePath
        html
      }
    }
  }
`;

export default IndexPage;
