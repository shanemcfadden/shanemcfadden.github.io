import * as React from "react";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.scss";
import { graphql } from "gatsby";
import ProjectCards from "../components/ProjectCards";
import TECHNICAL_SKILLS from "../content/TechnicalSkills";
import SOCIAL_LINKS from "../content/SocialLinks";
import SocialLinks from "../components/SocialLinks";
import PageCardLayout from "../components/PageCardLayout/PageCardLayout";
import { StaticImage } from "gatsby-plugin-image";
import GridOfListItemsCard from "../components/GridOfListItemsCard";
import PageLayout from "../components/PageLayout";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => {
  const markdownNodes = data.allMarkdownRemark.nodes;
  const aboutMeContent = markdownNodes.find(
    (node) => !!node.fileAbsolutePath.match(/.*\/about-me\.md$/)
  ).html;
  const projects = markdownNodes
    .filter((node) => !!node.fileAbsolutePath.match(/.*\/projects\/.*\.md$/))
    .sort((a, b) => a.frontmatter.orderIndex - b.frontmatter.orderIndex);
  const pages = [
    {
      title: "Projects",
      content: <ProjectCards projectNodes={projects} />,
    },
    {
      title: "About Me",
      content: (
        <>
          <GridOfListItemsCard
            title="Technical Skills"
            listItems={TECHNICAL_SKILLS}
          />
          <div dangerouslySetInnerHTML={{ __html: aboutMeContent }} />
        </>
      ),
    },
    {
      title: "Resume",
      content: (
        <div>
          <div className="button-row button-row--align-right">
            <a
              className="button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View PDF
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <StaticImage
              src="../images/resume.jpg"
              alt="Shane McFadden Resume"
              style={{
                boxShadow: "1px 1px 6px #999",
                display: "block",
              }}
            />
          </a>
        </div>
      ),
    },
  ];
  return <PageLayout banner={true} />;
};
// <>
//   {/* eslint-disable react/jsx-pascal-case */}
//   <SEO />
//   {/* eslint-enable react/jsx-pascal-case */}
//   <div className="banner">
//     <div className="content-container">
//       <div>Hi, my name is</div>
//       <h1 className="align-center">Shane McFadden</h1>
//       <div className="align-center">and I'm a</div>
//       <h2 className="align-right">Software Developer</h2>
//       <SocialLinks socialLinks={SOCIAL_LINKS} />
//     </div>
//   </div>
//   <div className="content-container">
//     <PageCardLayout pages={pages} />
//   </div>
// </>

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
