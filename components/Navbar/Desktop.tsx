import Link from "next/link";
import LinkComponent from "./LinkComponent";

type TDesktop = {
  DesktopIcon: React.ReactNode;
  NavbarLinks: { url: string; label: string }[];
};

const Desktop = ({ DesktopIcon, NavbarLinks }: TDesktop) => {
  return (
    <>
      <div className="flex items-center">
        <Link
          href="/"
          id="Logo image"
          className="flex items-center py-4 px-2 cursor-pointer w-full min-w-[200px]"
        >
          {DesktopIcon}
        </Link>
        <div className="flex justify-end">
          {NavbarLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <LinkComponent href={link.url} label={link.label} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Desktop;
