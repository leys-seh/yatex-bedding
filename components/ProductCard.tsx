import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/supabase";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0];

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="product-card group block"
    >
      <div className="product-card__imgBx relative aspect-[4/5] overflow-hidden bg-navy">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="product-card__img object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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

        <div className="absolute top-1.5 left-1.5 bg-navy/70 backdrop-blur-sm border border-gold/40 px-1.5 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest2 text-gold-soft font-body z-10">
          {product.category.replace("-", " ")}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 z-10" />

        <div className="product-card__cta absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
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

      <div className="product-card__content p-2 lg:p-4 relative bg-navy-light/50 border border-ink/10 border-t-0">
        <div className="product-card__line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold to-gold-soft transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        <h3 className="font-display text-sm lg:text-lg font-semibold text-ink mb-1 lg:mb-2 group-hover:text-gold-soft transition-colors duration-300">
          {product.name}
        </h3>
        {product.material && (
          <p className="hidden sm:block text-xs sm:text-sm text-ink/60 font-body">{product.material}</p>
        )}
      </div>
    </Link>
  );
}
