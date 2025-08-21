// ファイル名: app/(public)/services/[category]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { FaqAccordion } from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewCTASection from '@/components/NewCTASection';
import Script from 'next/script';
import UnifiedFooter from '@/components/UnifiedFooter';
import { Locale } from '@/lib/i18n/types';
import { categoryPagesContent } from '@/data/category-pages-content';
import { servicesContent } from '@/data/services-content';

type Props = {
  params: Promise<{ category: string; lang: Locale }>;
};

export async function generateStaticParams() {
  // ハードコーディングされたカテゴリーからスタティックパラムを生成 - Sanity依存なし
  return servicesContent.ja.categories.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, lang } = await params;
  
  // ハードコーディングデータのみを使用 - Sanity依存なし
  const hardcodedData = categoryPagesContent[lang]?.[category];
  if (hardcodedData) {
    return {
      title: hardcodedData.metaTitle,
      description: hardcodedData.metaDescription,
      openGraph: {
        title: hardcodedData.metaTitle,
        description: hardcodedData.metaDescription,
      },
    };
  }

  // ハードコーディングデータがない場合のフォールバック
  return {
    title: `${category} | サービスカテゴリ`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category, lang } = await params;
  
  // すべてのカテゴリーをハードコード化、Sanityフォールバックを削除
  const hardcodedCategories = ['foreign', 'construction', 'automotive', 'food-entertainment', 'waste-management', 'travel-hospitality', 'corporate', 'business-license', 'land', 'legal-documentation', 'medical-care', 'other'];
  
  if (hardcodedCategories.includes(category)) {
    // 全カテゴリー：完全ハードコード表示
    const hardcodedData = categoryPagesContent[lang]?.[category];
    
    if (!hardcodedData) {
      notFound();
    }
    // ハードコーディングデータを使用
    const serviceStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: hardcodedData.title,
      description: hardcodedData.catchphrase,
      provider: {
        '@type': 'LegalService',
        name: 'フォルティア行政書士事務所',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '茂原579',
          addressLocality: '茂原市',
          addressRegion: '千葉県',
          postalCode: '297-0026',
          addressCountry: 'JP'
        }
      },
      areaServed: ['東京都', '千葉県', '埼玉県', '神奈川県']
    };

    const faqStructuredData = hardcodedData.faq.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: hardcodedData.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    } : null;

    return (
      <div className="min-h-screen bg-gray-50">
        <Header lang={lang} />
        
        {/* 構造化データ */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([
              ...(faqStructuredData ? [faqStructuredData] : []),
              serviceStructuredData
            ])
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          {/* パンくず */}
          <Breadcrumbs
            segments={[
              { name: hardcodedData.breadcrumbs.home, href: `/${lang}` },
              { name: hardcodedData.breadcrumbs.services, href: `/${lang}/services` },
              { name: hardcodedData.title, href: `/${lang}/services/${category}` },
            ]}
          />

          {/* Hero セクション */}
          <section>
            <h1 className="text-3xl font-bold mb-4">
              {hardcodedData.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {hardcodedData.catchphrase}
            </p>
          </section>

          {/* サービス一覧テーブル */}
          {hardcodedData.services.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">サービス一覧</h2>
              
              {/* デスクトップ用テーブル表示 */}
              <div className="hidden md:block bg-white shadow-sm rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                        {hardcodedData.tableHeaders.serviceName}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                        {hardcodedData.tableHeaders.serviceOverview}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                        {hardcodedData.tableHeaders.pricingGuide}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {hardcodedData.services.map((service) => (
                      <tr key={service.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="max-w-md">
                            {service.target}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="whitespace-nowrap">
                            {service.priceMin && service.priceMax
                              ? `¥${service.priceMin.toLocaleString()}〜¥${service.priceMax.toLocaleString()}`
                              : service.priceMin
                              ? `¥${service.priceMin.toLocaleString()}〜`
                              : service.priceNote ?? '個別見積り'}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* モバイル用カード表示 */}
              <div className="md:hidden space-y-4">
                {hardcodedData.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="mb-3">
                      <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-gray-500 mb-1">{hardcodedData.tableHeaders.serviceOverview}</span>
                        <span className="text-sm text-gray-700">{service.target}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-gray-500 mb-1">{hardcodedData.tableHeaders.pricingGuide}</span>
                        <span className="text-sm font-medium text-gray-900">
                          {service.priceMin && service.priceMax
                            ? `¥${service.priceMin.toLocaleString()}〜¥${service.priceMax.toLocaleString()}`
                            : service.priceMin
                            ? `¥${service.priceMin.toLocaleString()}〜`
                            : service.priceNote ?? '個別見積り'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ アコーディオン */}
          {hardcodedData.faq.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">{hardcodedData.faqTitle}</h2>
              <FaqAccordion faqs={hardcodedData.faq} />
            </section>
          )}
        </div>

        {/* CTA */}
        <NewCTASection serviceName={hardcodedData.title} lang={lang} />

        <UnifiedFooter lang={lang} />
      </div>
    );
  }

  // ハードコーディングデータがない場合は404
  notFound();
}