
export default function IletisimPage() {
  return (
    <section className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="text-center sm:mb-16">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-soft sm:mb-4 font-body">
            Bize Ulaşın
          </p>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            İletişim
          </h1>
        </div>

        <div className="oyma-cizgi my-8 sm:my-12" />

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:block sm:space-y-8">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                Showroom
              </p>
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caa55c4b8fa691:0xf28f93688c2728bb?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="block break-words text-lg text-ink transition-colors hover:text-gold-soft sm:text-xl font-display"
              >
                Çobançeşme, Sanayi Cd. Acar Sanayi Sitesi No:70 Zemin Kat,
                <br />
                34530 Bahçelievler / İstanbul
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                Telefon
              </p>
              <a
                href="tel:+905426515951"
                className="block break-words text-lg text-ink transition-colors hover:text-gold-soft sm:text-xl font-display"
              >
                0542 651 59 51
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                E-posta
              </p>
              <p className="break-words text-lg text-ink sm:text-xl font-display">
                info@yatexbedding.com
              </p>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                Çalışma Saatleri
              </p>
              <p className="break-words text-lg text-ink sm:text-xl font-display">
                <span className="block">Pazartesi – Cuma: 08:30 – 19:00</span>
                <span className="block">Cumartesi: 08:30 – 15:00</span>
                <span className="block">Pazar: Kapalı</span>
              </p>
            </div>
          </div>

          <div className="border border-ink/10 bg-navy-light/30 p-4 sm:p-8 lg:p-12">
            <h3 className="mb-4 font-display text-xl font-semibold text-ink sm:mb-6 sm:text-2xl">
              Bize Yazın
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                  Adınız
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gold-soft/40 bg-transparent py-2.5 text-ink transition-colors focus:border-gold-soft focus:outline-none sm:py-3 font-body"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                  E-posta
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gold-soft/40 bg-transparent py-2.5 text-ink transition-colors focus:border-gold-soft focus:outline-none sm:py-3 font-body"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink/50 sm:mb-2 font-body">
                  Mesaj
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none border-b border-gold-soft/40 bg-transparent py-2.5 text-ink transition-colors focus:border-gold-soft focus:outline-none sm:py-3 font-body"
                  placeholder="Mesajınız..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-gold-soft bg-gold-soft px-4 py-3.5 text-xs uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:border-gold hover:bg-gold sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
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
