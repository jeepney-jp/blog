import { Locale } from './types'
import { defaultLocale, locales } from './constants'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/')
  const potentialLocale = segments[1]
  
  if (isValidLocale(potentialLocale)) {
    return potentialLocale
  }
  
  // ルートパスまたは日本語パスの場合は日本語として扱う
  return defaultLocale
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/')
  
  // 言語パス（/en, /zh-CN等）がある場合は除去
  if (segments.length > 1 && isValidLocale(segments[1])) {
    segments.splice(1, 1)
    return segments.join('/') || '/'
  }
  
  // ルートパスまたは日本語パスの場合はそのまま返す
  return pathname
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname)
  
  // 日本語の場合はルートパスを使用、その他は言語パスを使用
  if (locale === 'ja') {
    return pathWithoutLocale
  }
  
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
}