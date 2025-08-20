import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery, allServicesForSearchQuery } from '@/lib/queries';
import { ServiceCategory } from '@/lib/types';
import CategoryCard from '@/components/CategoryCard';
import DebugCategoryCard from '@/components/DebugCategoryCard';
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import ServiceSearch from '@/components/ServiceSearch';
import { Locale } from '@/lib/i18n/types';
import Link from 'next/link';

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

// Sanityから検索用のサービス一覧を取得
async function getServicesForSearch() {
  // 環境変数が設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  
  try {
    const data = await sanityClient.fetch(allServicesForSearchQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch services for search:', error);
    return [];
  }
}

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Services({ params }: PageProps) {
  const { lang } = await params;
  const categories = await getServiceCategories();
  const servicesForSearch = await getServicesForSearch();
  const basePath = `/${lang}`;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title="サービス総合案内"
        description="お客様のニーズに合わせた幅広いサービスを提供しています"
      />

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: 'ホーム', href: basePath },
              { name: 'サービス総合案内', href: `${basePath}/services` }
            ]}
          />
          
          {/* サービス検索 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">サービス名から探す</h2>
            <ServiceSearch services={servicesForSearch} />
          </div>
          {/* カテゴリー一覧 */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">カテゴリーから探す</h2>
            <p className="text-base text-gray-600 text-center mb-8">業種や目的からお探しください</p>
          </div>
          
          {/* Sanityからのデータがある場合は動的に表示 */}
          {categories.length > 0 ? (
            <>
              <DebugCategoryCard categories={categories} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                  <div key={category._id} className="h-full">
                    <CategoryCard category={category} lang={lang} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Sanityが設定されていない場合は既存のハードコーディングされたサービスを表示 */
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* 外国人関連業務 */}
            <Link href={`${basePath}/services/foreign`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">外国人関連業務</h3>
            </Link>

            {/* 建設・宅地建物取引業関連業務 */}
            <Link href={`${basePath}/services/construction`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">建設・宅建業関連</h3>
            </Link>

            {/* 自動車関連業務 */}
            <Link href={`${basePath}/services/automotive`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">自動車関連業務</h3>
            </Link>

            {/* 飲食・風俗営業関連業務 */}
            <Link href={`${basePath}/services/food-entertainment`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">飲食・風俗営業</h3>
            </Link>

            {/* 廃棄物処理業許可関連業務 */}
            <Link href={`${basePath}/services/waste-management`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">廃棄物処理業許可</h3>
            </Link>

            {/* 旅行・旅館業関連業務 */}
            <Link href={`${basePath}/services/travel-hospitality`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">旅行・旅館業</h3>
            </Link>

            {/* 法人設立業務 */}
            <Link href={`${basePath}/services/corporate`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">法人設立業務</h3>
            </Link>

            {/* 営業許可 */}
            <Link href={`${basePath}/services/business-license`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">営業許可</h3>
            </Link>

            {/* 土地関連業務 */}
            <Link href={`${basePath}/services/land`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">土地関連業務</h3>
            </Link>

            {/* 権利義務・事実証明業務 */}
            <Link href={`${basePath}/services/legal-documentation`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">権利義務・事実証明</h3>
            </Link>

            {/* その他の業務 */}
            <Link href={`${basePath}/services/other`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">その他の業務</h3>
            </Link>

          </div>
          )}
        </div>
      </section>


      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}