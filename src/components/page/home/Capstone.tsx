import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Clock from "@/components/icons/Clock";
import Globe from "@/components/icons/Globe";
import Tools from "@/components/icons/Tools";
import BrainBulb from "@/components/icons/BrainBulb";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Marquee } from "@/components/ui/marquee";
import Plus from "@/components/icons/Plus";
import AnimatedSection from "@/components/ui/AnimatedSection";

type Card = {
  icon: React.ReactNode;
  title: string;
};

const cards: Card[] = [
  {
    icon: <Clock className="text-primary h-auto max-md:w-16" />,
    title: "1 hour/week 3-6 Kids",
  },
  {
    icon: <Globe className="text-yellow h-auto max-md:w-16" />,
    title: "Real World Problems",
  },
  {
    icon: <Tools className="text-red h-auto max-md:w-16" />,
    title: "Hands-on Projects",
  },
  {
    icon: <BrainBulb className="text-secondary h-auto max-md:w-16" />,
    title: "21st Century Skills",
  },
];
export default function Capstone() {
  return (
    <>
      <AnimatedSection className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl">
          <SpanPrimary>Live</SpanPrimary>{" "}
          <span className="relative inline-block">
            Missions
            <Plus />
          </span>{" "}
          <br /> Capstone <SpanPrimary>Projects</SpanPrimary>
        </h2>
        <p>
          One-of-a-kind Programs with Weekly Live Missions and Projects so that
          your child can build 21st century skills like Critical Thinking,
          Creativity, Communication & Collaboration.{" "}
        </p>

        <div className="mt-sec-block grid w-full gap-4 max-lg:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              shadow="accent"
              className="bg-neutral flex flex-col items-center px-1 py-7"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="">{card.title}</h3>
            </Card>
          ))}
        </div>
        <div className="mt-sec-block w-7xl max-w-full">
          <YouTubeEmbed
            videoid="Q8qOIhtvUSE"
            params={"controls=0&playsinline=1"}
            style="margin-inline:auto;object-fit:cover;border-radius:1rem"
          />
        </div>
      </AnimatedSection>
      <Marquee className="bg-accent mt-sec-block -rotate-1 [--gap:3rem]">
        <p className="para">• Build Problem-Solving Skills</p>
        <p className="para">• Develop Creativity & Critical Thinking</p>
        <p className="para">• Grow as a Leader</p>
      </Marquee>
    </>
  );
}
