import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import AboutScrollAnimation from "@/components/AboutScrollAnimation";

export const revalidate = 3600;

export default async function HomePage() {
  const featured = await getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Categories / Collections */}
      <ScrollReveal>
        <section className="py-24 lg:py-32 bg-navy">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
                Koleksiyonlar
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
                Yatak Koleksiyonları
              </h2>
            </div>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat, index) => (
                <Link
                  key={cat.slug}
                  href={`/urunler?kategori=${cat.slug}`}
                  className="group relative overflow-hidden bg-navy-light aspect-[3/4] flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-2xl border border-ink/10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 via-navy-light/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-ink mb-2 group-hover:translate-x-2 transition-transform duration-500">
                      {cat.label}
                    </h3>
                    <div className="flex items-center gap-2 text-gold-soft opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-xs uppercase tracking-widest2 font-body">
                        Keşfet
                      </span>
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
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Products */}
      {featured.length > 0 && (
        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-navy-dark">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="reveal text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
                  Öne Çıkan
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
                  Öne Çıkan Modeller
                </h2>
              </div>

              <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-start">
                {featured.map((product, index) => (
                  <div
                    key={product.id}
                    className="reveal"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* About / Brand Section */}
      <AboutScrollAnimation />

      {/* How It Works */}
      <ScrollReveal>
        <section className="py-24 lg:py-32 bg-navy-light text-ink">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
                Süreç
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold">
                Nasıl Çalışıyoruz?
              </h2>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { num: "01", title: "Keşfet", desc: "Koleksiyonumuzu inceleyin" },
                { num: "02", title: "İncele", desc: "Detaylı bilgi alın" },
                { num: "03", title: "Bize Ulaşın", desc: "Sorularınızı sorun" },
                { num: "04", title: "Bulalım", desc: "Size uygun modeli seçelim" },
              ].map((step, index) => (
                <div
                  key={step.num}
                  className="reveal text-center lg:text-left"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <p className="font-display text-5xl lg:text-6xl font-semibold text-gold-soft/30 mb-4">
                    {step.num}
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Quality / Manufacturing Story */}
      <ScrollReveal>
        <section className="py-24 lg:py-32 bg-navy">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
                Kalite
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
                Kalitenin Arkasındaki Detaylar
              </h2>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                  className="reveal text-center p-8 bg-navy-light/50 border border-ink/10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 border border-gold-soft/40 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gold-soft/10 rounded-full" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-body leading-relaxed">
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
        <section className="py-24 lg:py-32 bg-navy-light/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-6 font-body">
                İletişim
              </p>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-ink leading-[1.1] mb-8">
                Size uygun yatağı
                <br />
                birlikte bulalım.
              </h2>
              <p className="text-ink/70 font-body mb-12 max-w-xl mx-auto">
                Ürünlerimiz hakkında detaylı bilgi ve size özel öneriler için
                bizimle iletişime geçin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-3 border border-gold-soft bg-gold-soft px-8 py-4 text-sm uppercase tracking-[0.2em] text-navy transition-all duration-300 hover:bg-gold hover:border-gold"
                >
                  İletişime Geç
                </Link>
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink/5"
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
