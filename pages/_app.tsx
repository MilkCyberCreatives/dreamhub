import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global defaults (each page can override if needed) */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Basic SEO defaults */}
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#000000" />

        {/* Favicons (you already have these in /public) */}
        <link rel="icon" href="/dreamhub-favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/dreamhub-favicon.svg" />

        {/* Improve performance when loading external resources later */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
