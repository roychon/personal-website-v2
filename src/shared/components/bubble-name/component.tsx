"use client";

import { useState } from "react";
import styles from "./styles.module.css";

function Letter({ char }: { char: string }) {
  const [squished, setSquished] = useState(false);

  return (
    <span
      onMouseEnter={() => setSquished(true)}
      onAnimationEnd={() => setSquished(false)}
      className={`${styles.letter} ${squished ? styles.squish : ""}`}
    >
      {char === " " ? " " : char}
    </span>
  );
}

/** Renders text letter by letter; each letter squishes when hovered. Pair with an aria-label on the parent. */
export default function BubbleName({ text }: { text: string }) {
  return (
    <span className={styles.name} aria-hidden>
      {[...text].map((char, i) => (
        <Letter key={i} char={char} />
      ))}
    </span>
  );
}
