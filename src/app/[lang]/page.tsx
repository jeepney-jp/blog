import Link from "next/link";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import { getNews } from '@/lib/sanity';
import { Locale } from '@/lib/i18n/types';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

// 型定義

// 多言語コンテンツ
const content = {
  ja: {
    hero: {
      title1: "信頼と実績の",
      title2: "行政書士事務所",
      subtitle: "外国人の皆様の日本での生活を全力でサポートします",
      cta: "今すぐ相談する",
      services: "サービス一覧"
    },
    features: {
      title: "当事務所の特徴",
      subtitle: "OUR FEATURES",
      achievement: {
        title: "申請実績1,000件超の信頼",
        description: "豊富な経験と実績に基づき、お客様一人ひとりに最適なサポートを提供いたします。",
        applications: "申請件数",
        approvalRate: "許可率"
      },
      pricing: {
        title: "完全成果報酬制で明朗な料金体系",
        description: "許可が下りなかった場合は報酬をいただきません。明確で安心の料金設定です。",
        savings: "最大50%節約",
        comparison: "他社比較"
      },
      multilingual: {
        title: "母国語対応で安心サポート",
        description: "多言語に対応しており、お客様の母国語での相談が可能です。"
      }
    },
    services: {
      title: "サービス",
      subtitle: "SERVICES",
      searchByName: "サービス名で検索",
      searchByCategory: "カテゴリーから選ぶ",
      searchDescription: "ご希望のサービスをお選びください"
    },
    about: {
      title: "事務所案内",
      subtitle: "ABOUT US",
      heading: "お客様の夢を実現するパートナーとして",
      description1: "私たちは、外国人の皆様が日本で安心して生活し、夢を実現できるよう、専門知識と豊富な経験を活かしたサポートを提供しています。",
      description2: "一人ひとりのお客様と向き合い、最適な解決策をご提案いたします。",
      description3: "お困りのことがございましたら、お気軽にご相談ください。",
      learnMore: "詳しく見る"
    },
    news: {
      title: "お知らせ",
      subtitle: "NEWS & UPDATES",
      viewAll: "お知らせ一覧",
      noNews: "現在お知らせはございません。"
    }
  },
  en: {
    hero: {
      title1: "Trusted and Proven",
      title2: "Administrative Scrivener Office",
      subtitle: "We fully support the lives of foreign residents in Japan",
      cta: "Contact Us Now",
      services: "Our Services"
    },
    features: {
      title: "Our Features",
      subtitle: "OUR FEATURES",
      achievement: {
        title: "Over 1,000 Applications - Trusted Track Record",
        description: "Based on extensive experience and proven results, we provide optimal support tailored to each client.",
        applications: "Applications",
        approvalRate: "Approval Rate"
      },
      pricing: {
        title: "Success-Based Fee Structure",
        description: "We don't charge fees if your application is not approved. Clear and reliable pricing structure.",
        savings: "Save up to 50%",
        comparison: "vs competitors"
      },
      multilingual: {
        title: "Native Language Support",
        description: "We offer multilingual support, allowing consultation in your native language."
      }
    },
    services: {
      title: "Services",
      subtitle: "SERVICES",
      searchByName: "Search by Service Name",
      searchByCategory: "Choose by Category",
      searchDescription: "Please select your desired service"
    },
    about: {
      title: "About Us",
      subtitle: "ABOUT US",
      heading: "Your Partner in Realizing Dreams",
      description1: "We provide support leveraging specialized knowledge and extensive experience to help foreign residents live with peace of mind and realize their dreams in Japan.",
      description2: "We work closely with each client to propose optimal solutions.",
      description3: "If you have any concerns, please feel free to consult with us.",
      learnMore: "Learn More"
    },
    news: {
      title: "Latest News",
      subtitle: "NEWS & UPDATES",
      viewAll: "View All News",
      noNews: "No news available yet."
    }
  }
};


export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' }
  ];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const basePath = `/${lang}`;
  
  await getNews();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <section className="relative text-white min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center py-8 sm:py-12">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="text-blue-500 block mb-1">{t.hero.title1}</span>
            <span className="text-blue-500 block">{t.hero.title2}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">{t.hero.subtitle}</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              href={`${basePath}/contact`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
            >
              {t.hero.cta}
            </Link>
            <Link 
              href={`${basePath}/services`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.hero.services}
            </Link>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}