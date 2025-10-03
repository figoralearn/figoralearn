"use client";
import Card from "@/components/ui/Card";
import SpanCircle from "@/components/ui/SpanCircle";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import PopUp from "./PopUp";
import { ReactNode, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Entrepreneurs from "./Entrepreneurs";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";

const cards: Card[] = [
  {
    title: "Entrepreneurs",
    id: "en", // Shortform for Entrepreneurs
    tag: "Build a Venture",
    link: "/entrepreneurs",
    className: "bg-purple-500",
    imgSrc: "/entrepreneurs.png", // Added image source
    pop: <Entrepreneurs />, // Updated to use pop prop as a ReactNode
  },
  {
    title: "Future Leaders",
    id: "fl", // Shortform for Future Leaders
    tag: "Run a Country",
    link: "/future-leaders",
    className: "bg-yellow",
    imgSrc: "/future_leaders.png", // Added image source
  },
  {
    title: "EQ Artists",
    id: "eq", // Shortform for EQ Artists
    tag: "Build EQ through the Arts",
    link: "/eq-artists",
    className: "bg-accent",
    imgSrc: "/eq.png", // Added image source
    comingSoon: true,
  },
  {
    title: "Story-tellers",
    id: "st", // Shortform for Story-tellers
    tag: "Give a TED Talk",
    link: "/story-tellers",
    className: "bg-red",
    imgSrc: "/story_tellers.png", // Added image source
    comingSoon: true,
  },
  {
    title: "Science Hackers",
    id: "sh", // Shortform for Science Hackers
    tag: "Conduct your own Experiments",
    link: "/science-hackers",
    className: "bg-primary",
    imgSrc: "/science_hackers.png", // Added image source
    comingSoon: true, // Example of a coming soon option
  },
];

type Card = {
  title: string;
  tag: string;
  id: string;
  link: string;
  className?: string; // Proper type for React's className attribute
  imgSrc: string; // Added property for image source
  comingSoon?: boolean; // Optional property to indicate if the program is coming soon
  pop?: ReactNode; // Updated pop to be a ReactNode
};

export default function HeroPrograms() {
  const [open, setOpen] = useState(false);
  const [openId, setOpenID] = useState<ReactNode>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const matchingCard = cards.find((card) => card.id === id);
      if (matchingCard && matchingCard.pop) {
        setOpenID(matchingCard.pop);
        setOpen(true);
      }
    }
  }, []);

  return (
    <>
      <PopUp open={open} setOpen={setOpen} data={{}}>
        {openId}
      </PopUp>
      <section className="flex flex-col items-center justify-center text-center max-md:mt-28 md:mt-20">
        <h2 className="max-w-3xl">
          Our{" "}
          <SpanPrimary>
            <SpanCircle color="accent"> Programs</SpanCircle>
          </SpanPrimary>
        </h2>
        <p>
          Unique, Inter-disciplinary Missions on 21st century subjects that
          cover Psychology, Economics, Business, Public Policy, Design Thinking
          and more.
        </p>

        <div className="mt-sec-block flex w-full flex-wrap justify-center-safe gap-4">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              onClick={() => {
                if (!card.comingSoon && card.pop) {
                  setOpenID(card.pop);
                  setOpen(true);
                }
              }}
              className={`${card.className} ${!card.comingSoon && "cursor-pointer"} relative h-72 w-full overflow-hidden p-3 text-left text-white md:max-w-96`}
            >
              <div className="relative z-10">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="tag">{card.tag}</p>
              </div>
              <Image
                key={idx}
                src={card.imgSrc}
                unoptimized
                alt={card.title}
                width={0}
                height={0}
                className={`absolute right-0 bottom-0 h-auto w-auto ${card.comingSoon && "blur-[5px]"}`}
              />
            </Card>
          ))}
        </div>
        <ScrollToDemoButton className="mt-sec-block stagger [--i:5]" />
      </section>
    </>
  );
}
