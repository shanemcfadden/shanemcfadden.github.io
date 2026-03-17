import type { PropsWithChildren } from "react";
import NextJsLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

type LinkProps = PropsWithChildren<{
  download?: string;
  external?: boolean;
  href: string;
}>;

export const Link = ({
  children,
  download,
  external = false,
  href,
}: LinkProps) => (
  <span className="text-link-default hover:text-link-hover">
    {external || download ? (
      <Anchor download={download} href={href}>
        <span className="underline">{children}</span>&nbsp;
        {download ? (
          <FontAwesomeIcon icon={faDownload} />
        ) : (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        )}
      </Anchor>
    ) : (
      <NextJsLink className="underline" href={href}>
        {children}
      </NextJsLink>
    )}
  </span>
);

export const Anchor = ({
  "aria-label": ariaLabel,
  children,
  href,
  download,
}: PropsWithChildren<{
  "aria-label"?: string;
  download?: string;
  href: string;
}>) => (
  <a
    aria-label={ariaLabel}
    download={download}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
