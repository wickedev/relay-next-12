import { Head, Html, Main, NextScript } from "next/document";

global = globalThis; //<- this should be enough

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
