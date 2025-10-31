import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CircleDoodle from "@/components/ui/CircleDoodle";
import { Marquee } from "@/components/ui/marquee";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import Link from "next/link";

export default function HeroCompete() {
  return (
    <AnimatedSection className="relative mt-0! flex h-[85vh] min-h-[750px] w-full max-w-[unset] flex-col p-[unset] md:min-h-[850px]">
      <Image
        src={"/compete-hero.png"}
        fill
        quality={90}
        priority
        alt="background with clouds"
        className="pointer-events-none mt-0 object-cover object-center"
      />
      <div className="contain relative flex h-full w-full flex-col items-center justify-end">
        <div className="relative -rotate-2">
          <Image
            src={"/ribbon-left.png"}
            alt=""
            unoptimized
            height={0}
            width={0}
            className="absolute top-1/2 left-0 z-10 h-auto w-52 -translate-x-3/5 -translate-y-1/2 md:w-[25vw]"
          />
          <Image
            src={"/ribbon-right.png"}
            alt=""
            unoptimized
            height={0}
            width={0}
            className="absolute top-1/2 right-0 z-10 h-auto w-52 translate-x-3/5 -translate-y-1/2 md:w-[25vw]"
          />
          <Card
            shadow="accent"
            className="bg-primary relative z-30 flex w-72 flex-col items-center border-4 border-white p-2 pt-8 sm:p-6 md:w-xl lg:w-2xl"
          >
            <Image
              src={"/wyel-stamp.png"}
              alt=""
              unoptimized
              height={0}
              width={0}
              className="absolute top-0 left-1/2 z-40 h-auto w-32 -translate-x-1/2 -translate-y-4/5 md:w-40"
            />
            <h1 className="text-center text-4xl text-white md:text-5xl lg:text-7xl">
              World Young Entrepreneur League
            </h1>
            <p className="mt-7 text-center text-white">
              Shark Tank for School Teams: Global Edition
            </p>
          </Card>
        </div>
      </div>
      <Marquee className="bg-primary xl:mt-sec-block mt-sec-block2 relative mb-6 -rotate-2 text-white [--gap:3rem]">
        <p className="para">• Friends to Co-founders</p>
        <p className="para">• Ideas to Real Startups</p>
        <p className="para">• Classroom to the Global Stage</p>
      </Marquee>
      <ScrollToDemoButton
        href="https://unstop.com/competitions/1569659/register"
        className="relative mx-auto mt-5 mb-12 border-2 border-white bg-[#a9d346] text-white"
      >
        Register Now
      </ScrollToDemoButton>
      {/* <div className="bg-primary relative mb-7">
        <p className="text-center">
          Friends to Co-founders. Ideas to Real Startups. Classroom to the
          Global Stage.
        </p>
      </div> */}
    </AnimatedSection>
  );
}
