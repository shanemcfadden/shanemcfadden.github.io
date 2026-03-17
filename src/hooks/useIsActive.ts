import { useRouter } from "next/router";

export const useIsActive = (href: string) => {
  const router = useRouter();

  const reconstitutedPath = router.pathname
    .split("/")
    .map((segment) => {
      const dynamicSegment = segment.match(/^\[(.*)\]$/);

      const dynamicSegmentVariableName = dynamicSegment?.[1];
      if (!dynamicSegmentVariableName) {
        return segment;
      }

      return router.query[dynamicSegmentVariableName] ?? "";
    })
    .join("/");

  return href === reconstitutedPath;
};
