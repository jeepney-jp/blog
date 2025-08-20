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
      searchByCategory: "カテゴリから探す",
      viewAll: "すべて見る",
    },
    about: {
      title: "事務所案内",
      subtitle: "ABOUT US",
      description: "お客様の人生に寄り添いながら、一人ひとりのニーズに合わせたオーダーメイドのサービスをご提供します。在留資格から許認可まで、幅広い分野で皆様をサポートいたします。",
      learnMore: "詳しく見る",
    },
    news: {
      title: "最新のお知らせ",
      subtitle: "NEWS & UPDATES",
      viewAll: "すべてのお知らせを見る",
      noNews: "現在お知らせはございません。",
    },
  },
  en: {
    hero: {
      title1: "Legal Services Connecting",
      title2: "People and Society",
      freeConsultation: "Free Consultation",
      viewServices: "View Our Services",
    },
    features: {
      title: "Our Strengths",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "Trusted with 10,000+ Applications",
        description: "Since our founding in 2008, we have supported over 10,000 applications with a 99% approval rate, demonstrating our proven track record and reliability.",
        applications: "Applications",
        approvalRate: "Approval Rate",
      },
      pricing: {
        title: "Industry-Leading Affordable Rates",
        description: "We provide high-quality services at low prices. Through efficient operations that eliminate waste, we achieve industry-leading affordable rates.",
        savings: "Up to 30% less than average market rates",
        comparison: "Compare quotes with competitors to see the difference",
      },
      multilingual: {
        title: "Multilingual Support for Peace of Mind",
        description: "Our multilingual staff provide support in your native language. Even if you're not confident in Japanese, you can consult with us with peace of mind.",
      },
    },
    services: {
      title: "Services",
      subtitle: "OUR SERVICES",
      searchByName: "Search by Service Name",
      searchByCategory: "Search by Category",
      viewAll: "View All",
    },
    about: {
      title: "About Us",
      subtitle: "ABOUT US",
      description: "We provide customized services tailored to each individual's needs while staying close to our clients' lives. We support you in a wide range of fields, from residence status to permits and licenses.",
      learnMore: "Learn More",
    },
    news: {
      title: "Latest News",
      subtitle: "NEWS & UPDATES",
      viewAll: "View All News",
      noNews: "No news available at the moment.",
    },
  },
};

// カテゴリーマッピング（ニュース用）
const categoryMap: { [key: string]: { ja: { name: string; color: string }, en: { name: string; color: string } } } = {
  business_notice: { 
    ja: { name: '営業案内', color: 'bg-green-100 text-green-800' },
    en: { name: 'Business Notice', color: 'bg-green-100 text-green-800' }
  },
  important: { 
    ja: { name: '重要なお知らせ', color: 'bg-red-100 text-red-800' },
    en: { name: 'Important Notice', color: 'bg-red-100 text-red-800' }
  },
  event: { 
    ja: { name: 'イベント', color: 'bg-blue-100 text-blue-800' },
    en: { name: 'Events', color: 'bg-blue-100 text-blue-800' }
  },
  media: { 
    ja: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
    en: { name: 'Media', color: 'bg-pink-100 text-pink-800' }
  },
  case_study: { 
    ja: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
    en: { name: 'Case Studies', color: 'bg-indigo-100 text-indigo-800' }
  },
};

// 多言語対応配列
const languages = {
  ja: ["英語", "中国語", "ベトナム語", "タガログ語", "ネパール語", "シンハラ語", "韓国語", "イタリア語", "スペイン語"],
  en: ["English", "Chinese", "Vietnamese", "Tagalog", "Nepali", "Sinhala", "Korean", "Italian", "Spanish"]
};


