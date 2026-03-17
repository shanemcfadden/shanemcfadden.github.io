import { PropsWithChildren } from "react";

export const FlexWrap = ({ children }: PropsWithChildren) => (
  <div className="flex flex-wrap gap-2">{children}</div>
);
