/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "next/head";
import s from "../styles/Info.module.css";

export default function Info() {
  return (
    <>
      <div className={s.infotxt}>
        <span className={s.infoone}>
          I’m Aditya an IN based front-end web developer with 2 years of
          experience. I specialise in UX/UI design for web-based applications
          with a focus on simplicity & usability. I’m passionate about design
          and technology and how the two can converge to create experiences for
          good.
        </span>
        <div className={s.infotwo}>
          You can follow along with my work, personal projects and occasional
          insights into my life on{" "}
          <a
            href="https://twitter.com/ewwadii"
            target="_blank"
            rel="noreferrer"
          >
            <span className={s.txtdec}>Twitter</span>
          </a>{" "}
          and{" "}
          <a
            href="https://instagram.com/ewww_adi"
            target="_blank"
            rel="noreferrer"
          >
            <span className={s.txtdec}>Instagram</span>
          </a>
          .
        </div>
      </div>
    </>
  );
}
