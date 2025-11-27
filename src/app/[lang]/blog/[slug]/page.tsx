import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import { getBlogBySlug } from "@/lib/sanity";
import { Locale } from '@/lib/i18n/types';
import PortableTextWithToc from '@/components/PortableTextWithToc';

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
            {/* サムネイル画像を最上部に配置 */}
            {article.thumbnailUrl && (
              <div className="relative w-full aspect-square rounded-lg overflow-hidden -mx-8 -mt-8 mb-6">
                <Image
                  src={article.thumbnailUrl}
                  alt={article.thumbnailAlt || article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <time className="text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                </time>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {categoryLabels[article.category] || article.category}
                </span>
              </div>
            </header>

            {/* 記事本文 */}
            <div className="prose prose-lg max-w-none">
              {article.content && Array.isArray(article.content) ? (
                <PortableTextWithToc 
                  // @ts-expect-error PortableText type compatibility
                  content={article.content}
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