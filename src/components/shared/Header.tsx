"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import DropdownArrowIcon from "../icons/DropdownArrowIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import LogoSVG from "../icons/LogoSVG";
import SelectWrapper from "./SelectWraper";
import { getLinks } from "./service";
import "./styles.css";
import { LinkItem, MarkerProps } from "./type";
import { motion } from "motion/react";

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
      } cursor_point para_pop relative transition`}
    >
      {children}
    </div>
  );
}
export default function Header() {
  const path = usePathname();
  const links: LinkItem[] = getLinks();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
    setMobActiveDropdown(null);
  }, [path]);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobActiveDropdown, setMobActiveDropdown] = useState<number | null>(
    null,
  );

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, delay: 2 }}
      className={`contain fixed top-0 z-50 pt-8`}
    >
      <header
        className={`header__container bg-primary items_center flex w-full flex-col rounded-full text-white transition-transform ${
          menuOpen && "rounded-2xl"
        }`}
      >
        <div className={`flex h-20 w-full items-center justify-between p-3.5`}>
          <Link href={"/"} className={`header__logo relative`}>
            {/* <LogoSVG /> */}
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
                    className="p-xs flex h-full items-center justify-center"
                  >
                    <div>{link.title}</div>
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
                    {link.title}
                  </Link>
                </Marker>
              ),
            )}
          </nav>

          {/* CTA */}
          <Link href={"/donate"} className={``}>
            <button
              className={`header__cta button-secondary flex h-full rounded-full px-7 py-3.5`}
            >
              Book Demo
            </button>
          </Link>

          {/* Mobile Menu button */}
          <div
            className={`header__menu-button primary_shade items_center justify_center`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {!menuOpen ? <HamburgerIcon /> : <CloseIcon />}
          </div>
        </div>

        {/* Mobile Menu*/}
        <nav
          className={`${
            menuOpen && "header__menu--open"
          } header__menu justify_center items_center para_pop flex flex-col transition`}
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
                  } gap-xxs flex flex-col transition`}
                >
                  {link.sub.map((sublink, index) => (
                    <Link
                      key={index}
                      href={`/about/${sublink.link}`}
                      className={`para txt_default pl-xxs rounded-edges-xs ${
                        path.split("/")[3] === sublink.link && "selected"
                      }`}
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-xxs flex w-full justify-between" key={index}>
                <Link href={link.link} className="txt_default w-full">
                  {link.title}
                </Link>
              </div>
            ),
          )}
          <Link
            href={"/donate"}
            className={`cta primary_shade para_pop pr-md pl-md justify_center text_center mobile_cta flex`}
          >
            Book Demo
          </Link>
        </nav>
      </header>
    </motion.div>
  );
}
