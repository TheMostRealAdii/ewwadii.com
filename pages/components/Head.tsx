import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link href="/" legacyBehavior>
          <a className="logo">ewwadii.com</a>
        </Link>
        <div className="header-right">
          <Link href="info" legacyBehavior>
            <a href="#info">INFO</a>
          </Link>
          <Link href="projects" legacyBehavior>
            <a href="#projects">PROJECTS</a>
          </Link>
        </div>
      </header>
    </>
  );
}
