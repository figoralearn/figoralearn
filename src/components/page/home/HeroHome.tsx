import CircleDoodle from "@/components/ui/CircleDoodle";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="contain flex min-h-[100vh] flex-col justify-center">
      <div className="flex">
        {/* Content */}
        <div className="fadein__right--stagger flex flex-col gap-9">
          {/* Tile */}
          <h1 className="stagger inline text-8xl font-semibold">
            Shaping{" "}
            <span className="relative">
              <CircleDoodle
                stroke="#B2DE59"
                strokeWidth={1}
                fill="#B2DE59"
                initial={{ pathLength: 0, fillOpacity: -0.3 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 top-0 -left-1/4 -z-10 w-[160%] -translate-y-1/2"
              />
              Bold
            </span>
            <br />
            <span className="text-primary"> Thinkers & Leaders.</span>
          </h1>
          <p className="stagger max-w-2xl text-3xl">
            Weekly Missions on Real World Topics so that your child (Grade 3-8)
            can learn Real World Skills
          </p>
          {/* CTA */}
          <Link
            role="button"
            type="button"
            href={""}
            className="button-primary btn stagger w-fit rounded-full px-7 py-3.5 text-2xl [--i:5]"
          >
            Book A Free Demo
          </Link>
        </div>

        {/* Hero Picture */}
        <div></div>
      </div>
    </section>
  );
}
