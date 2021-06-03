import { Link } from "gatsby";
import React from "react";

const Navigation = () => {
  const isActiveWithHash = ({ location, href }) => {
    const removeHash = (str) => str.split("#")[0];
    return location.pathname === removeHash(href)
      ? { className: "nav__button nav__button--selected" }
      : { className: "nav__button" };
  };

  const links = [
    { to: "/#navigation", text: "Projects" },
    { to: "/about/#navigation", text: "About Me" },
    { to: "/resume/#navigation", text: "Resume" },
  ];
  return (
    <nav
      id="navigation"
      className="flex-columns flex--justify-content-space-between"
    >
      {links.map(({ to, text }) => (
        <Link to={to} key={to} getProps={isActiveWithHash}>
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
