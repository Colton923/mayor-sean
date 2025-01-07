import Link from "next/link";
import Intersection from "../ui/Intersection/Intersection";

type TLinkComponent = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

const LinkComponent = ({ href, label, onClick, className }: TLinkComponent) => (
  <Link href={href} className={`block ${className}`} onClick={onClick}>
    <span
      className="text-xs font-bold text-gray-800 uppercase
    "
    >
      {label}
    </span>
  </Link>
);

export default LinkComponent;
