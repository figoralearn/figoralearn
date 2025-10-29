import Cost from "@/components/icons/Cost";
import GlobeMap from "@/components/icons/GlobeMap";
import Stairs from "@/components/icons/Stairs";
import Teams from "@/components/icons/Teams";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import { ReactNode } from "react";

type Info = {
  title: string;
  desc: string;
  icon: ReactNode; // icon as ReactNode
};

const items: Info[] = [
  {
    title: "Grades",
    desc: "3–8 (Three judging bands: G3–4, G5–6, G7–8, Judge Separately)",
    icon: <Stairs />,
  },
  {
    title: "Teams",
    desc: "2-3 students (register individually with the same team name)",
    icon: <Teams />,
  },
  { title: "Cost", desc: "Free to enter", icon: <Cost /> },
  {
    title: "Modality",
    desc: "All rounds run online, Finalists present live on Demo Day",
    icon: <GlobeMap />,
  },
];

export default function Participate() {
  return (
    <AnimatedSection className="contain">
      <h2 className="text-center">
        Who can <SpanPrimary>Participate?</SpanPrimary>
      </h2>

      <div className="mt-sec-block grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, idx) => (
          <Card
            key={idx}
            className="border-accent/30 flex flex-col items-center gap-4 border bg-white p-8 text-center"
            shadow="accent"
          >
            <div className="text" aria-hidden>
              {item.icon}
            </div>
            <h3 className="text-3xl font-semibold">{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
