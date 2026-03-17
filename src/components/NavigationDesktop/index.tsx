import { joinClassNames } from "../../util";
import { NavigationDesktopLogo } from "./NavigationDesktopLogo";
import { NavigationDesktopLinks } from "./NavigationDesktopLinks";
import { NavigationDesktopSocials } from "./NavigationDesktopSocials";

export const NavigationDesktop = () => {
  return (
    <header
      className={joinClassNames(
        "bg-background-accent py-8",
        "text-text-contrasting",
        "text-center lg:text-left",
        "shadow-lg",
      )}
    >
      <div
        className={joinClassNames(
          "max-w-4xl mx-auto px-4",
          "grid grid-cols-1 lg:grid-cols-[max-content_1fr_max-content]",
        )}
      >
        <NavigationDesktopLogo />

        <div
          className={joinClassNames(
            "sm:flex sm:justify-between",
            "mt-2 sm:mt-0",
            "lg:contents",
          )}
        >
          <div className="mt-auto">
            <NavigationDesktopLinks />
          </div>

          <div className="mt-auto">
            <NavigationDesktopSocials />
          </div>
        </div>
      </div>
    </header>
  );
};
