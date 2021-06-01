import React from "react";
import PageCard from "./PageCard";
import SocialLinks from "./SocialLinks";
import SOCIAL_LINKS from "../content/SocialLinks";
import FadeInSection from "./FadeInSection";

const PageCardDisplay = ({ selectedIndex, children }) => {
  const [height, setHeight] = React.useState(0);
  const getPosition = (i) => {
    if (i === selectedIndex) return null;
    if (i < selectedIndex) return "left";
    if (i > selectedIndex) return "right";
  };
  return (
    <div
      className="page-card__display"
      style={{
        height: `${height}px`,
      }}
    >
      {React.Children.toArray(children).map((card, i) => (
        <PageCard
          setPageCardDisplayHeight={setHeight}
          key={i}
          position={getPosition(i)}
        >
          {card}
          <FadeInSection>
            <footer>
              <SocialLinks socialLinks={SOCIAL_LINKS} color="mc" />
            </footer>
          </FadeInSection>
        </PageCard>
      ))}
    </div>
  );
};

export default PageCardDisplay;
