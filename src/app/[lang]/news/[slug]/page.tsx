import Link from "next/link";
import { notFound } from "next/navigation";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import { Locale } from '@/lib/i18n/types';
// import { getNewsBySlug, getNews } from "@/lib/sanity";

// ニュースの型定義
interface News {
  _id: string;
  title: string;
  titleEn?: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  excerptEn?: string;
  content?: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  contentEn?: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  category?: string;
  featured?: boolean;
}

// 多言語コンテンツ
const content = {
  ja: {
    home: "ホーム",
    news: "お知らせ",
    backToNews: "お知らせ一覧に戻る",
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
    home: "Home",
    news: "News",
    backToNews: "Back to News",
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
    home: "首页",
    news: "新闻",
    backToNews: "返回新闻列表",
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
    home: "首頁",
    news: "新聞",
    backToNews: "返回新聞列表",
    categories: {
      business_notice: "營業通知",
      new_services: "新服務",
      legal_update: "制度改革",
      price_update: "價格調整",
      media_appearance: "媒體",
      case_study: "案例介紹"
    }
  }
};

// カテゴリマッピング
const getCategoryMap = (lang: Locale): { [key: string]: { name: string; color: string } } => {
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
  params: Promise<{ slug: string; lang: Locale }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug, lang } = await params;
  const t = content[lang];
  const categoryMap = getCategoryMap(lang);
  
  // 一時的にテストデータを使用
  const news: News | null = slug === "jimusho-kaisetsu-oshirase" ? {
    _id: "test1",
    title: "事務所開設のお知らせ",
    titleEn: "Office Opening Announcement",
    slug: { current: "jimusho-kaisetsu-oshirase" },
    publishedAt: "2025-07-07",
    excerpt: "フォルティア行政書士事務所事務所を開設いたしました",
    excerptEn: "We are pleased to announce the opening of Fortia Administrative Scrivener Office.",
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
    contentEn: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We are pleased to announce the opening of Fortia Administrative Scrivener Office.\n\nOur office handles a wide range of administrative scrivener services including licensing applications, inheritance procedures, and company establishment. We provide careful and personalized services tailored to each client's needs.\n\nInitial consultations are free of charge, so please feel free to contact us."
          }
        ]
      }
    ],
    category: "business_notice",
    featured: true
  } : null;

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header lang={lang} />

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href={`/${lang}`} className="hover:text-gray-700">
              {t.home}
            </Link>
            <span>／</span>
            <Link href={`/${lang}/news`} className="hover:text-gray-700">
              {t.news}
            </Link>
            <span>／</span>
            <span className="text-gray-900">{lang === 'ja' ? news.title : (news.titleEn || news.title)}</span>
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
                {new Date(news.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
              </time>
              {news.category && categoryMap[news.category] && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  categoryMap[news.category].color
                }`}>
                  {categoryMap[news.category].name}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === 'ja' ? news.title : (news.titleEn || news.title)}
            </h1>
            {(lang === 'ja' ? news.excerpt : news.excerptEn) && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {lang === 'ja' ? news.excerpt : (news.excerptEn || news.excerpt)}
              </p>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {(lang === 'ja' ? news.content : news.contentEn) && (lang === 'ja' ? news.content : news.contentEn)!.map((block, index) => (
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
              href={`/${lang}/news`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              ← {t.backToNews}
            </Link>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <NewCTASection lang={lang} />

      {/* Footer */}
      <UnifiedFooter lang={lang} />
    </div>
  );
}