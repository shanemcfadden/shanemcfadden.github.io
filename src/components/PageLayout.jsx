import React from "react";
import SocialLinks from "./SocialLinks";

const PageLayout = ({ banner = false, children }) => {
  return (
    <div>
      {banner && (
        <div className="banner">
          <div className="content-container">
            <div>Hi, my name is</div>
            <h1 className="align-center">Shane McFadden</h1>
            <div className="align-center">and I'm a</div>
            <h2 className="align-right">Software Developer</h2>
            <SocialLinks socialLinks={SOCIAL_LINKS} />
          </div>
        </div>
      )}
      <div className="content-container">
        {
          // <PageCardLayout pages={pages} />
        }
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
