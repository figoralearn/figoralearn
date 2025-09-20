import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";

export default function Footer() {
  return (
    <footer className="pt-sec-block bg-primary text-white">
      <div className="contain border-accent flex justify-between border-t-2 py-8">
        <div className="flex items-center gap-4">
          <div className="bg-red size-14" />
          <p className="">
            All content copyright © to Figora 2025. <br /> Terms of Use &
            Privacy Policy
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p>Become a part of Our Community</p>
          <div className="flex gap-1">
            <Instagram />
            <LinkedIn />
          </div>
        </div>
      </div>
    </footer>
  );
}
