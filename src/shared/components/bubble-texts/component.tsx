import BubbleText from "../bubble-text/component";
import type { BubbleTextProps } from "./type";

export default function BubbleTexts({ chars }: BubbleTextProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
      }}
    >
      {chars.map((c, index) => (
        <BubbleText key={index} char={c} />
      ))}
    </span>
  );
}
