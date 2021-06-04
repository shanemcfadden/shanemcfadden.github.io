import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  const { site } = useStaticQuery(query);
  const { author, description, title, siteUrl } = site.siteMetadata;
  const { pathname } = useLocation();
  const url = siteUrl + pathname;
  const ogImageUrl = siteUrl + "/og-image.jpg";
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content={author} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />
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
        author
        description
        title
        siteUrl
      }
    }
  }
`;
