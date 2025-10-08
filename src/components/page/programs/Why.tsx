import SpanPrimary from "@/components/ui/SpanPrimary";

export default function Why() {
  return (
    <section>
      <h2 className="max-w-5xl">
        Why learning <SpanPrimary>Skills Matters:</SpanPrimary>
      </h2>

      <div className="mt-sec-block">
        <p>
          The world is changing faster than ever – AI, automation, climate.{" "}
          <span className="bg-accent">Education isn’t keeping up.</span>
        </p>
        <p>
          Whether your child becomes an entrepreneur, CEO or changemaker –
          success comes from thinking critically, solving problems creatively
          and leading others.
        </p>
        <p>
          These are all skills. Learnable skills. But not from textbooks.
          They’re developed by tackling real challenges with other motivated
          learners.
        </p>
        <p>
          That’s exactly{" "}
          <span className="bg-accent">what Figora missions do.</span> Small
          groups of students collaborate on genuine, complex problems that
          matter. Through this process, they learn to structure their thinking,
          articulate their ideas with confidence, and work effectively with
          others to create real solutions.
        </p>
      </div>
    </section>
  );
}
