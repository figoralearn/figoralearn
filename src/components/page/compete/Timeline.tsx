import AnimatedSection from "@/components/ui/AnimatedSection";
import TimelineSvg from "./TimelineSvg";

export default function Timeline() {
  return (
    <AnimatedSection className="contain">
      <h2 className="text-center">Timeline</h2>
      <TimelineSvg className="mt-sec-block mx-auto h-auto w-full max-w-2xl translate-x-1 md:translate-x-1/12" />
    </AnimatedSection>
  );
}
