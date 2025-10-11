import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";

type Round = {
  heading: string;
  sub: string;
  desc: string;
  link?: { href: string; label: string };
};

const rounds: Round[] = [
  {
    heading: "Round 1",
    sub: "Entrepreneurship Quiz",
    desc: "Covers Problem Identification, Ideation, Decision Making, First Principle Thinking, etc.",
    link: {
      href: "https://drive.google.com/file/d/1mVkTbTTyRCPJpmTRVB2FRDoCMIkIZwjg/view?usp=sharing",
      label: "Our Free Guide Available for Download",
    },
  },
  {
    heading: "Round 2",
    sub: "Business Proposal",
    desc: "Identify a problem and create a Business Proposal and a Video Pitch for it",
    link: {
      href: "https://drive.google.com/file/d/1mVkTbTTyRCPJpmTRVB2FRDoCMIkIZwjg/view?usp=sharing",
      label: "Free Business Plan Template for Download",
    },
  },
  {
    heading: "Round 3",
    sub: "Pitching Competition",
    desc: "Short‑listed teams present a Pitch Deck (6–8 slides) live to the jury and audience and take Q&A.",
    // link: { href: "#", label: "Followed by an award ceremony" },
  },
];

export default function ThreeRounds() {
  return (
    <section className="contain">
      <h2 className="text-center">
        There are <SpanPrimary>3 Rounds</SpanPrimary>
      </h2>

      <div className="mt-sec-block grid grid-cols-1 gap-6 lg:grid-cols-3">
        {rounds.map((r, idx) => (
          <Card
            key={idx}
            className="border-accent/30 border bg-white p-6"
            shadow="accent"
          >
            <h3 className="text-3xl font-semibold">{r.heading}</h3>
            <p className="mt-sec-block2">{r.sub}</p>
            <p
              // className={idx === 0 ? "mt-sec-block" : "mt-sec-block2"}
              className="mt-sec-block2"
            >
              {r.desc}
            </p>
            {r.link && (
              <a
                href={r.link.href}
                className="mt-sec-block2 para text-accent inline-block underline"
              >
                {r.link.label}
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
