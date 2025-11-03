import HeroAbout from "@/components/page/about/HeroAbout";
import "./styles.css";
import Backed from "@/components/page/about/Backed";
import Facilitators from "@/components/page/about/ Facilitators";
import Mentors from "@/components/page/about/Mentors";

export default function About() {
  return (
    <>
      <HeroAbout />
      <Backed />
      <Facilitators />
      {/* <Mentors /> */}
    </>
  );
}
