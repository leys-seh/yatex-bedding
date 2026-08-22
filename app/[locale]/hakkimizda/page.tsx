import HakkimizdaPage from "../../hakkimizda/page";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default async function LocalizedHakkimizdaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = await params;
  const locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <HakkimizdaPage locale={locale} />;
}
