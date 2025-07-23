import Link from "next/link";
import { notFound } from "next/navigation";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import CTASection from '@/components/CTASection';
// import { getNewsBySlug, getNews } from "../../../../lib/sanity";

// ニュースの型定義
interface News {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  content?: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  category?: string;
  featured?: boolean;
}

// カテゴリマッピング
const categoryMap: { [key: string]: { name: string; color: string } } = {
  business_notice: { name: '営業案内', color: 'bg-green-100 text-green-800' },
  new_services: { name: '新サービス', color: 'bg-blue-100 text-blue-800' },
  legal_update: { name: '制度改正', color: 'bg-purple-100 text-purple-800' },
  price_update: { name: '料金改定', color: 'bg-yellow-100 text-yellow-800' },
  media_appearance: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
  case_study: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 一時的にテストデータを使用
  const news: News | null = slug === "jimusho-kaisetsu-oshirase" ? {
    _id: "test1",
    title: "事務所開設のお知らせ",
    slug: { current: "jimusho-kaisetsu-oshirase" },
    publishedAt: "2025-07-07",
    excerpt: "フォルティア行政書士事務所事務所を開設いたしました",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "この度、フォルティア行政書士事務所事務所を開設いたしました。\n\n当事務所では、許認可申請、相続手続き、会社設立など、幅広い行政書士業務を承っております。お客様一人ひとりのニーズに合わせた丁寧なサービスを提供いたします。\n\n初回相談は無料となっておりますので、お気軽にお問い合わせください。"
          }
        ]
      }
    ],
    category: "press_release",
    featured: true
  } : null;

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            </Link>
            <span>／</span>
            <Link href="/news" className="hover:text-gray-700">
              お知らせ
            </Link>
            <span>／</span>
            <span className="text-gray-900">{news.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <time className="text-sm text-gray-500">
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
              {news.category && categoryMap[news.category] && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  categoryMap[news.category].color
                }`}>
                  {categoryMap[news.category].name}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h1>
            {news.excerpt && (
              <p className="text-lg text-gray-600 leading-relaxed">{news.excerpt}</p>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {news.content && news.content.map((block, index) => (
              <div key={index} className="mb-6">
                {block.children?.map((child, childIndex: number) => (
                  <p key={childIndex} className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {child.text}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              ← お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <UnifiedFooter />
    </div>
  );
}