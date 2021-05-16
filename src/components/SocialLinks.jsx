import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = ({ color, socialLinks }) => {
  return (
    <div className="social-links">
      {socialLinks.map(({ link, icon }) => (
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
