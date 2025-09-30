import Link from "next/link";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import FormSection from "./FormSection";
import Image from "next/image";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <>
      <FormSection />
      <footer className="pt-sec-block bg-primary text-white">
        <div className="contain border-accent flex justify-between border-t-2 py-8">
          <div className="flex gap-4 max-lg:flex-col lg:items-center">
            <Link href={"/"} className={`relative ml-2`}>
              {/* <Image
                unoptimized
                height={0}
                width={0}
                alt="Figora logo"
                src={"/Logo.png"}
                className="h-24 w-auto"
              /> */}
              <Logo className="size-28" />
            </Link>
            <p className="">
              All content copyright © to Figora 2025. <br /> Terms of Use &
              Privacy Policy
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <p>Become a part of Our Community</p>
            <div className="flex gap-1">
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
