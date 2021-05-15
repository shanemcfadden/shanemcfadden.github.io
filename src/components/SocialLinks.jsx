import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ color }) => {
  const SOCIAL_LINKS = [
    {
      link: "https://github.com/shanemcfadden",
      icon: faGithubSquare,
    },
    {
      link: "https://linkedin.com",
      icon: faLinkedin,
    },
  ];
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
