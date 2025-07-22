import Link from 'next/link';

export default function CTASection() {
  return (
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
  );
}