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
        <h2>Portfolio projects:</h2>
        {projects.map(({ frontmatter, html }, i) => {
          const { title, githubRepo } = frontmatter;
          return (
            <ContentCard key={i} title={title} githubRepo={githubRepo}>
              {html}
            </ContentCard>
          );
        })}
        <ul>
          <li>
            <a href="https://github.com/shanemcfadden/interactive-pathfinder">
              Interactive Pathfinder
            </a>
          </li>
          <li>
            <a href="https://github.com/shanemcfadden/budget-api">Budget API</a>
          </li>
          <li>
            <a href="https://github.com/shanemcfadden/mcfaddenpiano.com">
              mcfaddenpiano.com
            </a>
          </li>
        </ul>
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
          title
        }
        html
      }
    }
  }
`;

export default IndexPage;
