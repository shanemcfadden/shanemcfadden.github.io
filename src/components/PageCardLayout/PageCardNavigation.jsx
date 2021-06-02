import React from "react";

const PageCardNavigation = ({ selectedPageIndex, setSelectedPageIndex }) => {
  const PAGES = ["Projects", "About Me"];
  return (
    <nav className="flex-columns flex--justify-content-space-between">
      {PAGES.map((page, i) => (
        <h1
          onClick={(e) => {
            e.preventDefault();
            if (selectedPageIndex != i) setSelectedPageIndex(i);
          }}
          className={i === selectedPageIndex ? "nav__button--selected" : ""}
          key={i}
        >
          {page}
        </h1>
      ))}
    </nav>
  );
};

export default PageCardNavigation;
