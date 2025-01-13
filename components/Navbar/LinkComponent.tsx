import Link from "next/link";
import Intersection from "../ui/Intersection/Intersection";

type TLinkComponent = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

const LinkComponent = ({ href, label, onClick, className }: TLinkComponent) => (
  <div className="relative bg-white bg-opacity-20 p-1 rounded-lg [box-shadow:_1px_1px_2px_0px_gray-400]">
    <Link href={href} className={`block ${className}`} onClick={onClick}>
      <span className="text-md font-bold text-gray-800 uppercase cursor-pointer">
        {label}
      </span>
    </Link>
  </div>
);

export default LinkComponent;
