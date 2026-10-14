import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Last updated: April 2026</span>
      <div className={styles.links}>
        <a href="https://github.com/roychon">github</a>
        <a href="https://www.linkedin.com/in/roychon/">linkedin</a>
        <a href="mailto:rchon@uwaterloo.ca">email</a>
      </div>
      <span>© Roy Chon, 2026</span>
    </footer>
  );
}
