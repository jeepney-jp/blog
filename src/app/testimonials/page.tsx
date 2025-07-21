import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { getTestimonials } from "../../../lib/sanity";

// Next.jsのキャッシュを無効化
export const revalidate = 0;

export default async function TestimonialsPage() {
  // Sanityからお客様の声データを取得
  const testimonials = await getTestimonials();

  const serviceTypeLabels: { [key: string]: string } = {
    license: "許認可申請",
    inheritance: "相続手続き",
    incorporation: "会社設立",
    contracts: "契約書作成",
    other: "その他"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <PageHeader 
        title="お客様の声"
        description="当事務所をご利用いただいたお客様からの貴重なご意見・ご感想をご紹介いたします"
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            </Link>
            <span>／</span>
            <span className="text-gray-900">お客様の声</span>
          </div>
        </div>
      </nav>

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

        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">取得されたお客様の声: {testimonials.length}件</p>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: {
            _id: string;
            clientName: string;
            slug: { current: string };
            comment: string;
            serviceType: string;
            clientIndustry?: string;
            clientLocation?: string;
            featured?: boolean;
            publishedAt: string;
            clientImage?: string;
          }) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* 写真部分 */}
              <Link href={`/testimonials/${testimonial.slug.current}`}>
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group cursor-pointer">
                  {testimonial.clientImage ? (
                    <Image
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full" />
                    </div>
                  )}
                </div>
              </Link>
              
              {/* コンテンツ部分 */}
              <div className="p-6">

                {/* Service Type */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {serviceTypeLabels[testimonial.serviceType] || testimonial.serviceType}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.clientName}</h3>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {testimonial.comment}
                </p>

                {/* Client Info & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    {testimonial.clientIndustry && (
                      <span>{testimonial.clientIndustry}</span>
                    )}
                    {testimonial.clientLocation && (
                      <span className="ml-1">({testimonial.clientLocation})</span>
                    )}
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t">
                  <Link
                    href={`/testimonials/${testimonial.slug.current}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center group"
                  >
                    詳細を見る
                    <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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
            </Link>
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