import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.flex}>
        <a href="https://www.linkedin.com/in/roychon/">
          <i className="fa-brands fa-linkedin-in fa-lg"></i>
        </a>
        <a href="https://github.com/roychon">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="mailto:rchon@uwaterloo.ca">
          <i className="fa-regular fa-envelope fa-lg"></i>
        </a>
      </div>
      <p>© Roy Chon, 2025</p>
    </div>
  );
}
