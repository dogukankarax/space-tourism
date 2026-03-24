import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

import { navLinks } from "./navLinks";

type MobileNavProps = Readonly<{
  isMenuOpen: boolean;
  isActive: (to: string) => boolean;
  onCloseMenu: () => void;
}>;

export default function MobileNav({
  isMenuOpen,
  isActive,
  onCloseMenu,
}: MobileNavProps) {
  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "font-barlow-condensed tablet:hidden fixed top-0 right-0 z-40 flex h-full w-64 flex-col gap-8 bg-white/5 pt-32 pl-8 tracking-widest text-white backdrop-blur-xl transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "flex items-center border-r-4 border-transparent transition-all duration-300",
              isActive(link.to) ? "border-white" : "hover:border-white/50",
            )}
            onClick={onCloseMenu}
          >
            <span className="mr-2 font-bold">{link.number}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          className="tablet:hidden fixed inset-0 z-30 bg-black/50"
          onClick={onCloseMenu}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
