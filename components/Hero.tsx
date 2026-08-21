"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const elements = hero.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-fade-up");
      }, index * 150);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[40rem] items-center overflow-hidden bg-navy text-ink sm:min-h-screen"
    >
      {/* Background image */}
      <Image
        src="/images/home-page.webp"
        alt="Yatex Bedding luxury bedroom"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Subtle left-side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" />

      {/* Content positioned in the empty left area */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:py-32 lg:px-10 lg:py-40">
          <div className="max-w-xl sm:ml-[5%] lg:max-w-2xl">
            <p className="animate-on-load mb-4 text-xs uppercase tracking-[0.3em] text-gold-soft opacity-0 sm:mb-6 font-body">
              Premium Sleep
            </p>

            <h1
              className="animate-on-load mb-4 font-display text-[clamp(2.5rem,11vw,3rem)] font-semibold leading-[0.95] text-balance text-ink opacity-0 sm:mb-6 sm:text-[clamp(3.5rem,5vw,5.375rem)]"
            >
              Kaliteli uyku,
              <br />
              kaliteli yatak.
            </h1>

            <p
              className="animate-on-load mb-6 text-sm leading-relaxed text-ink/75 opacity-0 sm:mb-8 sm:text-base lg:text-lg font-body"
              style={{ maxWidth: "500px" }}
            >
              İyi uykunun tasarlandığı bir deneyim. Yatex Bedding olarak, her gece
              size en iyi uyku deneyimini sunmak için özenle tasarlanmış
              koleksiyonumuzu sunuyoruz.
            </p>

            <div className="animate-on-load flex flex-col gap-3 opacity-0 sm:flex-row sm:gap-4">
              <Link
                href="/urunler"
                className="group inline-flex min-h-11 items-center justify-center gap-2 border border-gold-soft px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-gold-soft transition-all duration-300 hover:bg-gold-soft hover:text-navy sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                Koleksiyonu Keşfet
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-ink/30 px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-ink/90 transition-all duration-300 hover:border-ink/50 hover:bg-ink/10 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                Bizimle İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-soft to-transparent opacity-60" />
      </div>
    </section>
  );
}
