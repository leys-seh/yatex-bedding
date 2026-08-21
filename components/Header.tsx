"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATALOG_URL } from "@/lib/catalog";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-5 lg:px-10">
        <Link
          href="/"
          aria-label="Yatex Bedding ana sayfa"
          className="relative block h-8 w-24 shrink-0 lg:h-9 lg:w-28"
        >
          <Image
            src="/assets/yatex-logo.png"
            alt="Yatex Bedding"
            width={2000}
            height={2000}
            priority
            sizes="(max-width: 1023px) 136px, 152px"
            className="pointer-events-none absolute left-1/2 top-1/2 -mt-px h-[8.5rem] w-[8.5rem] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain lg:h-[9.5rem] lg:w-[9.5rem]"
          />
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
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] uppercase tracking-[0.15em] border border-gold-soft text-gold-soft px-6 py-2.5 transition-all duration-300 hover:bg-gold-soft hover:text-navy"
          >
            2026 Katalog
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="group flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
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
          <nav className="flex flex-col items-center gap-5 py-6 sm:gap-6 sm:py-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-xl font-semibold text-ink transition-colors hover:text-gold-soft sm:text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 border border-gold-soft px-6 py-3 font-body text-xs uppercase tracking-widest2 text-gold-soft transition-all hover:bg-gold-soft hover:text-navy sm:mt-4 sm:px-8 sm:text-sm"
            >
              2026 Katalog
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
