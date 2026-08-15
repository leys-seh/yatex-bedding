export default function IletisimPage() {
  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4 font-body">
            Bize Ulaşın
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-ink">
            İletişim
          </h1>
        </div>

        <div className="oyma-cizgi my-12" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                Showroom
              </p>
              <p className="text-xl text-ink font-display">
                Konya, Türkiye
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                Telefon
              </p>
              <p className="text-xl text-ink font-display">
                +90 5xx xxx xx xx
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                E-posta
              </p>
              <p className="text-xl text-ink font-display">
                info@yatexbedding.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                Çalışma Saatleri
              </p>
              <p className="text-xl text-ink font-display">
                Pazartesi - Cumartesi, 09:00 - 18:00
              </p>
            </div>
          </div>

          <div className="bg-navy-light/30 p-8 lg:p-12 border border-ink/10">
            <h3 className="font-display text-2xl font-semibold text-ink mb-6">
              Bize Yazın
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                  Adınız
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gold-soft/40 py-3 text-ink font-body focus:outline-none focus:border-gold-soft transition-colors"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                  E-posta
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gold-soft/40 py-3 text-ink font-body focus:outline-none focus:border-gold-soft transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest2 text-ink/50 mb-2 font-body">
                  Mesaj
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-gold-soft/40 py-3 text-ink font-body focus:outline-none focus:border-gold-soft transition-colors resize-none"
                  placeholder="Mesajınız..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 border border-gold-soft bg-gold-soft px-8 py-4 text-sm uppercase tracking-[0.2em] text-navy transition-all duration-300 hover:bg-gold hover:border-gold"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
