import Colaboration from "@/components/icons/Colaboration";
import Commutication from "@/components/icons/Commutication";
import Creativity from "@/components/icons/Creativity";
import DecisionMaking from "@/components/icons/DecisionMaking";
import DesignThinking from "@/components/icons/DesignThinking";
import EQ from "@/components/icons/EQ";
import Solving from "@/components/icons/Solving";
import SysThinking from "@/components/icons/SysThinking";
import Thinking from "@/components/icons/Thinking";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanUnderline from "@/components/ui/SpanUnderline";
import Underline from "@/components/ui/Underline";
import { ReactNode } from "react";

type SkillItem = {
  title: string;
  ico: ReactNode; // Updated to use ReactNode for the icon
};

type SkillBlock = {
  title: string;
  items: SkillItem[];
};

const blocks: SkillBlock[] = [
  {
    title: "Think Smarter:",
    items: [
      { title: "Critical thinking", ico: <Thinking /> }, // Example icon
      { title: "Problem solving", ico: <Solving /> }, // Example icon
      { title: "Systems thinking", ico: <SysThinking /> }, // Example icon
    ],
  },
  {
    title: "Lead Confidently:",
    items: [
      { title: "Communication", ico: <Commutication /> }, // Example icon
      { title: "Decision Making", ico: <DecisionMaking /> }, // Example icon
      { title: "Emotional Intelligence", ico: <EQ /> }, // Example icon
    ],
  },
  {
    title: "Build Boldly:",
    items: [
      { title: "Creativity", ico: <Creativity /> }, // Example icon
      { title: "Design Thinking", ico: <DesignThinking /> }, // Example icon
      { title: "Collaboration", ico: <Colaboration /> }, // Example icon
    ],
  },
];

export default function BuildSkills() {
  return (
    <section className="contain">
      <h2 className="">
        Keep building{" "}
        <SpanPrimary>
          <SpanUnderline color="accent">Your Skills</SpanUnderline>
        </SpanPrimary>
      </h2>
      <div className="mt-sec-block">
        <p>
          The world is changing faster than ever – AI, automation, climate,
          education isn&apos;t keeping up.
        </p>
        <p>
          Whether your child becomes an entrepreneur, CEO, or changemaker –
          success comes from thinking critically, solving problems creatively,
          and leading others.
        </p>
        <p>
          These are all skills. Learnable skills. But not from textbooks.
          They’re developed by tackling real challenges with other motivated
          learners.
        </p>
      </div>

      <div className="mt-sec-block grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {blocks.map((block, index) => (
          <Card
            key={index}
            className="border-accent/30 border bg-white p-6 text-center"
            shadow="accent"
          >
            <h3 className="text-left font-semibold">
              <SpanUnderline color="accent">{block.title}</SpanUnderline>
            </h3>

            <ul className="mt-sec-block2 para gap-sec-block2 flex flex-wrap justify-center">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex flex-col items-center justify-center gap-2`}
                >
                  <div
                    className={
                      index === 0
                        ? "text-primary"
                        : index === 1
                          ? "text-yellow"
                          : "text-red"
                    }
                  >
                    {item.ico}
                  </div>
                  <span className="">{item.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
