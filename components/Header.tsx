"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full text-black transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-sm"
            : "bg-gradient-to-b from-white from-40% via-white/75 via-65% to-transparent"
        }`}
      >
        <div
          className={`flex items-end justify-between px-6 transition-all duration-500 md:px-10 ${
            scrolled ? "pb-4 pt-4 md:pb-5" : "pb-7 pt-5 md:pb-10"
          }`}
        >
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <h1 className="brand-logo">
              tsukasa
            </h1>

            <p className="brand-subtitle mt-2">
              Wedding Photographer
            </p>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="font-english flex gap-8 text-[16px] font-semibold leading-none tracking-[0.25em]">
              <li>
                <Link
                  href="/#concept"
                  className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Concept
                </Link>
              </li>

              <li>
                <Link
                  href="/#portfolio"
                  className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/#plans"
                  className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Plans
                </Link>
              </li>

              <li>
                <Link
                  href="/#profile"
                  className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-english text-[13px] font-semibold tracking-[0.22em] md:hidden"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="font-english space-y-8 text-center text-[26px] font-semibold tracking-[0.25em]">
            <li>
              <Link
                href="/#concept"
                onClick={closeMenu}
              >
                Concept
              </Link>
            </li>

            <li>
              <Link
                href="/#portfolio"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href="/#plans"
                onClick={closeMenu}
              >
                Plans
              </Link>
            </li>

            <li>
              <Link
                href="/#profile"
                onClick={closeMenu}
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}