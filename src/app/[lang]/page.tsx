import Link from "next/link";
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import ServiceSearch from '@/components/ServiceSearch';
import { getNews } from '@/lib/sanity';
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery, allServicesForSearchQuery } from '@/lib/queries';
import { Locale } from '@/lib/i18n/types';

// ISR設定：60秒ごとに再生成（開発中は短めに設定）
export const revalidate = 60;

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

// 型定義
interface ServiceCategoryItem {
  _id: string;
  title: string;
  slug: string;
  iconUrl?: string;
  imageUrl?: string;
  icon?: {
    _id: string;
    url: string;
  };
  image?: {
    _id: string;
    url: string;
  };
}

interface NewsItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  category: string;
}



// 多言語コンテンツ
const content = {
  ja: {
    hero: {
      title1: "人と社会をつなげる、",
      title2: "リーガルサービス",
      freeConsultation: "無料相談はこちらから",
      viewServices: "サービス内容を見る",
    },
    features: {
      title: "当事務所の特徴",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "申請実績10,000件超の信頼",
        description: "2008年の創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績と信頼があります。",
        applications: "申請実績",
        approvalRate: "許可率",
      },
      pricing: {
        title: "業界最安水準の料金設定",
        description: "高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。",
        savings: "平均相場より最大30%安い",
        comparison: "他社との見積もり比較で実感",
      },
      multilingual: {
        title: "多言語対応で安心サポート",
        description: "多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。",
      },
    },
    services: {
      title: "サービス",
      subtitle: "OUR SERVICES",
      searchByName: "サービス名から探す",
      searchByCategory: "カテゴリーから探す",
      searchDescription: "業種や目的からお探しください",
      viewMore: "もっと詳しく見る",
    },
    about: {
      title: "事務所案内",
      subtitle: "ABOUT US",
      heading: "挑戦する経営者の伴走者",
      description1: "行政書士法人フォルティアは、圧倒的なサービス品質で、挑戦する企業から選ばれる行政書士事務所です。",
      description2: "2014年に「行政書士法人フォルティア」設立。2022現在、全国4拠点・スタッフ総勢17人。",
      description3: "「新規ビジネス立ち上げ支援」から「融資や補助金での資金調達」「法人設立」「許認可申請」まで、企業の経営をトータルでサポートしています。",
      learnMore: "詳細はこちら",
    },
    news: {
      title: "最新のお知らせ",
      subtitle: "NEWS & UPDATES",
      viewAll: "すべてのお知らせを見る",
      noNews: "お知らせはまだありません。",
    },
  },
  en: {
    hero: {
      title1: "Connecting People and Society,",
      title2: "Legal Services",
      freeConsultation: "Free Consultation",
      viewServices: "View Our Services",
    },
    features: {
      title: "Our Features",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "Trust with Over 10,000 Applications",
        description: "Since our establishment in 2008, we have supported over 10,000 applications with a 99% approval rate, demonstrating our proven track record and reliability.",
        applications: "Applications",
        approvalRate: "Approval Rate",
      },
      pricing: {
        title: "Industry-Leading Competitive Pricing",
        description: "We provide high-quality services at low prices, achieving industry-leading rates through efficient and streamlined operations.",
        savings: "Up to 30% Lower Than Market Average",
        comparison: "Experience the difference through comparative quotes",
      },
      multilingual: {
        title: "Multilingual Support for Peace of Mind",
        description: "Our multilingual staff provides support in your native language. Even those who are not confident in Japanese can consult with us with peace of mind.",
      },
    },
    services: {
      title: "Services",
      subtitle: "OUR SERVICES",
      searchByName: "Search by Service Name",
      searchByCategory: "Browse by Category",
      searchDescription: "Find services by industry or purpose",
      viewMore: "View More Details",
    },
    about: {
      title: "About Us",
      subtitle: "ABOUT US",
      heading: "Partners for Ambitious Business Leaders",
      description1: "Fortia Administrative Scrivener Corporation is chosen by ambitious companies for our outstanding service quality.",
      description2: "Established in 2014, we now operate from 4 locations nationwide with a total of 17 staff members as of 2022.",
      description3: "We provide comprehensive business support from new business launch assistance to funding through loans and grants, corporate establishment, and permit applications.",
      learnMore: "Learn More",
    },
    news: {
      title: "Latest News",
      subtitle: "NEWS & UPDATES",
      viewAll: "View All News",
      noNews: "No news available yet.",
    },
  },
};

