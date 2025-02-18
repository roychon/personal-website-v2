import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <a href="https://www.linkedin.com/in/roychon/">resume</a>
      <a href="https://github.com/roychon">projects</a>
    </div>
  );
}
