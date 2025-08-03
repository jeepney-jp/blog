import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaqAccordion } from '@/components/FaqAccordion';
import { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: '当事務所の特徴 | フォルティア行政書士事務所',
  description: 'フォルティア行政書士事務所の特徴をご紹介します。豊富な実績と専門知識で、お客様のニーズにお応えします。',
};

async function getFeaturesFAQ(): Promise<FaqItem[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/features-faq`, {
      next: { revalidate: 60 } // 1分間キャッシュ
    });
    
    if (!response.ok) {
      console.error('Failed to fetch FAQs');
      return [];
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

export default async function FeaturesPage() {
  const faqs = await getFeaturesFAQ();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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

      {/* Company Name Change Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              煩雑な申請手続きから解放され、<br />
              ビジネスや生活に集中できる環境を。
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              圧倒的な実績と業界最安水準の料金、多言語での安心サポート、<br />
              そしてオンライン申請も活用した迅速な手続きで、あなたの目的達成を全力で支援します。
            </p>
          </div>

          {/* 2-column issues */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              こんなことでお悩みではありませんか？
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">初めての申請で不安。実績が豊富な事務所に任せたい。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">自分のケースは少し複雑…。本当に許可が取れるのか心配。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">費用をできるだけ抑えたいが、安かろう悪かろうでは困る。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">料金体系が不透明で、最終的にいくら請求されるのか不安。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">日本語での複雑な手続きの説明を、正確に理解できるか不安。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">雇用する外国人スタッフとのやり取りをスムーズに進めたいが、言語の壁を感じる。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">申請の期限が迫っていて、とにかく手続きを急いでいる。</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">平日は仕事で忙しく、事務所に何度も足を運ぶ時間がない。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Points */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                そのお悩み、解決の鍵は当事務所の「4つの強み」にあります
              </h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                それぞれの強みが、お客様の課題をどう解決できるのか、このすぐ下で詳しくご説明します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Point 1 - 申請実績 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-[35%]">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt="申請実績のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%]">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    申請実績10,000件超の信頼
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    2008年の創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績と信頼があります。<br />
                    豊富な経験とノウハウにより、お客様の状況に応じた最適な申請戦略をご提案します。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 - 料金設定 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-[35%]">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt="料金体系のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%]">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    業界最安水準の料金設定
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。<br />
                    料金体系は明確で、追加費用の心配もありません。平均相場より最大30%安い料金でサービスを提供します。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 - 多言語対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-[35%]">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt="多言語対応のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%]">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    多言語対応で安心サポート
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。<br />
                    英語、中国語、ベトナム語、タガログ語など、9言語での対応が可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 - スピード対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-[35%]">
                  <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center h-[300px]">
                    <span className="text-gray-500 text-lg">イメージ</span>
                  </div>
                </div>
                <div className="w-full md:w-[65%]">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 4</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    スピード対応とオンライン完結の利便性
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    お急ぎの申請にも迅速に対応します。初回のご相談から申請手続きまでオンラインで完結できるため、<br />
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

      <NewCTASection />
      <UnifiedFooter />
    </div>
  );
}