"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CATALOG_URL } from "@/lib/catalog";
import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type LanguagePickerProps = {
  locale: Locale;
  onSelect: (locale: Locale) => void;
};

function LanguagePicker({ locale, onSelect }: LanguagePickerProps) {
  return (
    <div className="flex gap-2 text-[11px] tracking-widest">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={
            item === locale
              ? "text-gold-soft"
              : "text-ink/60 hover:text-gold-soft"
          }
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const firstPathSegment = pathname.split("/")[1];
  const locale: Locale = isLocale(firstPathSegment)
    ? firstPathSegment
    : defaultLocale;
  const dictionary = getDictionary(locale);
  const currentPath =
    pathname.replace(/^\/(tr|en|ar)(?=\/|$)/, "") || "/";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.cookie = `yatex_locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locale]);

  const switchLocale = (nextLocale: Locale) => {
    router.push(
      `/${nextLocale}${
        currentPath === "/" ? "" : currentPath
      }${window.location.search}`,
    );
    setOpen(false);
  };

  const navigation = [
    ["/", dictionary.nav.home],
    ["/urunler", dictionary.nav.products],
    ["/hakkimizda", dictionary.nav.about],
    ["/iletisim", dictionary.nav.contact],
  ] as const;

  const localeHref = (href: string) =>
    `/${locale}${href === "/" ? "" : href}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-gold-soft/30 bg-navy/95 backdrop-blur-md"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-5 lg:px-10">
        <Link
          href={`/${locale}`}
          className="relative block h-8 w-24 lg:h-9 lg:w-28"
        >
          <Image
            src="/assets/yatex-logo.png"
            alt="Yatex Bedding"
            width={2000}
            height={2000}
            priority
            className="absolute left-1/2 top-1/2 h-[8.5rem] w-[8.5rem] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map(([href, label]) => (
            <Link
              key={href}
              href={localeHref(href)}
              className="text-[13px] uppercase tracking-[.15em] text-ink/80 hover:text-gold-soft"
            >
              {label}
            </Link>
          ))}
          <LanguagePicker locale={locale} onSelect={switchLocale} />
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold-soft px-5 py-2 text-xs uppercase tracking-widest text-gold-soft"
          >
            {dictionary.nav.catalog}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="min-h-11 min-w-11 lg:hidden"
          aria-label={dictionary.nav.menu}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-gold-soft/30 bg-navy/98 lg:hidden">
          <nav className="flex flex-col items-center gap-5 py-6">
            {navigation.map(([href, label]) => (
              <Link
                key={href}
                href={localeHref(href)}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-ink"
              >
                {label}
              </Link>
            ))}
            <LanguagePicker locale={locale} onSelect={switchLocale} />
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold-soft px-6 py-3 text-xs uppercase tracking-widest text-gold-soft"
            >
              {dictionary.nav.catalog}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
