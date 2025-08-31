import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "../src/components/Header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { pageProps: { session?: any } }) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
