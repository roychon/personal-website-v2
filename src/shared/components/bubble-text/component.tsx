"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { BubbleTextProp } from "./type";

export default function BubbleText({ char, key }: BubbleTextProp) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleAnimationEnd = () => {
    setIsHovered(false);
  };

  return (
    <p key={key} onMouseEnter={handleMouseEnter} onAnimationEnd={handleAnimationEnd} className={`${isHovered ? styles.squishText : ""} ${styles.titleFont} ${styles.gradientText}`}>
      {char != " " ? char : "\u00A0"}
    </p>
  );
}
