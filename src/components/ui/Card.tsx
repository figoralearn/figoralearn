import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
  shadow,
}: CardProps & { shadow?: "accent" }) {
  return (
    <div
      className={`rounded-2xl ${className} ${shadow === "accent" && "shadow-accent shadow"}`}
    >
      {children}
    </div>
  );
}
