import React from "react";

const PageCardNavigation = ({
  selectedPageIndex,
  setSelectedPageIndex,
  titles,
}) => {
  return (
    <nav className="flex-columns flex--justify-content-space-between">
      {titles.map((title, i) => (
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
          {title}
        </button>
      ))}
    </nav>
  );
};

export default PageCardNavigation;
