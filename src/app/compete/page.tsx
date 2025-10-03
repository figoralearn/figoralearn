import ABT from "@/components/page/compete/ABT";
import BuildSkills from "@/components/page/compete/BuildSkills";
import HeroCompete from "@/components/page/compete/HeroCompete";
import Participate from "@/components/page/compete/Participate";
import Rules from "@/components/page/compete/Rules";
import Theme from "@/components/page/compete/Partners";
import ThreeRounds from "@/components/page/compete/ThreeRounds";
import Groups from "@/components/page/home/Groups";
import FAQ from "@/components/page/home/FAQ";
import Timeline from "@/components/page/compete/Timeline";

export default function Compete() {
  return (
    <>
      <HeroCompete />
      <ABT />
      <Participate />
      <Groups />
      <Timeline />
      <ThreeRounds />
      <Theme />
      <Rules />
      <BuildSkills />
      <FAQ />
    </>
  );
}
