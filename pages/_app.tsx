import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // eslint-disable-next-line react/no-children-prop
    <>
      <Component {...pageProps} />
    </>
  );
}
