import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n/constants'
import { isValidLocale } from '@/lib/i18n/utils'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 静的ファイルとAPIルートをスキップ
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // APIルート、静的ファイル、画像などをスキップ
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/sanity/') ||
    pathname.includes('.') ||
    pathname.startsWith('/studio')
  ) {
    return NextResponse.next()
  }

  // ロケールが含まれていない場合
  if (pathnameIsMissingLocale) {
    // ブラウザの言語設定から優先言語を取得
    const acceptLanguage = request.headers.get('accept-language') || ''
    const detectedLocale = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : defaultLocale

    // 適切なロケールパスにリダイレクト
    return NextResponse.redirect(
      new URL(`/${detectedLocale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 除外するパス以外のすべてにマッチ
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}