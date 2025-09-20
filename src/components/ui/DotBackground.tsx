"use client";

import React, { useLayoutEffect, useState, useId } from "react";

/**
 * Full-body "printed" dot-grid background (CLIENT ONLY).
 *
 * Fixes hydration-mismatch flicker by:
 *  - running only on the client (`"use client"`), so nothing is server-rendered
 *    for this component and React won't attempt to hydrate it.
 *  - using `useId()` (React hook) to produce a stable id across client renders
 *    (no Math.random during render).
 *  - measuring layout in `useLayoutEffect` so the initial measurement happens
 *    before the browser paint, reducing visible layout flashes.
 *
 * Mount this component as a direct child of <body> (or in your top-level
 * client layout) to get a continuous printed-on-paper appearance without SSR
 * hydration mismatches.
 */

type DotBackgroundProps = {
  dotSize?: number; // radius of each circle in px
  dotColor?: string; // fill color
  gapX?: number; // horizontal gap between dots (edge-to-edge) in px
  gapY?: number; // vertical gap between dots (edge-to-edge) in px
  className?: string; // optional extra classes
  opacity?: number; // optional opacity for dots
};

const getDocumentSize = () => {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  const width = document.documentElement.clientWidth || window.innerWidth;
  const height = Math.max(
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0,
    window.innerHeight || 0,
  );
  return { width, height };
};

const DotBackground: React.FC<DotBackgroundProps> = ({
  dotSize = 2,
  dotColor = "rgba(0,0,0,0.08)",
  gapX = 20,
  gapY = 20,
  className = "",
  opacity = 1,
}) => {
  // useId is a hook that gives a stable id for the component instance
  const uid = useId();
  const patternId = `dot-pattern-${String(uid).replace(/[:]/g, "-")}`;

  // tile size in pixels
  const dotDiameter = dotSize * 2;
  const tileWidth = dotDiameter + gapX;
  const tileHeight = dotDiameter + gapY;

  // initialize from current document size (we're client-only so this runs in browser)
  const [size, setSize] = useState(() => getDocumentSize());

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // measure first paint synchronously (before browser paints) to avoid a flash
    setSize(getDocumentSize());

    let raf = 0;
    let mutationTimer: number | null = null;

    const handleResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setSize(getDocumentSize());
        raf = 0;
      });
    };

    const mutationObserver = new MutationObserver(() => {
      if (mutationTimer) window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(() => {
        setSize(getDocumentSize());
        mutationTimer = null;
      }, 80);
    });

    window.addEventListener("resize", handleResize, { passive: true });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      mutationObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (mutationTimer) window.clearTimeout(mutationTimer);
    };
  }, []);

  // If for any reason measurement failed, render nothing to avoid layout thrash
  if (size.width === 0 || size.height === 0) return null;

  return (
    <svg
      // positioned absolutely so it sits behind body content and scrolls with it
      // ensure it's visually behind everything and doesn't capture events
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size.width,
        height: size.height,
        pointerEvents: "none",
        zIndex: -9999,
      }}
      width={size.width}
      height={size.height}
      aria-hidden="true"
      className={className}
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={tileWidth}
          height={tileHeight}
          x={0}
          y={0}
        >
          <circle
            cx={dotSize}
            cy={dotSize}
            r={dotSize}
            fill={dotColor}
            fillOpacity={opacity}
          />
        </pattern>
      </defs>

      {/* Fill the entire document area with the repeating pattern */}
      <rect
        x={0}
        y={0}
        width={size.width}
        height={size.height}
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

export default DotBackground;
