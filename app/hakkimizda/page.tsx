

export default function HakkimizdaPage() {
  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
            Hikayemiz
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
            Hakkımızda
          </h1>
        </div>

        <div className="oyma-cizgi my-12" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6 text-ink/80 leading-relaxed font-body">
            <p className="text-lg">
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

          <div className="space-y-8">
            <div className="bg-navy-light/50 p-8 lg:p-10 border border-ink/10">
              <p className="font-display text-5xl lg:text-6xl font-semibold text-ink mb-2">
                30+
              </p>
              <p className="text-sm uppercase tracking-widest2 text-gold-soft font-body">
                Yıllık Deneyim
              </p>
            </div>

            <div className="bg-navy-light/50 p-8 lg:p-10 border border-ink/10">
              <p className="font-display text-5xl lg:text-6xl font-semibold text-ink mb-2">
                500+
              </p>
              <p className="text-sm uppercase tracking-widest2 text-gold-soft font-body">
                Mutlu Müşteri
              </p>
            </div>

            <div className="bg-navy-light/50 p-8 lg:p-10 border border-ink/10">
              <p className="font-display text-5xl lg:text-6xl font-semibold text-ink mb-2">
                50+
              </p>
              <p className="text-sm uppercase tracking-widest2 text-gold-soft font-body">
                Ürün Çeşidi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
