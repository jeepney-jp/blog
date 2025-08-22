import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getNews } from "@/lib/sanity";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";
import { breadcrumbContent } from "@/data/breadcrumb-content";

// カテゴリの型定義
type CategoryKey = 'business_notice' | 'new_services' | 'legal_update' | 'price_update' | 'media_appearance' | 'case_study';

// ニュースの型定義
interface News {
  _id: string;
  title: string;
  titleEn?: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  excerptEn?: string;
  category?: CategoryKey;
  featured?: boolean;
}

// 多言語コンテンツ
const content = {
  ja: {
    pageTitle: "お知らせ",
    pageDescription: "フォルティア行政書士事務所からの最新情報をお届けします",
    noNews: "お知らせはまだありません。",
    categories: {
      business_notice: "営業案内",
      new_services: "新サービス",
      legal_update: "制度改正",
      price_update: "料金改定",
      media_appearance: "メディア",
      case_study: "実績紹介"
    }
  },
  en: {
    pageTitle: "News",
    pageDescription: "Latest information from Fortia Administrative Law Office",
    noNews: "No news available yet.",
    categories: {
      business_notice: "Business Notice",
      new_services: "New Services",
      legal_update: "Legal Updates",
      price_update: "Price Updates",
      media_appearance: "Media",
      case_study: "Case Studies"
    }
  },
  'zh-CN': {
    pageTitle: "新闻",
    pageDescription: "Fortia行政书士事务所的最新信息",
    noNews: "暂无新闻。",
    categories: {
      business_notice: "营业通知",
      new_services: "新服务",
      legal_update: "制度改革",
      price_update: "价格调整",
      media_appearance: "媒体",
      case_study: "案例介绍"
    }
  },
  'zh-TW': {
    pageTitle: "新聞",
    pageDescription: "Fortia行政書士事務所的最新資訊",
    noNews: "暫無新聞。",
    categories: {
      business_notice: "營業通知",
      new_services: "新服務",
      legal_update: "制度改革",
      price_update: "價格調整",
      media_appearance: "媒體",
      case_study: "案例介紹"
    }
  },
  vi: {
    pageTitle: "Tin tức",
    pageDescription: "Thông tin mới nhất từ Văn phòng Hành chính Fortia",
    noNews: "Hiện tại không có tin tức.",
    categories: {
      business_notice: "Thông báo kinh doanh",
      new_services: "Dịch vụ mới",
      legal_update: "Cải cách chế độ",
      price_update: "Điều chỉnh giá",
      media_appearance: "Truyền thông",
      case_study: "Giới thiệu thành tích"
    }
  }
};

// カテゴリマッピング
const getCategoryMap = (lang: Locale): Record<CategoryKey, { name: string; color: string }> => {
  const t = content[lang];
  return {
    business_notice: { name: t.categories.business_notice, color: 'bg-green-100 text-green-800' },
    new_services: { name: t.categories.new_services, color: 'bg-blue-100 text-blue-800' },
    legal_update: { name: t.categories.legal_update, color: 'bg-purple-100 text-purple-800' },
    price_update: { name: t.categories.price_update, color: 'bg-yellow-100 text-yellow-800' },
    media_appearance: { name: t.categories.media_appearance, color: 'bg-pink-100 text-pink-800' },
    case_study: { name: t.categories.case_study, color: 'bg-indigo-100 text-indigo-800' },
  };
};

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const categoryMap = getCategoryMap(lang);
  // Sanityからニュースデータを取得
  const news: News[] = await getNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={t.pageTitle}
        description={t.pageDescription}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくずリスト */}
        <Breadcrumbs
          segments={[
            { name: breadcrumbContent[lang].home, href: `/${lang}` },
            { name: breadcrumbContent[lang].news, href: `/${lang}/news` }
          ]}
        />
        

        {/* News List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {news.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {news.map((item) => (
                <li key={item._id}>
                  <Link 
                    href={`/${lang}/news/${item.slug.current}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* 日付 */}
                      <time className="text-sm text-gray-500 whitespace-nowrap">
                        {new Date(item.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
                      </time>
                      
                      {/* カテゴリラベル */}
                      {item.category && item.category in categoryMap && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                          categoryMap[item.category as CategoryKey].color
                        }`}>
                          {categoryMap[item.category as CategoryKey].name}
                        </span>
                      )}
                      
                      {/* タイトル */}
                      <h3 className="flex-1 text-gray-900 hover:text-blue-600 transition-colors">
                        {lang === 'ja' ? item.title : (item.titleEn || item.title)}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <p className="text-gray-500 text-lg">{t.noNews}</p>
            </div>
          )}
        </div>
      </main>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}