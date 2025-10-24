import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import { getBlogBySlug } from "@/lib/sanity";
import { Locale } from '@/lib/i18n/types';
import { PortableText } from '@portabletext/react';

// ブログの型定義
interface BlogArticle {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  content?: unknown[];
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

// 動的メタデータ生成
export async function generateMetadata({ params }: { params: Promise<{ lang: Locale; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const article = await getBlogBySlug(slug);
    
    if (!article) {
      return {
        title: "記事が見つかりません | フォルティア行政書士事務所",
      };
    }

    return {
      title: `${article.title} | フォルティア行政書士事務所`,
      description: article.title,
      openGraph: {
        title: article.title,
        description: article.title,
        images: article.thumbnailUrl ? [{ url: article.thumbnailUrl }] : [],
      },
    };
  } catch {
    return {
      title: "記事が見つかりません | フォルティア行政書士事務所",
    };
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
  const { lang, slug } = await params;
  
  let article: BlogArticle | null = null;
  
  try {
    article = await getBlogBySlug(slug);
  } catch (error) {
    console.error('Error fetching blog article:', error);
  }

  if (!article) {
    notFound();
  }

  const t = {
    ja: {
      home: "ホーム",
      blog: "ブログ",
      backToBlog: "ブログ一覧に戻る"
    },
    en: {
      home: "Home", 
      blog: "Blog",
      backToBlog: "Back to Blog"
    },
    'zh-CN': {
      home: "首页",
      blog: "博客", 
      backToBlog: "返回博客列表"
    },
    'zh-TW': {
      home: "首頁",
      blog: "部落格",
      backToBlog: "返回部落格列表" 
    },
    vi: {
      home: "Trang chủ",
      blog: "Blog",
      backToBlog: "Quay lại danh sách blog"
    }
  }[lang] || {
    home: "ホーム",
    blog: "ブログ", 
    backToBlog: "ブログ一覧に戻る"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href={`/${lang}`} className="hover:text-gray-700">
              {t.home}
            </Link>
            <span>／</span>
            <Link href={`/${lang}/blog`} className="hover:text-gray-700">
              {t.blog}
            </Link>
            <span>／</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </nav>

      <main>
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* 記事ヘッダー */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <time className="text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                </time>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {categoryLabels[article.category] || article.category}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>
              
              {/* サムネイル画像 */}
              {article.thumbnailUrl && (
                <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={article.thumbnailUrl}
                    alt={article.thumbnailAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            {/* 記事本文 */}
            <div className="prose prose-lg max-w-none">
              {article.content && Array.isArray(article.content) ? (
                <PortableText 
                  // @ts-expect-error PortableText type compatibility
                  value={article.content}
                  components={{
                    block: {
                      normal: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
                      h5: ({children}) => <h5 className="text-base font-bold text-gray-900 mt-4 mb-2">{children}</h5>,
                      h6: ({children}) => <h6 className="text-sm font-bold text-gray-900 mt-4 mb-2">{children}</h6>,
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="text-gray-700">{children}</li>,
                      number: ({children}) => <li className="text-gray-700">{children}</li>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-bold">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      underline: ({children}) => <u className="underline">{children}</u>,
                      code: ({children}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                      link: ({value, children}) => (
                        <a href={value?.href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    },
                    types: {
                      image: ({value}) => (
                        <div className="my-6">
                          <Image 
                            src={value.asset.url} 
                            alt={value.alt || ''} 
                            width={800}
                            height={400}
                            className="w-full rounded-lg"
                          />
                          {value.caption && (
                            <p className="text-sm text-gray-600 text-center mt-2">{value.caption}</p>
                          )}
                        </div>
                      ),
                      youtube: ({value}) => {
                        const videoId = value.url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
                        return videoId ? (
                          <div className="my-6">
                            <iframe
                              width="100%"
                              height="400"
                              src={`https://www.youtube.com/embed/${videoId}`}
                              frameBorder="0"
                              allowFullScreen
                              className="rounded-lg"
                            />
                          </div>
                        ) : null;
                      },
                      code: ({value}) => (
                        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6">
                          <code className={`language-${value.language || 'text'}`}>
                            {value.code}
                          </code>
                        </pre>
                      ),
                      quote: ({value}) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-gray-50">
                          <p className="text-gray-700 italic mb-2">{value.text}</p>
                          {value.author && (
                            <cite className="text-sm text-gray-600">— {value.author}</cite>
                          )}
                        </blockquote>
                      ),
                    }
                  }}
                />
              ) : (
                <p className="text-gray-500 text-center py-8">
                  記事の内容を準備中です。
                </p>
              )}
            </div>
            
            {/* 記事下部のナビゲーション */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t.backToBlog}
              </Link>
            </div>
          </div>
        </article>
      </main>
      
      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}