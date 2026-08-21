

export default function HakkimizdaPage() {
  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="text-center sm:mb-16">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
            Hikayemiz
          </p>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Hakkımızda
          </h1>
        </div>

        <div className="oyma-cizgi my-8 sm:my-12" />

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4 leading-relaxed text-ink/80 sm:space-y-6 font-body">
            <p className="text-base sm:text-lg">
              Yatex Bedding, kaliteli ve konforlu yataklar için tasarlanmış
              premium koleksiyonlarıyla hizmet verir. Her ürün, müşteri
              memnuniyetini ön planda tutan bir anlayışla üretilir.
            </p>
            <p>
              Konya&apos;da showroom&apos;umuzda geniş ürün yelpazemizi
              sergiliyoruz. Uzman ekibimizle birlikte, ihtiyacınıza en uygun
              yatağı birlikte bulabiliriz.
            </p>
            <p>
              Amacımız, her müşterimize en iyi uyku deneyimini sunmak ve
              yataklarımızla evlerinize konfor katmak.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:block sm:space-y-8">
            <div className="border border-ink/10 bg-navy-light/50 p-3 text-center sm:p-8 sm:text-left lg:p-10">
              <p className="mb-1 font-display text-3xl font-semibold text-ink sm:mb-2 sm:text-5xl lg:text-6xl">
                30+
              </p>
              <p className="text-[10px] leading-tight uppercase tracking-[0.15em] text-gold-soft sm:text-sm sm:tracking-widest2 font-body">
                Yıllık Deneyim
              </p>
            </div>

            <div className="border border-ink/10 bg-navy-light/50 p-3 text-center sm:p-8 sm:text-left lg:p-10">
              <p className="mb-1 font-display text-3xl font-semibold text-ink sm:mb-2 sm:text-5xl lg:text-6xl">
                500+
              </p>
              <p className="text-[10px] leading-tight uppercase tracking-[0.15em] text-gold-soft sm:text-sm sm:tracking-widest2 font-body">
                Mutlu Müşteri
              </p>
            </div>

            <div className="border border-ink/10 bg-navy-light/50 p-3 text-center sm:p-8 sm:text-left lg:p-10">
              <p className="mb-1 font-display text-3xl font-semibold text-ink sm:mb-2 sm:text-5xl lg:text-6xl">
                50+
              </p>
              <p className="text-[10px] leading-tight uppercase tracking-[0.15em] text-gold-soft sm:text-sm sm:tracking-widest2 font-body">
                Ürün Çeşidi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
