import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content-container">
        <div>Hi, my name is</div>
        <h1 className="align-center">Shane McFadden</h1>
        <div className="align-center">and I'm a</div>
        <h2 className="align-right">Software Developer</h2>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Banner;
