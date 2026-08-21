import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto min-h-screen max-w-xl bg-navy px-4 pb-12 pt-24 text-center sm:px-6 sm:py-32">
      <p className="font-display text-5xl text-ink sm:text-6xl">404</p>
      <p className="mt-4 text-ink/70">Aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center justify-center border border-gold-soft px-5 py-3 text-xs uppercase tracking-widest2 text-gold-soft transition-all hover:bg-gold-soft hover:text-navy sm:mt-8 sm:px-6 sm:text-sm"
      >
        Ana Sayfaya Dön
      </Link>
    </section>
  );
}
