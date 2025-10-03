"use client";
import Card from "@/components/ui/Card";
import Lenis from "lenis";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import CloseIcon from "@/components/icons/CloseIcon";

type PopUpProps = {
  open: boolean;
  children: ReactNode;
  setOpen: (open: boolean) => void;
  data?: object;
};

export default function PopUp({ open, setOpen, data, children }: PopUpProps) {
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);
  useEffect(() => {
    if (open && modalScrollRef.current) {
      // Create a new Lenis instance attached to the modal container
      lenisRef.current = new Lenis({
        wrapper: modalScrollRef.current, // 👈 modal wrapper
        content: modalScrollRef.current.children[0] as HTMLElement, // 👈 modal content
        lerp: 0.08,
        smoothWheel: true,
        // smoothTouch: true,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 z-[800] mx-auto my-auto flex h-[100svh] w-[100svw] items-end justify-center bg-black/25 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close button positioned outside the card */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-12 right-10 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm transition-all hover:bg-black/45 focus:ring-2 focus:ring-white/50 focus:outline-none"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <Card className="bg-neutral mb-2 flex h-[95%] w-[98%] overflow-hidden rounded-2xl">
              {/* Inner scroll container */}
              <div
                ref={modalScrollRef}
                className="lenis h-full w-full overflow-x-hidden overflow-y-auto"
              >
                {children}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
