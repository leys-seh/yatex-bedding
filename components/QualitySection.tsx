"use client";

import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function QualitySection() {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);
  const qualityItems = [
    {
      title: dictionary.home.material,
      desc: dictionary.home.materialDescription,
    },
    {
      title: dictionary.home.craft,
      desc: dictionary.home.craftDescription,
    },
    {
      title: dictionary.home.comfort,
      desc: dictionary.home.comfortDescription,
    },
  ];

  return (
    <ScrollReveal>
      <section className="bg-navy py-12 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal mb-8 text-center sm:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
              {dictionary.home.quality}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {dictionary.home.qualityTitle}
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 gap-3 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {qualityItems.map((item, index) => (
              <div
                key={item.title}
                className="reveal border border-ink/10 bg-navy-light/50 p-5 text-center sm:p-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/40 sm:mb-6 sm:h-16 sm:w-16">
                  <div className="h-6 w-6 rounded-full bg-gold-soft/10 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:mb-3 sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-ink/60 sm:text-sm font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
