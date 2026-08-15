import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";


export const revalidate = 3600;

export default async function ProductDetailPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  const image = product.images?.[0];

  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-20">
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-gold-soft hover:text-gold transition-colors mb-12 font-body"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Ürünlere Dön
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-light">
            {image ? (
              <Image
                src={image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center font-display text-lg text-ink/40">
                Görsel Yakında
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
              {product.category.replace("-", " ")}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-ink leading-[1.1] mb-6">
              {product.name}
            </h1>

            {product.description && (
              <p className="text-lg text-ink/75 leading-relaxed mb-8 font-body">
                {product.description}
              </p>
            )}

            <div className="space-y-4 border-t border-gold-soft/40 pt-8 mb-10">
              {product.material && (
                <div className="flex justify-between items-center py-3 border-b border-gold-soft/20">
                  <span className="text-sm text-ink/50 uppercase tracking-widest2 font-body">
                    Malzeme
                  </span>
                  <span className="text-sm text-ink font-body">
                    {product.material}
                  </span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex justify-between items-center py-3 border-b border-gold-soft/20">
                  <span className="text-sm text-ink/50 uppercase tracking-widest2 font-body">
                    Ölçüler
                  </span>
                  <span className="text-sm text-ink font-body">
                    {product.dimensions}
                  </span>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-3 border border-gold-soft bg-gold-soft px-8 py-4 text-sm uppercase tracking-[0.2em] text-navy transition-all duration-300 hover:bg-gold hover:border-gold w-full sm:w-auto"
            >
              Ürün Hakkında Bilgi Al
              <svg
                className="w-4 h-4"
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
          </div>
        </div>
      </div>
    </section>
  );
}
