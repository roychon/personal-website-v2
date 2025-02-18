import BubbleText from "../bubble-text/component";
import { BubbleTextProps } from "./type";

export default function BubbleTexts({ chars }: BubbleTextProps) {
  return <div style={{ display: "flex" }}>{chars && chars.map((c: string, index: number) => <BubbleText key={index} char={c} />)}</div>;
}
