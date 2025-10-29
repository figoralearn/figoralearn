import RQuot from "@/components/icons/RQout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import SpanSecondary from "@/components/ui/SpanSecondary";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
const companies = [
  { src: "/Stanford_emb.png", alt: "Stanford" },
  { src: "/Goldman.png", alt: "Goldman Sachs" },
  { src: "/Amazon.png", alt: "Amazon" },
  { src: "/BCG.png", alt: "Boston Consulting Group" },
  { src: "/P&G.png", alt: "Procter & Gamble" },
  { src: "/Microsoft.png", alt: "Microsoft" },
  { src: "/IIMB.png", alt: "Indian Institute of Management Bangalore" },
  { src: "/IITB.png", alt: "Indian Institute of Technology Bombay" },
  { src: "/IITM.png", alt: "Indian Institute of Technology Madras" },
];
export default function VidSection() {
  return (
    <>
      <AnimatedSection className="contain flex items-center justify-around max-lg:flex-col">
        <div>
          <h2 className="relative max-w-lg">
            Here’s What Our Wonderful <SpanPrimary>Learners</SpanPrimary> Think:
            <RQuot className="text-accent" />
          </h2>
        </div>
        <div className="mt-sec-block w-3xl max-w-full">
          <YouTubeEmbed
            videoid="ORvaAq1A-Ak"
            params={"controls=0&playsinline=1"}
            style="margin-inline:auto;object-fit:cover;border-radius:1rem"
          />
        </div>
      </AnimatedSection>

      <Card
        className="contain bg-neutral mt-sec-block py-3 text-center"
        shadow="accent"
      >
        <Card className="p-3" shadow="accent">
          <h3>
            Backed by <SpanPrimary>Learnings</SpanPrimary> from
          </h3>
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
    </>
  );
}
