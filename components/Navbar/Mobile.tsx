"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown, { NAVBAR_HEIGHT } from "./Dropdown";
import { usePathname, useRouter } from "next/navigation";

type TMobile = {
  MobileIcon: React.ReactNode;
  NavbarLinks: { url: string; label: string }[];
  bottomedOut: boolean;
};

const Mobile = ({ MobileIcon, NavbarLinks, bottomedOut }: TMobile) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [path]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex items-center justify-between w-full flex-row">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-full h-12 z-9 shadow-[0_-10px_50px_rgba(0,0,0,0.2)] flex items-center justify-center"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-full h-12 z-10 flex items-center justify-center"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white rounded-full w-24 h-24 z-9 shadow-[0_-10px_50px_rgba(0,0,0,0.2)] flex items-center justify-center"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white rounded-full w-24 h-24 z-10 flex items-center justify-center"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-12 z-10 flex items-center justify-center">
        <Link
          href="/"
          id="Logo image"
          className="flex justify-center items-center w-full h-full "
        >
          {MobileIcon}
        </Link>
      </div>
      <div
        className={`absolute bottom-0 right-0 w-32 h-20 z-10 flex items-center justify-center`}
      >
        <button onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <span className="sr-only">Toggle main menu</span>
          {isMenuOpen ? (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute bottom-0 right-0 transform -translate-y-1/2
             w-32 h-32 z-10 flex items-flex-start justify-flex-start flex-col-reverse`}
        >
          <Dropdown NavbarLinks={NavbarLinks} toggleMenu={toggleMenu} />
        </div>
      )}
      {!homePage && (
        // back icon
        <div className="absolute bottom-0 left-0 w-32 h-20 z-10 flex items-center justify-center">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Mobile;
