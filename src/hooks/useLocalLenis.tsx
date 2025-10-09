"use client";

import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "lenis";

/**
 * Creates a Lenis instance for a specific scrollable element (local scroll).
 * Automatically handles the RAF loop and cleanup.
 */
export function useLocalLenis<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options: LenisOptions = {},
): React.MutableRefObject<Lenis | null> {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ✅ Early exit without returning null
    // if (!ref.current) return;

    const lenis = new Lenis({
      wrapper: ref.current,
      content: ref.current,
      smoothWheel: true,
      lerp: 0.1,
      ...options,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [ref, options]); // ✅ Dependencies properly typed

  return lenisRef;
}
