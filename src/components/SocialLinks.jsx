import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ color }) => {
  return (
    <div className="social-links">
      <a href="https://github.com/shanemcfadden" className="social-link">
        <FontAwesomeIcon
          className={`social-link__icon${
            color ? ` social-link__icon-${color}` : ""
          }`}
          icon={faGithubSquare}
        />
      </a>
      <a href="https://linkedin.com" className="social-link">
        <FontAwesomeIcon
          className={`social-link__icon${
            color ? ` social-link__icon-${color}` : ""
          }`}
          icon={faLinkedin}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
