import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-navy-dark py-10 text-ink sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mb-16 sm:grid-cols-1 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <Link
              href="/"
              aria-label="Yatex Bedding ana sayfa"
              className="relative mb-4 block h-9 w-28 sm:mb-6"
            >
              <Image
                src="/assets/yatex-logo.png"
                alt="Yatex Bedding"
                width={2000}
                height={2000}
                sizes="136px"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[8.5rem] w-[8.5rem] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </Link>
            <p className="text-sm text-ink/60 font-body max-w-sm leading-relaxed">
              İyi Uykunun Zarif Hali.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-soft sm:mb-6 font-body">
              Koleksiyon
            </p>
            <ul className="space-y-2 text-sm text-ink/70 sm:space-y-3 font-body">
              <li>
                <Link
                  href="/urunler?kategori=yatak-odasi"
                  className="hover:text-gold-soft transition-colors"
                >
                  Yatak Odası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-soft sm:mb-6 font-body">
              İletişim
            </p>
            <ul className="space-y-2 break-words text-sm text-ink/70 sm:space-y-3 font-body">
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

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-center sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
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
