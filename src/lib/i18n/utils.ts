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
  
  return defaultLocale
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/')
  if (isValidLocale(segments[1])) {
    segments.splice(1, 1)
    return segments.join('/') || '/'
  }
  
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