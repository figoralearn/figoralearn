"use client";
import HomeHero from "@/components/page/home/HeroHome";
import "./styles.css";
import Stats from "@/components/page/home/Stats";
import Capstone from "@/components/page/home/Capstone";
import Programs from "@/components/page/home/Programs";
import Missions from "@/components/page/home/Missions";
import Projects from "@/components/page/home/Projects";
import TestimonialSection from "@/components/page/home/TestimonialSection";
import VidSection from "@/components/page/home/VidSection";
import FAQ from "@/components/page/home/FAQ";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  // useLayoutEffect(() => {
  //   redirect("/compete");
  // }, []);
  return <></>;
  // return (
  //   <>
  //     <HomeHero />
  //     <Stats />
  //     <Capstone />
  //     <Programs />
  //     <Missions />
  //     <Projects />
  //     <TestimonialSection />
  //     <VidSection />
  //     <FAQ />
  //   </>
  // );
}
