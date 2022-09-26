import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Site } from "../components/layouts/site";
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Site>
          <Component {...pageProps} />
        </Site>
      </SessionProvider>
    </SSRProvider>
  );
}
