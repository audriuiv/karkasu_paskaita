import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = { children: ReactNode };
export function Site({ children }: Props) {
  return (
    <Container fluid="md">
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Audriaus aplikacija</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Panevėžio kolegija, 2022" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
