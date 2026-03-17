import { PROJECT_METADATA } from "@static/project-metadata";
import { toProjectHref } from "../../util";

export const NAVIGATION_LINKS: {
  label: string;
  href: string;
}[] = [
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  ...PROJECT_METADATA.map(({ name, slug }) => ({
    label: name,
    href: toProjectHref(slug),
  })),
  { label: "Resume", href: "/resume" },
  { label: "AI Policy", href: "/ai" },
  { label: "Contact", href: "/contact" },
];

export const TOP_LEVEL_NAVIGATION_LINKS = NAVIGATION_LINKS.filter(({ href }) =>
  href.match(/^\/[^\/]*$/),
);
