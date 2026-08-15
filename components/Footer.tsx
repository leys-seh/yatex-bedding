import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-ink py-16 lg:py-20 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-baseline gap-2 mb-6">
              <span className="font-display text-2xl font-semibold tracking-wide text-ink">
                Yatex
              </span>
              <span className="font-body text-[11px] uppercase tracking-widest2 text-gold-soft">
                Bedding
              </span>
            </Link>
            <p className="text-sm text-ink/60 font-body max-w-sm leading-relaxed">
              Premium bedding collections for your home. İyi uykunun
              tasarlandığı bir deneyim.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold-soft mb-6 font-body">
              Koleksiyon
            </p>
            <ul className="space-y-3 text-sm text-ink/70 font-body">
              <li>
                <Link
                  href="/urunler?kategori=yatak-odasi"
                  className="hover:text-gold-soft transition-colors"
                >
                  Yatak Odası
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler?kategori=oturma-grubu"
                  className="hover:text-gold-soft transition-colors"
                >
                  Oturma Grubu
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler?kategori=yemek-odasi"
                  className="hover:text-gold-soft transition-colors"
                >
                  Yemek Odası
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler?kategori=genc-odasi"
                  className="hover:text-gold-soft transition-colors"
                >
                  Genç Odası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold-soft mb-6 font-body">
              İletişim
            </p>
            <ul className="space-y-3 text-sm text-ink/70 font-body">
              <li>Showroom: Konya, Türkiye</li>
              <li>Telefon: +90 5xx xxx xx xx</li>
              <li>
                <a
                  href="mailto:info@yatexbedding.com"
                  className="hover:text-gold-soft transition-colors"
                >
                  info@yatexbedding.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink/40 font-body">
            © {new Date().getFullYear()} Yatex Bedding. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-6">
            <Link
              href="/"
              className="text-xs text-ink/40 hover:text-gold-soft transition-colors font-body"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-xs text-ink/40 hover:text-gold-soft transition-colors font-body"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="text-xs text-ink/40 hover:text-gold-soft transition-colors font-body"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
