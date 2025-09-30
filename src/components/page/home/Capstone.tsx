import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Clock from "@/components/icons/Clock";
import Globe from "@/components/icons/Globe";
import Tools from "@/components/icons/Tools";
import BrainBulb from "@/components/icons/BrainBulb";
import { YouTubeEmbed } from "@next/third-parties/google";

type Card = {
  icon: React.ReactNode;
  title: string;
};

const cards: Card[] = [
  {
    icon: <Clock className="text-primary" />,
    title: "1 hour/week 3-6 Kids",
  },
  {
    icon: <Globe className="text-yellow" />,
    title: "Real World Problems",
  },
  {
    icon: <Tools className="text-red" />,
    title: "Hands-on Projects",
  },
  {
    icon: <BrainBulb className="text-secondary" />,
    title: "21st Century Skills",
  },
];
export default function Capstone() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl">
          <SpanPrimary>Live</SpanPrimary> Missions Capstone{" "}
          <SpanPrimary>Projects</SpanPrimary>
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
              <h3 className="text-3xl">{card.title}</h3>
            </Card>
          ))}
        </div>
        <div className="mt-sec-block w-7xl max-w-full">
          <YouTubeEmbed
            videoid="Q8qOIhtvUSE"
            params={"controls=0&playsinline=1"}
            style="margin-inline:auto;object-fit:cover;"
          />
        </div>
      </section>
      <div className="mt-sec-block relative h-3">
        <ul className="bg-accent absolute left-1/2 flex w-[110%] origin-center! -translate-x-1/2 -rotate-1 justify-around py-2 text-white">
          <li className="para">• Build Problem-Solving Skills</li>
          <li className="para">• Develop Creativity & Critical Thinking</li>
          <li className="para">• Grow as a Leader</li>
        </ul>
      </div>
    </>
  );
}
