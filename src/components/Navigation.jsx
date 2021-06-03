import { Link } from "gatsby";
import React from "react";

const Navigation = () => {
  const isActiveWithHash = ({ location, href }) => {
    return location.pathname === href.split("#")[0]
      ? { className: "nav__button nav__button--selected" }
      : { className: "nav__button" };
  };

  const links = [
    { to: "/#navigation", text: "Projects" },
    { to: "/about", text: "About Me" },
    { to: "/resume", text: "Resume" },
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
