import Mentor from "@/components/icons/Mentor";
import Speaker from "@/components/icons/Speaker";
import Tools from "@/components/icons/Tools";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import { ReactNode } from "react";

type Group = {
  gradeRange: string;
  label: string;
  ico: ReactNode; // Replaced img with ico of ReactNode type
};

const groups: Group[] = [
  {
    gradeRange: "Each child starts their own venture",
    label: "Capstone Project",
    ico: <Tools className="text-primary size-20" />,
  }, // Updated img to ico
  {
    gradeRange: "Learn to pitch their venture at our Demo Day",
    label: "Pitch to Real Founders",
    ico: <Speaker />,
  }, // Updated img to ico
  {
    gradeRange: "Top venture win a chance for incubation",
    label: "Incubation & Mentoring",
    ico: <Mentor />,
  }, // Updated img to ico
];

export default function EnCards() {
  return (
    <section className="contain">
      <div className="mt-sec-block grid grid-cols-1 gap-6 md:grid-cols-3">
        {groups.map((g, idx) => (
          <Card
            key={idx}
            shadow="accent"
            className="border-accent/30 flex flex-col items-center justify-center gap-2 border bg-white p-10 text-center"
          >
            {g.ico}
            <h3 className="font-[BodyFont]">{g.label}</h3>
            <p>Grades {g.gradeRange}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
