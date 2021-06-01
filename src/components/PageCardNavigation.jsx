import React from "react";

const PageCardNavigation = ({ setSelectedPageIndex }) => {
  const PAGES = ["Projects", "About Me"];
  return (
    <div>
      {PAGES.map((page, i) => (
        <div
          onClick={(e) => {
            e.preventDefault();
            setSelectedPageIndex(i);
          }}
          key={i}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default PageCardNavigation;
