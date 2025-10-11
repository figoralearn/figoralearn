import Group1000002612 from "@/components/icons/Group1000002612";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
import Image from "next/image";
import Stanford from "@/assets/Stanford.png";
import SpanUnderline from "@/components/ui/SpanUnderline";

export default function Missions() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl">
          How Our <SpanPrimary>Missions</SpanPrimary> Work
        </h2>
        <p>
          Here’s why our Live Missions are a{" "}
          <SpanUnderline color="accent">Breakthrough</SpanUnderline>
        </p>
        <Group1000002612 className="mt-sec-block w-full md:max-w-2xl" />
      </section>
      <Card
        className="contain bg-neutral mt-sec-block p-3 text-center"
        shadow="accent"
      >
        <Card className="p-3" shadow="accent">
          <h3>
            Our Method combines <SpanPrimary>Case Based Learning</SpanPrimary>{" "}
            (CBL) & Project Based Learning (PBL) Backed by research from
          </h3>
          <div className="mt-sec-block2 flex justify-center gap-7">
            {/* <img src="/HBS.png" alt="Harvard Business School" /> */}
            <Image
              src={"/HBS.png"}
              unoptimized
              alt="Harvard Business School"
              width={0}
              height={0}
              className="h-auto w-auto"
            />

            <Image
              src={"/Stanford.png"}
              unoptimized
              alt="Harvard Business School"
              width={0}
              height={0}
              className="h-auto w-auto"
            />
          </div>
        </Card>
      </Card>
    </>
  );
}
