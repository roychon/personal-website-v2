import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://github.com/roychon">github</a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <a href="https://www.linkedin.com/in/roychon/">linkedin</a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <a href="mailto:rchon@uwaterloo.ca">email</a>
      </div>
      <p className={styles.copy}>© Roy Chon, 2026</p>
    </footer>
  );
}
