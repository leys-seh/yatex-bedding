import UrunlerPage from "../../urunler/page";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default async function LocalizedUrunlerPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { locale: routeLocale } = await params;
  const locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <UrunlerPage searchParams={searchParams} locale={locale} />;
}
