import { Link } from "gatsby";
import React from "react";

const Navigation = () => {
  const links = [
    { to: "/", text: "Projects" },
    { to: "/about", text: "About Me" },
    { to: "/resume", text: "Resume" },
  ];
  return (
    <nav className="flex-columns flex--justify-content-space-between">
      {links.map(({ to, text }) => (
        <Link
          to={to}
          className="nav__button"
          activeClassName="nav__button--selected"
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
