import HeroAbout from "@/components/page/about/HeroAbout";
import "./styles.css";
import Mentors from "@/components/page/about/Mentors";
import Facilitators from "@/components/page/about/ Facilitators";

export default function About() {
  return (
    <>
      <HeroAbout />
      <Mentors />
      <Facilitators />
    </>
  );
}
