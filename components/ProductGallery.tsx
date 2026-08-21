"use client";

import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeImage = images[activeIndex];

  const selectImage = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const handleGalleryKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectImage(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectImage(activeIndex + 1);
    }
  };

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  if (!activeImage) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-navy-light font-display text-lg text-ink/40 lg:h-[calc(100vh-10.5rem)] lg:max-h-[46rem] lg:aspect-auto">
        Görsel Yakında
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-light lg:h-[calc(100vh-13rem)] lg:max-h-[42rem] lg:aspect-auto">
        <Image
          src={activeImage}
          alt={productName}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>

      {images.length > 1 && (
        <div
          className="flex items-center gap-2 sm:gap-3"
          aria-label={`${productName} görsel galerisi`}
          onKeyDown={handleGalleryKeyDown}
          tabIndex={0}
        >
          <button
            type="button"
            onClick={() => selectImage(activeIndex - 1)}
            aria-label="Önceki görsel"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-gold-soft/70 text-gold-soft transition-colors duration-200 hover:bg-gold-soft hover:text-navy"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={image}
                  ref={(element) => {
                    thumbnailRefs.current[index] = element;
                  }}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`${productName} görsel ${index + 1}`}
                  aria-pressed={isActive}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden border transition-colors duration-200 sm:h-20 sm:w-28 ${
                    isActive
                      ? "border-gold-soft"
                      : "border-ink/20 hover:border-gold-soft/60"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => selectImage(activeIndex + 1)}
            aria-label="Sonraki görsel"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-gold-soft/70 text-gold-soft transition-colors duration-200 hover:bg-gold-soft hover:text-navy"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
