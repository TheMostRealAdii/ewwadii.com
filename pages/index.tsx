import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../styles/Home.module.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Subhead from "./components/Subhead";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Shah</title>
      </Head>
      <Header />
      <Heading />
      <Subhead />
      <Projects />
    </>
  );
}
