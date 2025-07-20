import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <h3 className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer">
                <span className="text-white">フォルティア</span>
                <span className="text-white ml-1">行政書士事務所</span>
              </h3>
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
  );
}