import Link from "next/link";
import { joinClassNames } from "../../util";
import { useIsActive } from "../../hooks/useIsActive";

interface NavigationLinkProps {
  href: string;
  label: string;
}
export const NavigationSidebarLink = ({ href, label }: NavigationLinkProps) => {
  const isActive = useIsActive(href);

  const numberOfSegments = href.match(/\//g);
  const isNested = (numberOfSegments?.length ?? 0) > 1;

  return (
    <li
      className={joinClassNames(
        "my-2 rounded",
        "font-semibold",
        isNested ? "ml-4" : "",
      )}
    >
      {isActive ? (
        <span
          aria-current="page"
          className={joinClassNames(
            "block p-2 rounded",
            "text-text-accent bg-interactive-active",
          )}
        >
          {label}
        </span>
      ) : (
        <Link
          href={href}
          className={joinClassNames(
            "block p-2 rounded",
            "text-text-contrasting underline",
            "hover:bg-interactive-hover transition-colors",
          )}
        >
          {label}
        </Link>
      )}
    </li>
  );
};
