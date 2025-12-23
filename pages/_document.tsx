import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/dreamhub-favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/dreamhub-favicon.svg" />

        {/* Helpful defaults */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />

        {/* Performance: preconnect for fonts (faster) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Fonts (Inter) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Optional: Google Search Console verification
            - When you have the meta tag from Google, paste it here.
            Example:
            <meta name="google-site-verification" content="YOUR_CODE_HERE" />
        */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
