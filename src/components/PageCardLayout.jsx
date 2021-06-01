import React from "react";
import PageCardDisplay from "../components/PageCardDisplay";
import PageCardNavigation from "./PageCardNavigation";

const PageCardLayout = ({ children }) => {
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  return (
    <div>
      <PageCardNavigation
        selectedPageIndex={selectedPageIndex}
        setSelectedPageIndex={setSelectedPageIndex}
      />
      <PageCardDisplay selectedIndex={selectedPageIndex}>
        {children}
      </PageCardDisplay>
    </div>
  );
};

export default PageCardLayout;
