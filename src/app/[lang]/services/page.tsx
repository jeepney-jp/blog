import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import { Locale } from '@/lib/i18n/types';
import Link from 'next/link';
import { servicesContent } from '@/data/services-content';

// ISRの設定：1日ごとに再生成
export const revalidate = 86400;

// サービスカテゴリはハードコードされているため、関数は不要


interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Services({ params }: PageProps) {
  const { lang } = await params;
  const basePath = `/${lang}`;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={servicesContent[lang].title}
        description={servicesContent[lang].description}
      />

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: lang === 'ja' ? 'ホーム' : 'Home', href: basePath },
              { name: servicesContent[lang].title, href: `${basePath}/services` }
            ]}
          />
          
          {/* カテゴリー一覧 */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">{servicesContent[lang].searchTitle}</h2>
            <p className="text-base text-gray-600 text-center mb-8">{servicesContent[lang].searchDescription}</p>
          </div>
          
          {/* ハードコーディングされたサービスカテゴリを表示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesContent[lang].categories.map((category) => (
              <Link 
                key={category.id}
                href={`${basePath}/services/${category.slug}`} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block"
              >
                <div className={`w-12 h-12 ${category.colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-6 h-6 ${category.colorClass.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}