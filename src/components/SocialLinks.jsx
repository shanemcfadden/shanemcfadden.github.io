import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SOCIAL_LINKS from "../content/SocialLinks";

const SocialLinks = ({ color }) => {
  return (
    <div className="social-links">
      {SOCIAL_LINKS.map(({ link, icon }) => (
        <a href={link} className="social-link">
          <FontAwesomeIcon
            className={`social-link__icon${
              color ? ` social-link__icon-${color}` : ""
            }`}
            icon={icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
