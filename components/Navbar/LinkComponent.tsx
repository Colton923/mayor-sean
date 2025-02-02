import Link from "next/link";
import Intersection from "../ui/Intersection/Intersection";

type TLinkComponent = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

const LinkComponent = ({ href, label, onClick, className }: TLinkComponent) => (
  <div className="relative [text-shadow:_0px_0px_25px_rgba(255,255,255,0.9)]">
    <Link href={href} className={`block ${className}`} onClick={onClick}>
      <span className="text-sm font-bold text-gray-800 uppercase cursor-pointer">
        {label}
      </span>
    </Link>
  </div>
);

export default LinkComponent;
