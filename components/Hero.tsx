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
      className="relative min-h-screen flex items-center overflow-hidden bg-navy text-ink"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-40">
          <div
            className="max-w-xl lg:max-w-2xl"
            style={{ marginLeft: "5%" }}
          >
            <p className="animate-on-load opacity-0 text-xs uppercase tracking-[0.3em] text-gold-soft mb-6 font-body">
              Premium Sleep
            </p>

            <h1
              className="animate-on-load opacity-0 font-display font-semibold leading-[0.95] text-balance mb-6 text-ink"
              style={{
                fontSize: "clamp(56px, 5vw, 86px)",
              }}
            >
              Daha iyi bir
              <br />
              uyku için
              <br />
              tasarlanmış
              <br />
              yataklar.
            </h1>

            <p
              className="animate-on-load opacity-0 text-base lg:text-lg text-ink/75 leading-relaxed mb-8 font-body"
              style={{ maxWidth: "500px" }}
            >
              İyi uykunun tasarlandığı bir deneyim. Yatex Bedding olarak, her gece
              size en iyi uyku deneyimini sunmak için özenle tasarlanmış
              koleksiyonumuzu sunuyoruz.
            </p>

            <div className="animate-on-load opacity-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center gap-3 border border-gold-soft px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold-soft transition-all duration-300 hover:bg-gold-soft hover:text-navy group"
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
                className="inline-flex items-center justify-center gap-3 border border-ink/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-ink/90 transition-all duration-300 hover:bg-ink/10 hover:border-ink/50"
              >
                Bizimle İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-soft to-transparent opacity-60" />
      </div>
    </section>
  );
}
