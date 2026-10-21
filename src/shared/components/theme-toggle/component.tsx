"use client";

import styles from "./styles.module.css";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current = root.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button className={styles.toggle} type="button" onClick={toggle} aria-label="Toggle light and dark theme">
      ◐
    </button>
  );
}
