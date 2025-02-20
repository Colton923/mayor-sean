import Link from "next/link";
import TextOne from "../HOUI/TextOne";

type TLinkComponent = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const LinkComponent = ({
  href,
  label,
  onClick,
  className,
  children,
}: TLinkComponent) => (
  <Link
    href={href}
    className={`relative [text-shadow:_0px_0px_25px_rgba(255,255,255,0.9)] block ${className}`}
    onClick={onClick}
  >
    {children}
    <TextOne text={label} classes="cursor-pointer" />
  </Link>
);

export default LinkComponent;
