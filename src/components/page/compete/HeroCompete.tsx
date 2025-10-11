import Card from "@/components/ui/Card";
import CircleDoodle from "@/components/ui/CircleDoodle";
import { Marquee } from "@/components/ui/marquee";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import Link from "next/link";

export default function HeroCompete() {
  return (
    <section className="relative mt-0! flex h-[85vh] min-h-[700px] w-full max-w-[unset] flex-col p-[unset]">
      <Image
        src={"/compete-hero.png"}
        fill
        quality={90}
        priority
        alt="background with clouds"
        className="pointer-events-none mt-0 object-cover object-center"
      />
      <div className="contain relative flex h-full w-full flex-col items-center justify-end pb-14">
        <div className="relative -rotate-2">
          <Image
            src={"/ribbon-left.png"}
            alt=""
            unoptimized
            height={0}
            width={0}
            className="absolute top-1/2 left-0 z-10 h-auto w-[25vw] -translate-x-3/5 -translate-y-1/2"
          />
          <Image
            src={"/ribbon-right.png"}
            alt=""
            unoptimized
            height={0}
            width={0}
            className="absolute top-1/2 right-0 z-10 h-auto w-[25vw] translate-x-3/5 -translate-y-1/2"
          />
          <Card
            shadow="accent"
            className="bg-primary relative z-30 flex w-sm flex-col items-center border-4 border-white p-6 md:w-xl lg:w-2xl"
          >
            <h1 className="text-center text-4xl text-white md:text-5xl lg:text-7xl">
              World Young Entrepreneur League
            </h1>
            <p className="mt-7 text-center text-white">
              Shark Tank for School Teams: Global Edition
            </p>
          </Card>
        </div>
        <ScrollToDemoButton className="mt-20" />
      </div>
      <Marquee className="bg-primary mt-sec-block relative mb-6 [--gap:3rem]">
        <p className="para">• Friends to Co-founders</p>
        <p className="para">• Ideas to Real Startups</p>
        <p className="para">• Classroom to the Global Stager</p>
      </Marquee>
      {/* <div className="bg-primary relative mb-7">
        <p className="text-center">
          Friends to Co-founders. Ideas to Real Startups. Classroom to the
          Global Stage.
        </p>
      </div> */}
    </section>
  );
}
