"use client";

import { useState } from "react";
import Link from "next/link";
import Intersection from "../ui/Intersection/Intersection";

type TNavbar = {
  NavbarIcon: React.ReactNode;
  NavbarLinks: { url: string; label: string }[];
};

const Navbar = ({ NavbarIcon, NavbarLinks }: TNavbar) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MyLinkComponent = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick: () => void;
  }) => (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      onClick={onClick}
    >
      {label}
    </Link>
  );

  const FadingLink = Intersection(MyLinkComponent);

  return (
    <nav className="shadow-md z-10 w-full fixed top-0 left-0 right-0 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {NavbarIcon}
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {NavbarLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="ml-8 text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
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
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NavbarLinks.map((link, index) => (
              <FadingLink
                key={index}
                href={link.url}
                label={link.label}
                onClick={toggleMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
