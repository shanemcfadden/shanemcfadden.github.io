import { useContext } from "react";
import { joinClassNames } from "../../util";
import { NavigationSidebarLink } from "./NavigationSidebarLink";
import { NavigationSidebarContext } from "./NavigationSidebarContext";
import { NavigationSidebarOverlay } from "./NavigationSidebarOverlay";
import { NAVIGATION_LINKS } from "./configuration";

export const NavigationSidebar = () => {
  const { isOpen } = useContext(NavigationSidebarContext);

  return (
    <div>
      <NavigationSidebarOverlay />
      <nav
        className={joinClassNames(
          "fixed left-0 top-0 bg-background-accent h-full px-4 transition-transform duration-300 w-64 overflow-y-scroll",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <ul>
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <NavigationSidebarLink key={href} href={href} label={label} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
