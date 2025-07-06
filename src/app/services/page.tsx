import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">田中行政書士事務所</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 許認可申請 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">許認可申請</h2>
              <p className="text-gray-600 mb-6">
                各種事業に必要な許認可申請を迅速に処理いたします。
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">建設業許可</h3>
                  <p className="text-sm text-gray-600">一般建設業許可・特定建設業許可</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">宅建業免許</h3>
                  <p className="text-sm text-gray-600">不動産業開始のための必須免許</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">飲食店営業許可</h3>
                  <p className="text-sm text-gray-600">飲食店開業に必要な許可申請</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">古物商許可</h3>
                  <p className="text-sm text-gray-600">中古品売買業のための許可</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-blue-600 font-semibold">料金: 50,000円〜</p>
              </div>
            </div>

            {/* 相続手続き */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">相続手続き</h2>
              <p className="text-gray-600 mb-6">
                相続に関する各種手続きを丁寧にサポートします。
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">相続人調査</h3>
                  <p className="text-sm text-gray-600">戸籍収集による相続人確定</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">遺産分割協議書作成</h3>
                  <p className="text-sm text-gray-600">相続人間の協議内容を書面化</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">相続放棄</h3>
                  <p className="text-sm text-gray-600">家庭裁判所への申述手続き</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">遺言書作成</h3>
                  <p className="text-sm text-gray-600">公正証書遺言の作成サポート</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-blue-600 font-semibold">料金: 30,000円〜</p>
              </div>
            </div>

            {/* 会社設立 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">会社設立</h2>
              <p className="text-gray-600 mb-6">
                株式会社・合同会社の設立手続きを完全サポートします。
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">定款作成</h3>
                  <p className="text-sm text-gray-600">会社の基本ルールを定める定款作成</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">法人登記</h3>
                  <p className="text-sm text-gray-600">法務局での会社設立登記</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">各種届出</h3>
                  <p className="text-sm text-gray-600">税務署・労働基準監督署等への届出</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">印鑑作成</h3>
                  <p className="text-sm text-gray-600">会社実印・銀行印の作成手配</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-blue-600 font-semibold">料金: 100,000円〜</p>
              </div>
            </div>

            {/* 契約書作成 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">契約書作成</h2>
              <p className="text-gray-600 mb-6">
                各種契約書の作成・チェックを行います。
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">売買契約書</h3>
                  <p className="text-sm text-gray-600">不動産・動産の売買契約書</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">業務委託契約書</h3>
                  <p className="text-sm text-gray-600">フリーランス向け業務委託契約</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">賃貸借契約書</h3>
                  <p className="text-sm text-gray-600">建物・土地の賃貸借契約書</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">秘密保持契約書</h3>
                  <p className="text-sm text-gray-600">機密情報保護のための契約書</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-blue-600 font-semibold">料金: 20,000円〜</p>
              </div>
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
                      建設業許可申請
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
                      宅建業免許申請
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      70,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      知事免許の場合
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      相続人調査
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      30,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      戸籍収集含む
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      遺産分割協議書作成
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      50,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      相続人5名まで
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      株式会社設立
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      100,000円
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      定款作成・認証含む
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
              <h3 className="text-lg font-semibold mb-4">田中行政書士事務所</h3>
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
            <p>&copy; 2024 田中行政書士事務所. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}