// カテゴリマッピング
const categoryMap: { [key: string]: { ja: { name: string; color: string }, en: { name: string; color: string } } } = {
  business_notice: { 
    ja: { name: '営業案内', color: 'bg-green-100 text-green-800' },
    en: { name: 'Business Notice', color: 'bg-green-100 text-green-800' }
  },
  new_services: { 
    ja: { name: '新サービス', color: 'bg-blue-100 text-blue-800' },
    en: { name: 'New Services', color: 'bg-blue-100 text-blue-800' }
  },
  legal_update: { 
    ja: { name: '制度改正', color: 'bg-purple-100 text-purple-800' },
    en: { name: 'Legal Updates', color: 'bg-purple-100 text-purple-800' }
  },
  price_update: { 
    ja: { name: '料金改定', color: 'bg-yellow-100 text-yellow-800' },
    en: { name: 'Price Updates', color: 'bg-yellow-100 text-yellow-800' }
  },
  media_appearance: { 
    ja: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
    en: { name: 'Media', color: 'bg-pink-100 text-pink-800' }
  },
  case_study: { 
    ja: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
    en: { name: 'Case Studies', color: 'bg-indigo-100 text-indigo-800' }
  },
};


// 言語リスト
const languages = {
  ja: ["英語", "中国語", "ベトナム語", "タガログ語", "ネパール語", "シンハラ語", "韓国語", "イタリア語", "スペイン語"],
  en: ["English", "Chinese", "Vietnamese", "Tagalog", "Nepali", "Sinhala", "Korean", "Italian", "Spanish"]
};



// データ取得関数
async function getServiceCategories(): Promise<ServiceCategoryItem[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  try {
    const categories = await sanityClient.fetch(allServiceCategoriesQuery);
    return categories || [];
  } catch (error) {
    console.error('Error fetching service categories:', error);
    return [];
  }
}

