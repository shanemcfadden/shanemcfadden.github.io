import { useCallback, useContext, type FormEventHandler } from "react";
import { NavigationSidebarContext } from "./NavigationSidebarContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavigationSidebarHamburger = () => {
  const { setIsOpen } = useContext(NavigationSidebarContext);

  const onClick: FormEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      setIsOpen((previous) => !previous);
    },
    [setIsOpen],
  );

  return (
    <button
      aria-label="Open navigation menu"
      className="bg-background-accent text-text-contrasting aspect-square w-12 rounded-full cursor-pointer p-2 shadow-xl/50"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faBars} aria-hidden="true" />
      <span className="sr-only">Open navigation menu</span>
    </button>
  );
};
