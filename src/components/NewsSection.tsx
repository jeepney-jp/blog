"use client";

import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  thumbnailUrl?: string;
}

interface NewsSectionProps {
  articles: NewsArticle[];
  serviceName: string;
}

export default function NewsSection({ articles, serviceName }: NewsSectionProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section aria-label="お役立ち記事" className="mt-16">
      <h2 className="text-xl sm:text-2xl font-bold text-[#004080] mb-2">
        {serviceName}に関するお役立ち情報
      </h2>
      <p className="text-gray-600 mb-6">知っておくと役立つ情報をまとめました</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article) => (
          <Link
            key={article._id}
            href={`/news/${article.slug}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {article.thumbnailUrl ? (
              <div className="aspect-w-16 aspect-h-9 relative h-48 bg-gray-100">
                <Image
                  src={article.thumbnailUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-[#004080] to-[#003366] flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            )}
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#004080] transition-colors mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center text-[#004080] group-hover:text-[#003366] font-medium text-sm">
                続きを読む
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {articles.length > 6 && (
        <div className="text-center mt-8">
          <Link
            href={`/news?category=${encodeURIComponent(serviceName)}`}
            className="inline-flex items-center text-[#004080] hover:text-[#003366] font-medium"
          >
            すべての{serviceName}関連記事を見る
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}