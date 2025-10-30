import CircleDoodle from "@/components/ui/CircleDoodle";
import Image from "next/image";
import Link from "next/link";
import EnJourney from "./EnJourney";
import EnCards from "./EnCards";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Card from "@/components/ui/Card";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";
import { MouseEventHandler } from "react";
import EnJourneyMob from "./EnJourneyMob";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GeotrackedPrice from "@/app/programs/GeotrackedPrice";

interface EntrepreneursProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Entrepreneurs({ setOpen }: EntrepreneursProps) {
  return (
    <div className="pb-section">
      <AnimatedSection className="contain flex min-h-[100svh] flex-col justify-center">
        <div className="mt-0 flex justify-between">
          {/* Content */}
          <div className="fadein__right--stagger flex flex-col justify-center">
            {/* Tile */}
            <h1 className="stagger inline">
              <SpanPrimary>Entrepreneurs </SpanPrimary>
            </h1>
            <p className="stagger head2">Age 8-14</p>
            <div className="flex gap-2">
              <p className="border-accent shadow-accent inline rounded-full border bg-white px-3 text-xl shadow">
                6 Months
              </p>
              <p className="border-accent shadow-accent inline rounded-full border bg-white px-3 text-xl shadow">
                26 sessions
              </p>
            </div>
            <p className="mt-sec-block max-w-2xl">
              Every session is a live founder-challenge: kids tackle a different
              step of the 0→1 journey by spotting problems testing ideas, and
              building simple MVPs.
            </p>
            <p className="mt-sec-block2 max-w-2xl">
              So by the end they’ve experiences the complete Entrepreneurial
              Journey!
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
              src="/entrepreneurs-hero.png"
              alt="child in program"
              unoptimized
              width={0}
              height={0}
              priority
              className="aspect-auto h-auto w-full"
            />
          </div>
        </div>
      </AnimatedSection>
      <EnCards />
      <AnimatedSection className="mb-sec-block flex justify-center">
        <div className="relative">
          <EnJourney className="hidden h-auto w-[140%] max-lg:-translate-x-16 md:block md:w-full" />
          <EnJourneyMob className="h-auto w-full md:hidden" />
        </div>
      </AnimatedSection>

      {/* banner */}
      <AnimatedSection>
        <Card
          className="contain bg-neutral mt-sec-block py-3 text-center"
          shadow="accent"
        >
          <Card
            className="flex items-center justify-around gap-4 p-3 py-5 max-md:flex-col"
            shadow="accent"
          >
            <p className="max-w-3xl">
              “Bringing Leadership in Action - Learners become the leaders,
              making decisions, handling crises, and negotiating on the global
              stage.”
            </p>
            <Card className="bg-primary flex min-w-fit gap-2 p-3">
              <div className="flex flex-col">
                <s>
                  <GeotrackedPrice priceIN="24,000" priceUS="550" />
                </s>
                <GeotrackedPrice priceIN="20,000" priceUS="450" />
              </div>
              <div
                onClickCapture={() => {
                  setOpen(false);
                }}
              >
                <ScrollToDemoButton>Enroll</ScrollToDemoButton>
              </div>
            </Card>
          </Card>
        </Card>
      </AnimatedSection>
    </div>
  );
}
