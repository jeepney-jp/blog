import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { getNews } from "@/lib/sanity";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";

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
  params: Promise<{ lang: Locale }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { lang } = await params;
  // Sanityからニュースデータを取得
  const news: News[] = await getNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

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
                      {item.category && categoryMap[item.category] && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                          categoryMap[item.category].color
                        }`}>
                          {categoryMap[item.category].name}
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

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}