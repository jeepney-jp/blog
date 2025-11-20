import { Metadata } from 'next';
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import Link from 'next/link';
import Image from 'next/image';
import { servicesContent } from '@/data/services-content';
import { serviceCardsContent } from '@/data/service-cards-content';

// ISRの設定：1日ごとに再生成
export const revalidate = 86400;

// サービスカテゴリのスラッグ配列
const categoryOrder = [
  'foreign',
  'construction', 
  'automotive',
  'food-entertainment',
  'waste-management',
  'travel-hospitality',
  'corporate',
  'business-license',
  'land',
  'legal-documentation',
  'medical-care',
  'other'
];

// 画像マッピング
const categoryImages: Record<string, string> = {
  'foreign': '/service-category-cards/foreign-resident.jpg',
  'construction': '/service-category-cards/construction-realestate.png',
  'automotive': '/service-category-cards/automotive.png',
  'food-entertainment': '/service-category-cards/food-entertainment.png',
  'waste-management': '/service-category-cards/waste-management.png',
  'travel-hospitality': '/service-category-cards/travel-hospitality.png',
  'corporate': '/service-category-cards/corporate.jpg',
  'business-license': '/service-category-cards/business-license.png',
  'land': '/service-category-cards/land.png',
  'legal-documentation': '/service-category-cards/legal-documentation.png',
  'medical-care': '/service-category-cards/medical-care.png',
  'other': '/service-category-cards/other.jpg'
};

export const metadata: Metadata = {
  title: 'サービス一覧 | フォルティア行政書士事務所',
  description: '外国人関連、建設業・不動産、自動車関連、飲食・風俗営業、法人設立など幅広いサービスをご提供。',
  alternates: {
    canonical: 'https://fortia-office.com/services',
    languages: {
      'ja': 'https://fortia-office.com/services',
      'en': 'https://fortia-office.com/en/services',
      'zh-CN': 'https://fortia-office.com/zh-CN/services',
      'zh-TW': 'https://fortia-office.com/zh-TW/services',
      'vi': 'https://fortia-office.com/vi/services',
      'x-default': 'https://fortia-office.com/services',
    },
  },
  openGraph: {
    title: 'サービス一覧 | フォルティア行政書士事務所',
    description: '外国人関連、建設業・不動産、自動車関連、飲食・風俗営業、法人設立など幅広いサービスをご提供。',
    url: 'https://fortia-office.com/services',
    siteName: 'フォルティア行政書士事務所',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サービス一覧 | フォルティア行政書士事務所',
    description: '外国人関連、建設業・不動産、自動車関連、飲食・風俗営業、法人設立など幅広いサービスをご提供。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Services() {
  const lang = 'ja'; // ルートページは日本語固定
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={servicesContent[lang].title}
        description={servicesContent[lang].description}
      />

      {/* Services Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: 'ホーム', href: '/' },
              { name: servicesContent[lang].title, href: '/services' }
            ]}
          />
          
          {/* カテゴリー一覧 */}
          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-3 sm:mb-4">{servicesContent[lang].searchTitle}</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">{servicesContent[lang].searchDescription}</p>
          </div>
          
          {/* 全12カテゴリーの動的サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categoryOrder.map((categorySlug) => {
              const cardContent = serviceCardsContent[lang][categorySlug];
              const imageSrc = categoryImages[categorySlug];
              
              return (
                <div key={categorySlug} className="h-full">
                  <Link
                    href={`/services/${categorySlug}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
                  >
                    {/* カテゴリー画像 */}
                    <div className="relative h-48 sm:h-56 lg:h-64 rounded-t-xl overflow-hidden bg-gray-100">
                      <Image
                        src={imageSrc}
                        alt={cardContent.altText}
                        className="object-cover"
                        fill
                        priority={false}
                        unoptimized
                      />
                    </div>

                    {/* カテゴリー情報 */}
                    <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)] lg:h-[calc(100%-16rem)]">
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                          {cardContent.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                          {cardContent.description}
                        </p>
                      </div>

                      {/* 中項目プレビュー */}
                      <div className="mt-auto">
                        <div className="mb-3 sm:mb-4">
                          <p className="text-xs text-gray-500 font-medium mb-2">
                            {cardContent.serviceExamplesLabel}
                          </p>
                          <ul className="space-y-1">
                            {cardContent.examples.map((example, index) => (
                              <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start">
                                <span className="text-[#004080] mr-2">・</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 詳しく見るボタン */}
                        <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium text-sm">
                          <span>{cardContent.learnMoreLabel}</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}