import type { PropsWithChildren } from "react";

export const UnorderedList = ({ children }: PropsWithChildren) => (
  <ul className="list-disc list-inside">{children}</ul>
);

export const ListItem = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <li className={className}>{children}</li>
);
