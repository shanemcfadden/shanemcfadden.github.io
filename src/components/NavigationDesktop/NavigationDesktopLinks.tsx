import { TOP_LEVEL_NAVIGATION_LINKS } from "../NavigationSidebar/configuration";
import { NavigationDesktopLink } from "./NavigationDesktopLink";

export const NavigationDesktopLinks = () => {
  return (
    <nav className="hidden sm:flex gap-2">
      {TOP_LEVEL_NAVIGATION_LINKS.map(({ label, href }) => (
        <NavigationDesktopLink key={href} href={href} label={label} />
      ))}
    </nav>
  );
};
