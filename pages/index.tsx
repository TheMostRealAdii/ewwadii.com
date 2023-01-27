import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../styles/Home.module.css";
import Header from "./components/Head";
import Heading from "./components/Heading";
import Subhead from "./components/Subhead";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import HeadSEO from "./Head";

export default function Home() {
  return (
    <>
      <HeadSEO />
      <Head>
        <title>Aditya Shah</title>
      </Head>
      <Header />
      <Heading />
      <Subhead />
      <Socials />
    </>
  );
}
