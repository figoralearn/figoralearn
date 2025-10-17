import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import Image from "next/image";
const companies = [
  { src: "/Stanford_emb.png", alt: "Stanford" },
  { src: "/Goldman.png", alt: "Goldman Sachs" },
  { src: "/BCG.png", alt: "Boston Consulting Group" },
  { src: "/P&G.png", alt: "Procter & Gamble" },
  { src: "/Microsoft.png", alt: "Microsoft" },
  { src: "/IIMB.png", alt: "Indian Institute of Management Bangalore" },
  { src: "/IITB.png", alt: "Indian Institute of Technology Bombay" },
  { src: "/IITM.png", alt: "Indian Institute of Technology Madras" },
  { src: "/penn.png", alt: "Indian Institute of Management Bangalore" },
  { src: "/isb.png", alt: "Indian Institute of Technology Bombay" },
  { src: "/jp.png", alt: "Indian Institute of Technology Madras" },
];

export default function Mentors() {
  return (
    <section>
      <Card className="contain bg-neutral py-3 text-center" shadow="accent">
        <Card className="p-3 px-10" shadow="accent">
          <h2>
            Backed by <SpanPrimary>Learnings</SpanPrimary> from
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
                className="h-auto w-auto max-md:w-16"
              />
            ))}
          </div>
        </Card>
      </Card>
    </section>
  );
}
