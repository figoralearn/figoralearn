"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number; // optional delay for staggered animations
  className?: string; // optional styling
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth spring-like ease
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
