"use client";

import { useEffect, useRef } from "react";

export default function ParallaxImage({
  children,
  intensity = 10,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distance = sectionCenter - viewportCenter;
          const normalized = distance / windowHeight;
          const translateY = normalized * intensity;

          el.style.transform = `translateY(${translateY}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return <div ref={ref}>{children}</div>;
}