async function getServicesForSearch() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  try {
    const services = await sanityClient.fetch(allServicesForSearchQuery);
    return services || [];
  } catch (error) {
    console.error('Error fetching services for search:', error);
    return [];
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' }
  ];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const basePath = `/${lang}`;
  
  const newsItems = await getNews();
  const serviceCategories = await getServiceCategories();
  const servicesForSearch = await getServicesForSearch();
  const featuredTestimonials = await getFeaturedTestimonials();
  const featuredBlogs = await getFeaturedBlogs();
  
  // 最新5件のみ取得
  const latestNews = newsItems.slice(0, 5);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header lang={lang} />

      {/* Hero Section */}
      <section 
        className="relative text-white min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center py-8 sm:py-12"
        style={{
          backgroundImage: "url('/hero-background2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-relaxed tracking-wide">
              <span className="text-blue-500 block mb-1">{t.hero.title1}</span>
              <span className="text-blue-500 block">{t.hero.title2}</span>
            </h1>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href={`${basePath}/contact`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 sm:transform sm:hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
              >
                {t.hero.freeConsultation}
                <svg className="ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href={`${basePath}/services`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors border-2 border-white w-full sm:w-auto"
              >
                {t.hero.viewServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 申請実績 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/申請実績1,000件超の信頼.png"
                  alt={lang === 'ja' ? "申請実績のイメージ" : "Application achievements"}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{t.features.achievement.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    {t.features.achievement.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="flex justify-around w-full">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">10,000+</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.applications}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">99%</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.approvalRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 成果報酬制 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/完全成果報酬制で明朗な料金体系.png"
                  alt={lang === 'ja' ? "料金体系のイメージ" : "Pricing structure"}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{t.features.pricing.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    {t.features.pricing.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 w-full">
                      <p className="text-blue-900 font-bold text-center text-lg">{t.features.pricing.savings}</p>
                      <p className="text-blue-700 text-sm text-center mt-1">{t.features.pricing.comparison}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 母国語対応 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/母国語対応で安心サポート.png"
                  alt={lang === 'ja' ? "多言語対応のイメージ" : "Multilingual support"}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{t.features.multilingual.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    {t.features.multilingual.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="flex justify-center gap-2 flex-wrap w-full">
                      {languages[lang].map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">{language}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.services.subtitle}</p>
          </div>
          
          {/* サービス検索 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">{t.services.searchByName}</h3>
            <ServiceSearch services={servicesForSearch} />
          </div>
          
          {/* カテゴリー一覧 */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{t.services.searchByCategory}</h3>
            <p className="text-base text-gray-600 text-center mb-6">{t.services.searchDescription}</p>
          </div>
          
          {/* Sanityからのデータがある場合は動的に表示 */}
          {serviceCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {serviceCategories.map((category) => (
                <ScrollAnimationWrapper key={category._id} delay={0}>
                  <Link
                    href={`${basePath}/services/${category.slug}`}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center h-full"
                  >
                  <div className="mb-2 sm:mb-4 hidden sm:block">
                    {category.iconUrl ? (
                      <Image
                        src={category.iconUrl}
                        alt={category.title}
                        width={108}
                        height={108}
                        className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                        unoptimized
                      />
                    ) : (
                      <svg className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">{category.title}</h3>
                  </Link>
                </ScrollAnimationWrapper>
              ))}
            </div>
          ) : (
            /* Sanityが設定されていない場合は既存のハードコーディングされたサービスを表示 */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* 外国人関連業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-foreigner.png"
                  alt={lang === 'ja' ? "外国人関連業務" : "Foreign-related Services"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                  priority
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '外国人関連業務' : 'Foreign-related Services'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 建設・宅建業関連 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-construction.png"
                  alt={lang === 'ja' ? "建設・宅建業関連" : "Construction & Real Estate"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '建設・宅建業関連' : 'Construction & Real Estate'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 自動車関連業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-vehicle.png"
                  alt={lang === 'ja' ? "自動車関連業務" : "Automotive Services"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '自動車関連業務' : 'Automotive Services'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 飲食・風俗営業 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-restaurant.png"
                  alt={lang === 'ja' ? "飲食・風俗営業" : "Restaurant & Entertainment"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '飲食・風俗営業' : 'Restaurant & Entertainment'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 廃棄物処理業許可 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-waste.png"
                  alt={lang === 'ja' ? "廃棄物処理業許可" : "Waste Management Permits"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '廃棄物処理業許可' : 'Waste Management Permits'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 旅行・旅館業 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-travel.png"
                  alt={lang === 'ja' ? "旅行・旅館業" : "Travel & Hotel Business"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '旅行・旅館業' : 'Travel & Hotel Business'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 相続・遺言 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-inheritance.png"
                  alt={lang === 'ja' ? "相続・遺言" : "Inheritance & Wills"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '相続・遺言' : 'Inheritance & Wills'}
              </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 会社設立・法人業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-corporate.png"
                  alt={lang === 'ja' ? "会社設立・法人業務" : "Corporate Formation"}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '会社設立・法人業務' : 'Corporate Formation'}
              </h3>
              </div>
            </ScrollAnimationWrapper>
      {/* About Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.about.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] order-1 lg:order-1">
                <Image 
                  src="/office-consultation.jpg" 
                  alt={lang === 'ja' ? "事務所での相談風景" : "Office consultation scene"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t.about.heading}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {t.about.description2}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {t.about.description3}
                </p>
                <Link
                  href={`${basePath}/about`}
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 font-medium hover:bg-gray-800 transition-colors rounded-lg"
                >
                  {t.about.learnMore}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.news.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.news.subtitle}</p>
          </div>
          {latestNews.length > 0 ? (
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {latestNews.map((news: NewsItem) => (
                    <li key={news._id}>
                      <Link 
                        href={`${basePath}/news/${news.slug.current}`}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <time className="text-sm text-gray-500 whitespace-nowrap">
                            {new Date(news.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
                          </time>
                          {news.category && categoryMap[news.category] && (
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                              categoryMap[news.category][lang].color
                            }`}>
                              {categoryMap[news.category][lang].name}
                            </span>
                          )}
                          <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ) : (
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <p className="text-gray-500 text-lg">{t.news.noNews}</p>
              </div>
            </ScrollAnimationWrapper>
          )}
          <div className="text-center mt-8">
            <Link
              href={`${basePath}/news`}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.news.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <NewCTASection lang={lang} />

      {/* Footer */}
      <UnifiedFooter />
    </div>
  );
}