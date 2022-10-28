import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Shah</title>
      </Head>
      <div className="lora heading">ADITYA</div>
      <div className="lora otheading">SHAH</div>
      <div className="subheading">Is A Front-End Web Developer Creating Thoughtful, Intuitive Designs.</div>
    </>
  );
}
