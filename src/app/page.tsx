import Link from "next/link";
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import BlogSection from '@/components/BlogSection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { getNews, getBlogs } from '@/lib/sanity';
import { servicesContent } from '@/data/services-content';

// ISR設定：60秒ごとに再生成（開発中は短めに設定）
export const revalidate = 60;

// カテゴリIDからアイコンファイル名へのマッピング
function getIconFileName(categoryId: string): string {
  const iconMap: { [key: string]: string } = {
    'foreign': 'foreign-resident',
    'construction': 'construction-realestate',
    'automotive': 'automotive',
    'food-entertainment': 'restaurant-entertainment',
    'waste-management': 'waste-management',
    'travel-hospitality': 'travel-hotel',
    'corporate': 'corporate-establishment',
    'business-license': 'business-license',
    'land': 'land-services',
    'legal-documentation': 'rights-documentation',
    'medical-care': 'medical-care',
    'other': 'other-services'
  };
  
  return iconMap[categoryId] || 'other-services';
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

// 日本語コンテンツ（メインページ用）
const content = {
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
};

// カテゴリーマッピング（ニュース用）
const categoryMap: { [key: string]: { name: string; color: string } } = {
  business_notice: { name: '営業案内', color: 'bg-green-100 text-green-800' },
  important: { name: '重要なお知らせ', color: 'bg-red-100 text-red-800' },
  event: { name: 'イベント', color: 'bg-blue-100 text-blue-800' },
  media: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
  case_study: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
};

// 多言語対応配列
const languages = ["英語", "中国語", "ベトナム語", "タガログ語", "ネパール語", "シンハラ語", "韓国語", "イタリア語", "スペイン語"];

export default async function Home() {
  const t = content;
  const lang = 'ja'; // デフォルトを日本語に設定
  
  // データ取得
  let newsItems: NewsItem[] = [];
  let blogArticles: unknown[] = [];
  
  try {
    newsItems = await getNews().catch(() => []);
    blogArticles = await getBlogs().catch(() => []);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const latestNews = newsItems.slice(0, 5);
  
  // サービスカテゴリを取得
  const serviceCategories = servicesContent.ja.categories;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      {/* ヒーローセクション */}
      <section className="relative text-white min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-background2.png')"}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
              <span className="text-blue-600 block mb-2 drop-shadow-lg">{t.hero.title1}</span>
              <span className="text-blue-600 block drop-shadow-lg">{t.hero.title2}</span>
            </h1>
            <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
              >
                {t.hero.freeConsultation}
                <svg className="ml-2 h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-transparent rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 border-2 border-blue-600 shadow-lg w-full sm:w-auto"
              >
                {t.hero.viewServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 当事務所の特徴セクション */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{t.features.title}</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-xs sm:text-sm text-gray-600 tracking-widest">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* 申請実績 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-40 sm:h-48">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt={t.features.achievement.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-6 sm:h-8 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t.features.achievement.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-20 sm:h-24 mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t.features.achievement.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-4 sm:mb-6"></div>
                  {/* 統計値表示エリア */}
                  <div className="h-16 sm:h-20 flex items-center">
                    <div className="flex justify-around text-center w-full">
                      <div>
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">10,000+</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{t.features.achievement.applications}</p>
                      </div>
                      <div>
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">99%</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{t.features.achievement.approvalRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 料金設定 */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-40 sm:h-48">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt={t.features.pricing.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-6 sm:h-8 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t.features.pricing.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-20 sm:h-24 mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t.features.pricing.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-4 sm:mb-6"></div>
                  {/* ハイライトボックス */}
                  <div className="h-16 sm:h-20 flex items-center">
                    <div className="bg-blue-50 rounded-lg p-3 sm:p-4 text-center w-full">
                      <p className="text-blue-900 font-bold text-base sm:text-lg">{t.features.pricing.savings}</p>
                      <p className="text-blue-700 text-xs sm:text-sm mt-1">{t.features.pricing.comparison}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 多言語対応 */}
            <ScrollAnimationWrapper delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-40 sm:h-48">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt={t.features.multilingual.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-6 sm:h-8 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t.features.multilingual.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-20 sm:h-24 mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t.features.multilingual.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-4 sm:mb-6"></div>
                  {/* 言語タグエリア */}
                  <div className="h-16 sm:h-20 flex items-center">
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
                      {languages.map((language, index) => (
                        <span key={index} className="px-1 sm:px-2 py-1 bg-blue-50 text-blue-900 rounded text-xs sm:text-sm font-medium text-center border border-blue-100">
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
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{t.services.title}</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-xs sm:text-sm text-gray-600 tracking-widest">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {serviceCategories.map((category, index) => (
              <ScrollAnimationWrapper key={category.id} delay={index * 0.1}>
                <Link href={`/services/${category.slug}`}>
                  <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer">
                    <div className="w-14 sm:w-16 md:w-20 lg:w-[108px] h-14 sm:h-16 md:h-20 lg:h-[108px] mb-2 sm:mb-3 lg:mb-4">
                      <Image
                        src={`/service-icons/${getIconFileName(category.id)}.png`}
                        alt={category.title}
                        width={108}
                        height={108}
                        className="object-contain mx-auto w-14 sm:w-16 md:w-20 lg:w-[108px] h-14 sm:h-16 md:h-20 lg:h-[108px]"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 事務所案内セクション */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{t.about.title}</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-xs sm:text-sm text-gray-600 tracking-widest">{t.about.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[350px] lg:h-[400px] order-1 lg:order-1">
                <Image
                  src="/office-consultation.jpg" 
                  alt="Office consultation"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-2 lg:order-2">
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {t.about.description}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base"
                >
                  {t.about.learnMore}
                  <svg className="ml-2 h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{t.news.title}</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-xs sm:text-sm text-gray-600 tracking-widest">{t.news.subtitle}</p>
          </div>
          {latestNews.length > 0 ? (
            <ScrollAnimationWrapper delay={0}>
              <div className="max-w-6xl mx-auto">
                <ul className="space-y-2 sm:space-y-3">
                  {latestNews.map((news: NewsItem) => (
                    <li key={news._id} className="border-b border-gray-200 pb-2 sm:pb-3 last:border-b-0">
                      <Link
                        href={`/news/${news.slug.current}`}
                        className="block hover:bg-gray-50 p-2 sm:p-3 rounded-lg transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6">
                          <time className="text-xs sm:text-sm text-gray-500 whitespace-nowrap flex-shrink-0 sm:w-24">
                            {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                          <div className="flex-shrink-0">
                            {news.category && categoryMap[news.category] && (
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${categoryMap[news.category].color}`}>
                                {categoryMap[news.category].name}
                              </span>
                            )}
                          </div>
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 hover:text-blue-600 transition-colors flex-1 line-clamp-1">
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
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-500 text-sm sm:text-base lg:text-lg">{t.news.noNews}</p>
              </div>
            </ScrollAnimationWrapper>
          )}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              {t.news.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ブログセクション */}
      <BlogSection 
        articles={blogArticles as {
          _id: string;
          title: string;
          slug: { current: string };
          category: string;
          publishedAt: string;
          thumbnailUrl?: string;
          thumbnailAlt?: string;
        }[]} 
        lang={lang}
      />

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}