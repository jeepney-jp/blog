import { Locale } from './types'

export const locales: readonly Locale[] = ['en', 'zh-CN', 'zh-TW', 'vi', 'ja'] as const
export const defaultLocale: Locale = 'ja'

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  vi: 'Tiếng Việt'
}

export const localePrefixes = {
  ja: '/ja',
  en: '/en',
  'zh-CN': '/zh-CN',
  'zh-TW': '/zh-TW',
  vi: '/vi'
} as const