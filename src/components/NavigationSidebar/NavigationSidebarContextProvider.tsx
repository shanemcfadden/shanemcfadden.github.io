import { useRouter } from "next/router";
import { useMemo, useState, type PropsWithChildren } from "react";
import { NavigationSidebarContext } from "./NavigationSidebarContext";

export const NavigationSidebarContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [previousPathName, setPreviousPathname] = useState(router.pathname);
  const [previousQuery, setPreviousQuery] = useState(router.query);

  if (router.pathname !== previousPathName) {
    setPreviousPathname(router.pathname);
    setIsOpen(false);
  }
  if (JSON.stringify(router.query) !== JSON.stringify(previousQuery)) {
    setPreviousQuery(router.query);
    setIsOpen(false);
  }

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return (
    <NavigationSidebarContext value={value}>
      {children}
    </NavigationSidebarContext>
  );
};
