import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";
import { CATALOG_URL } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import AboutScrollAnimation from "@/components/AboutScrollAnimation";



export const revalidate = 3600;

const CATALOG_PREVIEWS = [
  {
    src: "/assets/catalog/catalog-preview-1.webp",
    alt: "YATEX katalog görünümü 1",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-2.webp",
    alt: "YATEX katalog görünümü 2",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-3-lidya.webp",
    alt: "YATEX katalog görünümü 3",
    width: 1448,
    height: 1086,
  },
  {
    src: "/assets/catalog/catalog-preview-4.webp",
    alt: "YATEX katalog görünümü 4",
    width: 1448,
    height: 1086,
  },
];

export default async function HomePage() {
  const products = await getAllProducts();
  const productsWithImages = products.filter((product) =>
    product.images?.some(
      (image) => typeof image === "string" && image.trim().length > 0,
    ),
  );
  // Prefer products selected as featured when they have an image. The current
  // catalogue has no such records, so its real-image products remain visible.
  const carouselProducts = productsWithImages.filter((product) => product.featured);
  const visibleProducts =
    carouselProducts.length > 0 ? carouselProducts : productsWithImages;
  // A set contains at least six rendered cards, keeping wide screens covered
  // even when the source collection is small. This never changes product data.
  const marqueeProducts = Array.from(
    {
      length:
        visibleProducts.length > 0
          ? Math.max(1, Math.ceil(6 / visibleProducts.length))
          : 0,
    },
    () => visibleProducts,
  ).flat();

  return (
    <>
      <Hero />

      {/* Catalog previews */}
      <ScrollReveal>
        <section className="bg-navy py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="reveal mb-8 text-center sm:mb-10 lg:mb-12">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
                Kataloğumuz
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
                Kataloglarımız
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base font-body">
                YATEX koleksiyonlarını ve tasarımlarını kataloğumuzda keşfedin.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
              {CATALOG_PREVIEWS.map((preview) => (
                <div
                  key={preview.src}
                  className="group overflow-hidden rounded-sm border border-ink/10 bg-navy-light/30"
                >
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    width={preview.width}
                    height={preview.height}
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 50vw"
                    className="h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
                  />
                </div>
              ))}
            </div>

            <div className="reveal mt-8 flex justify-center sm:mt-10">
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YATEX kataloğunu yeni sekmede incele"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-gold-soft bg-navy-light/30 px-8 text-xs uppercase tracking-[0.2em] text-gold-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:text-navy sm:w-auto sm:px-10 sm:text-sm"
              >
                Kataloğu İncele
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Products */}
      {visibleProducts.length > 0 && (
        <ScrollReveal>
          <section className="bg-navy-dark py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
              <div className="reveal mb-8 text-center sm:mb-10 lg:mb-12">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
                  Öne Çıkan
                </p>
                <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
                  Öne Çıkan Modeller
                </h2>
              </div>

            </div>

            <div className="yatex-featured-marquee-viewport" aria-label="Öne çıkan ürünler">
              <div className="yatex-featured-marquee-track">
                {[0, 1].map((setIndex) => (
                  <div
                    key={setIndex}
                    className="yatex-featured-marquee-group"
                    aria-hidden={setIndex === 1}
                  >
                    {marqueeProducts.map((product, index) => (
                      <div
                        key={`${setIndex}-${product.id}-${index}`}
                        className="yatex-featured-marquee-card"
                      >
                        <ProductCard product={product} compact />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* About / Brand Section */}
      <AboutScrollAnimation />

      {/* Quality / Manufacturing Story */}
      <ScrollReveal>
        <section className="bg-navy py-12 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="reveal mb-8 text-center sm:mb-16">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
                Kalite
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
                Kalitenin Arkasındaki Detaylar
              </h2>
            </div>

            <div className="reveal grid grid-cols-1 gap-3 sm:gap-8 md:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Malzeme",
                  desc: "En kaliteli doğal malzemeler",
                },
                {
                  title: "Zanaat",
                  desc: "Ustalıkla işlenen her detay",
                },
                {
                  title: "Konfor",
                  desc: "İyi uyku için tasarlanmış",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="reveal border border-ink/10 bg-navy-light/50 p-5 text-center sm:p-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/40 sm:mb-6 sm:h-16 sm:w-16">
                    <div className="h-6 w-6 rounded-full bg-gold-soft/10 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:mb-3 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink/60 sm:text-sm font-body">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="bg-navy-light/30 py-12 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
            <div className="reveal">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-6 font-body">
                İletişim
              </p>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-[1.1] text-ink sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
                Size uygun yatağı
                <br />
                birlikte bulalım.
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-sm text-ink/70 sm:mb-12 sm:text-base font-body">
                Ürünlerimiz hakkında detaylı bilgi ve size özel öneriler için
                bizimle iletişime geçin.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-gold-soft bg-gold-soft px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:border-gold hover:bg-gold sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
                >
                  İletişime Geç
                </Link>
                <Link
                  href="/urunler"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-ink/30 px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink/5 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
                >
                  Ürünleri İncele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
