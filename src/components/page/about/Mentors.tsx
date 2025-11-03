import AnimatedSection from "@/components/ui/AnimatedSection";
import { Marquee } from "@/components/ui/marquee";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
export const COLORS = {
  accent: "accent",
  primary: "primary",
  secondary: "secondary",
  red: "red",
  yellow: "yellow",
} as const;

// ⤵️ Derives union type automatically
export type Color = keyof typeof COLORS;

interface Person {
  name: string;
  company: string;
  image: string;
  color: Color;
}

export const row1: Person[] = [
  {
    name: "Dr. Prabhjot Sawhney",
    company: "PhD, 10 years of experience in teaching & curriculum",
    image: "/Prabhjot.png",
    color: "accent",
  },
  {
    name: "Khadijah Makani",
    company:
      "IB Facilitator - 13 years of experience\nKPMG & Cambridge certified instructor",
    image: "/Khadijah.png",
    color: "primary",
  },
  {
    name: "Ruchi Sood Bathla",
    company: "IB Facilitator - 5 years of experience, PDGLT from IAAT",
    image: "/Ruchi.png",
    color: "secondary",
  },
];
export const row2: Person[] = [
  {
    name: "Dr. Prabhjot Sawhney",
    company: "PhD, 10 years of experience in teaching & curriculum",
    image: "/Prabhjot.png",
    color: "accent",
  },
  {
    name: "Khadijah Makani",
    company:
      "IB Facilitator - 13 years of experience\nKPMG & Cambridge certified instructor",
    image: "/Khadijah.png",
    color: "primary",
  },
  {
    name: "Ruchi Sood Bathla",
    company: "IB Facilitator - 5 years of experience, PDGLT from IAAT",
    image: "/Ruchi.png",
    color: "secondary",
  },
];
export default function Mentors() {
  return (
    <AnimatedSection className="w-full">
      <h2 className="text-center">
        Meet our <SpanPrimary>Meet Our Mentors</SpanPrimary>
      </h2>
      <Marquee className="mt-sec-block w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [--gap:0.4rem]">
        {row1.map((person) => (
          <div className="flex" key={person.name}>
            <div className="relative size-56 md:size-72">
              <Image src={person.image} alt={person.name} fill className="" />
            </div>
            <div
              className={`bg-${person.color} flex size-56 flex-col items-center justify-center md:size-72`}
            >
              <h3 className="text-center">{person.name}</h3>
              <p className="text-center md:text-xl">{person.company}</p>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee
        reverse
        className="mt-sec-block w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [--gap:0.4rem]"
      >
        {row2.map((person) => (
          <div className="flex" key={person.name}>
            <div className="relative size-56 md:size-72">
              <Image src={person.image} alt={person.name} fill className="" />
            </div>
            <div
              className={`bg-${person.color} flex size-56 flex-col items-center justify-center md:size-72`}
            >
              <h3 className="text-center">{person.name}</h3>
              <p className="text-center md:text-xl">{person.company}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </AnimatedSection>
  );
}
