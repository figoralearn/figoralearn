import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import { Testimonials } from "@/components/ui/Testimonials";

const testimonials = [
  {
    title: "Highly Engaging",
    quote:
      "My daughter Navya has been attending Figora for a couple of months and she absolutely loves it. The sessions are engaging, with fun missions and activities that spark her curiosity and make learning feel like a game. It keeps her excited and motivated to join each time. It’s been a great experience, and I’ve seen her grow both in confidence and enthusiasm for learning.",
    name: "Vandana Vora",
    designation: "Navya’s Parent",
    src: "",
  },
  {
    title: "Future-Ready Skills",
    quote:
      "Hridaan finds the missions on Entrepreneurship highly engaging. The way the missions are structured really makes him think for himself instead of just memorizing. He keeps asking questions about different products and businesses. It's a great way to build critical thinking and problem-solving skills. He’s learning to think critically and come up with original ideas.",
    name: "Hemant Sachdev",
    designation: "Hridaan’s Parent",
    src: "",
  },
  {
    title: "Deep Thinking",
    quote:
      "After every session Yohan comes running after class to tell me about the debates and experiments they did. I love how Figora’s sessions stretch his mind. What stands out most is how deeply he now reflects on simple things like why people make certain choices, or how systems work. Figora has made thinking itself exciting for him.",
    name: "Stephy James",
    designation: "Yohan’s Parent",
    src: "",
  },
  {
    title: "Confidence Booster",
    quote:
      "My daughter Jessica used to be shy in groups but Figora’s program gave her the confidence to share her ideas. I love how they encourage her to think deeply & look at multiple perspectives instead of rushing to an answer. The questions she asks now are very thoughtful. She tries to look at both sides of a situation. It’s wonderful to see that kind of maturity being built through fun missions.",
    name: "Eliza Jacob",
    designation: "Jessica’s Parent",
    src: "",
  },
];
export default function TestimonialSection() {
  return (
    <>
      <section className="contain gap-sec-block flex items-center justify-around max-lg:flex-col">
        <div>
          <h2 className="max-w-xl">
            Hear it Straight from <SpanPrimary>Our Parents!</SpanPrimary>
          </h2>
        </div>
        <Testimonials testimonials={testimonials} />
      </section>
    </>
  );
}
