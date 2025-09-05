"use client";
import { motion } from "motion/react";
import React from "react";

type DotBackgroundProps = {
  dotSize?: number; // radius of each circle
  dotColor?: string; // fill color
  gapX?: number; // desired horizontal gap (approximate)
  gapY?: number; // desired vertical gap (approximate)
  className?: string; // optional extra classes
};

const DotBackground: React.FC<DotBackgroundProps> = ({
  dotSize = 2,
  dotColor = "black",
  gapX = 8,
  gapY = 8,
  className = "",
}) => {
  const dotDiameter = dotSize * 2;

  // fixed logical canvas size
  const width = 100;
  const height = 100;

  // how many dots we can roughly fit (ceil so we cover edges)
  const cols = Math.ceil(width / (gapX + dotDiameter));
  const rows = Math.ceil(height / (gapY + dotDiameter));

  // recalc actual gap so dots stretch evenly across
  const actualGapX = (width - cols * dotDiameter) / (cols - 1);
  const actualGapY = (height - rows * dotDiameter) / (rows - 1);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-hidden={true}
      transition={{ duration: 1, delay: 1 }}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none -z-10 h-full w-full ${className} `}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * (dotDiameter + actualGapX) + dotSize}
            cy={row * (dotDiameter + actualGapY) + dotSize}
            r={dotSize}
            fill={dotColor}
          />
        )),
      )}
    </motion.svg>
  );
};

export default DotBackground;
