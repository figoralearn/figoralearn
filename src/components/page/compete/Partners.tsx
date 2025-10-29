import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import Image from "next/image";
const companies = [
  { src: "/partner-1.png", alt: "Harvard University", class: "" },
  { src: "/partner-2.png", alt: "Harvard University", class: "" },
  { src: "/partner-3.png", alt: "MIT", class: "w-20" },
  { src: "/partner-4.png", alt: "Cambridge University", class: "" },
  { src: "/partner-5.png", alt: "University of California", class: "" },
  { src: "/partner-6.png", alt: "University of Oxford", class: "w-24" },
  { src: "/partner-7.png", alt: "University of Oxford", class: "" },
];
export default function Partners() {
  return (
    <AnimatedSection>
      <Card
        className="contain bg-neutral mt-sec-block py-3 text-center"
        shadow="accent"
      >
        <Card className="p-3" shadow="accent">
          <h2>
            In <SpanPrimary>Partnership</SpanPrimary> With
          </h2>
          <div className="mt-sec-block2 flex flex-wrap items-center justify-center gap-7">
            {companies.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                unoptimized
                alt={image.alt}
                width={0}
                height={0}
                className={`h-auto ${image.class ? image.class : "w-32"}`}
              />
            ))}
          </div>
        </Card>
      </Card>
    </AnimatedSection>
  );
}
