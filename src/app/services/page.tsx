import Link from "next/link";

export default function Services() {
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
              <Link href="/services" className="text-blue-600 font-semibold">
                サービス
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">サービス一覧</h1>
          <p className="text-xl">お客様のニーズに合わせた幅広いサービスを提供しています</p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* 外国人関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">外国人関連業務</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 在留資格認定証明書交付申請</li>
                <li>• 在留期間更新許可申請</li>
                <li>• 在留資格変更許可申請</li>
                <li>• 永住許可申請</li>
              </ul>
            </div>

            {/* 建設・宅地建物取引業関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">建設・宅建業関連</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 建設業許可申請</li>
                <li>• 宅地建物取引業免許申請</li>
                <li>• 建設業許可更新・変更</li>
                <li>• 経営事項審査申請</li>
              </ul>
            </div>

            {/* 自動車関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">自動車関連業務</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 自動車登録・名義変更</li>
                <li>• 車庫証明申請</li>
                <li>• 自動車運送事業許可</li>
                <li>• 古物商許可（自動車）</li>
              </ul>
            </div>

            {/* 飲食・風俗営業関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">飲食・風俗営業</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 飲食店営業許可</li>
                <li>• 風俗営業許可</li>
                <li>• 深夜酒類提供飲食店営業</li>
                <li>• 特定遊興飲食店営業許可</li>
              </ul>
            </div>

            {/* 廃棄物処理業許可関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">廃棄物処理業許可</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 一般廃棄物収集運搬業許可</li>
                <li>• 産業廃棄物収集運搬業許可</li>
                <li>• 産業廃棄物処分業許可</li>
                <li>• 特別管理産業廃棄物許可</li>
              </ul>
            </div>

            {/* 旅行・旅館業関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">旅行・旅館業</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 旅行業登録申請</li>
                <li>• 旅館業許可申請</li>
                <li>• 住宅宿泊事業届出</li>
                <li>• 住宅宿泊管理業登録</li>
              </ul>
            </div>

            {/* 法人設立業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">法人設立業務</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 株式会社設立</li>
                <li>• 合同会社設立</li>
                <li>• NPO法人設立</li>
                <li>• 一般社団法人設立</li>
              </ul>
            </div>

            {/* 営業許可 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">営業許可</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 古物商許可</li>
                <li>• 警備業認定申請</li>
                <li>• 貸金業登録</li>
                <li>• 介護事業指定申請</li>
              </ul>
            </div>

            {/* 土地関連業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">土地関連業務</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 農地転用許可申請</li>
                <li>• 開発許可申請</li>
                <li>• 土地利用調整申請</li>
                <li>• 測量業者登録申請</li>
              </ul>
            </div>

            {/* 権利義務・事実証明業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">権利義務・事実証明</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 契約書作成</li>
                <li>• 内容証明郵便作成</li>
                <li>• 示談書・合意書作成</li>
                <li>• 各種証明書作成</li>
              </ul>
            </div>

            {/* その他の業務 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">その他の業務</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 補助金申請サポート</li>
                <li>• 各種許認可相談</li>
                <li>• 法人運営サポート</li>
                <li>• その他法務相談</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">料金表</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      サービス
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      基本料金
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      在留資格認定証明書交付申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      50,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      基本料金
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      建設業許可申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      150,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      新規申請の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      車庫証明申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      15,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      一般的な場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      飲食店営業許可申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      80,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      新規申請の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      一般廃棄物収集運搬業許可
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      120,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      新規申請の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      旅行業登録申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      200,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      第３種旅行業の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      株式会社設立
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      150,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      定款作成・認証含む
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      古物商許可申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      60,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      新規申請の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      農地転用許可申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      100,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      4条許可の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      契約書作成
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      30,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      一般的な契約書
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            ※上記は基本料金です。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            まずは無料相談から
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            どのようなことでも、お気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            無料相談のお申込み
          </Link>
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