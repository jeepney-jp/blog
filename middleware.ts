import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n/constants'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // APIルート、静的ファイル、画像などを先にスキップ
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/sanity/') ||
    pathname.includes('.') ||
    pathname.startsWith('/studio')
  ) {
    return NextResponse.next()
  }

  // /ja/* から /* への301リダイレクト処理（静的ファイルチェック後に実行）
  if (pathname.startsWith('/ja/') || pathname === '/ja') {
    const newPath = pathname === '/ja' ? '/' : pathname.substring(3)
    const response = NextResponse.redirect(new URL(newPath, request.url), 301)
    return response
  }

  // ロケールチェック
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // ロケールが含まれていない場合
  if (pathnameIsMissingLocale) {
    // 日本語サブページの場合、リダイレクトせずそのまま表示
    const japaneseSubPages = ['/', '/about', '/services', '/contact', '/news', '/features']
    const isJapaneseSubPage = japaneseSubPages.includes(pathname) || pathname.startsWith('/services/')
    
    if (isJapaneseSubPage) {
      // リダイレクトを行わず、そのままページを表示
      return NextResponse.next()
    }
    
    // その他のパスの場合は言語検出してリダイレクト
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
      new URL(`/${detectedLocale}${pathname}`, request.url),
      { status: 308 } // 308: 恒久的リダイレクト（メソッド保持）
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