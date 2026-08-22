import IletisimPage from "../../iletisim/page";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default async function LocalizedIletisimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = await params;
  const locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <IletisimPage locale={locale} />;
}
