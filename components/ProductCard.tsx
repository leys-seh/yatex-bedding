import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/supabase";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  const image = product.images?.[0];

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="product-card group block"
    >
      <div className="product-card__imgBx relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes={
              compact
                ? "(max-width: 639px) 33vw, (max-width: 1023px) 50vw, 33vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="product-card__img object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-navy/80">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 border border-ink/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-ink/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-display text-sm text-ink/50">Görsel Yakında</p>
            </div>
          </div>
        )}

        <div
          className={`absolute top-1.5 left-1.5 z-10 border border-gold/40 bg-navy/70 px-1.5 py-0.5 font-body text-[8px] uppercase tracking-widest2 text-gold-soft backdrop-blur-sm sm:text-[9px] ${
            compact ? "hidden sm:block" : ""
          }`}
        >
          {product.category.replace("-", " ")}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 z-10" />

        <div
          className={`product-card__cta absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0 ${
            compact ? "hidden sm:block" : ""
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink font-body">
            Detayları İncele
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
          </span>
        </div>
      </div>

      <div
        className={`product-card__content relative min-h-[3.5rem] border border-t-0 border-ink/10 bg-navy-light/50 sm:min-h-[4.75rem] ${
          compact ? "p-1.5 sm:p-2 lg:p-4" : "p-2 lg:p-4"
        }`}
      >
        <div className="product-card__line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold to-gold-soft transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        <h3
          className={`font-display font-semibold text-ink transition-colors duration-300 group-hover:text-gold-soft ${
            compact
              ? "mb-0.5 line-clamp-2 min-h-7 break-words text-[11px] leading-tight sm:mb-1 sm:min-h-10 sm:text-sm lg:mb-2 lg:min-h-[3.25rem] lg:line-clamp-none lg:text-lg"
              : "mb-1 text-sm lg:mb-2 lg:text-lg"
          }`}
        >
          {product.name}
        </h3>
        {product.material && (
          <p className="hidden sm:block text-xs sm:text-sm text-ink/60 font-body">{product.material}</p>
        )}
      </div>
    </Link>
  );
}
