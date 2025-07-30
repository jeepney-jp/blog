"use client";

import Link from 'next/link';
import Image from 'next/image';

interface Testimonial {
  _id: string;
  clientName: string;
  slug: string;
  comment: string;
  serviceDetail: string;
  publishedAt: string;
  clientImageUrl?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  serviceName: string;
}

export default function TestimonialsSection({ testimonials, serviceName }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section aria-label="お客様の声" className="mt-16">
      <h2 className="text-xl sm:text-2xl font-bold text-[#004080] mb-2">
        {serviceName}をご利用いただいたお客様の声
      </h2>
      <p className="text-gray-600 mb-6">実際にこのサービスをご利用いただいた方々のご感想です</p>
      
      {/* デスクトップ: グリッド表示 */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.slice(0, 3).map((testimonial) => (
          <div key={testimonial._id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
            {/* 写真部分 */}
            <Link href={`/testimonials/${testimonial.slug}`}>
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group cursor-pointer">
                {testimonial.clientImageUrl ? (
                  <Image
                    src={testimonial.clientImageUrl}
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
            
            {/* テキスト部分 */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {testimonial.serviceDetail}
                </span>
              </div>
              <Link href={`/testimonials/${testimonial.slug}`}>
                <h3 className="text-base font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {testimonial.clientName}様
                </h3>
              </Link>
              <p className="text-sm text-gray-600 line-clamp-3 flex-1">{testimonial.comment}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href={`/testimonials/${testimonial.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  詳しく読む
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* モバイル: 横スクロール */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="flex-none w-80 snap-start bg-white rounded-lg shadow-sm overflow-hidden">
              {/* 写真部分 */}
              <Link href={`/testimonials/${testimonial.slug}`}>
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  {testimonial.clientImageUrl ? (
                    <Image
                      src={testimonial.clientImageUrl}
                      alt={testimonial.clientName}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full" />
                    </div>
                  )}
                </div>
              </Link>
              
              {/* テキスト部分 */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {testimonial.serviceDetail}
                  </span>
                </div>
                <Link href={`/testimonials/${testimonial.slug}`}>
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    {testimonial.clientName}様
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">{testimonial.comment}</p>
                <Link
                  href={`/testimonials/${testimonial.slug}`}
                  className="text-sm text-blue-600 font-medium inline-flex items-center"
                >
                  詳しく読む
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-4 gap-1">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        )}
      </div>

      {testimonials.length > 3 && (
        <div className="text-center mt-6">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-[#004080] hover:text-[#003366] font-medium"
          >
            すべてのお客様の声を見る
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}