import * as React from "react";
import "normalize.css";
import "../styles/index.scss";
import ContentCard from "../components/ContentCard";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import FadeInSection from "../components/FadeInSection";
import SkillRating from "../components/SkillRating";
import ABOUT_ME from "../content/AboutMe";
import TECHNICAL_SKILLS from "../content/TechnicalSkills";

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <main>
      <Helmet>
        <title>Shane McFadden - Full-Stack Developer</title>
      </Helmet>
      <div className="banner">
        <div className="content-container">
          <div>Hi, my name is</div>
          <h1 className="align-center">Shane McFadden</h1>
          <div className="align-center">and I'm a</div>
          <h2 className="align-right">Full-Stack Developer</h2>
          <div className="social-links">
            <a href="https://github.com/shanemcfadden">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="content-container">
        {ABOUT_ME}
        <FadeInSection>
          <div className="content-card flex-grow">
            <h2 className="align-center">Technical skills</h2>
            <div className="grid grid--auto-fit-12rem-columns">
              {TECHNICAL_SKILLS.map(({ skill, rating }, i) => (
                <SkillRating skill={skill} rating={rating} key={i} />
              ))}
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="content-card">
            <h2 className="align-center">Education</h2>
            <p>
              <h3 className="margin-zero align-left">Master of Music</h3>
              <div>
                <strong>Collaborative Piano</strong>
              </div>
              <div>University of Michigan</div>
              <div>2016-2018</div>
            </p>
            <p>
              <h3 className="margin-zero align-left">Bachelor of Music</h3>
              <div>
                <strong>Piano </strong>
              </div>
              <div>University of Kansas</div>
              <div>2012-2016</div>
            </p>
          </div>
        </FadeInSection>
        <h1>Recent projects</h1>
        {projects.map(({ frontmatter, html }, i) => {
          const { githubRepo, postmanDocs, siteLink } = frontmatter;
          return (
            <FadeInSection key={i}>
              <ContentCard
                githubRepo={githubRepo}
                siteLink={siteLink}
                postmanDocs={postmanDocs}
              >
                {html}
              </ContentCard>
            </FadeInSection>
          );
        })}
      </div>
    </main>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___orderIndex }) {
      nodes {
        frontmatter {
          githubRepo
          orderIndex
          postmanDocs
          siteLink
        }
        html
      }
    }
  }
`;

export default IndexPage;
