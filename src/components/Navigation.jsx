import { Link } from "gatsby";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex-columns flex--justify-content-space-between">
      <Link
        to="/"
        className="nav__button"
        activeClassName="nav__button--selected"
      >
        Projects
      </Link>
      <Link
        to="/about"
        className="nav__button"
        activeClassName="nav__button--selected"
      >
        About Me
      </Link>
      <Link
        to="/resume"
        className="nav__button"
        activeClassName="nav__button--selected"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navigation;
