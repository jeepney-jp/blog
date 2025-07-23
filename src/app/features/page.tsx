import { Metadata } from 'next';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '当事務所の特徴 | フォルティア行政書士事務所',
  description: 'フォルティア行政書士事務所の特徴をご紹介します。豊富な実績と専門知識で、お客様のニーズにお応えします。',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            特徴
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ページ内の内容を簡単に解説する短いコピーページ内の内容を簡単に解説。
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            お役立ち資料ダウンロード
          </Link>
        </div>
      </section>

      {/* Company Name Change Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              （企業名／サービス名）は○○○○を○○○○にすることで
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              ○○○○や○○○○を改善します
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります<br />
              説明テキストが入ります説明テキストが入ります説明テキストが入ります
            </p>
          </div>

          {/* 2-column issues */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              よくあるお悩み<br />
              こんなことでお悩みではありませんか？
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○な時、いつも○○○○なことが起こって不便している</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○の現場でよく起こる○○は、皆見て見ぬふりをしている</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○が求められているのに、誰も手を付ける人が居ない</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○が答々発生し、○○が進められていない</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○な時、いつも○○○○なことが起こって不便している</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○の現場でよく起こる○○は、皆見て見ぬふりをしている</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○が求められているのに、誰も手を付ける人が居ない</p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2">・</span>
                  <p className="text-gray-700">○○が答々発生し、○○が進められていない</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Points */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-center text-lg font-semibold mb-8">
              ○○○○成功のための4つのポイント
            </h3>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">
                ○○○○の改善は○○○○を○○○○する<br />
                ○○○○の検討が不可欠です
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-gray-900 text-white p-4 rounded">
                  <div className="w-6 h-6 mx-auto mb-2 text-center">✓</div>
                  <p className="text-sm">○○○○には○○○○対策、○○○○を○○○○することで○○○○にします。</p>
                </div>
                <div className="bg-gray-900 text-white p-4 rounded">
                  <div className="w-6 h-6 mx-auto mb-2 text-center">✓</div>
                  <p className="text-sm">○○○○には○○○○対策、○○○○を○○○○することで○○○○にします。</p>
                </div>
                <div className="bg-gray-900 text-white p-4 rounded">
                  <div className="w-6 h-6 mx-auto mb-2 text-center">✓</div>
                  <p className="text-sm">○○○○には○○○○対策、○○○○を○○○○することで○○○○にします。</p>
                </div>
                <div className="bg-gray-900 text-white p-4 rounded">
                  <div className="w-6 h-6 mx-auto mb-2 text-center">✓</div>
                  <p className="text-sm">○○○○には○○○○対策、○○○○を○○○○することで○○○○にします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Point 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                ○○○○には○○○○対策、○○○○を○○○○すること<br />
                で○○○○にします。
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                説明テキストが入ります説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキストが入ります。
              </p>
              <div className="mt-6 bg-gray-100 p-4 rounded">
                <img src="/api/placeholder/400/200" alt="イメージ" className="w-full rounded" />
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                ○○○○には○○○○対策、○○○○を○○○○すること<br />
                で○○○○にします。
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                説明テキストが入ります説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキストが入ります。
              </p>
              <div className="mt-6 bg-white p-4 rounded">
                <img src="/api/placeholder/400/200" alt="イメージ" className="w-full rounded" />
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                ○○○○には○○○○対策、○○○○を○○○○すること<br />
                で○○○○にします。
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                説明テキストが入ります説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキストが入ります。
              </p>
              <div className="mt-6 bg-gray-100 p-4 rounded">
                <img src="/api/placeholder/400/200" alt="イメージ" className="w-full rounded" />
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <span className="text-sm font-semibold text-gray-500 mr-4">ポイント 4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                ○○○○には○○○○対策、○○○○を○○○○すること<br />
                で○○○○にします。
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                説明テキストが入ります説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキストが入ります。
              </p>
              <div className="mt-6 bg-white p-4 rounded">
                <img src="/api/placeholder/400/200" alt="イメージ" className="w-full rounded" />
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

          {/* 3 Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-gray-100 p-8 rounded-lg mb-4">
                <img src="/api/placeholder/300/200" alt="イメージ" className="w-full rounded" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                連携できる外部サービスは○○以上、○○業務のプラットフォームになります。
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキス<br />
                トが入ります説明テキストが入ります説明テ<br />
                キストが入ります。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-8 rounded-lg mb-4">
                <img src="/api/placeholder/300/200" alt="イメージ" className="w-full rounded" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                信頼性の高いインフラの採用を始め、セキュリティ向上のための施策も常に動いています。
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキス<br />
                トが入ります説明テキストが入ります説明テ<br />
                キストが入ります。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-8 rounded-lg mb-4">
                <img src="/api/placeholder/300/200" alt="イメージ" className="w-full rounded" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                スムースな導入をサポートする独自教育プログラムをご提供します。
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                説明テキストが入ります説明テキストが入り<br />
                ます説明テキストが入ります説明テキストが<br />
                入ります説明テキストが入ります説明テキス<br />
                トが入ります説明テキストが入ります説明テ<br />
                キストが入ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              受賞歴
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800">
              ○○○○において○○年連続No.1獲得をはじめ<br />
              多くの受賞歴があります
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[2010, 2011, 2012, 2013, 2014].map(year => (
              <div key={year} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">イメージ</span>
                </div>
                <p className="font-semibold">{year}年</p>
                <p className="text-sm text-gray-600">
                  ○○○○主催の○○大賞<br />
                  MVP
                </p>
              </div>
            ))}
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

          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="border-b pb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Q{num}. ○○○○は○○○○ですか？
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  そんなことはありません。私たちでは○○を用意して、○○しているから、○○のようなお答さまにも安心してお使い<br />
                  いただけます。そんなことはありません。私たちでは○○を用意して、○○しているから、○○のようなお答さまにも
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UnifiedFooter />
    </div>
  );
}