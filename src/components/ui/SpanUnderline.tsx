import { ReactNode } from "react";
import Underline from "./Underline";

export default function SpanUnderline({
  children,
  color,
}: {
  children: ReactNode;
  color?: "primary" | "secondary" | "accent";
}) {
  return (
    <span className="relative inline-block">
      <Underline className={color && `text-${color}`} />
      {children}
    </span>
  );
}
