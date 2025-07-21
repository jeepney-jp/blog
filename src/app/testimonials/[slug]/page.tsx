import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTestimonialBySlug, getTestimonials } from "../../../../lib/sanity";
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableTextComponents';

// Next.jsのキャッシュを無効化
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TestimonialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Sanityからお客様の声データを取得
  const testimonial = await getTestimonialBySlug(slug);

  if (!testimonial) {
    notFound();
  }

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
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              </Link>
              <Link href="/testimonials" className="text-blue-600 font-semibold">
                お客様の声
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
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
            </Link>
            <span>／</span>
            <Link href="/testimonials" className="hover:text-gray-700">
              お客様の声
            </Link>
            <span>／</span>
            <span className="text-gray-900">{testimonial.clientName}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Comment (Heading) */}
          <div className="mb-6 relative">
            {/* Date in top left of heading */}
            <time className="absolute -top-6 left-0 text-sm text-gray-500">
              {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
            </time>
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              {testimonial.comment}
            </h2>
          </div>

          {/* Client Image */}
          {testimonial.clientImage && (
            <div className="mb-8">
              <div className="aspect-[4/3] max-w-md mx-auto bg-gray-100 relative rounded-lg overflow-hidden">
                <Image
                  src={testimonial.clientImage}
                  alt={testimonial.clientName}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Testimonial Header */}
          <header className="mb-8">


            {/* Client Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">お客様情報</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">お客様名</dt>
                  <dd className="text-base text-gray-900">{testimonial.clientName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">ご利用サービス</dt>
                  <dd className="text-base text-gray-900">
                    {serviceTypeLabels[testimonial.serviceType] || testimonial.serviceType}
                  </dd>
                </div>
                {testimonial.clientIndustry && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">業種・職業</dt>
                    <dd className="text-base text-gray-900">{testimonial.clientIndustry}</dd>
                  </div>
                )}
                {testimonial.clientLocation && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">地域</dt>
                    <dd className="text-base text-gray-900">{testimonial.clientLocation}</dd>
                  </div>
                )}
              </dl>
            </div>
          </header>

          {/* Testimonial Content */}
          <div className="prose prose-lg max-w-none">
            {/* 本文（Portable Text） */}
            {testimonial.content && testimonial.content.length > 0 && (
              <div className="mt-8">
                <PortableText
                  value={testimonial.content}
                  components={portableTextComponents}
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div>
              <Link
                href="/testimonials"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                ← お客様の声一覧に戻る
              </Link>
            </div>
          </div>
        </div>

        {/* Related CTA */}
        <div className="mt-12">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              同じようなお悩みをお持ちですか？
            </h2>
            <p className="text-gray-600 mb-6">
              初回相談は無料です。お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                無料相談のお申し込み
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
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

// 静的パスの生成
export async function generateStaticParams() {
  const testimonials = await getTestimonials();
  
  return testimonials.map((testimonial: { slug: { current: string } }) => ({
    slug: testimonial.slug.current,
  }));
}