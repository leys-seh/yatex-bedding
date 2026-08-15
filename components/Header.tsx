"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold-soft/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 py-5">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl lg:text-3xl font-semibold tracking-wide text-ink">
            Yatex
          </span>
          <span className="font-body text-[11px] uppercase tracking-widest2 text-gold-soft">
            Bedding
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[13px] uppercase tracking-[0.15em] text-ink/80 transition-colors duration-300 hover:text-gold-soft relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold-soft after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/urunler"
            className="font-body text-[13px] uppercase tracking-[0.15em] border border-gold-soft text-gold-soft px-6 py-2.5 transition-all duration-300 hover:bg-gold-soft hover:text-navy"
          >
            Koleksiyonu Keşfet
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold-soft/30">
          <nav className="flex flex-col items-center gap-6 py-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl font-semibold text-ink hover:text-gold-soft transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/urunler"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 font-body text-sm uppercase tracking-widest2 border border-gold-soft text-gold-soft px-8 py-3 hover:bg-gold-soft hover:text-navy transition-all"
            >
              Koleksiyonu Keşfet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
