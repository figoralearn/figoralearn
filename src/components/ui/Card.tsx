import { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  shadow?: "accent"; // Moved shadow to the interface
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  shadow, // Removed from destructuring
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl ${className} transition-shadow duration-150 ${hover && "hover:shadow-lg"} ${shadow === "accent" && "shadow-accent shadow"}`}
      {...props}
    >
      {children}
    </div>
  );
}
