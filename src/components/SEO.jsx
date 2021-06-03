import React from "react";
import Helmet from "react-helmet";
import PAGE_DESCRIPTION from "../content/PageDescription";

const SEO = () => {
  return (
    <Helmet>
      <html lang="en" />
      <title>Shane McFadden - Software Developer</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href="https://shanemcfadden.dev" />
      <meta property="og:title" content="Shane McFadden - Software Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shanemcfadden.dev/" />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta
        property="og:image"
        content="https://shanemcfadden.dev/og-image.jpg"
      />
      <meta
        property="twitter:image"
        content="https://shanemcfadden.dev/twitter-image.jpg"
      />
      <script type="application/ld+json">
        {`{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shane McFadden",
              "jobTitle": "Software Developer",
              "url": "https://shanemcfadden.dev"
            }`}
      </script>
    </Helmet>
  );
};

export default SEO;
