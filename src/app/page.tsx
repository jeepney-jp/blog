"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function CounterAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`CounterAnimation started for end: ${end}`);
    let startTime: number | null = null;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // イージング関数（ease-out）
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">フォルティア行政書士事務所</h1>
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
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
              信頼できる行政書士として
            </h2>
            <p className="text-xl mb-8 text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
              許認可申請から相続手続きまで、お客様のビジネスと人生をサポートします
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              無料相談のお申込み
            </Link>
            
            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                  <CounterAnimation end={1000} />
                  <span className="text-3xl">+</span>
                </div>
                <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>年間問合せ件数</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                  <CounterAnimation end={100} />
                  <span className="text-3xl">+</span>
                </div>
                <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>年間申請件数</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                  <CounterAnimation end={98} />
                  <span className="text-3xl">%</span>
                </div>
                <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>申請許可率</div>
              </div>
            </div>
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
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Professional Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">当事務所の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">豊富な実績</h3>
              <p className="text-gray-600">
                20年間で3,000件以上の手続きを処理してきた豊富な実績があります。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">迅速対応</h3>
              <p className="text-gray-600">
                お客様のご要望に応じて、可能な限り迅速な対応を心がけています。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">丁寧な説明</h3>
              <p className="text-gray-600">
                複雑な手続きも分かりやすく説明し、お客様の不安を解消します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
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
      <section className="py-24 bg-white">
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
                  <p className="text-gray-600 mb-4">フォルティア行政書士事務所事務所を開設いたしました</p>
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">フォルティア行政書士事務所</h3>
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
            <p>&copy; 2024 フォルティア行政書士事務所. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
