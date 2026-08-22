"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const SHOWROOM_MAP_URL =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caa55c4b8fa691:0xf28f93688c2728bb?sa=X&ved=1t:8290&ictx=111";

export default function Footer() {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <footer className="border-t border-ink/10 bg-navy-dark py-10 text-ink sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mb-16 sm:grid-cols-1 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <Link
              href={`/${locale}`}
              aria-label={`Yatex Bedding ${dictionary.nav.home}`}
              className="relative mb-4 block h-9 w-28 sm:mb-6"
            >
              <Image
                src="/assets/yatex-logo.png"
                alt="Yatex Bedding"
                width={2000}
                height={2000}
                sizes="136px"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[8.5rem] w-[8.5rem] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60 font-body">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-soft sm:mb-6 font-body">
              {dictionary.footer.collection}
            </p>
            <ul className="space-y-2 text-sm text-ink/70 sm:space-y-3 font-body">
              <li>
                <Link href={`/${locale}/urunler?kategori=yatak-seti`} className="transition-colors hover:text-gold-soft">
                  {dictionary.categories.yatakSeti}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunler?kategori=yatak`} className="transition-colors hover:text-gold-soft">
                  {dictionary.categories.yatak}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunler?kategori=baza`} className="transition-colors hover:text-gold-soft">
                  {dictionary.categories.baza}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunler?kategori=baslik`} className="transition-colors hover:text-gold-soft">
                  {dictionary.categories.baslik}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-soft sm:mb-6 font-body">
              {dictionary.footer.contact}
            </p>
            <ul className="space-y-2 break-words text-sm text-ink/70 sm:space-y-3 font-body">
              <li>
                <a
                  href={SHOWROOM_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  Çobançeşme, Sanayi Cd. Acar Sanayi Sitesi No:70 Zemin Kat, 34530 Bahçelievler / İstanbul
                </a>
              </li>
              <li>
                <a href="tel:+905426515951" className="transition-colors hover:text-gold-soft">
                  0542 651 59 51
                </a>
              </li>
              <li>
                <a href="mailto:info@yatexbedding.com" className="transition-colors hover:text-gold-soft">
                  info@yatexbedding.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-center sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
          <p className="text-xs text-ink/40 font-body">
            {dictionary.footer.copyright}
          </p>

          <div className="flex gap-6">
            <Link href={`/${locale}`} className="text-xs text-ink/40 transition-colors hover:text-gold-soft font-body">
              {dictionary.nav.home}
            </Link>
            <Link href={`/${locale}/hakkimizda`} className="text-xs text-ink/40 transition-colors hover:text-gold-soft font-body">
              {dictionary.nav.about}
            </Link>
            <Link href={`/${locale}/iletisim`} className="text-xs text-ink/40 transition-colors hover:text-gold-soft font-body">
              {dictionary.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
