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

  // ロケールが含まれていない場合
  if (pathnameIsMissingLocale) {
    // ルートページの場合、デフォルトロケールにリダイレクト
    if (pathname === '/') {
      // Googleクローラーの場合は常に日本語版へリダイレクト
      const userAgent = request.headers.get('user-agent') || ''
      if (userAgent.toLowerCase().includes('googlebot')) {
        return NextResponse.redirect(
          new URL('/ja', request.url),
          { status: 308 } // 308: 恒久的リダイレクト（メソッド保持）
        )
      }
      
      // 一般ユーザーの場合は言語設定に基づいてリダイレクト
      const acceptLanguage = request.headers.get('accept-language') || ''
      let detectedLocale = defaultLocale
      
      if (acceptLanguage.toLowerCase().includes('zh-cn') || acceptLanguage.toLowerCase().includes('zh-hans')) {
        detectedLocale = 'zh-CN'
      } else if (acceptLanguage.toLowerCase().includes('zh-tw') || acceptLanguage.toLowerCase().includes('zh-hant')) {
        detectedLocale = 'zh-TW'
      } else if (acceptLanguage.toLowerCase().startsWith('en')) {
        detectedLocale = 'en'
      }
      
      return NextResponse.redirect(
        new URL(`/${detectedLocale}`, request.url),
        { status: 308 } // 308: 恒久的リダイレクト（メソッド保持）
      )
    }
    
    // その他のパスの場合も言語検出してリダイレクト
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