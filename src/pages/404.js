import { useEffect } from "react";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";

const NotFoundPage = ({ data }) => {
  const { siteUrl } = data.site.siteMetadata;
  useEffect(() => {
    navigate(siteUrl);
  }, [siteUrl]);
  return null;
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
