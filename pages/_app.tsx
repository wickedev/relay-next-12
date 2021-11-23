import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { createEnvironment } from "~/lib/RelayEnvironment";
import { ErrorBoundary } from "~/components/ErrorBoundary";
import "../styles/globals.css";
import { Suspense } from "react";

global = globalThis; //<- this should be enough

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={createEnvironment({})}>
      <ErrorBoundary>
        <Suspense fallback="loading...">
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}
export default MyApp;
