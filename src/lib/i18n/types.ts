export type Locale = 'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'vi'

export type TranslationContent = {
  [key: string]: string | TranslationContent
}

export type Translations = {
  ja: TranslationContent
  en: TranslationContent
  'zh-CN': TranslationContent
  'zh-TW': TranslationContent
  vi: TranslationContent
}