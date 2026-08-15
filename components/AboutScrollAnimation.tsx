"use client";

import { useRef, useMemo, useLayoutEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const IMAGES = [
  { src: "/assets/hikayemiz/1.webp", alt: "Yatex Bedding 1" },
  { src: "/assets/hikayemiz/2.webp", alt: "Yatex Bedding 2" },
  { src: "/assets/hikayemiz/3.webp", alt: "Yatex Bedding 3" },
  { src: "/assets/hikayemiz/4.webp", alt: "Yatex Bedding 4" },
  { src: "/assets/hikayemiz/5.webp", alt: "Yatex Bedding 5" },
  { src: "/assets/hikayemiz/7.webp", alt: "Yatex Bedding 7" },
  { src: "/assets/hikayemiz/main.webp", alt: "Yatex Bedding main" },
];

export default function AboutScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const images = useMemo(() => IMAGES, []);

  useLayoutEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
    let flipCtx: ReturnType<typeof import("gsap").gsap.context> | null = null;
    let resizeHandler: (() => void) | null = null;

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      const Flip = (await import("gsap/Flip")).default;
      gsap.registerPlugin(ScrollTrigger, Flip);

      const section = sectionRef.current;
      const gallery = galleryRef.current;
      const text = textRef.current;
      const line = lineRef.current;
      if (!section || !gallery || !text) return;

      ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 1024;
        const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isReducedMotion) {
          gsap.set(gallery.children, { opacity: 1, clearProps: "all" });
          gsap.set(text.querySelectorAll(".about-text-item"), { opacity: 1, y: 0, clearProps: "all" });
          if (line) gsap.set(line, { scaleX: 1, clearProps: "all" });
          return;
        }

        const items = gsap.utils.toArray<HTMLElement>(gallery.children);
        if (!items.length) return;

        if (!isMobile) {
          const createTween = () => {
            if (!gallery || !section) return;
            const currentItems = gsap.utils.toArray<HTMLElement>(gallery.children);
            if (!currentItems.length) return;

            if (flipCtx) flipCtx.revert();
            gallery.classList.remove("yatex-gallery--final");

            flipCtx = gsap.context(() => {
              gallery.classList.add("yatex-gallery--final");
              const flipState = Flip.getState(currentItems);
              gallery.classList.remove("yatex-gallery--final");

              const flip = Flip.to(flipState, {
                simple: true,
                ease: "expoScale(1, 5)",
                duration: 1,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: gallery,
                  start: "center center",
                  end: "+=150%",
                  scrub: true,
                  pin: gallery.parentElement,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });

              tl.add(flip, 0);

              gsap.fromTo(
                text.querySelectorAll(".about-text-item"),
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                  },
                }
              );

              if (line) {
                gsap.fromTo(
                  line,
                  { scaleX: 0 },
                  {
                    scaleX: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: section,
                      start: "top 65%",
                      end: "top 35%",
                      scrub: 1,
                      invalidateOnRefresh: true,
                    },
                  }
                );
              }

              return () => {
                gsap.set(currentItems, { clearProps: "all" });
              };
            }, gallery);
          };

          createTween();

          resizeHandler = () => {
            ScrollTrigger.getAll().forEach((st) => {
              if (st.trigger === section || st.trigger === gallery) st.kill();
            });
            createTween();
          };

          window.addEventListener("resize", resizeHandler);
        } else {
          gsap.set(gallery.children, { opacity: 1, clearProps: "all" });
          gsap.set(text.querySelectorAll(".about-text-item"), { opacity: 1, y: 0, clearProps: "all" });
          if (line) gsap.set(line, { scaleX: 1, clearProps: "all" });
        }
      }, section);

      return () => {
        if (resizeHandler) window.removeEventListener("resize", resizeHandler);
        if (ctx) ctx.revert();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === section || st.trigger === gallery) st.kill();
        });
      };
    };

    initAnimation();
  }, []);

  return (
    <ScrollReveal>
      <section
        ref={sectionRef}
        className="py-24 lg:py-32 bg-navy"
        style={{ position: "relative" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div ref={textRef}>
              <p className="about-text-item text-xs uppercase tracking-[0.3em] text-gold-soft mb-6 font-body">
                Hikayemiz
              </p>
              <div ref={lineRef} className="h-px w-0 bg-gold-soft origin-left mb-8" />
              <h2 className="about-text-item font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-ink leading-[1.1] mb-8">
                Sadece bir yatak
                <br />
                deÄŸil.
              </h2>
              <div className="space-y-6 text-ink/75 leading-relaxed font-body">
                <p className="about-text-item">
                  Ä°yi uykunun tasarlandÄ±ÄŸÄ± bir deneyim. Yatex Bedding olarak,
                  her parÃ§a titizlikle seÃ§ilmiÅŸ malzemeler ve uzman el iÅŸÃ§iliÄŸi
                  ile Ã¼retilir.
                </p>
                <p className="about-text-item">
                  AmacÄ±mÄ±z, size sadece bir yatak deÄŸil; dinlenme, iyileÅŸme ve
                  yenilenme iÃ§in mÃ¼kemmel bir alan sunmak.
                </p>
              </div>
            </div>

            <div
              ref={galleryRef}
              className="yatex-hikayemiz-gallery-wrap relative w-full h-[80vh] lg:h-[90vh] overflow-hidden"
            >
              <div
                className="yatex-hikayemiz-gallery relative w-full h-full grid grid-cols-3 gap-2 lg:gap-3 auto-rows-[18vh] lg:auto-rows-[20vh]"
              >
                {images.map((img, i) => (
                  <div
                    key={img.src}
                    className={`yatex-hikayemiz-gallery__item relative overflow-hidden border border-ink/10 ${getBentoClasses(i, images.length)}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .yatex-hikayemiz-gallery--final .yatex-hikayemiz-gallery__item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .yatex-hikayemiz-gallery--final .yatex-hikayemiz-gallery__item:first-child {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
          }
        `}</style>
      </section>
    </ScrollReveal>
  );
}

function getBentoClasses(index: number, total: number) {
  if (total === 7) {
    switch (index) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-span-1 row-span-1";
      case 2:
        return "col-span-1 row-span-2";
      case 3:
        return "col-span-2 row-span-1";
      case 4:
        return "col-span-1 row-span-1";
      case 5:
        return "col-span-2 row-span-1";
      case 6:
        return "col-span-1 row-span-1";
      default:
        return "";
    }
  }
  if (index === 0) return "col-span-2 row-span-2";
  return "";
}
