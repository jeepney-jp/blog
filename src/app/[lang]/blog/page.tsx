import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { getBlogs } from "@/lib/sanity";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";

// ブログの型定義
interface BlogArticle {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
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

// ISR設定
export const revalidate = 60;

// メタデータ
export const metadata: Metadata = {
  title: "ブログ一覧 | フォルティア行政書士事務所",
  description: "フォルティア行政書士事務所のお役立ち情報ブログ。外国人ビザ、建設業許可、会社設立など各分野の専門知識や最新情報をお届けします。",
};

export default async function BlogPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  
  // データ取得
  let blogArticles: BlogArticle[] = [];
  
  try {
    blogArticles = await getBlogs().catch(() => []);
  } catch (error) {
    console.error('Error fetching blog articles:', error);
  }

  const t = {
    ja: {
      home: "ホーム",
      blog: "ブログ"
    },
    en: {
      home: "Home", 
      blog: "Blog"
    },
    'zh-CN': {
      home: "首页",
      blog: "博客"
    },
    'zh-TW': {
      home: "首頁",
      blog: "部落格"
    },
    vi: {
      home: "Trang chủ",
      blog: "Blog"
    }
  }[lang] || {
    home: "ホーム",
    blog: "ブログ"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <main>
        <PageHeader
          title="お役立ち情報"
          description="フォルティアからの情報発信 - 各分野の専門知識や最新情報をお届けします"
        />
        
        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href={`/${lang}`} className="hover:text-gray-700">
                {t.home}
              </Link>
              <span>／</span>
              <span className="text-gray-900">{t.blog}</span>
            </div>
          </div>
        </nav>
        
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {blogArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((article) => (
                  <article 
                    key={article._id} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full"
                  >
                    <Link href={`/${lang}/blog/${article.slug.current}`} className="block">
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                        {article.thumbnailUrl ? (
                          <Image
                            src={article.thumbnailUrl}
                            alt={article.thumbnailAlt || article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
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
                        <time className="text-sm text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {categoryLabels[article.category] || article.category}
                        </span>
                      </div>
                      
                      <Link href={`/${lang}/blog/${article.slug.current}`} className="block group">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-4">
                          {article.title}
                        </h2>
                      </Link>
                      
                      <Link 
                        href={`/${lang}/blog/${article.slug.current}`}
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
            ) : (
              /* 記事がない場合 */
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">記事を準備中です</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    お役立ち情報をお届けするため、<br />
                    現在記事を準備しております。<br />
                    しばらくお待ちください。
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}