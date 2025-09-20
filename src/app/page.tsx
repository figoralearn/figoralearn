import HomeHero from "@/components/page/home/HeroHome";
import "./styles.css";
import Stats from "@/components/page/home/Stats";
import Capstone from "@/components/page/home/Capstone";
import Programs from "@/components/page/home/Programs";
import Missions from "@/components/page/home/Missions";
import Projects from "@/components/page/home/Projects";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Stats />
      <Capstone />
      <Programs />
      <Missions />
      <Projects />
      <div className="h-[100vh] w-full" />
    </>
  );
}
