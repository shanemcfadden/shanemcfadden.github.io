export const joinClassNames = (...classes: string[]) => classes.join(" ");

export const toProjectHref = (projectSlug: string) =>
  "/projects/" + projectSlug;
