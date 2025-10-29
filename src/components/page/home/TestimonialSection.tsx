import AnimatedSection from "@/components/ui/AnimatedSection";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import { Testimonials, TestimonialType } from "@/components/ui/Testimonials";

const testimonials: TestimonialType[] = [
  {
    title: "Sparks Curiosity",
    quote:
      "My daughter has been attending Figora for a couple months and she absolutely loves it. The sessions are engaging, with fun missions that spark her curiosity and make learning feel like a game. It keeps her excited to join each time. I’ve seen her grow both in confidence and enthusiasm for learning.",
    name: "Vandana Vora",
    designation: "Navya’s Parent",
    src: "/Vandana.png",
  },
  {
    title: "Future-Ready Skills",
    quote:
      "Hridaan finds the missions on Entrepreneurship highly engaging. The way they are structured really makes him think for himself instead of just memorizing. He keeps asking questions about different products and businesses. It’s a great way to build critical thinking and problem solving skills.",
    name: "Hemant Sachdev",
    designation: "Hridaan’s Parent",
    src: "/Hemant.png",
  },
  {
    title: "Deep Thinking",
    quote:
      "After every session Yohan comes running to tell me about the debates and experiments they did. I love how Figora’s sessions stretch his mind - now he deeply reflects on simple things like why people make certain choices, or how systems work. Figora has made thinking itself exciting for him.",
    name: "Stephy James",
    designation: "Yohan’s Parent",
    src: "/Stephy.png",
  },
  {
    title: "Confidence Booster",
    quote:
      "My daughter used to be shy in groups but Figora’s program gave her the confidence to share her ideas. I love how they encourage her to think deeply & look at multiple perspectives. She tries to look at both sides of a situation. It’s wonderful to see that kind of maturity being built through fun missions.",
    name: "Eliza Jacob",
    designation: "Jessica’s Parent",
    src: "/Eliza.png",
  },
];
export default function TestimonialSection() {
  return (
    <>
      <AnimatedSection className="contain gap-sec-block flex items-center justify-around max-lg:flex-col">
        <div>
          <h2 className="max-w-xl">
            Hear It Straight From <SpanPrimary>Our Parents!</SpanPrimary>
          </h2>
        </div>
        <Testimonials testimonials={testimonials} />
      </AnimatedSection>
    </>
  );
}
