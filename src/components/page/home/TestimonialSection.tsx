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
    // src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exceptional Flexibility",
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    // src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Outstanding Support",
    quote:
      "The customer support team has been incredibly responsive and helpful. They truly care about their clients' success.",
    name: "Emily Johnson",
    designation: "Marketing Director at Creative Solutions",
    // src: "https://images.unsplash.com/photo-1506794778162-365b8a8b7b8b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Game Changer",
    quote:
      "This platform has revolutionized the way we operate. The efficiency gains have been remarkable.",
    name: "David Lee",
    designation: "Operations Manager at NextGen Tech",
    // src: "https://images.unsplash.com/photo-1517841905240-4729888e0b0d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
