import Card from "@/components/ui/Card";
import SpanPrimary from "@/components/ui/SpanPrimary";
type Card = {
  title: string;
  tag: string;
  link: string;
  className?: string; // Proper type for React's className attribute
};

const cards: Card[] = [
  {
    title: "Entrepreneurs",
    tag: "Build a Venture",
    link: "/entrepreneurs",
    className: "bg-purple-500",
  },
  {
    title: "Future Leaders",
    tag: "Run a Country",
    link: "/future-leaders",
    className: "bg-yellow",
  },
  {
    title: "EQ Artists",
    tag: "Build EQ through the Arts",
    link: "/eq-artists",
    className: "bg-accent",
  },
  {
    title: "Story-tellers",
    tag: "Give a TED Talk",
    link: "/story-tellers",
    className: "bg-red",
  },
  {
    title: "Science Hackers",
    tag: "Conduct your own Experiments",
    link: "/science-hackers",
    className: "bg-primary",
  },
];
export default function Programs() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h2 className="max-w-3xl">
        Our <SpanPrimary>Programs</SpanPrimary>
      </h2>
      <p>
        Unique, Inter-disciplinary Missions on 21st century subjects that cover
        Psychology, Economics, Business, Public Policy, Design Thinking and
        more.
      </p>

      <div className="mt-sec-block flex w-full flex-wrap justify-center-safe gap-4">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className={`${card.className} h-72 w-full p-3 text-left text-white md:max-w-96`}
          >
            <h3 className="font-semibold">{card.title}</h3>
            <p className="tag">{card.tag}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
