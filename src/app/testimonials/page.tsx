import Link from "next/link";
// import { getTestimonials } from "../../../lib/sanity";

// お客様の声の型定義
interface Testimonial {
  _id: string;
  clientName: string;
  slug: { current: string };
  rating: number;
  comment: string;
  serviceType: string;
  clientIndustry?: string;
  clientLocation?: string;
  featured?: boolean;
  publishedAt: string;
  clientImage?: {
    asset: {
      url: string;
    };
  };
}

export default async function TestimonialsPage() {
  // 一時的にテストデータを使用
  const testimonials: Testimonial[] = [
    {
      _id: "test1",
      clientName: "田中様",
      slug: { current: "tanaka-san" },
      rating: 5,
      comment: "許認可申請でお世話になりました。複雑な手続きでしたが、丁寧に説明していただき、スムーズに許可が下りました。本当にありがとうございました。",
      serviceType: "license",
      clientIndustry: "建設業",
      clientLocation: "東京都",
      featured: true,
      publishedAt: "2025-07-06"
    },
    {
      _id: "test2",
      clientName: "佐藤様",
      slug: { current: "sato-san" },
      rating: 5,
      comment: "相続手続きが想像以上に複雑で困っていましたが、親切に対応していただき、無事に完了できました。料金も明確で安心でした。",
      serviceType: "inheritance",
      clientIndustry: "個人",
      clientLocation: "千葉県",
      featured: false,
      publishedAt: "2025-07-05"
    },
    {
      _id: "test3",
      clientName: "鈴木様",
      slug: { current: "suzuki-san" },
      rating: 4,
      comment: "会社設立でお願いしました。必要書類の準備から法務局への提出まで、すべてサポートしていただきました。",
      serviceType: "incorporation",
      clientIndustry: "IT業",
      clientLocation: "神奈川県",
      featured: false,
      publishedAt: "2025-07-04"
    }
  ];

  const serviceTypeLabels: { [key: string]: string } = {
    license: "許認可申請",
    inheritance: "相続手続き",
    incorporation: "会社設立",
    contracts: "契約書作成",
    other: "その他"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-xl font-bold"><span className="text-gray-600">フォルティア</span><span className="text-gray-600 ml-1">行政書士事務所</span></h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              <Link href="/testimonials" className="text-blue-600 font-semibold">
                お客様の声
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            <span>／</span>
            <span className="text-gray-900">お客様の声</span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              当事務所をご利用いただいたお客様からの貴重なご意見・ご感想をご紹介いたします。
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              すべて
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              許認可申請
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              相続手続き
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              会社設立
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              契約書作成
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              {/* Service Type */}
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {serviceTypeLabels[testimonial.serviceType] || testimonial.serviceType}
                </span>
                {testimonial.featured && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    注目の声
                  </span>
                )}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                {testimonial.comment}
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.clientName}</p>
                    <div className="text-sm text-gray-500">
                      {testimonial.clientIndustry && (
                        <span>{testimonial.clientIndustry}</span>
                      )}
                      {testimonial.clientLocation && (
                        <span className="ml-2">({testimonial.clientLocation})</span>
                      )}
                    </div>
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                </div>
              </div>

              {/* Read More Link */}
              <div className="mt-4">
                <Link
                  href={`/testimonials/${testimonial.slug.current}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  詳細を見る →
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お客様のお悩み解決をサポートします
            </h2>
            <p className="text-gray-600 mb-6">
              初回相談は無料です。お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              無料相談のお申し込み
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-base font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer"><span className="text-gray-300">フォルティア</span><span className="text-gray-300 ml-1">行政書士事務所</span></h3>
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