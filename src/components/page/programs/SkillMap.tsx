import Colaboration from "@/components/icons/Colaboration";
import Commutication from "@/components/icons/Commutication";
import Creativity from "@/components/icons/Creativity";
import DecisionMaking from "@/components/icons/DecisionMaking";
import DesignThinking from "@/components/icons/DesignThinking";
import EQ from "@/components/icons/EQ";
import Solving from "@/components/icons/Solving";
import SysThinking from "@/components/icons/SysThinking";
import Thinking from "@/components/icons/Thinking";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanUnderline from "@/components/ui/SpanUnderline";
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

export default function SkillMap() {
  return (
    <AnimatedSection className="contain">
      <h2 className="text-center">
        Our <SpanPrimary>Skill Map</SpanPrimary>
      </h2>

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

            <ul className="mt-sec-block2 para gap-sec-block2 text-primary flex flex-wrap items-center justify-center">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex w-full max-w-1/3 flex-col items-center justify-center gap-2"
                >
                  {item.ico}
                  <span className="">{item.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
