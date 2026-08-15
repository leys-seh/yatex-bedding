import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center bg-navy min-h-screen">
      <p className="font-display text-6xl text-ink">404</p>
      <p className="mt-4 text-ink/70">Aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="mt-8 inline-block border border-gold-soft px-6 py-3 text-sm uppercase tracking-widest2 text-gold-soft hover:bg-gold-soft hover:text-navy transition-all"
      >
        Ana Sayfaya Dön
      </Link>
    </section>
  );
}
