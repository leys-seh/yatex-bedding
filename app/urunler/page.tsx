import Link from "next/link";
import { getAllProducts, getProductsByCategory, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";



export const revalidate = 3600;

export default async function UrunlerPage(
  props: {
    searchParams: Promise<{ kategori?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const activeCategory = searchParams.kategori;
  const products = activeCategory
    ? await getProductsByCategory(activeCategory)
    : await getAllProducts();

  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-16">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3 font-body">
            Katalog
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
            Ürünlerimiz
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href="/urunler"
            className={`px-6 py-3 text-sm uppercase tracking-wide font-body transition-all duration-300 ${
              !activeCategory
                ? "border border-gold-soft bg-gold-soft text-navy"
                : "border border-ink/30 text-ink/70 hover:border-gold-soft"
            }`}
          >
            Tümü
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler?kategori=${cat.slug}`}
              className={`px-6 py-3 text-sm uppercase tracking-wide font-body transition-all duration-300 ${
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
          <div className="text-center py-24">
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
