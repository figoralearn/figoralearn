import RQuot from "@/components/icons/RQout";
import WEF from "@/components/icons/WEF";
import Card from "@/components/ui/Card";
import { ReactNode } from "react";

function InCard({ children }: { children: ReactNode }) {
  return (
    <Card className="shadow-accent flex w-xl items-center p-3 text-center shadow">
      {children}
    </Card>
  );
}

export default function Stats() {
  return (
    <section className="contain card bg-neutral shadow-accent mt-0 p-4 shadow">
      <div className="flex items-center justify-between gap-x-4">
        <InCard>
          <p>
            <span className="text-primary relative inline-block text-6xl font-bold">
              <RQuot className="text-accent absolute -left-8" />
              65%
            </span>{" "}
            <br /> <br /> of kids in school today will work in jobs that
            don&apos;t even yet exist.&quot; The world is changing fast
          </p>
        </InCard>
        <WEF className="max-lg:hidden" />
        <InCard>
          <p>
            <span className="text-primary text-6xl font-bold">65%</span> <br />{" "}
            <br /> of kids in school today will work in jobs that don&apos;t
            even yet exist. The world is changing fast
          </p>
        </InCard>
      </div>
    </section>
  );
}
