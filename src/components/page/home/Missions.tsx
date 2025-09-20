import Group1000002612 from "@/components/icons/Group1000002612";
import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";

export default function Missions() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl">
          How our <SpanPrimary>Missions</SpanPrimary> work
        </h2>
        <p>Here’s why our Live Missions are a Breakthrough</p>
        <Group1000002612 className="mt-sec-block" />
      </section>
      <Card
        className="contain bg-neutral mt-sec-block py-3 text-center"
        shadow="accent"
      >
        <Card className="p-3" shadow="accent">
          <h3>
            Our Method combines <SpanPrimary>Case Based Learning</SpanPrimary>{" "}
            (CBL) & Project Based Learning (PBL) Backed by research from
          </h3>
          <div className="mt-sec-block2 flex gap-7"></div>
        </Card>
      </Card>
    </>
  );
}
