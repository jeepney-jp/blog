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
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial) => (
          <Link
            key={testimonial._id}
            href={`/testimonials/${testimonial.slug}`}
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-4">
              {testimonial.clientImageUrl ? (
                <Image
                  src={testimonial.clientImageUrl}
                  alt={testimonial.clientName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">
                    {testimonial.clientName.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{testimonial.clientName}様</h3>
                <p className="text-sm text-gray-500">
                  {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                </p>
              </div>
            </div>
            <p className="text-gray-700 line-clamp-3 mb-4">{testimonial.comment}</p>
            <span className="inline-flex items-center text-[#004080] group-hover:text-[#003366] font-medium text-sm">
              詳しく読む
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* モバイル: 横スクロール */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <Link
              key={testimonial._id}
              href={`/testimonials/${testimonial.slug}`}
              className="flex-none w-80 snap-start bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                {testimonial.clientImageUrl ? (
                  <Image
                    src={testimonial.clientImageUrl}
                    alt={testimonial.clientName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">
                      {testimonial.clientName.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{testimonial.clientName}様</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 line-clamp-3 mb-4">{testimonial.comment}</p>
              <span className="inline-flex items-center text-[#004080] font-medium text-sm">
                詳しく読む
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
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