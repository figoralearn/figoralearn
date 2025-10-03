import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import SpanUnderline from "@/components/ui/SpanUnderline";
import Image from "next/image";
const goals = [
  { src: "/Health1.png", alt: "Stanford" },
  { src: "/Health2.png", alt: "Goldman Sachs" },
  { src: "/Health3.png", alt: "Amazon" },
  { src: "/Health4.png", alt: "Boston Consulting Group" },
];
export default function ABT() {
  return (
    <section className="contain text-center">
      <h2>
        About the{" "}
        <SpanUnderline color="accent">
          <SpanPrimary>Competition</SpanPrimary>
        </SpanUnderline>
      </h2>

      <div className="mt-sec-block2 space-y-sec-block2">
        <p>
          WYEL is a global, online entrepreneurship tournament for school teams
          to solve meaningful, real-world problems. It exists to help students
          practice the real skills of entrepreneurship: critical thinking,
          design thinking, creativity, collaboration, and clear communication.
        </p>
        <p>
          We believe entrepreneurial thinking should start young, giving
          students a structured way to explore the world and build solutions
          together.
        </p>
      </div>

      <Card
        className="contain bg-neutral mt-sec-block py-3 text-center"
        shadow="accent"
      >
        <Card className="p-3" shadow="accent">
          <h2>
            2025 Theme:<SpanPrimary> Health & Learning</SpanPrimary>
          </h2>
          <div className="mt-sec-block2 flex flex-wrap items-center justify-center gap-7">
            {goals.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                unoptimized
                alt={image.alt}
                width={0}
                height={0}
                className="h-auto w-28 md:w-32"
              />
            ))}
          </div>
        </Card>
      </Card>
    </section>
  );
}
