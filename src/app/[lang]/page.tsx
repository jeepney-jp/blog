import Link from "next/link";
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { getNews } from '@/lib/sanity';
import { Locale } from '@/lib/i18n/types';

// ISR設定：60秒ごとに再生成（開発中は短めに設定）
export const revalidate = 60;

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

// 型定義

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
    testimonials: {
      title: "お客様の声",
      subtitle: "CUSTOMER TESTIMONIALS",
      viewDetails: "詳細を見る",
      viewAll: "すべてのお客様の声を見る",
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
    blog: {
      title: "お役立ち情報",
      subtitle: "BLOG",
      featured: "注目記事",
      readTime: "約{time}分",
      continueReading: "続きを読む →",
      viewAll: "すべてのお役立ち情報を見る",
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
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "CUSTOMER TESTIMONIALS",
      viewDetails: "View Details",
      viewAll: "View All Testimonials",
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
    blog: {
      title: "Resources",
      subtitle: "BLOG",
      featured: "Featured",
      readTime: "About {time} min",
      continueReading: "Continue Reading →",
      viewAll: "View All Resources",
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



export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const basePath = `/${lang}`;
  
  const newsItems = await getNews();
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.services.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* サービスカテゴリのプレビュー */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{lang === 'ja' ? '許認可申請' : 'Permit Applications'}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '各種許認可の申請をサポート' : 'Support for various permit applications'}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{lang === 'ja' ? '会社設立' : 'Company Formation'}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '法人設立をトータルサポート' : 'Total support for corporate establishment'}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{lang === 'ja' ? '相続・遺言' : 'Inheritance & Wills'}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '相続手続きと遺言書作成' : 'Inheritance procedures and will preparation'}</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="text-center mt-12">
            <Link
              href={`${basePath}/services`}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.services.viewMore}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.testimonials.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* お客様の声のプレビュー */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{lang === 'ja' ? 'A社 代表取締役様' : 'Company A CEO'}</h4>
                    <p className="text-sm text-gray-500">{lang === 'ja' ? '飲食業' : 'Restaurant Business'}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {lang === 'ja' 
                    ? '"迅速で丁寧な対応により、スムーズに許可を取得できました。"' 
                    : '"Quick and courteous service helped us obtain permits smoothly."'
                  }
                </p>
                <Link href={`${basePath}/testimonials`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  {t.testimonials.viewDetails} →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{lang === 'ja' ? 'B社 代表取締役様' : 'Company B CEO'}</h4>
                    <p className="text-sm text-gray-500">{lang === 'ja' ? '建設業' : 'Construction'}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {lang === 'ja' 
                    ? '"多言語対応で、外国人スタッフも安心して相談できました。"' 
                    : '"Multilingual support made our foreign staff feel comfortable consulting."'
                  }
                </p>
                <Link href={`${basePath}/testimonials`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  {t.testimonials.viewDetails} →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{lang === 'ja' ? 'C社 代表取締役様' : 'Company C CEO'}</h4>
                    <p className="text-sm text-gray-500">{lang === 'ja' ? 'IT企業' : 'IT Company'}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {lang === 'ja' 
                    ? '"明確な料金体系で、安心して依頼することができました。"' 
                    : '"Clear pricing structure gave us confidence in making the request."'
                  }
                </p>
                <Link href={`${basePath}/testimonials`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  {t.testimonials.viewDetails} →
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <div className="text-center mt-12">
            <Link
              href={`${basePath}/testimonials`}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.testimonials.viewAll}
            </Link>
          </div>
        </div>
      </section>
      
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

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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