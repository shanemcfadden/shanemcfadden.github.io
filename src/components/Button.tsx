import type { FormEventHandler, PropsWithChildren } from "react";
import { joinClassNames } from "../util";

export type ButtonProps = PropsWithChildren<{
  disabled?: boolean;
  onSubmit: FormEventHandler<HTMLButtonElement>;
}>;

export const Button = ({ children, disabled, onSubmit }: ButtonProps) => (
  <button
    className={joinClassNames(
      "bg-background-accent border border-border-accent",
      "cursor-pointer",
      "disabled:bg-border-default disabled:border-border-default disabled:cursor-not-allowed disabled:hover:bg-border-default",
      "hover:bg-background-accent-hover hover:border-background-accent-hover",
      "py-2 px-4 rounded",
      "text-text-contrasting",
    )}
    disabled={disabled}
    onClick={onSubmit}
    type="button"
  >
    {children}
  </button>
);
