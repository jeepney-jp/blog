import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-xl font-bold">
                  <span className="text-gray-600">フォルティア</span>
                  <span className="text-gray-600 ml-1">行政書士事務所</span>
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
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
              <Link href="/contact" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}