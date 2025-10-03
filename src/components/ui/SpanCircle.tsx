import { ReactNode } from "react";
import Underline from "./Underline";
import Circleout from "../icons/Circleout";

export default function SpanCircle({
  children,
  color,
}: {
  children: ReactNode;
  color?: "primary" | "secondary" | "accent";
}) {
  return (
    <span className="relative inline-block">
      <Circleout className={color && `text-${color}`} />
      {children}
    </span>
  );
}
