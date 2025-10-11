"use client";

// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { RefObject, useEffect, useRef, useState } from "react";
import ArrowInCircle from "../icons/ArrowInCircle";
import ReactLenis, { useLenis } from "lenis/react";
import { useLocalLenis } from "@/hooks/useLocalLenis";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const Testimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const lenis = useLenis();
  const pRef = useRef<HTMLParagraphElement>(null);
  useLocalLenis(pRef as RefObject<HTMLElement>);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="relative h-[30rem] w-sm max-w-full sm:w-md">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.src}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="bg-primary absolute inset-0 flex origin-bottom flex-col rounded-2xl p-4 text-white"
          >
            <h2 className="text-3xl">{testimonial.title}</h2>
            <p
              ref={pRef}
              className="lenis mt-3 max-h-[90%] overflow-hidden text-lg hover:overflow-y-scroll"
              // onMouseEnter={() => {
              //   lenis?.;
              // }}
              // onMouseLeave={() => lenis?.}
            >
              {testimonial.quote}
            </p>

            <div className="mt-auto flex items-center justify-between border-t-2 border-white py-2 pt-4">
              <div className="flex flex-col gap-2">
                <div className="size-14 rounded-full bg-white">
                  <Image src={testimonial.src} alt={testimonial.name} />
                </div>
                <div>
                  <p>{testimonial.name}</p>
                  <p className="text-sm">{testimonial.designation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowInCircle
                  onClick={handlePrev}
                  className="size-10 rotate-180"
                />
                <ArrowInCircle className="size-10" onClick={handleNext} />
              </div>
            </div>
            {/* <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  /> */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
