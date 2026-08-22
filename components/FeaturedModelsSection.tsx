"use client";

import { usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Product } from "@/lib/supabase";

type FeaturedModelsSectionProps = {
  marqueeProducts: Product[];
};

export default function FeaturedModelsSection({
  marqueeProducts,
}: FeaturedModelsSectionProps) {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <ScrollReveal>
      <section className="bg-navy-dark py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal mb-8 text-center sm:mb-10 lg:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
              {dictionary.home.featuredEyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {dictionary.home.featured}
            </h2>
          </div>

        </div>

        <div className="yatex-featured-marquee-viewport" dir="ltr" aria-label={dictionary.home.featured}>
          <div className="yatex-featured-marquee-track">
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="yatex-featured-marquee-group"
                aria-hidden={setIndex === 1}
              >
                {marqueeProducts.map((product, index) => (
                  <div
                    key={`${setIndex}-${product.id}-${index}`}
                    className="yatex-featured-marquee-card"
                  >
                    <ProductCard product={product} compact locale={locale} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
