import * as React from "react";
import "normalize.css";
import "../styles/index.scss";
import ContentCard from "../components/ContentCard";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  console.log(projects);
  return (
    <main>
      <div className="banner">
        <div className="content-container">
          <div>Hi, my name is</div>
          <h1 className="align-center">Shane McFadden</h1>
          <div className="align-center">and I'm a</div>
          <h2 className="align-right">Full stack developer</h2>
        </div>
      </div>
      <div className="content-container">
        <h2>Recent projects</h2>
        {projects.map(({ frontmatter, html }, i) => {
          const { title, githubRepo, postmanDocs, siteLink } = frontmatter;
          return (
            <ContentCard
              key={i}
              title={title}
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          githubRepo
          postmanDocs
          siteLink
          title
        }
        html
      }
    }
  }
`;

export default IndexPage;
