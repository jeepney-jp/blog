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
import Image from 'next/image';
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
          
          {/* テスト：外国人関連業務のみハードコード、他はSanity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 外国人関連業務：ハードコード版 */}
            <div className="h-full">
              <Link
                href={`${basePath}/services/foreign`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                {/* カテゴリー画像 */}
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  {/* TODO: 実際のSanity画像URLを確認して同じ画像を使用する */}
                  <Image
                    src="/service-icons/foreign-resident.png"
                    alt={lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
                    className="object-cover"
                    fill
                    priority={false}
                    unoptimized
                  />
                </div>

                {/* カテゴリー情報 */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {lang === 'ja' 
                        ? '外国人を受け入れる企業や日本で暮らす方のために、在留や身分に関わる手続きを幅広くサポートします。' 
                        : 'We provide comprehensive support for residence and status procedures for companies accepting foreign workers and individuals living in Japan.'}
                    </p>
                  </div>

                  {/* 中項目プレビュー */}
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        {lang === 'ja' ? 'サービス例' : 'Service Examples'}
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '特定技能ビザ' : 'Specified Skills Visa'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '高度人材ビザ' : 'Highly Skilled Professional Visa'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '技術・人文知識・国際業務ビザ' : 'Engineer/Specialist in Humanities/International Services Visa'}</span>
                        </li>
                      </ul>
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
            
            {/* 他のカテゴリー：Sanity版 */}
            {categories.filter(cat => cat.slug !== 'foreign').map((category) => (
              <div key={category._id} className="h-full">
                <CategoryCard category={category} lang={lang} />
              </div>
            ))}
          </div>
          
          {/* デバッグ情報 */}
          {categories.length > 0 && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Debug: Available Sanity Categories</h3>
              <DebugCategoryCard categories={categories} />
            </div>
          )}

          {/* 元のフォールバック（現在は使用されない） */}
          {false && (
            /* 多言語対応のハードコーディングされたサービスを表示 */
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
          )}
        </div>
      </section>


      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}