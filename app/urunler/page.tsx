import Link from "next/link";
import {
  getAllProducts,
  getProductsByCategory,
  isProductCategorySlug,
  PRODUCT_CATEGORIES,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";



export const revalidate = 3600;

const CATEGORY_PRIORITY: Record<string, number> = {
  "yatak-seti": 0,
  yatak: 1,
  baza: 2,
  baslik: 3,
};

export default async function UrunlerPage(
  props: {
    searchParams: Promise<{ kategori?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const activeCategory = isProductCategorySlug(searchParams.kategori)
    ? searchParams.kategori
    : undefined;
  const products = activeCategory
    ? await getProductsByCategory(activeCategory)
    : [...(await getAllProducts())].sort(
        (first, second) =>
          (CATEGORY_PRIORITY[first.category] ?? Number.MAX_SAFE_INTEGER) -
          (CATEGORY_PRIORITY[second.category] ?? Number.MAX_SAFE_INTEGER),
      );

  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:px-10 lg:pb-16 lg:pt-28">
        <div className="mb-5 text-center sm:mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-3 font-body">
            Katalog
          </p>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Ürünlerimiz
          </h1>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
          <Link
            href="/urunler"
            className={`min-h-10 px-3 py-2 text-[11px] uppercase tracking-wide transition-all duration-300 sm:min-h-0 sm:px-6 sm:py-3 sm:text-sm font-body ${
              !activeCategory
                ? "border border-gold-soft bg-gold-soft text-navy"
                : "border border-ink/30 text-ink/70 hover:border-gold-soft"
            }`}
          >
            Tümü
          </Link>
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler?kategori=${cat.slug}`}
              className={`min-h-10 px-3 py-2 text-[11px] uppercase tracking-wide transition-all duration-300 sm:min-h-0 sm:px-6 sm:py-3 sm:text-sm font-body ${
                activeCategory === cat.slug
                  ? "border border-gold-soft bg-gold-soft text-navy"
                  : "border border-ink/30 text-ink/70 hover:border-gold-soft"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {products.length === 0 ? (
          <div className="py-12 text-center sm:py-24">
            <p className="text-ink/60 font-body text-lg">
              Bu kategoride henüz ürün eklenmedi.
            </p>
            <p className="text-ink/40 font-body text-sm mt-2">
              Yakında burada olacak.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-10 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
