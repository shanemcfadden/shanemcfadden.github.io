import React from "react";

const PageCard = ({ position, setPageCardDisplayHeight, children }) => {
  const cardRef = React.useRef();
  React.useEffect(() => {
    if (!position) {
      setPageCardDisplayHeight(cardRef.current.offsetHeight);
    }
  });
  return (
    <div
      ref={cardRef}
      className={`page-card${position ? ` page-card--${position}` : ""}`}
    >
      <main>{children}</main>
    </div>
  );
};

export default PageCard;
