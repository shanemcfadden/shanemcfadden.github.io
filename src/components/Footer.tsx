import { JSX } from "react";
import { Link } from "./Link";

const SOURCE_CODE_HREF =
  "https://github.com/shanemcfadden/shanemcfadden.github.io";

export const Footer = (): JSX.Element => {
  return (
    <footer className="max-w-4xl mx-auto px-4 mt-6">
      <hr className="border-border-default" />
      <div className="py-8 text-center text-sm text-primary/60">
        <Link external href={SOURCE_CODE_HREF}>
          shanemcfadden.dev source code
        </Link>
      </div>
    </footer>
  );
};
