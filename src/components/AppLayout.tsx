import { JSX, PropsWithChildren } from "react";
import { NavigationSidebar } from "./NavigationSidebar";
import { NavigationSidebarHamburger } from "./NavigationSidebar/NavigationSidebarHamburger";
import { NavigationDesktop } from "./NavigationDesktop";
import { Footer } from "./Footer";

export const AppLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <NavigationSidebar />
      <div className="sm:hidden fixed bottom-4 right-4">
        <NavigationSidebarHamburger />
      </div>
      <div className="bg-background-page">
        <NavigationDesktop />
        <main className="max-w-4xl mx-auto px-4 mb-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};
