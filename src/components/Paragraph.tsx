import { JSX, PropsWithChildren } from "react";
import { Margin } from "./Margin";

export const Paragraph = ({ children }: PropsWithChildren): JSX.Element => (
  <Margin weight="small">
    <p>{children}</p>
  </Margin>
);
