import CircleDoodle from "@/components/ui/CircleDoodle";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import Link from "next/link";

export default function HeroCompete() {
  return (
    <section className="contain flex min-h-[100vh] flex-col justify-center">
      <div className="flex justify-between">
        {/* Content */}
        <div className="fadein__right--stagger flex flex-col justify-center gap-9">
          {/* Tile */}
          <h1 className="stagger inline font-bold">
            World Young <br /> Entrepreneur League
          </h1>
          <p className="stagger max-w-2xl">
            An international tournament where school teams build
            Entrepreneurship Skills with Prizes worth $1000
          </p>
          {/* CTA */}
          <ScrollToDemoButton className="stagger [--i:5]">
            Register Now
          </ScrollToDemoButton>
        </div>

        {/* Hero Picture */}
        <div className={`hero__image relative flex basis-[40%] max-xl:hidden`}>
          <Image
            src="/hero-compete.png"
            alt="child in program"
            width={529}
            height={592}
            priority
            className=""
          />
        </div>
      </div>
    </section>
  );
}
