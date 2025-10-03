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
  const statsData = [
    {
      quote: "65%",
      description:
        "of kids in school today will work in jobs that don't even yet exist. The world is changing fast",
    },
    {
      quote: "#1",
      description:
        "of kids in school today will work in jobs that don't even yet exist. The world is changing fast",
    },
  ];

  return (
    <section className="contain card bg-neutral shadow-accent mt-0 p-4 shadow">
      <div className="flex flex-col">
        <WEF className="mx-auto mb-7 h-24 w-auto lg:hidden" />
        <div className="flex items-center justify-between gap-x-4">
          {statsData.map((stat, index) => (
            <>
              {index === 1 && <WEF className="max-lg:hidden" />}
              <InCard key={index}>
                <p>
                  <span className="text-primary relative inline-block text-6xl font-bold">
                    <RQuot className="text-accent absolute -left-8" />
                    {stat.quote}
                  </span>{" "}
                  <br /> <br /> {stat.description}
                </p>
              </InCard>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
