import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (isLocale(first)) {
    return NextResponse.next();
  }

  const locale = isLocale(request.cookies.get("yatex_locale")?.value)
    ? request.cookies.get("yatex_locale")!.value
    : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|assets|images|favicon.ico).*)"],
};
