import React from "react";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.scss";
import SEO from "./SEO";
import Navigation from "./Navigation";
import Banner from "./Banner";
import SOCIAL_LINKS from "../content/SocialLinks";
import SocialLinks from "./SocialLinks";

const PageLayout = ({ banner = true, children }) => {
  return (
    <div>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO />
      {/* eslint-enable react/jsx-pascal-case */}
      {banner && <Banner />}
      <div className="content-container">
        <Navigation />
        <main>{children}</main>
        <footer>
          <SocialLinks color="mc" />
        </footer>
      </div>
    </div>
  );
};

export default PageLayout;
