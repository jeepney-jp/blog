import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale } from '@/lib/i18n/types';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const content = {
    ja: {
      companyName: "フォルティア",
      companyNameFull: "行政書士事務所",
      companyNameShort: "行政書士",
      features: "特徴",
      services: "サービス",
      about: "事務所概要",
      news: "お知らせ",
      contact: "お問い合わせ",
    },
    en: {
      companyName: "Fortia",
      companyNameFull: "Administrative Scrivener Office",
      companyNameShort: "Admin Office",
      features: "Features",
      services: "Services",
      about: "About Us",
      news: "News",
      contact: "Contact",
    },
    'zh-CN': {
      companyName: "Fortia",
      companyNameFull: "行政书士事务所",
      companyNameShort: "行政书士",
      features: "特色",
      services: "服务",
      about: "事务所概要",
      news: "新闻",
      contact: "联系我们",
    },
    'zh-TW': {
      companyName: "Fortia",
      companyNameFull: "行政書士事務所",
      companyNameShort: "行政書士",
      features: "特色",
      services: "服務",
      about: "事務所概要",
      news: "新聞",
      contact: "聯繫我們",
    },
    vi: {
      companyName: "Fortia",
      companyNameFull: "Văn phòng Hành chính",
      companyNameShort: "Văn phòng",
      features: "Đặc điểm",
      services: "Dịch vụ",
      about: "Tổng quan văn phòng",
      news: "Tin tức",
      contact: "Liên hệ",
    },
  };

  const t = content[lang];
  const basePath = `/${lang}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center flex-1 min-w-0">
              <Link href={`${basePath}/`} className="hover:opacity-80 transition-opacity min-w-0">
                <h1 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
                  <span className="text-gray-600">{t.companyName}</span>
                  <span className="text-gray-600 ml-1 hidden sm:inline whitespace-nowrap">{t.companyNameFull}</span>
                  <span className="text-gray-600 ml-1 sm:hidden whitespace-nowrap">{t.companyNameShort}</span>
                </h1>
              </Link>
            </div>
            
            {/* デスクトップメニュー */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href={`${basePath}/features`} className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                {t.features}
              </Link>
              <Link href={`${basePath}/services`} className="text-gray-600 hover:text-gray-900">
                {t.services}
              </Link>
              <Link href={`${basePath}/about`} className="text-gray-600 hover:text-gray-900">
                {t.about}
              </Link>
              <Link href={`${basePath}/news`} className="text-gray-600 hover:text-gray-900">
                {t.news}
              </Link>
              <LanguageSwitcher currentLang={lang} />
              <Link href={`${basePath}/contact`} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.contact}
              </Link>
            </nav>
            
            {/* モバイルメニュー */}
            <div className="flex items-center gap-1 sm:gap-2 md:hidden flex-shrink-0">
              <LanguageSwitcher currentLang={lang} />
              <MobileMenu lang={lang} />
            </div>
          </div>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[88px]"></div>
    </>
  );
}