import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n/constants'

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

  // ロケールが含まれていない場合（ただし、ルートページは除く）
  if (pathnameIsMissingLocale && pathname !== '/') {
    // ブラウザの言語設定から優先言語を取得
    const acceptLanguage = request.headers.get('accept-language') || ''
    let detectedLocale = defaultLocale
    
    if (acceptLanguage.toLowerCase().includes('zh-cn') || acceptLanguage.toLowerCase().includes('zh-hans')) {
      detectedLocale = 'zh-CN'
    } else if (acceptLanguage.toLowerCase().includes('zh-tw') || acceptLanguage.toLowerCase().includes('zh-hant')) {
      detectedLocale = 'zh-TW'
    } else if (acceptLanguage.toLowerCase().startsWith('en')) {
      detectedLocale = 'en'
    }

    // 適切なロケールパスにリダイレクト
    return NextResponse.redirect(
      new URL(`/${detectedLocale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 静的ファイルとAPIルートを除外
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|studio|sanity).*)',
  ],
}