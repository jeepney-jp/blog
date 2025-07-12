import Link from "next/link";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">事務所概要</h1>
          <p className="text-xl">フォルティア行政書士事務所について</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">代表者挨拶</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1 flex flex-col">
                {/* 代表者写真 */}
                <div className="mb-8">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src="/ceo-photo.jpg" 
                      alt="代表 鈴木康嗣" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">鈴木 康嗣</h3>
                  <p className="text-gray-600">行政書士・代表</p>
                </div>
                <p className="text-gray-700 mb-4">
                  平成15年に行政書士登録を行い、これまで20年にわたり、多くのお客様の許認可申請、相続手続き、会社設立などをサポートしてまいりました。
                </p>
                <p className="text-gray-700 mb-4">
                  当事務所では、お客様一人ひとりの状況に合わせた最適な解決策を提案し、迅速かつ丁寧な対応を心がけております。
                </p>
                <p className="text-gray-700">
                  お困りごとがございましたら、お気軽にご相談ください。
                </p>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">事務所情報</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">設立日</h3>
                    <p className="text-gray-700">
                      2014年
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">所在地</h3>
                    <p className="text-gray-700">
                      〒297-0026<br />
                      千葉県茂原市茂原579
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">連絡先</h3>
                    <p className="text-gray-700">
                      TEL: 03-1234-5678<br />
                      FAX: 03-1234-5679<br />
                      Email: info@tanaka-gyosei.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">営業時間</h3>
                    <p className="text-gray-700">
                      平日: 9:00 - 18:00<br />
                      土曜: 9:00 - 17:00<br />
                      日祝: 休業
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">資格・登録</h3>
                    <p className="text-gray-700">
                      行政書士（登録番号：15123456）<br />
                      東京都行政書士会所属
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">アクセス</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502.435134159015!2d140.2966433!3d35.4246401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b90562f4a5a3%3A0xc335baa974e81428!2z44CSMjk3LTAwMjYg5Y2D6JGJ55yM6IyC5Y6f5biC6IyC5Y6f77yV77yX77yZ!5e0!3m2!1sja!2sjp!4v1752280876305!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-lg">
              〒297-0026 千葉県茂原市茂原579
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お困りごとはございませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            初回相談は無料です。お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-base font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer"><span className="text-gray-300">フォルティア</span><span className="text-gray-300 ml-1">行政書士事務所</span></h3>
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