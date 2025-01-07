import LinkComponent from "./LinkComponent";

type TDropdown = {
  NavbarLinks: { url: string; label: string; icon?: React.ReactNode }[];
  toggleMenu: () => void;
};
// This component is in the bottom right, and expands up after the navbar height

export const NAVBAR_HEIGHT = "200px";

const Dropdown = ({ NavbarLinks, toggleMenu }: TDropdown) => {
  return (
    <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-[50%-100px] w-32 h-32 z-10 flex items-flex-start flex-col-reverse">
      {NavbarLinks.map((link, index) => (
        <div
          className={`bg-white opacity-0 px-1 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100
            ${
              index === 0
                ? "rounded-b-lg"
                : index === NavbarLinks.length - 1
                ? "rounded-t-lg"
                : ""
            }`}
          style={{
            animationName: "fadeInUp",
            animationFillMode: "forwards",
            animationDuration: "0.5s",
            animationTimingFunction: "ease",
            animationDelay: `${index * 50}ms`,
          }}
          key={index}
        >
          <div className="flex items-center justify-start">
            <div className="flex items-center w-10">{link.icon}</div>
            <div className="flex items-start w-full underline">
              <LinkComponent
                href={link.url}
                label={link.label}
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
