import Link from "next/link";
import Image from 'next/image';
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery } from '@/lib/queries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="relative text-white min-h-screen flex items-center py-12"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed tracking-wide">
              <span className="text-blue-500 block mb-1">人と社会をつなげる、</span>
              <span className="text-blue-500 block">リーガルサービス</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">事務所案内</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">ABOUT US</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">挑戦する経営者の伴走者</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                行政書士法人フォルティアは、圧倒的なサービス品質で、挑戦する企業から選ばれる行政書士事務所です。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                2014年に「行政書士法人フォルティア」設立。2022現在、全国4拠点・スタッフ総勢17人。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                「新規ビジネス立ち上げ支援」から「融資や補助金での資金調達」「法人設立」「許認可申請」まで、企業の経営をトータルでサポートしています。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                詳細はこちら
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px]">
              <Image 
                src="/office-consultation.jpg" 
                alt="事務所での相談風景" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">当事務所の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 申請実績 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">申請実績1,000件超の信頼</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  創業以来、1,000件を超える申請を支援し、許可率99％を誇る確かな実績があります。
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <div className="flex justify-around">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">1,000+</p>
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

            {/* 成果報酬制 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">完全成果報酬制で明朗な料金体系</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  初期費用は不要で、許可取得後のみ報酬が発生する明瞭な料金体系です。
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                    <p className="text-blue-900 font-bold text-center text-lg">初期費用 0円</p>
                    <p className="text-blue-700 text-sm text-center mt-1">成功時のみお支払い</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 母国語対応 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">母国語対応で安心サポート</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <div className="flex justify-center space-x-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium mb-2">英語</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium mb-2">ベトナム語</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium mb-2">ネパール語</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium mb-2">タガログ語</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要サービス</h2>
            <p className="text-lg text-gray-600 mb-8">
              豊富な経験と専門知識で、お客様のニーズにお応えします
            </p>
            
            {/* ステップガイド */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <p className="text-blue-800 font-medium">まずは、お困りの内容に該当するサービスをクリックしてください</p>
              </div>
            </div>
          </div>
          
          {/* Sanityからのデータがある場合は動的に表示 */}
          {serviceCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/services/${category.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center block group relative overflow-hidden"
                >
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  
                  {/* アイコン部分 */}
                  <div className="p-6 pb-0">
                    {category.iconUrl ? (
                      <Image
                        src={category.iconUrl}
                        alt={category.title}
                        width={108}
                        height={108}
                        className="object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                    ) : (
                      <svg className="w-[108px] h-[108px] text-gray-600 mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  
                  {/* タイトル部分 */}
                  <div className="p-4 pt-2">
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  
                  {/* ホバー時に表示される矢印 */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Sanityが設定されていない場合は既存のハードコーディングされたサービスを表示 */
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* 外国人関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-foreigner.png"
                  alt="外国人関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">外国人関連業務</h3>
            </div>

            {/* 建設・宅建業関連 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-construction.png"
                  alt="建設・宅建業関連"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">建設・宅建業関連</h3>
            </div>

            {/* 自動車関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-vehicle.png"
                  alt="自動車関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">自動車関連業務</h3>
            </div>

            {/* 飲食・風俗営業 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-restaurant.png"
                  alt="飲食・風俗営業"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">飲食・風俗営業</h3>
            </div>

            {/* 廃棄物処理業許可 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-waste.png"
                  alt="廃棄物処理業許可"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">廃棄物処理業許可</h3>
            </div>

            {/* 旅行・旅館業 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-travel.png"
                  alt="旅行・旅館業"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">旅行・旅館業</h3>
            </div>

            {/* 法人設立業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-corporation.png"
                  alt="法人設立業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">法人設立業務</h3>
            </div>

            {/* 営業許可 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-license.png"
                  alt="営業許可"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">営業許可</h3>
            </div>

            {/* 土地関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-land.png"
                  alt="土地関連業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">土地関連業務</h3>
            </div>

            {/* 権利義務・事実証明 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-document.png"
                  alt="権利義務・事実証明"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">権利義務・事実証明</h3>
            </div>

            {/* その他の業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <div className="mb-4">
                <Image
                  src="/service-other.png"
                  alt="その他の業務"
                  width={108}
                  height={108}
                  className="object-contain mx-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">その他の業務</h3>
            </div>
          </div>
          )}
          
          {/* すべてのサービスを見るボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              すべてのサービスを見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新のお知らせ</h2>
            <p className="text-lg text-gray-600">
              事務所からの重要なお知らせをご確認ください
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              <li>
                <Link 
                  href="/news/jimusho-kaisetsu-oshirase"
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <time className="text-sm text-gray-500 whitespace-nowrap">
                      2025年7月7日
                    </time>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 whitespace-nowrap">
                      重要
                    </span>
                    <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                      事務所開設のお知らせ
                    </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/news/kensetsu-kyoka-shinsei"
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <time className="text-sm text-gray-500 whitespace-nowrap">
                      2025年7月5日
                    </time>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                      業務案内
                    </span>
                    <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                      建設業許可申請の受付を開始しました
                    </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/news/sozoku-muryo-sodan"
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <time className="text-sm text-gray-500 whitespace-nowrap">
                      2025年6月28日
                    </time>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 whitespace-nowrap">
                      重要
                    </span>
                    <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                      相続・遺言無料相談会を開催します
                    </h3>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              すべてのお知らせを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
            <p className="text-lg text-gray-600">
              ご利用いただいたお客様からの貴重なご意見をご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
                <span className="ml-2 text-sm text-gray-600">(5/5)</span>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  許認可申請
                </span>
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  注目の声
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                許認可申請でお世話になりました。複雑な手続きでしたが、丁寧に説明していただき、スムーズに許可が下りました。
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">田中様</p>
                    <p className="text-sm text-gray-500">建設業 (東京都)</p>
                  </div>
                  <time className="text-sm text-gray-500">2025年7月6日</time>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/testimonials/tanaka-san"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★★
                </div>
                <span className="ml-2 text-sm text-gray-600">(5/5)</span>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  相続手続き
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                相続手続きが想像以上に複雑で困っていましたが、親切に対応していただき、無事に完了できました。
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">佐藤様</p>
                    <p className="text-sm text-gray-500">個人 (千葉県)</p>
                  </div>
                  <time className="text-sm text-gray-500">2025年7月5日</time>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/testimonials/sato-san"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★☆
                </div>
                <span className="ml-2 text-sm text-gray-600">(4/5)</span>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  会社設立
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                会社設立でお願いしました。必要書類の準備から法務局への提出まで、すべてサポートしていただきました。
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">鈴木様</p>
                    <p className="text-sm text-gray-500">IT業 (神奈川県)</p>
                  </div>
                  <time className="text-sm text-gray-500">2025年7月4日</time>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/testimonials/suzuki-san"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              すべてのお客様の声を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お役立ち情報</h2>
            <p className="text-lg text-gray-600">
              行政書士業務に関する有用な情報をお届けします
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  許認可・申請
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  注目記事
                </span>
                <span className="text-sm text-gray-500">約8分</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link 
                  href="/blog/kensetsugyo-kyoka-shutoku-hoho"
                  className="hover:text-blue-600 transition-colors"
                >
                  建設業許可の取得方法と必要書類を徹底解説
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                建設業を営むために必要な許可の種類、取得要件、必要書類について分かりやすく解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #建設業許可
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #許認可申請
                </span>
              </div>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">2025年7月7日</time>
                <Link
                  href="/blog/kensetsugyo-kyoka-shutoku-hoho"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  続きを読む →
                </Link>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  相続・遺言
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  注目記事
                </span>
                <span className="text-sm text-gray-500">約6分</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link 
                  href="/blog/sozoku-hoki-tetsuzuki"
                  className="hover:text-blue-600 transition-colors"
                >
                  相続放棄の手続きと注意点｜3ヶ月の期限に要注意
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                相続放棄の手続き方法、必要書類、注意すべきポイントについて詳しく解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #相続放棄
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #相続手続き
                </span>
              </div>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">2025年7月6日</time>
                <Link
                  href="/blog/sozoku-hoki-tetsuzuki"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  続きを読む →
                </Link>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  会社設立・経営
                </span>
                <span className="text-sm text-gray-500">約7分</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link 
                  href="/blog/godo-kaisha-setsuritsu"
                  className="hover:text-blue-600 transition-colors"
                >
                  合同会社設立のメリット・デメリットと設立手続きの流れ
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                合同会社の特徴、株式会社との違い、設立手続きの流れについて分かりやすく解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #合同会社
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  #会社設立
                </span>
              </div>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">2025年7月5日</time>
                <Link
                  href="/blog/godo-kaisha-setsuritsu"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  続きを読む →
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              すべてのお役立ち情報を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お困りごとはございませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            初回相談は無料です。お気軽にお問い合わせください。
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
