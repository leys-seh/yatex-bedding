"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function AboutScrollAnimation() {
  const pathname = usePathname();
  const firstPathSegment = pathname.split("/")[1];
  const locale = isLocale(firstPathSegment) ? firstPathSegment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <ScrollReveal>
      <section className="bg-navy py-12 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
            <div className="reveal">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-6 font-body">
                {dictionary.about.eyebrow}
              </p>
              <div className="mb-5 h-px w-full origin-left bg-gold-soft sm:mb-8" />
              <h2 className="mb-5 font-display text-3xl font-semibold leading-[1.1] text-ink sm:mb-8 sm:text-4xl lg:text-4xl xl:text-[2.5rem]">
                {dictionary.home.aboutStoryTitleFirst}
                <br />
                {dictionary.home.aboutStoryTitleSecond}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-ink/75 sm:space-y-6 sm:text-base font-body">
                <p>
                  {dictionary.home.aboutStoryFirst}
                </p>
                <p>
                  {dictionary.home.aboutStorySecond}
                </p>
              </div>
            </div>

            <div className="reveal-image relative mx-auto flex w-full justify-center overflow-hidden border border-ink/10 bg-navy-light/30">
              <Image
                src="/assets/hikayemiz/hikayemiz-2.webp"
                alt="YATEX Bedding hikayesi"
                width={1637}
                height={961}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 60vw, 75vw"
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
