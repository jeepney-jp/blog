'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

interface MobileMenuProps {
  lang: Locale;
}

export default function MobileMenu({ lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    ja: {
      menu: "メニュー",
      top: "トップ",
      features: "当事務所の特徴",
      services: "サービス",
      about: "事務所案内",
      news: "お知らせ",
      contact: "お問い合わせ",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
    },
    en: {
      menu: "Menu",
      top: "Home",
      features: "Our Features",
      services: "Services",
      about: "About Us",
      news: "News",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  };

  const t = content[lang];
  const basePath = `/${lang}`;

  const menuItems = [
    { href: `${basePath}/`, label: t.top },
    { href: `${basePath}/#features`, label: t.features },
    { href: `${basePath}/services`, label: t.services },
    { href: `${basePath}/about`, label: t.about },
    { href: `${basePath}/news`, label: t.news },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-label={t.openMenu}
      >
        <svg
          className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* メニューパネル */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">{t.menu}</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label={t.closeMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* お問い合わせボタン */}
            <div className="mt-8">
              <Link
                href={`${basePath}/contact`}
                onClick={closeMenu}
                className="block w-full text-center bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                {t.contact}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}