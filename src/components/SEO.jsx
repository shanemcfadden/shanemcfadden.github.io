import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  const { site } = useStaticQuery(query);
  const {
    description,
    ogImage,
    title,
    twitterImage,
    siteUrl,
  } = site.siteMetadata;
  const { pathname } = useLocation();
  const url = siteUrl + pathname;
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={twitterImage} />
      <script type="application/ld+json">
        {`{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shane McFadden",
              "jobTitle": "Software Developer",
              "url": "${siteUrl}"
            }`}
      </script>
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        ogImage
        title
        twitterImage
        siteUrl
      }
    }
  }
`;