// Static params generation
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
  
  // データ取得
  let newsItems: NewsItem[] = [];
  
  try {
    newsItems = await getNews().catch(() => []);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const latestNews = newsItems.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      {/* ヒーローセクション */}
      <section className="relative text-white min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-background2.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
            <span className="text-blue-400 block mb-2">{t.hero.title1}</span>
            <span className="text-blue-400 block">{t.hero.title2}</span>
          </h1>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={`${basePath}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {t.hero.freeConsultation}
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href={`${basePath}/services`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors border-2 border-white"
            >
              {t.hero.viewServices}
            </Link>
          </div>
        </div>
      </section>

      {/* 当事務所の特徴セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 申請実績 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-full h-48">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt={t.features.achievement.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.features.achievement.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.features.achievement.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-around text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">10,000+</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.applications}</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-600">99%</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.approvalRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 料金設定 */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-full h-48">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt={t.features.pricing.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.features.pricing.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.features.pricing.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-blue-900 font-bold text-lg">{t.features.pricing.savings}</p>
                    <p className="text-blue-700 text-sm mt-1">{t.features.pricing.comparison}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 多言語対応 */}
            <ScrollAnimationWrapper delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-full h-48">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt={t.features.multilingual.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.features.multilingual.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.features.multilingual.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {languages[lang].map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-foreigner.svg"
                  alt={lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.1}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-construction.svg"
                  alt={lang === 'ja' ? '建設・宅建業関連' : 'Construction & Real Estate'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '建設・宅建業関連' : 'Construction & Real Estate'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-automotive.svg"
                  alt={lang === 'ja' ? '自動車関連業務' : 'Automotive Services'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '自動車関連業務' : 'Automotive Services'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-restaurant.svg"
                  alt={lang === 'ja' ? '飲食・風俗営業関連業務' : 'Restaurant & Entertainment Business'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '飲食・風俗営業関連業務' : 'Restaurant & Entertainment Business'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-waste.svg"
                  alt={lang === 'ja' ? '廃棄物処理業許可関連業務' : 'Waste Management Permits'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '廃棄物処理業許可関連業務' : 'Waste Management Permits'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.5}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-travel.svg"
                  alt={lang === 'ja' ? '旅行・旅館業関連業務' : 'Travel & Hotel Business'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '旅行・旅館業関連業務' : 'Travel & Hotel Business'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.6}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-corporate.svg"
                  alt={lang === 'ja' ? '法人設立業務' : 'Corporate Establishment'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '法人設立業務' : 'Corporate Establishment'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.7}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-license.svg"
                  alt={lang === 'ja' ? '営業許可' : 'Business Licenses'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '営業許可' : 'Business Licenses'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.8}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-land.svg"
                  alt={lang === 'ja' ? '土地関連業務' : 'Land-related Services'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '土地関連業務' : 'Land-related Services'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.9}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-rights.svg"
                  alt={lang === 'ja' ? '権利義務・事実証明業務' : 'Rights & Legal Documentation'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '権利義務・事実証明業務' : 'Rights & Legal Documentation'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={1.0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-medical.svg"
                  alt={lang === 'ja' ? '医療・介護関連業務' : 'Medical & Care Services'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? '医療・介護関連業務' : 'Medical & Care Services'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={1.1}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                <Image
                  src="/service-other.svg"
                  alt={lang === 'ja' ? 'その他の業務' : 'Other Services'}
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                {lang === 'ja' ? 'その他の業務' : 'Other Services'}
              </h3>
              </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* 事務所案内セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.about.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] order-1 lg:order-1">
                <Image
                  src="/office-consultation.jpg" 
                  alt="Office consultation"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-2 lg:order-2">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.about.description}
                </p>
                <Link
                  href={`${basePath}/about`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {t.about.learnMore}
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.news.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.news.subtitle}</p>
          </div>
          {latestNews.length > 0 ? (
            <ScrollAnimationWrapper delay={0}>
              <div className="max-w-4xl mx-auto">
                <ul className="space-y-4">
                  {latestNews.map((news: NewsItem) => (
                    <li key={news._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link
                        href={`${basePath}/news/${news.slug.current}`}
                        className="block hover:bg-white p-4 rounded-lg transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <time className="text-sm text-gray-500 block mb-2">
                              {new Date(news.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
                            </time>
                            {news.category && categoryMap[news.category] && (
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${categoryMap[news.category][lang].color}`}>
                                {categoryMap[news.category][lang].name}
                              </span>
                            )}
                            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                              {news.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ) : (
            <ScrollAnimationWrapper delay={0}>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t.news.noNews}</p>
              </div>
            </ScrollAnimationWrapper>
          )}
          <div className="text-center mt-12">
            <Link
              href={`${basePath}/news`}
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.news.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}