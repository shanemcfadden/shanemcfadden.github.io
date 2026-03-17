import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Pill } from "@components/Pill";
import { joinClassNames } from "@util";

export const TechnologyPill = ({
  onClick,
  technology,
}: {
  onClick?: () => void;
  technology: string;
}) => {
  return (
    <Pill
      className={joinClassNames(
        "bg-background-accent",
        onClick ? "hover:bg-background-accent-hover" : "",
        "text-text-contrasting",
      )}
      onClick={onClick}
    >
      {technology}
      {onClick && (
        <>
          &nbsp;
          <FontAwesomeIcon icon={faEllipsis} />
        </>
      )}
    </Pill>
  );
};
