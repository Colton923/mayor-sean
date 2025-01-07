import Link from "next/link";
import LinkComponent from "./LinkComponent";

type TDesktop = {
  DesktopIcon: React.ReactNode;
  NavbarLinks: { url: string; label: string }[];
};

const Desktop = ({ DesktopIcon, NavbarLinks }: TDesktop) => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/"
        id="Logo image"
        className="flex items-center cursor-pointer min-w-[200px]"
      >
        {DesktopIcon}
      </Link>
      <div className="flex justify-end">
        {NavbarLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center font-bold transition duration-300 ease-in-out hover:underline
               px-4 py-2 hover:text-red active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            <LinkComponent href={link.url} label={link.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
