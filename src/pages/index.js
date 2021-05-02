import * as React from "react";
import "normalize.css";
import "../styles/index.scss";
import ContentCard from "../components/ContentCard";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  const images = data.allImageSharp.nodes;

  const getImageDataFromSlug = (slug) => {
    if (!slug) return undefined;

    const escapeRegex = (string) =>
      string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const slugPattern = new RegExp(`${escapeRegex(slug)}$`);
    const imageNode = images.find((data) => {
      return data.gatsbyImageData.images.fallback.src.match(slugPattern);
    });
    return imageNode.gatsbyImageData;
  };

  console.log(getImageDataFromSlug("mcfaddenpianoScreenshot.jpg"));
  return (
    <main>
      <div className="banner">
        <div className="content-container">
          <div>Hi, my name is</div>
          <h1 className="align-center">Shane McFadden</h1>
          <div className="align-center">and I'm a</div>
          <h2 className="align-right">Full stack developer</h2>
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
          console.log("frontmatter", frontmatter);
          const {
            title,
            githubRepo,
            postmanDocs,
            siteLink,
            screenshotSlug,
          } = frontmatter;
          const screenshotData = getImageDataFromSlug(screenshotSlug);
          return (
            <ContentCard
              key={i}
              title={title}
              githubRepo={githubRepo}
              siteLink={siteLink}
              postmanDocs={postmanDocs}
              screenshotData={screenshotData}
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
          screenshotSlug
          siteLink
          title
        }
        html
      }
    }
    allImageSharp {
      nodes {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default IndexPage;
