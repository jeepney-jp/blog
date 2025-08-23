'use client'

import { useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/i18n/types'
import { getLocalizedPath, getPathWithoutLocale } from '@/lib/i18n/utils'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  // 言語コードマッピング
  const langCodeMap: Record<Locale, string> = {
    'ja': 'JA',
    'en': 'EN',
    'zh-CN': '中',
    'zh-TW': '繁',
    'vi': 'VI'
  }

  const handleLanguageChange = (newLang: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = getLocalizedPath(pathWithoutLocale, newLang)
    router.push(newPath)
    setIsOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200) // 200ms遅延
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="言語を選択"
      >
        {/* モバイル版：🌐 + 言語コード */}
        <span className="text-base md:hidden">🌐</span>
        <span className="text-xs font-medium md:hidden">{langCodeMap[currentLang]}</span>
        
        {/* デスクトップ版：従来のデザイン */}
        <svg className="w-4 h-4 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span className="text-sm font-medium hidden md:inline">LANGUAGE</span>
        
        {/* ドロップダウンアイコン */}
        <svg className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onMouseDown={() => handleLanguageChange('ja')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'ja' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              日本語
            </button>
            <button
              onMouseDown={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              English
            </button>
            <button
              onMouseDown={() => handleLanguageChange('zh-CN')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'zh-CN' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              简体中文
            </button>
            <button
              onMouseDown={() => handleLanguageChange('zh-TW')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'zh-TW' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              繁體中文
            </button>
            <button
              onMouseDown={() => handleLanguageChange('vi')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === 'vi' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Tiếng Việt
            </button>
          </div>
        </div>
      )}
    </div>
  )
}