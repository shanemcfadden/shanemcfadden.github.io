import { Link } from "gatsby";
import React from "react";
import links from "../content/json/navigation-links.json";

const Navigation = () => {
  const isActiveWithHash = ({ location, href }) => {
    const removeHash = (str) => str.split("#")[0];
    return location.pathname === removeHash(href)
      ? { className: "nav__button nav__button--selected" }
      : { className: "nav__button" };
  };

  return (
    <nav id="navigation">
      {links.map(({ to, text }) => (
        <Link to={to} key={to} getProps={isActiveWithHash}>
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
