import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "../styles/pronounce.module.css";
export default function Header() {
  return (
    <>
      <div>
        <div className={styles.bigpp}>
          My Pronounce Are - <span className={styles.bigp}>he/him</span>
        </div>
      </div>
    </>
  );
}
