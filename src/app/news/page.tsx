import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
// import { getNews } from "../../../lib/sanity";

// ニュースの型定義
interface News {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  category?: string;
  featured?: boolean;
}

export default async function NewsPage() {
  // 一時的にテストデータを使用
  const news: News[] = [
    {
      _id: "test1",
      title: "事務所開設のお知らせ",
      slug: { current: "jimusho-kaisetsu-oshirase" },
      publishedAt: "2025-07-07",
      excerpt: "フォルティア行政書士事務所を開設いたしました",
      category: "important",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <PageHeader 
        title="お知らせ"
        description="フォルティア行政書士事務所からの最新情報をお届けします"
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* News List */}
        <div className="grid gap-6">
          {news.length > 0 ? (
            news.map((item) => (
              <article
                key={item._id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <time className="text-sm text-gray-500">
                        {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                      {item.category && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.category === 'important' 
                            ? 'bg-red-100 text-red-800'
                            : item.category === 'service'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.category === 'important' ? '重要' : 
                           item.category === 'service' ? '業務案内' :
                           item.category === 'general' ? '一般' : 'その他'}
                        </span>
                      )}
                      {item.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          注目
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link 
                        href={`/news/${item.slug.current}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h2>
                    {item.excerpt && (
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    )}
                    <Link
                      href={`/news/${item.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <p className="text-gray-500 text-lg">お知らせはまだありません。</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}