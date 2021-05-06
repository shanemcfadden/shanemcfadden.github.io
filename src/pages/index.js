import * as React from "react";
import "normalize.css";
import "../styles/index.scss";
import ContentCard from "../components/ContentCard";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

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
        <h2>Recent projects</h2>
        {projects.map(({ frontmatter, html }, i) => {
          const { githubRepo, postmanDocs, siteLink } = frontmatter;
          return (
            <ContentCard
              key={i}
              githubRepo={githubRepo}
              siteLink={siteLink}
              postmanDocs={postmanDocs}
            >
              {html}
            </ContentCard>
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
