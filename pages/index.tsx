import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import svg1 from "./assets/1.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IcyKaido - Home</title>
        <meta name="description" content="Personal Portfolio Of Aditya Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="svgs1">
        <div className="temp-margin blob"></div>
        <div className="heading no text-white">
          Front-End Web Developer Creating{" "}
          <span className="hi">Thoughtful</span>,{" "}
          <span className="hi">Intuitive</span> Designs.
        </div>
      </div>
    </div>
  );
};

export default Home;
