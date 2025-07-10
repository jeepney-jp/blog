import Link from "next/link";

export default function Contact() {
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
              <Link href="/contact" className="text-blue-600 font-semibold">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl">お気軽にご相談ください</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      ご相談内容
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">選択してください</option>
                      <option value="permit">許認可申請</option>
                      <option value="inheritance">相続手続き</option>
                      <option value="company">会社設立</option>
                      <option value="contract">契約書作成</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ご相談内容を詳しくお聞かせください"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      プライバシーポリシーに同意します <span className="text-red-500">*</span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ先</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">電話でのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-blue-600">03-1234-5678</p>
                    <p className="text-gray-600">
                      平日: 9:00 - 18:00<br />
                      土曜: 9:00 - 17:00<br />
                      日祝: 休業
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">FAXでのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-gray-900">03-1234-5679</p>
                    <p className="text-gray-600">24時間受付</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">メールでのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">info@tanaka-gyosei.com</p>
                    <p className="text-gray-600">24時間受付（返信は営業時間内）</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">事務所住所</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      千代田ビル3階
                    </p>
                    <p className="text-sm text-gray-600">
                      ※駐車場はございません。公共交通機関をご利用ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Map */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">アクセス</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">最寄り駅</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">東京駅</h4>
                  <p className="text-gray-600">JR各線 徒歩5分</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">大手町駅</h4>
                  <p className="text-gray-600">東京メトロ各線 徒歩3分</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">二重橋前駅</h4>
                  <p className="text-gray-600">東京メトロ千代田線 徒歩2分</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">お車でお越しの場合</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  首都高速都心環状線「神田橋IC」より約5分
                </p>
                <p className="text-sm text-gray-600">
                  ※駐車場はございません。近隣のコインパーキングをご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-lg font-semibold mb-4 hover:text-blue-300 transition-colors cursor-pointer underline-offset-2 hover:underline">フォルティア行政書士事務所</h3>
              </Link>
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