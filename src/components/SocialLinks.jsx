import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SOCIAL_LINKS from "../content/js/SocialLinks";

const SocialLinks = ({ color }) => {
  return (
    <div className="social-links">
      {SOCIAL_LINKS.map(({ link, icon, title }, i) => (
        <a href={link} key={`social-link-${i}`} className="social-link">
          <FontAwesomeIcon
            className={`social-link__icon${
              color ? ` social-link__icon-${color}` : ""
            }`}
            title={title}
            icon={icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
