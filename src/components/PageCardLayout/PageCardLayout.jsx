import React from "react";
import PageCardDisplay from "./PageCardDisplay";
import PageCardNavigation from "./PageCardNavigation";

const PageCardLayout = ({ pages }) => {
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  const titles = pages.map(({ title }) => title);
  const contents = pages.map(({ content }) => content);
  return (
    <div>
      <PageCardNavigation
        selectedPageIndex={selectedPageIndex}
        setSelectedPageIndex={setSelectedPageIndex}
        titles={titles}
      />
      <PageCardDisplay selectedIndex={selectedPageIndex} contents={contents} />
    </div>
  );
};

export default PageCardLayout;
