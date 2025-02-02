import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import type { TSocialMediaIcon } from "@/types/TSocialMediaIcon";

type FooterProps = {
  socialMediaIcons?: TSocialMediaIcon[];
  privacyPolicy?: string;
  tOS?: string;
  address?: string;
  email?: string;
  phone?: string;
  FooterIcon: React.ReactNode;
};

const Footer = ({
  socialMediaIcons,
  privacyPolicy,
  tOS,
  address,
  email,
  phone,
  FooterIcon,
}: FooterProps) => {
  return (
    <footer className="bg-background text-foreground py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* <div className="mb-4 md:mb-0">{FooterIcon}</div> */}
          <div className="flex space-x-4">
            {socialMediaIcons?.map((icon, index) => (
              <Link
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  {icon.SocialMediaIcon}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            {privacyPolicy && (
              <Link href={privacyPolicy} className="block hover:underline">
                Privacy Policy
              </Link>
            )}
            {tOS && (
              <Link href={tOS} className="block hover:underline">
                Terms of Service
              </Link>
            )}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            {address && <p>{address}</p>}
            {email && (
              <Link href={`mailto:${email}`} className="block hover:underline">
                {email}
              </Link>
            )}
            {phone && (
              <Link href={`tel:${phone}`} className="block hover:underline">
                {phone}
              </Link>
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Friends of Sean Cavanaugh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
