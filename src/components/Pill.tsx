import { PropsWithChildren } from "react";
import { joinClassNames } from "../util";

export const Pill = ({
  children,
  className,
  onClick,
}: PropsWithChildren<{ className?: string; onClick?: () => void }>) => (
  <div
    className={joinClassNames(
      "p-4 rounded-full w-max",
      className ?? "bg-background-subtle",
      onClick ? "cursor-pointer" : "",
    )}
    onClick={onClick}
  >
    {children}
  </div>
);
