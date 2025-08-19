'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/i18n/types'
import { localeNames } from '@/lib/i18n/constants'
import { getLocalizedPath, getPathWithoutLocale } from '@/lib/i18n/utils'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLang: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = getLocalizedPath(pathWithoutLocale, newLang)
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('ja')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'ja'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="日本語に切り替え"
      >
        {localeNames.ja}
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        {localeNames.en}
      </button>
    </div>
  )
}