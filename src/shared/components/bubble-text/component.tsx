"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import type { BubbleTextProp } from "./type";

export default function BubbleText({ char }: BubbleTextProp) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onAnimationEnd={() => setIsHovered(false)}
      className={`${styles.titleFont} ${isHovered ? styles.squishText : ""}`}
    >
      {char !== " " ? char : "\u00A0"}
    </span>
  );
}
