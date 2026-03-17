import { Html, Head, Main, NextScript } from "next/document";
import { SITE_NAME } from "@static/constants";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CS6MHX4ZDB"
        />
        <Script strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CS6MHX4ZDB');
          `}
        </Script>

        <meta name="theme-color" content="#f2f5f3" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-background-page">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
