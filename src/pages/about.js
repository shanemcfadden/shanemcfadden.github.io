import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";
import GridOfListItemsCard from "../components/GridOfListItemsCard";
import technicalSkills from "../content/json/technical-skills.json";

const about = ({ data }) => {
  const aboutMeContent = data.markdownRemark.html;
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
    markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
      html
    }
  }
`;
