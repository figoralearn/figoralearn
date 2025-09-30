"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import DropdownArrowIcon from "../icons/DropdownArrowIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import SelectWrapper from "./SelectWraper";
import { getLinks } from "./service";
import "./styles.css";
import { LinkItem, MarkerProps } from "./type";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Logo from "../icons/Logo";

function Marker({
  children,
  link,
  className: className,
  onClick,
}: MarkerProps) {
  const path = usePathname();
  const root = path.split("/")[2];
  return (
    <div
      onClick={onClick}
      className={` ${
        className ? className : "items_center justify_center flex"
      } marker ${
        root === link.split("/")[1] ? "marker--active" : ""
      } cursor_point relative transition`}
    >
      {children}
    </div>
  );
}
export default function Header() {
  const path = usePathname();
  const links: LinkItem[] = getLinks();
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hasMounted, setHasMounted] = useState(false); // track initial animation
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobActiveDropdown, setMobActiveDropdown] = useState<number | null>(
    null,
  );

  useEffect(() => {
    setMenuOpen(false);
    setMobActiveDropdown(null);
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
    setMobActiveDropdown(null);
  }, [path]);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      if (!hasMounted) return; // ignore scroll until first animation is done

      if (scroll > lastScroll + 7) {
        setHidden(true); // scrolling down
      } else if (scroll < lastScroll - 10) {
        setHidden(false); // scrolling up
      }
      setLastScroll(scroll);
    };

    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, lastScroll, hasMounted]);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: hasMounted ? 0.1 : 2,
      }}
      onAnimationComplete={() => setHasMounted(true)} // after first entrance
      className={`fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 px-3 pt-8`}
    >
      <header
        className={`shadow-accent contain bg-primary items_center flex w-full flex-col rounded-[5rem] px-3 text-white shadow transition-all duration-500 ${
          menuOpen && "rounded-2xl!"
        }`}
      >
        <div className={`flex h-20 w-full items-center justify-between py-3.5`}>
          <Link href={"/"} className={`relative ml-2`}>
            <Logo className="size-16" />
          </Link>

          <nav className={`header__nav flex`}>
            {links.map((link, index) =>
              link.sub ? (
                <SelectWrapper
                  key={index}
                  open={activeDropdown === index}
                  setOpen={(state: boolean) =>
                    setActiveDropdown(state ? index : null)
                  }
                >
                  <Marker
                    link={link.link}
                    className="flex h-full items-center justify-center"
                  >
                    <div>
                      <p>{link.title}</p>
                    </div>
                    <DropdownArrowIcon />
                  </Marker>
                  <>
                    {link.sub.map((subLink) => (
                      <Link
                        href={`${link.link}/${subLink.link}`}
                        key={subLink.link}
                        className={`txt_default header__menu-item`}
                      >
                        <p>{subLink.title}</p>
                      </Link>
                    ))}
                  </>
                </SelectWrapper>
              ) : (
                <Marker key={index} link={link.link}>
                  <Link href={link.link} className="p-3 text-center">
                    <p>{link.title}</p>
                  </Link>
                </Marker>
              ),
            )}
          </nav>

          {/* CTA */}
          <Link
            href={"/#demo"}
            className={``}
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("demo");
              if (!target) return;
              const headerEl = document.querySelector(
                ".header__container",
              ) as HTMLElement | null;
              const headerHeight = headerEl
                ? headerEl.getBoundingClientRect().height
                : 80;
              const extraTopPadding = 50; // matches pt-8 on the fixed wrapper
              const offset = -(headerHeight + extraTopPadding);
              lenis?.scrollTo(target, {
                offset,
                duration: 1.5,
              });
            }}
          >
            <button
              className={`header__cta btn button-secondary flex h-full rounded-full px-7 py-3.5`}
            >
              Book Demo
            </button>
          </Link>

          {/* Mobile Menu button */}
          <div
            className={`header__menu-button bg-secondary items-center justify-center`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {!menuOpen ? <HamburgerIcon /> : <CloseIcon />}
          </div>
        </div>

        {/* Mobile Menu*/}
        <nav
          className={`${
            menuOpen && "header__menu--open pb-2"
          } header__menu justify_center items_center para_pop flex flex-col gap-1 transition-all duration-500`}
        >
          {links.map((link, index) =>
            link.sub ? (
              <div key={index} className="relative w-full">
                <div
                  className="txt_default items_center p-xxs cursor_point flex w-full justify-between"
                  onClick={() =>
                    setMobActiveDropdown(
                      mobActiveDropdown === index ? null : index,
                    )
                  }
                >
                  <div>{link.title}</div>
                  <DropdownArrowIcon />
                </div>
                <div
                  className={` ${
                    mobActiveDropdown === index ? "dropdown--open" : "dropdown"
                  } flex flex-col transition`}
                >
                  {link.sub.map((sublink, index) => (
                    <Link
                      key={index}
                      href={`/about/${sublink.link}`}
                      className={`para pl-xxs rounded-edges-xs ${
                        path.split("/")[3] === sublink.link && "selected"
                      }`}
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="shadow-accent border-accent flex w-full justify-center border-l-2 py-2"
                key={index}
              >
                <Link
                  href={link.link}
                  className="txt_default para flex w-full justify-center"
                >
                  {link.title}
                </Link>
              </div>
            ),
          )}
          <Link
            href={"#demo"}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const target = document.getElementById("demo");
              if (!target) return;
              const headerEl = document.querySelector(
                ".header__container",
              ) as HTMLElement | null;
              const headerHeight = headerEl
                ? headerEl.getBoundingClientRect().height
                : 80;
              const extraTopPadding = 30; // matches pt-8 on the fixed wrapper
              const offset = -(headerHeight + extraTopPadding);
              lenis?.scrollTo(target, {
                offset,
                duration: 1.5,
              });
            }}
            className={`button-secondary btn mobile_cta flex justify-center text-center`}
          >
            Book Demo
          </Link>
        </nav>
      </header>
    </motion.div>
  );
}
