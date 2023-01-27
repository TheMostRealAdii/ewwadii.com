import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../components/Head";
import Projects from "../components/Projects";

const Blog = () => {
  return (
    <>
      <Head>
        <title>ewwadii - Projects</title>
      </Head>
      <Header />
      <Projects />
    </>
  );
};

export default Blog;
