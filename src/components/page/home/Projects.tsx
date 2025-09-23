import RightArrowDoodle from "@/components/icons/RightArrowDoodle";
import Card from "@/components/ui/Card";
import SpanSecondary from "@/components/ui/SpanSecondary";
import SpanUnderline from "@/components/ui/SpanUnderline";
import Image from "next/image";
import { title } from "process";

const points = [
  "Build Hands-on Projects",
  "Learn & use AI Tools",
  "Pitch to Real Founders & Leaders",
];
const images = [
  {
    img: "",
    title: "Start a Venture",
  },
  {
    img: "",
    title: "Pitch your Idea",
  },
  {
    img: "",
    title: "Give a TED talk",
  },
  {
    img: "",
    title: "Launch a Social Campaign",
  },
];
const changes = ["Think Memorize", "Create Imitate", "Lead Follow"];
export default function Projects() {
  return (
    <section className="bg-primary pt-sec-block pb-sec-block2 w-full max-w-[unset]">
      <div className="contain flex justify-around">
        <div className="flex max-w-2xl flex-col justify-center text-white">
          <h2>
            <SpanSecondary>Capstone</SpanSecondary> Projects
          </h2>
          <p className="">
            In all our courses, you apply your learnings with impactful
            <SpanUnderline color="accent"> Real World Projects</SpanUnderline>
          </p>
          <div className="mt-sec-block2 gap-sec-block3 flex flex-col">
            {points.map((point, idx) => (
              <div className="flex items-center gap-3" key={idx}>
                <span className="text-7xl font-bold opacity-30">
                  0{idx + 1}
                </span>
                <Card
                  shadow="accent"
                  className={`rounded-md bg-white px-3 text-black ${(idx + 1) % 2 === 0 && "-order-1"}`}
                >
                  <p>{point}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="relative size-52 rounded-tl-2xl rounded-br-2xl">
                <Image
                  src={image.img}
                  fill
                  alt={image.title}
                  className="object-cover object-center"
                />
              </div>
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contain mt-sec-block flex justify-between">
        {changes.map((change, index) => {
          const arr = change.split(" ");
          return (
            <div
              key={index}
              className="font-league-spartan flex items-center gap-3 text-5xl font-medium"
            >
              <span className="text-white">{arr[0]}</span>
              <RightArrowDoodle />
              <span className="">{arr[1]}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
