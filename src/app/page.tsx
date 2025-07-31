import Link from "next/link";
import Image from 'next/image';
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery } from '@/lib/queries';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { getFeaturedTestimonials, getNews, getBlogs } from '../../lib/sanity';

// ISR設定：60秒ごとに再生成（開発中は短めに設定）
export const revalidate = 60;

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

interface BlogItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
  publishedAt: string;
  featuredImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

// カテゴリマッピング
const categoryMap: { [key: string]: { name: string; color: string } } = {
  business_notice: { name: '営業案内', color: 'bg-green-100 text-green-800' },
  new_services: { name: '新サービス', color: 'bg-blue-100 text-blue-800' },
  legal_update: { name: '制度改正', color: 'bg-purple-100 text-purple-800' },
  price_update: { name: '料金改定', color: 'bg-yellow-100 text-yellow-800' },
  media_appearance: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
  case_study: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
};

// Sanityからサービスカテゴリを取得
async function getServiceCategories(): Promise<ServiceCategoryItem[]> {
  // 環境変数が設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  
  try {
    const data = await sanityClient.fetch(allServiceCategoriesQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch service categories:', error);
    return [];
  }
}

export default async function Home() {
  const serviceCategories = await getServiceCategories();
  const featuredTestimonials = await getFeaturedTestimonials(3);
  const newsItems = await getNews();
  // 最新5件のみ取得
  const latestNews = newsItems.slice(0, 5);
  
  // お役立ち情報を取得（注目記事のみ）
  const blogs: BlogItem[] = await getBlogs();
  const featuredBlogs = blogs.filter((blog: BlogItem) => blog.featured).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="relative text-white min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center py-8 sm:py-12"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-relaxed tracking-wide">
              <span className="text-blue-500 block mb-1">人と社会をつなげる、</span>
              <span className="text-blue-500 block">リーガルサービス</span>
            </h1>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 sm:transform sm:hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
              >
                無料相談はこちらから
                <svg className="ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors border-2 border-white w-full sm:w-auto"
              >
                サービス内容を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">当事務所の特徴</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">OUR STRENGTHS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 申請実績 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:border-gray-400 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/申請実績1,000件超の信頼.png"
                  alt="申請実績のイメージ"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">申請実績10,000件超の信頼</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績があります。
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="flex justify-around w-full">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">10,000+</p>
                        <p className="text-sm text-gray-500 mt-1">申請実績</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">99%</p>
                        <p className="text-sm text-gray-500 mt-1">許可率</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 成果報酬制 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:border-gray-400 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/完全成果報酬制で明朗な料金体系.png"
                  alt="料金体系のイメージ"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">業界最安水準の料金設定</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 w-full">
                      <p className="text-blue-900 font-bold text-center text-lg">平均相場より最大30%安い</p>
                      <p className="text-blue-700 text-sm text-center mt-1">他社との見積もり比較で実感</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 母国語対応 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:border-gray-400 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-4">
                <Image
                  src="/母国語対応で安心サポート.png"
                  alt="多言語対応のイメージ"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">多言語対応で安心サポート</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                    多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="pt-6 border-t border-gray-100 w-full h-24 flex items-center">
                    <div className="flex justify-center gap-2 flex-wrap w-full">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">英語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">中国語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">ベトナム語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">タガログ語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">ネパール語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">シンハラ語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">韓国語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">イタリア語</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">スペイン語</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">サービス</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">OUR SERVICES</p>
          </div>
          
          {/* Sanityからのデータがある場合は動的に表示 */}
          {serviceCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {serviceCategories.map((category) => (
                <ScrollAnimationWrapper key={category._id} delay={0}>
                  <Link
                    href={`/services/${category.slug}`}
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
                  alt="外国人関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                  priority
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">外国人関連業務</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 建設・宅建業関連 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-construction.png"
                  alt="建設・宅建業関連"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">建設・宅建業関連</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 自動車関連業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-vehicle.png"
                  alt="自動車関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">自動車関連業務</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 飲食・風俗営業 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-restaurant.png"
                  alt="飲食・風俗営業"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">飲食・風俗営業</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 廃棄物処理業許可 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-waste.png"
                  alt="廃棄物処理業許可"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">廃棄物処理業許可</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 旅行・旅館業 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-travel.png"
                  alt="旅行・旅館業"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">旅行・旅館業</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 法人設立業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-corporation.png"
                  alt="法人設立業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">法人設立業務</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 営業許可 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-license.png"
                  alt="営業許可"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">営業許可</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 土地関連業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-land.png"
                  alt="土地関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">土地関連業務</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* 権利義務・事実証明 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-document.png"
                  alt="権利義務・事実証明"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">権利義務・事実証明</h3>
              </div>
            </ScrollAnimationWrapper>

            {/* その他の業務 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 flex items-center justify-center sm:flex-col text-center">
              <div className="mb-2 sm:mb-4 hidden sm:block">
                <Image
                  src="/service-other.png"
                  alt="その他の業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                  unoptimized
                />
              </div>
              <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">その他の業務</h3>
              </div>
            </ScrollAnimationWrapper>
          </div>
          )}
          
          {/* すべてのサービスを見るボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">CUSTOMER TESTIMONIALS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.length > 0 ? (
              featuredTestimonials.map((testimonial: {
                _id: string;
                clientName: string;
                slug: { current: string };
                comment: string;
                serviceType?: string;
                serviceDetail?: string;
                clientIndustry?: string;
                clientLocation?: string;
                publishedAt: string;
                clientImage?: string;
              }) => (
                <ScrollAnimationWrapper key={testimonial._id} delay={0}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                  {/* 写真部分 */}
                  <Link href={`/testimonials/${testimonial.slug.current}`}>
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group cursor-pointer">
                      {testimonial.clientImage ? (
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-20 h-20 bg-gray-300 rounded-full" />
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  {/* コンテンツ部分 */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {testimonial.serviceDetail || 'サービス未設定'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.clientName}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {testimonial.comment}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-500">
                          {testimonial.clientIndustry && (
                            <span>{testimonial.clientIndustry}</span>
                          )}
                          {testimonial.clientLocation && (
                            <span className="ml-1">({testimonial.clientLocation})</span>
                          )}
                        </div>
                        <time className="text-sm text-gray-500">
                          {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                      </div>
                      <div className="pt-4 border-t">
                        <Link
                          href={`/testimonials/${testimonial.slug.current}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center group"
                        >
                          詳細を見る
                          <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollAnimationWrapper>
              ))
            ) : (
              // フォールバック
              <>
                <ScrollAnimationWrapper delay={0}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* 写真部分 */}
                  <div className="aspect-[4/3] bg-gray-100 relative">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                  
                  {/* コンテンツ部分 */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        許認可申請
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">お客様</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      迅速かつ丁寧な対応で、安心してお任せできました。
                    </p>
                    <div className="text-sm text-gray-500">
                      <span>建設業</span>
                    </div>
                  </div>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper delay={0}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* 写真部分 */}
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                    
                    {/* コンテンツ部分 */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          相続手続き
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">お客様</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      複雑な手続きも分かりやすく説明していただきました。
                    </p>
                    <div className="text-sm text-gray-500">
                      <span>個人</span>
                    </div>
                  </div>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper delay={0}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* 写真部分 */}
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                    
                    {/* コンテンツ部分 */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          会社設立
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">お客様</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      スムーズに会社設立ができました。
                    </p>
                    <div className="text-sm text-gray-500">
                      <span>IT業</span>
                    </div>
                  </div>
                  </div>
                </ScrollAnimationWrapper>
              </>
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              すべてのお客様の声を見る
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">事務所案内</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">ABOUT US</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] order-1 lg:order-1">
                <Image 
                  src="/office-consultation.jpg" 
                  alt="事務所での相談風景" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">挑戦する経営者の伴走者</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  行政書士法人フォルティアは、圧倒的なサービス品質で、挑戦する企業から選ばれる行政書士事務所です。
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  2014年に「行政書士法人フォルティア」設立。2022現在、全国4拠点・スタッフ総勢17人。
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  「新規ビジネス立ち上げ支援」から「融資や補助金での資金調達」「法人設立」「許認可申請」まで、企業の経営をトータルでサポートしています。
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 font-medium hover:bg-gray-800 transition-colors rounded-lg"
                >
                  詳細はこちら
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新のお知らせ</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">NEWS & UPDATES</p>
          </div>
          {latestNews.length > 0 ? (
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {latestNews.map((news: NewsItem) => (
                    <li key={news._id}>
                      <Link 
                        href={`/news/${news.slug.current}`}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <time className="text-sm text-gray-500 whitespace-nowrap">
                            {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                          {news.category && categoryMap[news.category] && (
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                              categoryMap[news.category].color
                            }`}>
                              {categoryMap[news.category].name}
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
                <p className="text-gray-500 text-lg">お知らせはまだありません。</p>
              </div>
            </ScrollAnimationWrapper>
          )}
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              すべてのお知らせを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {featuredBlogs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">お役立ち情報</h2>
              <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
              <p className="text-sm text-gray-600 tracking-widest">BLOG</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => {
                const categoryLabels: { [key: string]: string } = {
                  license: "許認可・申請",
                  inheritance: "相続・遺言",
                  business: "会社設立・経営",
                  legal: "契約・法務",
                  tax: "税務・手続き",
                  other: "その他"
                };
                
                return (
                  <ScrollAnimationWrapper key={blog._id} delay={0}>
                    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
                    {blog.featuredImage && (
                      <Link href={`/blog/${blog.slug.current}`} className="block">
                        <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                          <Image
                            src={blog.featuredImage.asset.url}
                            alt={blog.featuredImage.alt || blog.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {categoryLabels[blog.category] || blog.category}
                        </span>
                        {blog.featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            注目記事
                          </span>
                        )}
                        {blog.readingTime && (
                          <span className="text-sm text-gray-500">約{blog.readingTime}分</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link 
                          href={`/blog/${blog.slug.current}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <time className="text-sm text-gray-500">
                          {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                        <Link
                          href={`/blog/${blog.slug.current}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          続きを読む →
                        </Link>
                      </div>
                    </div>
                    </article>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                すべてのお役立ち情報を見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <NewCTASection />

      {/* Footer */}
      <UnifiedFooter />
    </div>
  );
}
