import { Locale } from './types'

export const locales: readonly Locale[] = ['ja', 'en'] as const
export const defaultLocale: Locale = 'ja'

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English'
}

export const localePrefixes = {
  ja: '',
  en: '/en'
} as const