import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

import { navLinks } from "./navLinks";

type DesktopNavProps = Readonly<{
  isActive: (to: string) => boolean;
  onCloseMenu: () => void;
}>;

export default function DesktopNav({ isActive, onCloseMenu }: DesktopNavProps) {
  return (
    <div className="tablet:flex tablet:flex-1 tablet:items-center tablet:justify-end hidden">
      <span className="desktop:block -mr-8 hidden h-px w-1/3 bg-white/25" />

      <nav
        aria-label="Primary"
        className="font-barlow-condensed desktop:px-20 flex h-24 w-2/3 items-center justify-evenly gap-12 bg-white/5 px-12 tracking-widest text-white backdrop-blur-xl"
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "flex h-full items-center border-b-2 border-transparent transition-colors duration-300",
              isActive(link.to) ? "border-white" : "hover:border-white/50",
            )}
            onClick={onCloseMenu}
          >
            <span className="desktop:inline mr-2 hidden font-bold">
              {link.number}
            </span>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
