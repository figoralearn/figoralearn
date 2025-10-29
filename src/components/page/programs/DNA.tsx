import SpanPrimary from "@/components/ui/SpanPrimary";
import DNASVG from "./DNASVG";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const images = {
  g1: [
    { src: "/dna-1.jpg", imgclass: "h-64!", img: "" },
    { src: "/dna-2.jpg", imgclass: "", img: "" },
  ],
  g2: [
    {
      src: "/dna-3.jpg",
      imgclass: "h-64!",
      img: "[object-position:80%_50%]!",
    },
    { src: "/dna-4.jpg", imgclass: "", img: "" },
  ],
};
export default function DNA() {
  return (
    <AnimatedSection className="flex flex-col items-center justify-center text-center">
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
                  className={`object-cover object-center ${image.img}`}
                />
              </div>
            ))}
          </div>
          <DNASVG className="h-auto w-full max-w-lg max-lg:hidden" />
          <div className="flex flex-col gap-4">
            {images.g2.map((image, index) => (
              <div
                key={index}
                className={`shadow-accent relative size-40 max-w-full overflow-hidden rounded-tl-4xl rounded-br-4xl shadow md:size-52 ${image.imgclass}`}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.imgclass}
                  className={`object-cover object-center ${image.img}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
