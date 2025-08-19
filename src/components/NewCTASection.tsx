import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

interface NewCTASectionProps {
  serviceName?: string;
  lang: Locale;
}

const content = {
  ja: {
    titleWithService: (serviceName: string) => `${serviceName}について無料で相談する`,
    titleDefault: '初回無料相談、まずはお気軽にお問い合わせください',
    subtitle: '創業以来培った豊富な経験と実績で、お客様の申請を確実にサポートします',
    point1Title: '申請実績10,000+',
    point1Desc: '許可率99%の確かな実績',
    point2Title: '多言語対応',
    point2Desc: '9ヶ国語でサポート',
    point3Title: '全国対応',
    point3Desc: '4拠点から迅速に対応',
    ctaButton: '無料相談を予約する',
    phoneLabel: 'お電話でのご相談',
    hours: '平日 9:00〜18:00',
  },
  en: {
    titleWithService: (serviceName: string) => `Free Consultation About ${serviceName}`,
    titleDefault: 'Free Initial Consultation - Feel Free to Contact Us',
    subtitle: 'With extensive experience and achievements since our founding, we reliably support your applications',
    point1Title: '10,000+ Applications',
    point1Desc: '99% Approval Rate',
    point2Title: 'Multilingual Support',
    point2Desc: 'Support in 9 Languages',
    point3Title: 'Nationwide Service',
    point3Desc: 'Quick Response from 4 Locations',
    ctaButton: 'Book Free Consultation',
    phoneLabel: 'Phone Consultation',
    hours: 'Weekdays 9:00-18:00',
  },
};

export default function NewCTASection({ serviceName, lang }: NewCTASectionProps) {
  const t = content[lang];
  const basePath = lang === 'ja' ? '' : `/${lang}`;

  return (
    <section 
      className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-cover bg-gray-100"
      style={{
        backgroundImage: "url('/CTA背景4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White blur container */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-relaxed">
              {serviceName 
                ? t.titleWithService(serviceName)
                : t.titleDefault
              }
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* 3 Points Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Point 1 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{t.point1Title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.point1Desc}</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{t.point2Title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.point2Desc}</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{t.point3Title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.point3Desc}</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            {/* Main CTA Button */}
            <div className="text-center">
              <Link 
                href={`${basePath}/contact`}
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
              >
                {t.ctaButton}
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Phone Number */}
            <div className="text-center">
              <p className="text-gray-600 mb-2 text-sm">{t.phoneLabel}</p>
              <a 
                href="tel:0475444499" 
                className="inline-flex items-center text-2xl sm:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                📞 0475-44-4499
              </a>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm">{t.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}