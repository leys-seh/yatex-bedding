import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();
  const locale = isLocale(request.cookies.get("yatex_locale")?.value)
    ? request.cookies.get("yatex_locale")!.value
    : defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url));
}

export const config = { matcher: ["/((?!_next|api|assets|images|favicon.ico).*)"] };
