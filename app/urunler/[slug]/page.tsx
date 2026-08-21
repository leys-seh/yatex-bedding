import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import WhatsAppProductButton from "@/components/WhatsAppProductButton";
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

  const hasSpecifications = Boolean(product.material || product.dimensions);

  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:px-10 lg:pb-6 lg:pt-24">
        <Link
          href="/urunler"
          className="mb-4 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-gold-soft transition-colors hover:text-gold sm:mb-8 lg:mb-6 font-body"
        >
          <svg
            className="h-4 w-4"
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

        <div className="grid gap-3 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <ProductGallery images={product.images ?? []} productName={product.name} />

          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 lg:mb-3 font-body">
              {product.category.replace("-", " ")}
            </p>
            <h1 className="mb-3 font-display text-3xl font-semibold leading-[1.1] text-ink sm:mb-6 sm:text-4xl lg:mb-4 lg:text-5xl xl:text-6xl">
              {product.name}
            </h1>

            {product.description && (
              <p className="mb-5 text-base leading-relaxed text-ink/75 sm:mb-8 sm:text-lg lg:mb-5 font-body">
                {product.description}
              </p>
            )}

            <div
              className={`mb-5 space-y-1 border-t border-gold-soft/40 pt-4 sm:mb-10 sm:space-y-4 sm:pt-8 lg:mb-6 lg:space-y-2 lg:pt-5 ${
                hasSpecifications ? "" : "hidden sm:block"
              }`}
            >
              {product.material && (
                <div className="flex items-center justify-between border-b border-gold-soft/20 py-2.5 sm:py-3 lg:py-2.5">
                  <span className="text-sm text-ink/50 uppercase tracking-widest2 font-body">
                    Malzeme
                  </span>
                  <span className="text-right text-sm text-ink font-body">
                    {product.material}
                  </span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex items-center justify-between border-b border-gold-soft/20 py-2.5 sm:py-3 lg:py-2.5">
                  <span className="text-sm text-ink/50 uppercase tracking-widest2 font-body">
                    Ölçüler
                  </span>
                  <span className="text-right text-sm text-ink font-body">
                    {product.dimensions}
                  </span>
                </div>
              )}
            </div>

            <WhatsAppProductButton productName={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
