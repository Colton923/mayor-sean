import "@/styles/globals.css";

import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import logo from "@/public/assets/logo-no-bg-512x512.webp";
import img from "@/public/assets/sean-marching-597x271.webp";
import type { TSocialMediaIcon } from "types/TSocialMediaIcon";
import type { Metadata } from "next";
import {
  IconChecks,
  IconHeart,
  IconHome,
  IconMail,
  IconMan,
  IconReceipt,
  IconRuler,
  IconSignRight,
} from "@tabler/icons-react";
export const metadata: Metadata = {
  title: "Sean Cavanaugh for Mayor",
  description: "Sean Cavanaugh is a candidate for mayor in Monmouth, Illinois.",
};

const NunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialMediaIcons: TSocialMediaIcon[] = [
    {
      SocialMediaIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
        </svg>
      ),
      url: "https://www.facebook.com",
    },
    {
      SocialMediaIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
        </svg>
      ),
      url: "https://www.twitter.com",
    },
  ];

  // small and large css classes for image resizing on breakpoints
  const DesktopIcon = <img src={logo.src} alt="logo" className="w-36 h-24" />;
  const MobileIcon = <img src={logo.src} alt="logo" className="w-18 h-12" />;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/general/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/general/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/general/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>Sean Cavanaugh for Mayor</title>
      </head>
      <body style={NunitoSans.style}>
        <Navbar
          DesktopIcon={DesktopIcon}
          MobileIcon={MobileIcon}
          NavbarLinks={[
            { url: "/", label: "Home", icon: <IconHome /> },
            { url: "/about", label: "About Sean", icon: <IconMan /> },
            { url: "/issues", label: "Issues", icon: <IconRuler /> },
            {
              url: "/endorsements",
              label: "Endorsements",
              icon: <IconChecks />,
            },
            { url: "/donate", label: "Donate", icon: <IconHeart /> },
            { url: "/contact", label: "Contact", icon: <IconMail /> },
            {
              url: "/yard-signs",
              label: "Yard Signs",
              icon: <IconSignRight />,
            },
            { url: "/recipes", label: "Recipes", icon: <IconReceipt /> },
          ]}
        />
        <div className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </div>
        <Footer
          FooterIcon={<img src={img.src} alt="logo" className="w-30 h-16" />}
          socialMediaIcons={socialMediaIcons}
          privacyPolicy="/privacy"
          tOS="/tos"
          address="1234 Main St, Anytown, USA"
          email=""
          phone=""
        />
      </body>
    </html>
  );
}
