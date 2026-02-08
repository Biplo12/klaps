import React from "react";
import NavLink from "./nav-link";

interface NavLinkItem {
  href: string;
  label: string;
}

interface DesktopNavProps {
  links: readonly NavLinkItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          className="text-xs pb-1"
        />
      ))}
    </nav>
  );
};

export default DesktopNav;
