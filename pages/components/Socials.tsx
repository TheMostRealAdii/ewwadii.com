import Link from "next/link";
import s from "../styles/Socials.module.css";

const Socials = () => {
  return (
    <>
      <div className={s.conatcthead}>Socials</div>
      <div className={s.socialico}>
        <a
          href="https://instagram.com/ewww_adi"
          target="_blank"
          rel="noreferrer"
        >
          <span className={s.socialset}>
            <i className="bi bi-instagram"></i>
          </span>
        </a>
        <a href="https://twitter.com/ewwadii" target="_blank" rel="noreferrer">
          <span className={s.socialset}>
            <i className="bi bi-twitter"></i>
          </span>
        </a>
        <a
          href="https://github.com/TheRealAdityaS"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span className={s.socialset}>
            <i className="bi bi-github"></i>
          </span>
        </a>
        <a
          href="https://www.behance.net/TheRealAditya"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span className={s.socialset}>
            <i className="bi bi-behance"></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default Socials;
