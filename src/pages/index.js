import * as React from "react";
import { graphql } from "gatsby";
import ProjectCards from "../components/ProjectCards";
import PageLayout from "../components/PageLayout";

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <PageLayout>
      <ProjectCards projectNodes={projects} />
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/projects/*.md" } }
      sort: { fields: frontmatter___orderIndex }
    ) {
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
