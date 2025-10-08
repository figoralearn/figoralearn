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

export const people: Person[] = [
  {
    name: "John Doe",
    company: "Company A",
    image: "/img1.jpg",
    color: "accent",
  },
  {
    name: "Jane Smith",
    company: "Company B",
    image: "/img2.jpg",
    color: "primary",
  },
  {
    name: "Alice Johnson",
    company: "Company C",
    image: "/img3.jpg",
    color: "secondary",
  },
  { name: "Bob Brown", company: "Company D", image: "/img4.jpg", color: "red" },
];
export default function Facilitators() {
  return (
    <section className="w-full">
      <h2 className="text-center">
        Meet our <SpanPrimary>Facilitators</SpanPrimary>
      </h2>
      <Marquee className="mt-sec-block w-full [--gap:0.4rem]">
        {people.map((person) => (
          <div className="flex" key={person.name}>
            <div className="relative size-60 md:size-80">
              <Image src={person.image} alt={person.name} fill className="" />
            </div>
            <div
              className={`bg-${person.color} flex size-60 flex-col items-center justify-center md:size-80`}
            >
              <h3>{person.name}</h3>
              <p>{person.company}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
