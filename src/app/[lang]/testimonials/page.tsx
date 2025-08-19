import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { getTestimonials } from "../../../lib/sanity";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";

// Next.jsのキャッシュを無効化
export const revalidate = 0;

export default async function TestimonialsPage() {
  // Sanityからお客様の声データを取得
  const testimonials = await getTestimonials();

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
            serviceType?: string;
            serviceDetail?: string;
            clientIndustry?: string;
            clientLocation?: string;
            featured?: boolean;
            publishedAt: string;
            clientImage?: string;
          }) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="p-6 flex flex-col flex-grow">

                {/* Service Type */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {testimonial.serviceDetail || 'サービス未設定'}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.clientName}</h3>

                {/* Comment - flex-growで空きスペースを埋める */}
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {testimonial.comment}
                </p>

                {/* Bottom section - 常に下部に配置 */}
                <div className="mt-auto">
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
            </div>
          ))}
        </div>

      </main>

      <NewCTASection />
      <UnifiedFooter />
    </div>
  );
}