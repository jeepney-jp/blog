'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/i18n/types'
import { getLocalizedPath, getPathWithoutLocale } from '@/lib/i18n/utils'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLang: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = getLocalizedPath(pathWithoutLocale, newLang)
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="言語を選択"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 0 1 1.964 1.69l.393 2.36a2 2 0 0 0 1.962 1.95h.838c.632 0 1.253-.17 1.8-.476a2 2 0 0 0 1.035-1.35l.5-3a2 2 0 0 1 1.962-1.677h.838A2 2 0 0 0 17 8.99V7a2 2 0 0 0-2-2h-3.5a2 2 0 0 0-1.732 1H8a2 2 0 0 0-2 2v.09a2 2 0 0 1-.764 1.578L3.055 11z" />
        </svg>
        <span className="text-sm font-medium">LANGUAGE</span>
        <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('ja')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'ja' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              日本語
            </button>
          </div>
        </div>
      )}
    </div>
  )
}