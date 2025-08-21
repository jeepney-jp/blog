import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery } from '@/lib/queries';
import { ServiceCategory } from '@/lib/types';
import CategoryCard from '@/components/CategoryCard';
import DebugCategoryCard from '@/components/DebugCategoryCard';
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import { Locale } from '@/lib/i18n/types';
import Link from 'next/link';
import { servicesContent } from '@/data/services-content';

// ISRの設定：1日ごとに再生成
export const revalidate = 86400;

// Sanityからカテゴリ一覧を取得
async function getServiceCategories(): Promise<ServiceCategory[]> {
  // 環境変数が設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  
  try {
    const data = await sanityClient.fetch(allServiceCategoriesQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch service categories:', error);
    return [];
  }
}


interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Services({ params }: PageProps) {
  const { lang } = await params;
  const categories = await getServiceCategories();
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
          
          {/* ハードコーディングされた多言語対応サービスを優先表示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent[lang].categories.map((category) => (
              <div key={category.id} className="h-full">
                <Link
                  href={`${basePath}/services/${category.slug}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  {/* カテゴリー画像 */}
                  <div className={`relative h-48 rounded-t-xl overflow-hidden ${category.colorClass.bg} flex items-center justify-center`}>
                    <svg className={`w-16 h-16 ${category.colorClass.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>

                  {/* カテゴリー情報 */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    </div>

                    {/* サービス例（後で追加予定） */}
                    <div className="mt-auto">
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 font-medium mb-2">
                          {lang === 'ja' ? 'サービス例' : 'Service Examples'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {lang === 'ja' ? '詳細は各ページをご確認ください' : 'Please check each page for details'}
                        </p>
                      </div>

                      {/* 詳しく見るボタン */}
                      <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                        <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Sanityデータのデバッグ表示（開発用） */}
          {categories.length > 0 && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Debug: Sanity Data Available</h3>
              <DebugCategoryCard categories={categories} />
            </div>
          )}
        </div>
      </section>


      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}