import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";

type Group = {
  gradeRange: string;
  label: string;
  img: string; // Added img property
};

const groups: Group[] = [
  { gradeRange: "3-5", label: "Explorer", img: "explorer.png" },
  { gradeRange: "6-8", label: "Innovator", img: "innovator.png" },
  { gradeRange: "9-12", label: "Trailblazer", img: "trailblazer.png" },
];

export default function Groups() {
  return (
    <AnimatedSection className="contain">
      <h2 className="text-center">
        {/* The <SpanPrimary>Competition</SpanPrimary> participants
        <br /> will be divided into <SpanPrimary>3 Groups:</SpanPrimary> */}
        3 Age Buckets
      </h2>

      <div className="mt-sec-block grid grid-cols-1 gap-6 md:grid-cols-3">
        {groups.map((g, idx) => (
          <Card
            key={idx}
            shadow="accent"
            className="border-accent/30 flex flex-col items-center justify-center gap-2 border bg-white p-10 text-center"
          >
            <h3 className="font-[BodyFont]">{g.label}</h3>
            <Image
              unoptimized
              height={0}
              width={0}
              alt=""
              src={g.img}
              className="h-36 w-auto md:h-auto"
            />
            <p>Grades {g.gradeRange}</p>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
