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
      
      {/* デスクトップ: グリッド表示 */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 6).map((article) => (
          <article key={article._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
            {article.thumbnailUrl && (
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                  <Image
                    src={article.thumbnailUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            )}
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {article.category}
                </span>
                {article.publishedAt && (
                  <time className="text-xs text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                )}
              </div>
              <Link href={`/blog/${article.slug}`} className="block group">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h3>
              </Link>
              <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
              <Link 
                href={`/blog/${article.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                続きを読む
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* モバイル: 横スクロール */}
      <div className="md:hidden">
        <div className="relative">
          {/* スクロールヒント */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-gray-50 to-transparent pl-8 pr-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md animate-pulse">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* カードコンテナ */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {articles.map((article) => (
              <article key={article._id} className="flex-none w-80 snap-start bg-white rounded-lg shadow-sm overflow-hidden">
                {article.thumbnailUrl && (
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                      <Image
                        src={article.thumbnailUrl}
                        alt={article.title}
                        fill
                        sizes="320px"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    {article.publishedAt && (
                      <time className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                    )}
                  </div>
                  <Link href={`/blog/${article.slug}`} className="block">
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm text-blue-600 font-medium"
                  >
                    続きを読む
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* ドットインジケーター */}
          {articles.length > 1 && (
            <div className="flex justify-center mt-4 gap-1">
              {articles.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-gray-300"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {articles.length > 6 && (
        <div className="text-center mt-8">
          <Link
            href="/blog"
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