import Link from 'next/link';

interface NewCTASectionProps {
  serviceName?: string;
}

export default function NewCTASection({ serviceName }: NewCTASectionProps) {
  return (
    <section 
      className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-cover bg-gray-100"
      style={{
        backgroundImage: "url('/CTA背景4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White blur container */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-relaxed">
              {serviceName 
                ? `${serviceName}について無料で相談する`
                : '初回無料相談、まずはお気軽に相談ください'
              }
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              テストテストテスト文章を入力してください
            </p>
          </div>

          {/* 3 Points Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Point 1 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">申請実績1,000+</h3>
                <p className="text-gray-600 text-xs sm:text-sm">豊富な実績と経験でサポート</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">完全成功報酬型</h3>
                <p className="text-gray-600 text-xs sm:text-sm">成功時のみお支払い</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">多言語対応</h3>
                <p className="text-gray-600 text-xs sm:text-sm">母国語でのサポート可能</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-center w-full sm:w-auto"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-600 border border-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-center w-full sm:w-auto"
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}