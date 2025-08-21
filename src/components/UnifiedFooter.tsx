import Link from "next/link";
import { servicesContent } from '@/data/services-content';
import { Locale } from '@/lib/i18n/types';

interface UnifiedFooterProps {
  lang?: Locale;
}

export default function UnifiedFooter({ lang = 'ja' }: UnifiedFooterProps) {
  const serviceCategories = servicesContent.ja.categories;
  
  const content = {
    ja: {
      companyName: "フォルティア",
      companyNameFull: "行政書士事務所",
      businessHours: "営業時間",
      weekdays: "平日: 9:00 - 18:00",
      saturday: "土曜: 9:00 - 17:00",
      holiday: "日祝: 休業",
      serviceAreas: "主要業務エリア",
      areasText: "東京都、千葉県、埼玉県、神奈川県",
      otherAreas: "※その他地域もご相談ください",
      services: "サービス",
      about: "その他",
      aboutUs: "事務所案内",
      news: "お知らせ",
      contact: "お問い合わせ",
      copyright: "© 2024 フォルティア行政書士事務所. All rights reserved."
    },
    en: {
      companyName: "Fortia",
      companyNameFull: "Administrative Law Office",
      businessHours: "Business Hours",
      weekdays: "Weekdays: 9:00 - 18:00",
      saturday: "Saturday: 9:00 - 17:00",
      holiday: "Sunday & Holidays: Closed",
      serviceAreas: "Service Areas",
      areasText: "Tokyo, Chiba, Saitama, Kanagawa",
      otherAreas: "※Other areas available upon consultation",
      services: "Services",
      about: "About",
      aboutUs: "About Us",
      news: "News",
      contact: "Contact",
      copyright: "© 2024 Fortia Administrative Law Office. All rights reserved."
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Office Information */}
          <div>
            <Link href={`/${lang}`}>
              <h3 className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer">
                <span className="text-white">{t.companyName}</span>
                <span className="text-white ml-1">{t.companyNameFull}</span>
              </h3>
            </Link>
            <div className="mb-4">
              <p className="text-gray-400">
                〒100-0001<br />
                {lang === 'ja' ? '東京都千代田区千代田1-1-1' : '1-1-1 Chiyoda, Chiyoda-ku, Tokyo'}<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">{t.businessHours}</h4>
              <p className="text-gray-400 text-sm">
                {t.weekdays}<br />
                {t.saturday}<br />
                {t.holiday}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">{t.serviceAreas}</h4>
              <p className="text-gray-400 text-sm">
                {t.areasText}<br />
                {t.otherAreas}
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{t.services}</h3>
            <div className="md:columns-2 md:gap-x-6 space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.id} className="mb-2 break-inside-avoid">
                  <Link 
                    href={`/${lang}/services/${category.slug}`}
                    className="text-gray-300 hover:text-white font-medium transition-colors block"
                  >
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/news`} className="text-gray-400 hover:text-white transition-colors">
                  {t.news}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}