import Link from "next/link";
import { useIsActive } from "../../hooks/useIsActive";
import { joinClassNames } from "../../util";

interface NavigationDesktopLinkProps {
  href: string;
  label: string;
}

export const NavigationDesktopLink = ({
  href,
  label,
}: NavigationDesktopLinkProps) => {
  const isActive = useIsActive(href);

  return (
    <Link
      className={joinClassNames(
        "font-semibold",
        "px-4 hover:underline",
        "text-lg",
        isActive ? "underline" : "",
      )}
      href={href}
    >
      <div>{label}</div>
    </Link>
  );
};
