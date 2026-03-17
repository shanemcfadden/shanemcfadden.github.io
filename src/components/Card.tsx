import { Margin } from "./Margin";
import type { PropsWithChildren } from "react";

export const Card = ({ children, id }: PropsWithChildren<{ id?: string }>) => (
  <div
    className="inline-block w-full rounded-md bg-background-surface text-text-primary border border-border-default"
    id={id}
  >
    <div className="m-8">
      <Margin>{children}</Margin>
    </div>
  </div>
);
