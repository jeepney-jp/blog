import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqItem } from '@/lib/types';
import { sanityClient } from '@/lib/sanity.client';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: '当事務所の特徴 | フォルティア行政書士事務所',
  description: 'フォルティア行政書士事務所の特徴をご紹介します。豊富な実績と専門知識で、お客様のニーズにお応えします。',
};

async function getFeaturesFAQ(): Promise<FaqItem[]> {
  try {
    const query = `*[_type == "featuresFaq" && isPublished == true] | order(order asc) {
      _id,
      question,
      answer,
      order
    }`;
    
    const faqs = await sanityClient.fetch(query);
    return faqs || [];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function FeaturesPage({ params }: PageProps) {
  const { lang } = await params;
  const faqs = await getFeaturesFAQ();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <PageHeader 
        title="当事務所の特徴"
        description="フォルティア行政書士事務所の強みと独自のサービスをご紹介します"
      />
      
      {/* Breadcrumb */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            </Link>
            <span>／</span>
            <span className="text-gray-900">特徴</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004080' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Catchcopy */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              申請の不安、<br className="sm:hidden" />
              <span className="text-[#004080]">すべて私たちが解決します。</span>
            </h1>
            
            {/* Sub Catchcopy */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              煩雑な手続きから解放され、ビジネスや生活に集中できる環境を
            </p>
            
            {/* 3 Key Points */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">圧倒的実績</p>
                  <p className="text-sm text-gray-600">10,000件超の申請実績</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">業界最安水準</p>
                  <p className="text-sm text-gray-600">明朗会計で安心料金</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">多言語対応</p>
                  <p className="text-sm text-gray-600">9言語で完全サポート</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 2-column issues */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              こんなことでお悩みではありませんか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* 申請経験・実績に関する悩み */}
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">初めての申請で不安</h4>
                <p className="text-gray-600">実績が豊富な事務所に任せたいけど、どこを選べばいいか分からない…</p>
              </div>
              
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">複雑なケースへの対応</h4>
                <p className="text-gray-600">自分のケースは少し複雑。本当に許可が取れるのか心配で夜も眠れない…</p>
              </div>
              
              {/* 費用に関する悩み */}
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">費用と品質のバランス</h4>
                <p className="text-gray-600">費用をできるだけ抑えたいが、安かろう悪かろうでは困る…</p>
              </div>
              
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">料金体系の不透明さ</h4>
                <p className="text-gray-600">最終的にいくら請求されるのか分からず、予算が立てられない…</p>
              </div>
              
              {/* 言語に関する悩み */}
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">日本語の壁</h4>
                <p className="text-gray-600">複雑な手続きの説明を、正確に理解できるか不安…</p>
              </div>
              
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">多言語コミュニケーション</h4>
                <p className="text-gray-600">外国人スタッフとのやり取りをスムーズに進めたいが、言語の壁を感じる…</p>
              </div>
              
              {/* 時間に関する悩み */}
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">迫る申請期限</h4>
                <p className="text-gray-600">申請の期限が迫っていて、とにかく手続きを急いでいる…</p>
              </div>
              
              <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">時間の制約</h4>
                <p className="text-gray-600">平日は仕事で忙しく、事務所に何度も足を運ぶ時間がない…</p>
              </div>
            </div>
          </div>

          {/* Success Points */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                そのお悩み、解決の鍵は当事務所の<span className="text-[#004080]">「4つの強み」</span>にあります
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                それぞれの強みが、お客様の課題をどう解決できるのか、このすぐ下で詳しくご説明します。
              </p>
            </div>
            
            {/* 4 Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Point 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">申請実績10,000件超の信頼</h3>
                    <p className="text-gray-600 text-sm">豊富な経験とノウハウで、複雑なケースにも対応</p>
                  </div>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">業界最安水準の料金設定</h3>
                    <p className="text-gray-600 text-sm">明確な料金体系で、追加費用の心配なし</p>
                  </div>
                </div>
              </div>
              
              {/* Point 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">多言語対応で安心サポート</h3>
                    <p className="text-gray-600 text-sm">9言語対応で言語の壁を完全に解消</p>
                  </div>
                </div>
              </div>
              
              {/* Point 4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">スピード対応とオンライン完結</h3>
                    <p className="text-gray-600 text-sm">お急ぎの案件も迅速に対応、来所不要</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Point 1 - 申請実績 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt="申請実績のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    申請実績10,000件超の信頼
                  </h3>
                  
                  {/* 実績数字の強調 */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#004080]">10,000+</p>
                      <p className="text-sm text-gray-600">申請実績件数</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-green-600">99%</p>
                      <p className="text-sm text-gray-600">許可率</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    2008年の創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績と信頼があります。
                    豊富な経験とノウハウにより、お客様の状況に応じた最適な申請戦略をご提案します。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 - 料金設定 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt="料金体系のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    業界最安水準の料金設定
                  </h3>
                  
                  {/* 料金メリットの強調 */}
                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900">平均相場より</p>
                        <p className="text-4xl font-bold text-orange-600">30%安い</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">🔒 明朗会計</p>
                        <p className="text-sm text-gray-600">👍 追加費用なし</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。
                    料金体系は明確で、追加費用の心配もありません。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 - 多言語対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt="多言語対応のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    多言語対応で安心サポート
                  </h3>
                  
                  {/* 対応言語の表示 */}
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">対応可能言語（9言語）</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇬🇧</span>
                        <span className="text-sm">英語</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇨🇳</span>
                        <span className="text-sm">中国語</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇻🇳</span>
                        <span className="text-sm">ベトナム語</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇵🇭</span>
                        <span className="text-sm">タガログ語</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇰🇷</span>
                        <span className="text-sm">韓国語</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇵🇹</span>
                        <span className="text-sm">ポルトガル語</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 - スピード対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-[300px]">
                  <div className="bg-gray-200 flex items-center justify-center h-full">
                    <span className="text-gray-500 text-lg">イメージ</span>
                  </div>
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 4</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    スピード対応とオンライン完結の利便性
                  </h3>
                  
                  {/* スピードと利便性の強調 */}
                  <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <p className="text-sm font-semibold text-gray-700">最短即日対応</p>
                        <p className="text-xs text-gray-600">お急ぎの案件も安心</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">💻</div>
                        <p className="text-sm font-semibold text-gray-700">オンライン完結</p>
                        <p className="text-xs text-gray-600">来所不要で手続き可能</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    お急ぎの申請にも迅速に対応します。初回のご相談から申請手続きまでオンラインで完結できるため、
                    事務所へお越しいただかなくても、全国どこからでもご依頼いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              信頼の理由
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800">
              導入企業数・業界シェア共に実績が豊富です
            </h3>
          </div>

          {/* Company Logos Grid */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-8">
              導入企業は業界を問わず0000社以上
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">導入企業ロゴ</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              よくあるご質問
            </h2>
            <h3 className="text-xl font-medium text-gray-800">
              よくご質問いただく内容をご紹介します
            </h3>
          </div>

          {faqs.length > 0 ? (
            <FaqAccordion faqs={faqs} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              現在、よくある質問を準備中です。
            </div>
          )}
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}