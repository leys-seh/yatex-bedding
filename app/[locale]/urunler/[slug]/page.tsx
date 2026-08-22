import ProductDetailPage from "../../../urunler/[slug]/page";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default async function LocalizedProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: routeLocale, slug } = await params;
  const locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <ProductDetailPage params={Promise.resolve({ slug })} locale={locale} />;
}
