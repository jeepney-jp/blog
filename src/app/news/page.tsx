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
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {news.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {news.map((item) => (
                <li key={item._id}>
                  <Link 
                    href={`/news/${item.slug.current}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* 日付 */}
                      <time className="text-sm text-gray-500 whitespace-nowrap">
                        {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                      
                      {/* カテゴリラベル */}
                      {item.category && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
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
                      
                      {/* タイトル */}
                      <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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