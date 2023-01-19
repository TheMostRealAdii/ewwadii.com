import Head from "next/head";
import Link from "next/link";
import Header from "../components/Head";
import Heading from "../components/Heading";
import Info from "../components/Info";

const About = () => {
  return (
    <>
      <Head>
        <title>ewwadii - Info</title>
      </Head>
      <Header />
      <Heading />
      <Info />
    </>
  );
};

export default About;
