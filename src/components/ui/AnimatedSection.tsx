"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, ComponentPropsWithoutRef } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleUp";
  delay?: number;
} & ComponentPropsWithoutRef<typeof motion.section>;
// ✅ correct type extension (inherits motion.section props safely)

const variants = {
  fadeUp: {
    initial: { opacity: 0.1, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0.3,
  className = "",
  ...rest
}: AnimatedSectionProps) {
  const { initial, animate } = variants[variant];

  return (
    <motion.section
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
      {...rest} // ✅ now spreads safely without type conflicts
    >
      {children}
    </motion.section>
  );
}
