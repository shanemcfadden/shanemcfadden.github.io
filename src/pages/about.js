import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";
import GridOfListItemsCard from "../components/GridOfListItemsCard";
import technicalSkills from "../content/json/technical-skills.json";

const about = ({ data }) => {
  const markdownNodes = data.allMarkdownRemark.nodes;
  const aboutMeContent = markdownNodes.find(
    (node) => !!node.fileAbsolutePath.match(/.*\/about-me\.md$/)
  ).html;
  return (
    <PageLayout>
      <GridOfListItemsCard
        title="Technical Skills"
        listItems={technicalSkills}
      />
      <div dangerouslySetInnerHTML={{ __html: aboutMeContent }} />
    </PageLayout>
  );
};

export default about;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fileAbsolutePath
        html
      }
    }
  }
`;
