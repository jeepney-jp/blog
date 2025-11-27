"use client";

import Link from 'next/link';
import Image from 'next/image';

interface BlogArticle {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
}

interface BlogSectionProps {
  articles: BlogArticle[];
  lang: string;
}

// カテゴリのラベルマップ
const categoryLabels: Record<string, string> = {
  visa: '外国人ビザ・在留資格',
  construction: '建設業許可',
  company: '会社設立・法人設立',
  antique: '古物商許可',
  architect: '建築士事務所登録',
  'real-estate': '宅建業免許',
  waste: '産業廃棄物収集運搬業許可',
  transport: '運送業許可',
  restaurant: '飲食店営業許可',
  hotel: '旅館業許可',
  inheritance: '遺言・相続',
  farmland: '農地転用',
};

export default function BlogSection({ articles, lang }: BlogSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            お役立ち情報
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-600 tracking-widest">BLOG</p>
        </div>

        {articles.length > 0 ? (
          <>
            {/* デスクトップ: 3列グリッド */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
              {articles.slice(0, 3).map((article) => (
                <article key={article._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
                  <Link href={`/${lang}/blog/${article.slug.current}`} className="block">
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                      {article.thumbnailUrl ? (
                        <Image
                          src={article.thumbnailUrl}
                          alt={article.thumbnailAlt || article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <time className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categoryLabels[article.category] || article.category}
                      </span>
                    </div>
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
                      <Link href={`/${lang}/blog/${article.slug.current}`} className="block">
                        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                          {article.thumbnailUrl ? (
                            <Image
                              src={article.thumbnailUrl}
                              alt={article.thumbnailAlt || article.title}
                              fill
                              sizes="320px"
                              className="object-contain hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </Link>
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <time className="text-xs text-gray-500">
                            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {categoryLabels[article.category] || article.category}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* ブログ一覧へのリンク */}
            <div className="text-center mt-8 sm:mt-12">
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center text-[#004080] hover:text-[#003366] font-medium text-sm sm:text-base"
              >
                ブログ一覧はこちら
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          /* 記事がない場合 */
          <div className="text-center py-12 sm:py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-500 text-sm sm:text-base">
                現在記事を準備中です。<br />
                お役立ち情報をお届けするまで、しばらくお待ちください。
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}