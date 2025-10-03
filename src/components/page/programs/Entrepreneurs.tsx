import CircleDoodle from "@/components/ui/CircleDoodle";
import Image from "next/image";
import Link from "next/link";
import EnJourney from "./EnJourney";
import EnCards from "./EnCards";
import SpanPrimary from "@/components/ui/SpanPrimary";

export default function Entrepreneurs() {
  return (
    <div className="">
      <section className="contain flex min-h-[100svh] flex-col justify-center">
        <div className="flex justify-between">
          {/* Content */}
          <div className="fadein__right--stagger flex flex-col justify-center gap-9">
            {/* Tile */}
            <h1 className="stagger inline">
              <SpanPrimary>Entrepreneurs </SpanPrimary>
            </h1>
            <p className="stagger head2">Age 8-14</p>
            <p className="max-w-2xl">
              So by the end they’ve experiences the complete Entrepreneurial
              Journey!
            </p>
            <p className="max-w-2xl">
              Every session is a live founder-challenge: kids tackle a different
              step of the 0→1 journey by spotting problems testing ideas, and
              building simple MVPs.
            </p>
            {/* CTA */}
            {/* <Link
              role="button"
              type="button"
              href={""}
              className="button-secondary btn stagger w-fit rounded-full px-7 py-3.5 text-2xl [--i:5]"
            >
              Book A Free Demo
            </Link> */}
          </div>

          {/* Hero Picture */}
          <div
            className={`hero__image relative flex basis-[40%] max-xl:hidden`}
          >
            <Image
              src="/hero-image.png"
              alt="child in program"
              width={529}
              height={592}
              priority
              className=""
            />
          </div>
        </div>
      </section>
      <EnCards />
      <section className="mb-sec-block flex justify-center">
        <div className="relative">
          <EnJourney className="h-auto w-[140%] max-lg:-translate-x-16 md:w-full" />
        </div>
      </section>
    </div>
  );
}
