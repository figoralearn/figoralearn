import { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  shadow?: "accent"; // Moved shadow to the interface
}

export default function Card({
  children,
  className = "",
  shadow, // Removed from destructuring
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl ${className} ${shadow === "accent" && "shadow-accent shadow"}`}
      {...props}
    >
      {children}
    </div>
  );
}
