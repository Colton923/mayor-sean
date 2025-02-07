import logo from "@/public/general/android-chrome-512x512.png";
import mobileLogo from "@/public/assets/logo_nobg.png";

const Logo = ({ type }: { type: "mobile" | "desktop" }) => {
  switch (type) {
    case "mobile":
      return (
        <div className="flex items-center">
          <img src={mobileLogo.src} alt="logo-mobile" className="w-32 h-32" />
        </div>
      );
    case "desktop":
      return (
        <div className="flex items-center bg-white">
          <img src={logo.src} alt="logo-desktop" className="w-24 h-24" />
        </div>
      );
  }
};

export default Logo;
