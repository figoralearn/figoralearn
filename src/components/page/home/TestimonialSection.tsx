import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import { Testimonials } from "@/components/ui/Testimonials";

const testimonials = [
  {
    title: "Transformative Experience",
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "",
  },
  {
    title: "Exceptional Flexibility",
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "",
  },
  {
    title: "Outstanding Support",
    quote:
      "The customer support team has been incredibly responsive and helpful. They truly care about their clients' success.",
    name: "Emily Johnson",
    designation: "Marketing Director at Creative Solutions",
    src: "",
  },
  {
    title: "Game Changer",
    quote:
      "This platform has revolutionized the way we operate. The efficiency gains have been remarkable.",
    name: "David Lee",
    designation: "Operations Manager at NextGen Tech",
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
