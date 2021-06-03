import React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";

const resume = () => {
  return (
    <PageLayout>
      <div>
        <div className="button-row button-row--align-right">
          <a
            className="button"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View PDF
          </a>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/resume.jpg"
            alt="Shane McFadden Resume"
            style={{
              boxShadow: "1px 1px 6px #999",
              display: "block",
            }}
          />
        </a>
      </div>
    </PageLayout>
  );
};

export default resume;
