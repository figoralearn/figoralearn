"use client";
import { useLenis } from "lenis/react";
import { scrollToDemo } from "@/utils/scrollToElement";
import ArrowInCircle from "@/components/icons/ArrowInCircle";
import { ReactNode } from "react";
import Link from "next/link";

interface ScrollToDemoButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  extraTopPadding?: number;
  showArrow?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function ScrollToDemoButton({
  children = "Book A Demo",
  className = "",
  href,
  extraTopPadding = 50,
  showArrow = true,
  variant = "secondary",
  size = "md",
}: ScrollToDemoButtonProps) {
  const lenis = useLenis();

  const baseClasses =
    "btn flex items-center para w-fit gap-2 rounded-full text-white transition-all duration-300 hover:scale-105";

  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
  };

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg",
  };

  const arrowSizes = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className={combinedClassName}>
        {children}
        {showArrow && <ArrowInCircle className={arrowSizes[size]} />}
      </div>
    </Link>
  ) : (
    <button
      onClick={() => scrollToDemo(lenis, extraTopPadding)}
      className={combinedClassName}
    >
      {children}
      {showArrow && <ArrowInCircle className={arrowSizes[size]} />}
    </button>
  );
}
