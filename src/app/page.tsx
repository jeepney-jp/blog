import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">フォルティア行政書士</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                お役立ち情報
              </Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
                お客様の声
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              信頼できる行政書士として
            </h2>
            <p className="text-xl mb-8">
              許認可申請から相続手続きまで、お客様のビジネスと人生をサポートします
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              無料相談のお申込み
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要サービス</h2>
            <p className="text-lg text-gray-600">
              豊富な経験と専門知識で、お客様のニーズにお応えします
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">許認可申請</h3>
              <p className="text-gray-600">
                建設業許可、宅建業免許、飲食店営業許可など、各種許認可申請を迅速に処理します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">相続手続き</h3>
              <p className="text-gray-600">
                相続放棄、遺産分割協議書作成、相続人調査など、相続に関する手続きを丁寧にサポートします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">会社設立</h3>
              <p className="text-gray-600">
                株式会社、合同会社の設立手続きから定款作成まで、スムーズな会社設立をお手伝いします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新のお知らせ</h2>
            <p className="text-lg text-gray-600">
              事務所からの重要なお知らせをご確認ください
            </p>
          </div>
          <div className="grid gap-6">
            <article className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <time className="text-sm text-gray-500">
                      2025年7月7日
                    </time>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      重要
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      注目
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link 
                      href="/news/jimusho-kaisetsu-oshirase"
                      className="hover:text-blue-600 transition-colors"
                    >
                      事務所開設のお知らせ
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">フォルティア行政書士事務所を開設いたしました</p>
                  <Link
                    href="/news/jimusho-kaisetsu-oshirase"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            </article>
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
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
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
      <section className="bg-gray-100 py-16">
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">フォルティア行政書士</h3>
              <p className="text-gray-400">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">営業時間</h3>
              <p className="text-gray-400">
                平日: 9:00 - 18:00<br />
                土曜: 9:00 - 17:00<br />
                日祝: 休業
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">主要業務エリア</h3>
              <p className="text-gray-400">
                東京都、千葉県、埼玉県、神奈川県<br />
                ※その他地域もご相談ください
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 フォルティア行政書士. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
