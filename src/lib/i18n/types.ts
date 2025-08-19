export type Locale = 'ja' | 'en'

export type TranslationContent = {
  [key: string]: string | TranslationContent
}

export type Translations = {
  ja: TranslationContent
  en: TranslationContent
}