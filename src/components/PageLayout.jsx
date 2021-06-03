import React from "react";
import SocialLinks from "./SocialLinks";
import SEO from "./SEO";
import Navigation from "./Navigation";
import SOCIAL_LINKS from "../content/SocialLinks";

const PageLayout = ({ banner = false, children }) => {
  return (
    <div>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO />
      {/* eslint-enable react/jsx-pascal-case */}
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
        <Navigation />
        <main>{children}</main>
        <footer>
          <SocialLinks socialLinks={SOCIAL_LINKS} color="mc" />
        </footer>
      </div>
    </div>
  );
};

export default PageLayout;
