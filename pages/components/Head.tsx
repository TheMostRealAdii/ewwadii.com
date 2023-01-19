import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link href="/" legacyBehavior>
          <a className="logo">ewwadii.com</a>
        </Link>
        <div className="header-right">
          <Link href="info" legacyBehavior>
            <a href="#home">INFO</a>
          </Link>
          <Link href="blog" legacyBehavior>
            <a href="#contact">BLOGS</a>
          </Link>
        </div>
      </div>
    </>
  );
}
