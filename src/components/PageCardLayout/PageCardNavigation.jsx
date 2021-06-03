import React from "react";

const PageCardNavigation = ({ selectedPageIndex, setSelectedPageIndex }) => {
  const PAGES = ["Projects", "About Me", "Resume"];
  return (
    <nav className="flex-columns flex--justify-content-space-between">
      {PAGES.map((page, i) => (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (selectedPageIndex !== i) setSelectedPageIndex(i);
          }}
          className={`center-in-mobile${
            i === selectedPageIndex ? " nav__button--selected" : ""
          }`}
          key={i}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default PageCardNavigation;
