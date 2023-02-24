import Head from "next/head";
import Link from "next/link";
import Header from "../components/Head";
import Heading from "../components/Heading";
import InfoBased from "../components/InfoBased";
import Pronounce from "../components/Pronounce";

const About = () => {
  return (
    <>
      <Head>
        <title>ewwadii - Info</title>
      </Head>
      <Header />
      <Heading />
<!--       <Pronounce /> -->
      <InfoBased />
    </>
  );
};

export default About;
