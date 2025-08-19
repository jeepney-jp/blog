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
      testimonials: "お客様の声",
      about: "事務所概要",
      news: "お知らせ",
      blog: "お役立ち情報",
      contact: "お問い合わせ",
    },
    en: {
      companyName: "Fortia",
      companyNameFull: "Administrative Scrivener Office",
      companyNameShort: "Admin Office",
      features: "Features",
      services: "Services",
      testimonials: "Testimonials",
      about: "About Us",
      news: "News",
      blog: "Resources",
      contact: "Contact",
    },
  };

  const t = content[lang];
  const basePath = lang === 'ja' ? '' : `/${lang}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href={`${basePath}/`} className="hover:opacity-80 transition-opacity">
                <h1 className="text-lg sm:text-xl font-bold">
                  <span className="text-gray-600">{t.companyName}</span>
                  <span className="text-gray-600 ml-1 hidden sm:inline">{t.companyNameFull}</span>
                  <span className="text-gray-600 ml-1 sm:hidden">{t.companyNameShort}</span>
                </h1>
              </Link>
            </div>
            
            {/* デスクトップメニュー */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href={`${basePath}/features`} className="text-gray-600 hover:text-gray-900">
                {t.features}
              </Link>
              <Link href={`${basePath}/services`} className="text-gray-600 hover:text-gray-900">
                {t.services}
              </Link>
              <Link href={`${basePath}/testimonials`} className="text-gray-600 hover:text-gray-900">
                {t.testimonials}
              </Link>
              <Link href={`${basePath}/about`} className="text-gray-600 hover:text-gray-900">
                {t.about}
              </Link>
              <Link href={`${basePath}/news`} className="text-gray-600 hover:text-gray-900">
                {t.news}
              </Link>
              <Link href={`${basePath}/blog`} className="text-gray-600 hover:text-gray-900">
                {t.blog}
              </Link>
              <LanguageSwitcher currentLang={lang} />
              <Link href={`${basePath}/contact`} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.contact}
              </Link>
            </nav>
            
            {/* モバイルメニュー */}
            <div className="flex items-center gap-3 md:hidden">
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