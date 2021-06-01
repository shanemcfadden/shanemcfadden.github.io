import * as React from "react";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.scss";
import ProjectCard from "../components/ProjectCard";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import FadeInSection from "../components/FadeInSection";
import SOCIAL_LINKS from "../content/SocialLinks";
import TECHNICAL_SKILLS from "../content/TechnicalSkills";
import SocialLinks from "../components/SocialLinks";
import PAGE_DESCRIPTION from "../content/PageDescription";
import PageCardDisplay from "../components/PageCardDisplay";

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
          <link rel="canonical" href="https://shanemcfadden.dev" />
          <meta
            property="og:title"
            content="Shane McFadden - Software Developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shanemcfadden.dev/" />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta
            property="og:image"
            content="https://shanemcfadden.dev/og-image.jpg"
          />
          <meta
            property="twitter:image"
            content="https://shanemcfadden.dev/twitter-image.jpg"
          />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shane McFadden",
              "jobTitle": "Software Developer",
              "url": "https://shanemcfadden.dev"
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
          <PageCardDisplay>
            <div>
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
            </div>
            <div>
              <FadeInSection>
                <h1>Projects</h1>
              </FadeInSection>
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
          </PageCardDisplay>
        </div>
      </main>
      {
        // <footer>
        //   <SocialLinks socialLinks={SOCIAL_LINKS} color="mc" />
        // </footer>
      }
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
