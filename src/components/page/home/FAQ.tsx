"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import { AnimatePresence, motion } from "motion/react";

type Faq = {
  id: number;
  q: string;
  a: string;
};

const faqs: Faq[] = [
  {
    id: 1,
    q: "Who are Figora programs designed for? ",
    a: "Learners who want to build real-world skills through hands-on missions and collaborative projects.",
  },
  {
    id: 2,
    q: "My child has not attended any such sessions before. Will they be able to keep up?",
    a: "Yes. Missions are scaffolded with clear guidance. Learners progress step-by-step with support from facilitators and peers.",
  },
  {
    id: 3,
    q: "Who are the teachers and facilitators?",
    a: "Experienced mentors with backgrounds in education, design thinking, entrepreneurship and public speaking.",
  },
  {
    id: 4,
    q: "Is this program suitable for shy kids?",
    a: "Absolutely. Missions are designed in small teams where every child has a role, so quieter kids gain confidence and practice expressing themselves.",
  },
  {
    id: 5,
    q: "Will my child get grades or report cards?",
    a: "We focus on growth and mastery. Learners receive actionable feedback and a portfolio of outcomes instead of grades.",
  },
  {
    id: 6,
    q: "What if my child doesn't like the program?",
    a: "The Programs are designed to be highly engaging and fun. But, if it doesn’t turn out to be the right fit for your child, we will refund 100% of your money, no questions asked. So that you can sign up stress free.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number>();

  return (
    <section className="contain">
      <h2 className="">
        Frequently Asked <SpanPrimary>Questions</SpanPrimary>
      </h2>
      <AnimatePresence>
        <div className="mt-sec-block grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Card
                key={item.id}
                className={`h-fit border ${
                  isOpen
                    ? "bg-primary border-primary/35 text-white"
                    : "border-accent/30 bg-white"
                } p-4`}
                shadow="accent"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => setOpenId(isOpen ? -1 : item.id)}
                  className="flex w-full items-center gap-4 text-left"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${isOpen ? "border-white" : "border-accent/50"}`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{item.q}</span>
                  <span className="text-3xl leading-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.4 }}
                    id={`faq-panel-${item.id}`}
                    className="mt-sec-block2"
                  >
                    <p className={isOpen ? "text-white/90" : ""}>{item.a}</p>
                  </motion.div>
                )}
              </Card>
            );
          })}
        </div>
      </AnimatePresence>
    </section>
  );
}
