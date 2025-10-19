import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBlogBySlug } from "@/lib/sanity";
import { Locale } from '@/lib/i18n/types';
import { breadcrumbContent } from '@/data/breadcrumb-content';

// ブログの型定義
interface BlogArticle {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  content?: unknown;
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

  // パンくずリスト設定
  const breadcrumbs = [
    { 
      href: `/${lang}`, 
      name: breadcrumbContent[lang].home 
    },
    { 
      href: `/${lang}/blog`, 
      name: "ブログ" 
    },
    { 
      href: `/${lang}/blog/${slug}`, 
      name: article.title 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <main>
        <Breadcrumbs segments={breadcrumbs} />
        
        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="space-y-4">
                  {/* 簡易的な本文表示（PortableTextの代替） */}
                  <p className="text-gray-700 leading-relaxed">
                    記事の内容はSanity CMSで編集できます。
                  </p>
                </div>
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
                ブログ一覧に戻る
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