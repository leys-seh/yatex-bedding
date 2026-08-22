"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function HomeContactSection() {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <ScrollReveal>
      <section className="bg-navy-light/30 py-12 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <div className="reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-6 font-body">
              {dictionary.home.ctaEyebrow}
            </p>
            <h2 className="mb-5 font-display text-3xl font-semibold leading-[1.1] text-ink sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              {dictionary.home.ctaTitleFirst}
              <br />
              {dictionary.home.ctaTitleSecond}
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-ink/70 sm:mb-12 sm:text-base font-body">
              {dictionary.home.ctaDescription}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={`/${locale}/iletisim`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-gold-soft bg-gold-soft px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:border-gold hover:bg-gold sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                {dictionary.common.contact}
              </Link>
              <Link
                href={`/${locale}/urunler`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-ink/30 px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink/5 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                {dictionary.home.ctaProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
