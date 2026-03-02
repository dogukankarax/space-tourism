import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="desktop:top-10 absolute top-0 right-0 left-0 flex h-24 items-center justify-between">
      {/* Logo */}
      <Link to="/" className="tablet:ml-10 ml-6">
        <img src="/img/shared/logo.svg" alt="Space Tourism Home" />
      </Link>

      {/* Hamburger Button - Mobile only */}
      <button
        type="button"
        className="tablet:hidden z-50 mr-6"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <img
          src={`/img/shared/icon-${isMenuOpen ? "close" : "hamburger"}.svg`}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </button>

      <DesktopNav isActive={isActive} onCloseMenu={closeMenu} />

      <MobileNav
        isMenuOpen={isMenuOpen}
        isActive={isActive}
        onCloseMenu={closeMenu}
      />
    </header>
  );
}
