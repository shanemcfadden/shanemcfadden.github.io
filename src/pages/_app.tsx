import "./globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AppLayout } from "@components/AppLayout";
import { NavigationSidebarContextProvider } from "@components/NavigationSidebar/NavigationSidebarContextProvider";
import { ModalContextProvider } from "@components/Modal/ModalContextProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <NavigationSidebarContextProvider>
        <ModalContextProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ModalContextProvider>
      </NavigationSidebarContextProvider>
    </div>
  );
}
