import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './constants/locales'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const acceptLanguage = request.headers.get('accept-language')
  let locale = defaultLocale

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    
    if (preferredLocale === 'en') {
      locale = 'en-US'
    } else if (preferredLocale === 'zh') {
      locale = 'zh-CN'
    }
  }

  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 