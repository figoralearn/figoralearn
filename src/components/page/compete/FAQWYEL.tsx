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
    q: "How will the competition be conducted?",
    a: "All rounds of WYEL - the Entrepreneurship Quiz, Business Plan submission, and Pitching Competition, will be conducted completely online, so students can participate from anywhere.",
  },
  {
    id: 2,
    q: "Is there any cost for participation, certificates, or prizes?",
    a: "No. WYEL is completely free. Schools and students do not need to pay anything to participate, receive certificates, or claim prizes.",
  },
  {
    id: 3,
    q: "What are the key dates for the 2025 competition?",
    a: "Registration closes: 15th November 2025\nRound 1 - Quiz: 22nd to 29th November 2025\nRound 2 - Business Plan Submission: 11th to 20th December 2025\nRound 3 - Final Pitching Competition: 10th January 2026.",
  },
  {
    id: 4,
    q: "How should teams be formed?",
    a: "Students should register in teams of 2 to 3, ideally from the same grade, to collaborate effectively across rounds. Each participant needs to register INDIVIDUALLY and add the same Team Name in the form. ",
  },
  {
    id: 5,
    q: "Will students receive mentorship?",
    a: "Yes. In Rounds 2 and 3, students will receive guidance from mentors affiliated with Harvard, Stanford, IIT, IIM, and ISB, helping them refine their ideas and presentations.",
  },
];

export default function FAQWYEL() {
  const [openId, setOpenId] = useState<number>();

  return (
    <section className="contain">
      <h2 className="">
        Frequently asked <SpanPrimary>Questions</SpanPrimary>
      </h2>
      <AnimatePresence>
        <div className="mt-sec-block grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Card
                key={item.id}
                className={`h-fit border transition-all duration-500 ${
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
                  <span className="flex-1 text-lg">{item.q}</span>
                  <span className="text-3xl leading-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isOpen && "fit-content",
                        opacity: isOpen && 1,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      id={`faq-panel-${item.id}`}
                      className="mt-sec-block2 h-fit"
                    >
                      <p className={isOpen ? "text-white/90" : ""}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </AnimatePresence>
    </section>
  );
}
