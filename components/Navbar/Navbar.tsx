"use client";
import { useState, useEffect } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export type TNavbarLinks = { url: string; label: string; icon?: JSX.Element }[];

export type TNavbar = {
  MobileIcon: React.ReactNode;
  DesktopIcon: React.ReactNode;
  NavbarLinks: TNavbarLinks;
};

const Navbar = ({ DesktopIcon, MobileIcon, NavbarLinks }: TNavbar) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bottomedOut, setIsBottomedOut] = useState(false);
  useEffect(() => {
    const handleBottomedOut = () => {
      if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
        setIsBottomedOut(true);
      } else {
        setIsBottomedOut(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handler = () => {
      handleScroll();
      handleBottomedOut();
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav className="flex">
      <div className="hidden z-10 lg:block fixed top-0 left-0 right-0">
        <div
          className={`shadow-md w-full ${
            isScrolled ? "bg-white bg-opacity-100" : ""
          } transition-colors duration-300`}
        >
          <Desktop NavbarLinks={NavbarLinks} DesktopIcon={DesktopIcon} />
        </div>
      </div>
      <div
        className={`lg:hidden z-10 fixed bottom-0 left-0 right-0 transition-transform duration-300 ${
          bottomedOut
            ? "transform translate-y-[50vh]"
            : "flex items-center justify-center"
        }`}
      >
        <Mobile
          NavbarLinks={NavbarLinks}
          MobileIcon={MobileIcon}
          bottomedOut={bottomedOut}
        />
      </div>
    </nav>
  );
};

export default Navbar;
