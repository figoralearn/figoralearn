import SpanPrimary from "@/components/ui/SpanPrimary";
import DNASVG from "./DNASVG";
import Image from "next/image";

const images = {
  g1: [
    { src: "", imgclass: "h-64!" },
    { src: "", imgclass: "" },
  ],
  g2: [{ src: "", imgclass: "" }],
};
export default function DNA() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h2 className="max-w-3xl">
        <SpanPrimary>Leadership DNA: </SpanPrimary>
        Our Core Values
      </h2>
      <p>
        Great leaders aren’t born, they’re built. At Figora, we nurture the
        traits that form the DNA of tomorrow’s thinkers and changemakers
      </p>
      <div className="mt-sec-block flex w-full flex-col items-center">
        <DNASVG className="h-auto w-full max-w-lg lg:hidden" />
        <div className="max-lg:mt-sec-block2 flex w-full justify-around">
          <div className="flex flex-col gap-4">
            {images.g1.map((image, index) => (
              <div
                key={index}
                className={`shadow-accent relative size-40 max-w-full overflow-hidden rounded-tl-4xl rounded-br-4xl shadow md:size-52 ${image.imgclass}`}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.imgclass}
                  className={`object-cover object-center ${image.imgclass}`}
                />
              </div>
            ))}
          </div>
          <DNASVG className="h-auto w-full max-w-lg max-lg:hidden" />
          <div className="flex flex-col gap-4">
            {images.g1.map((image, index) => (
              <div
                key={index}
                className={`shadow-accent relative size-40 max-w-full overflow-hidden rounded-tl-4xl rounded-br-4xl shadow md:size-52 ${image.imgclass}`}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.imgclass}
                  className={`object-cover object-center`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
