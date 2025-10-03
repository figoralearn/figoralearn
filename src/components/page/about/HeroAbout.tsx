import CircleDoodle from "@/components/ui/CircleDoodle";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import Link from "next/link";

export default function HeroAbout() {
  return (
    <>
      <section className="contain flex min-h-[100svh] flex-col justify-center">
        <div className="gap-y-sec-block mt-64 flex justify-between max-xl:flex-col">
          {/* Content */}
          <div className="fadein__right--stagger flex flex-col justify-center gap-9">
            {/* Tile */}
            <h1 className="stagger inline">
              About{" "}
              <span className="relative">
                <CircleDoodle
                  stroke="#B2DE59"
                  strokeWidth={1}
                  // fill="#B2DE59"
                  initial={{ pathLength: 0, fillOpacity: -0.3 }}
                  animate={{ pathLength: 1, fillOpacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-0 top-0 -left-1/4 -z-10 w-[160%] -translate-y-1/2"
                />
                <SpanPrimary>Figora</SpanPrimary>
              </span>
              <br />
            </h1>
            <div className="stagger max-w-2xl">
              <p>The world is changing fast.</p>
              <br />
              <p>
                With the shifting Knowledge Landscape of AI, Learners don’t just
                need Information - they need the ability to analyze, adapt, and
                create. <br />
              </p>
              <p>
                True education isn’t about memorizing facts - it’s about
                learning How to Think.”
              </p>
            </div>

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
            className={`hero__image relative flex basis-[40%] flex-col items-center`}
          >
            <Image
              src="/Jyotsna-hero.png"
              alt="JYOTSNA VARKEY"
              width={400}
              height={460}
              priority
              className=""
            />
            <div className="text-primary mt-4 flex flex-col items-center">
              <h2>JYOTSNA VARKEY</h2>
              <p>Founder, Figora</p>
              <div className="flex gap-2">
                <Image
                  src={"/IITM.png"}
                  alt=""
                  unoptimized
                  width={0}
                  height={0}
                  className={`h-auto w-auto`}
                />
                <Image
                  src={"/P&G.png"}
                  alt=""
                  unoptimized
                  width={0}
                  height={0}
                  className={`h-20 w-auto`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-sec-block relative h-3">
        <p className="bg-primary absolute left-1/2 flex w-[110%] origin-center! -translate-x-1/2 -rotate-1 justify-around py-2 text-white">
          Our Mission is to Nurture Curious Agents with the Toolkit to Thrive in
          the World of Tomorrow
        </p>
      </div>
    </>
  );
}
