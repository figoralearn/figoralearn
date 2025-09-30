import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";

type Group = {
  gradeRange: string;
  label: string;
  img: string; // Added img property
};

const groups: Group[] = [
  { gradeRange: "3–4", label: "Explorer", img: "/images/explorer.png" }, // Added img path
  { gradeRange: "5–6", label: "Innovator", img: "/images/innovator.png" }, // Added img path
  { gradeRange: "7–8", label: "Trailblazer", img: "/images/trailblazer.png" }, // Added img path
];

export default function Groups() {
  return (
    <section className="contain">
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
            className="border-accent/30 flex h-52 flex-col items-center justify-center border bg-white p-10 text-center"
          >
            <h3 className="font-[BodyFont]">{g.label}</h3>
            <Image
              unoptimized
              height={0}
              width={0}
              alt=""
              src={g.img}
              className="h-24 w-auto"
            />
            <p>{g.gradeRange}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
