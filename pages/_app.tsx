import type { AppProps } from "next/app";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { ErrorBoundary } from "~/components/ErrorBoundary";
import { createEnvironment } from "~/lib/RelayEnvironment";
import "../styles/globals.css";

function AppComponent({ Component, pageProps }: AppProps) {
  const env = createEnvironment({});

  return (
    <RelayEnvironmentProvider environment={env}>
      <ErrorBoundary>
        <Suspense fallback="loading...">
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}
export default AppComponent;
