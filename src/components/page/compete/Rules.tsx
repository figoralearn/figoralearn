import ArrowInCircle from "@/components/icons/ArrowInCircle";
import RightArrowDoodle from "@/components/icons/RightArrowDoodle";
import ScrollToDemoButton from "@/components/ui/ScrollToDemoButton";
import SpanPrimary from "@/components/ui/SpanPrimary";

export default function Rules() {
  return (
    <section className="contain">
      <h2>
        Rules & <SpanPrimary>Guidelines</SpanPrimary>
      </h2>

      <ol className="mt-sec-block2 space-y-sec-block2 para list-inside list-decimal">
        <li>
          teams of 2-3 from the same school; a student may join one team only.
          Each participant must register individually with the same Team Name.
        </li>
        <li>
          Originality & Work Period – Submit new work created for this edition;
          prior projects must be disclosed and substantially rebuilt. You may
          reuse open‑source or third‑party assets/tools where licenses
          allow—credit them in your plan or deck.
        </li>
        <li>
          AI & Assistance – AI tools are allowed for brainstorming, drafting,
          design, or translation with disclosure. Final choices and claims must
          be the team’s own. Undisclosed AI‑generated work or plagiarism may be
          disqualified.
        </li>
        <li>
          Safety, Privacy & Ethics – No medical claims or treatments. Focus on
          access, reminders, logistics, education, and healthy habits. If you
          collect any feedback, keep it voluntary, anonymous, and
          age‑appropriate. For surveys involving minors outside your team,
          obtain teacher/guardian permission. Avoid storing personal/sensitive
          data; blur faces in photos; no surveillance features.
        </li>
        <li>
          Conduct – Harassment‑free, inclusive behaviour is mandatory. Be
          respectful in all online spaces.
        </li>
        <li>
          Intellectual Property – Teams own what they create. By submitting, you
          grant WYEL permission to showcase your project (with credit) in event
          highlights and on our website.
        </li>
        <li>
          Judging & Awards – Independent jury, decisions are final. We recognise
          band‑wise winners and Top‑Performing Schools.
        </li>
      </ol>

      <div className="mt-sec-block flex w-full justify-center">
        <ScrollToDemoButton
          href="https://unstop.com/competitions/1563749/register"
          className="relative mx-auto mt-5 mb-12 border-2 border-white bg-[#a9d346] text-white"
        >
          Register Now
        </ScrollToDemoButton>{" "}
      </div>
    </section>
  );
}
