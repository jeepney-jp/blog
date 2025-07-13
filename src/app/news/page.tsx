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
    },
    {
      _id: "test2",
      title: "建設業許可申請の受付を開始しました",
      slug: { current: "kensetsu-kyoka-shinsei" },
      publishedAt: "2025-07-05",
      excerpt: "建設業許可申請のサポートサービスを開始いたしました。豊富な実績を基に、スムーズな許可取得をお手伝いします",
      category: "service",
      featured: false
    },
    {
      _id: "test3",
      title: "夏季休業のお知らせ",
      slug: { current: "kaki-kyugyo-oshirase" },
      publishedAt: "2025-07-03",
      excerpt: "8月13日から8月16日まで夏季休業とさせていただきます",
      category: "general",
      featured: false
    },
    {
      _id: "test4",
      title: "相続・遺言無料相談会を開催します",
      slug: { current: "sozoku-muryo-sodan" },
      publishedAt: "2025-06-28",
      excerpt: "7月20日(土)に相続・遺言に関する無料相談会を開催いたします。事前予約制となりますので、お早めにお申し込みください",
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
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((item) => (
              <article
                key={item._id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Link 
                  href={`/news/${item.slug.current}`}
                  className="block p-6"
                >
                  <div className="flex items-center gap-6">
                    {/* 日付部分 */}
                    <div className="flex-shrink-0 text-center">
                      <time className="block text-2xl font-bold text-gray-900">
                        {new Date(item.publishedAt).getDate()}
                      </time>
                      <time className="block text-sm text-gray-500">
                        {new Date(item.publishedAt).toLocaleDateString('ja-JP', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </time>
                    </div>
                    
                    {/* 縦線 */}
                    <div className="w-px h-16 bg-gray-200 flex-shrink-0" />
                    
                    {/* コンテンツ部分 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
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
                      <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h2>
                      {item.excerpt && (
                        <p className="text-sm text-gray-600 truncate">{item.excerpt}</p>
                      )}
                    </div>
                    
                    {/* 矢印 */}
                    <div className="flex-shrink-0 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
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