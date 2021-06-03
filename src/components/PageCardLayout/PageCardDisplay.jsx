import React from "react";
import PageCard from "./PageCard";
import SocialLinks from "../SocialLinks";
import SOCIAL_LINKS from "../../content/SocialLinks";

const PageCardDisplay = ({ selectedIndex, contents }) => {
  const getPosition = (i) => {
    if (i === selectedIndex) return null;
    if (i < selectedIndex) return "left";
    if (i > selectedIndex) return "right";
  };
  return (
    <div className="page-card__display">
      {contents.map((content, i) => (
        <PageCard key={i} position={getPosition(i)}>
          {content}
          <footer>
            <SocialLinks socialLinks={SOCIAL_LINKS} color="mc" />
          </footer>
        </PageCard>
      ))}
    </div>
  );
};

export default PageCardDisplay;
