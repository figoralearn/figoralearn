import CircleDoodle from "@/components/ui/CircleDoodle";
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
          <Link
            role="button"
            type="button"
            href={""}
            className="button-secondary btn stagger w-fit rounded-full px-7 py-3.5 text-2xl [--i:5]"
          >
            Book A Free Demo
          </Link>
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
