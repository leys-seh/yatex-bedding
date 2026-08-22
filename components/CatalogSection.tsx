"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { CATALOG_URL } from "@/lib/catalog";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ScrollReveal from "@/components/ScrollReveal";

const CATALOG_PREVIEWS = [
  {
    src: "/assets/catalog/catalog-preview-1.webp",
    alt: "YATEX katalog görünümü 1",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-2.webp",
    alt: "YATEX katalog görünümü 2",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-3-lidya.webp",
    alt: "YATEX katalog görünümü 3",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-4.webp",
    alt: "YATEX katalog görünümü 4",
    width: 1448,
    height: 1086,
  },
];

export default function CatalogSection() {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <ScrollReveal>
      <section className="bg-navy py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal mb-8 text-center sm:mb-10 lg:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
              {dictionary.home.catalogEyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {dictionary.home.catalogs}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base font-body">
              {dictionary.home.catalogDescription}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {CATALOG_PREVIEWS.map((preview) => (
              <div
                key={preview.src}
                className="group overflow-hidden rounded-sm border border-ink/10 bg-navy-light/30"
              >
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={preview.width}
                  height={preview.height}
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 50vw"
                  className="h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
                />
              </div>
            ))}
          </div>

          <div className="reveal mt-8 flex justify-center sm:mt-10">
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dictionary.home.reviewCatalog}
              className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-gold-soft bg-navy-light/30 px-8 text-xs uppercase tracking-[0.2em] text-gold-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:text-navy sm:w-auto sm:px-10 sm:text-sm"
            >
              {dictionary.home.reviewCatalog}
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
