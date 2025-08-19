import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityClient } from '@/lib/sanity.client';
import { 
  serviceDetailQuery, 
  allServiceDetailSlugsQuery,
  relatedServicesByTagQuery,
  relatedServicesQuery,
  testimonialsByServiceQuery,
  newsByCategoryQuery
} from '@/lib/queries';
import { ServiceDetail } from '@/lib/types';
import Header from '@/components/Header';
import { Locale } from '@/lib/i18n/types';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import RelatedServices from '@/components/RelatedServices';
import NewCTASection from '@/components/NewCTASection';
import Script from 'next/script';
import { generateTocFromContent } from '@/utils/generateToc';
import TableOfContents from '@/components/TableOfContents';
import PortableTextWithToc from '@/components/PortableTextWithToc';
import UnifiedFooter from '@/components/UnifiedFooter';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import SimpleCTA from '@/components/SimpleCTA';

type Props = {
  params: Promise<{ category: string; slug: string; lang: Locale }>;
};

// ISR設定
export const revalidate = 86400;

// 静的パラメータの生成
export async function generateStaticParams() {
  // 環境変数が設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }

  try {
    const services = await sanityClient.fetch(allServiceDetailSlugsQuery);
    return services.map((service: { slug: string; categorySlug: string }) => ({
      category: service.categorySlug,
      slug: service.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

// メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // 環境変数チェック
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return {};
  }

  const data = await sanityClient.fetch(serviceDetailQuery, { slug });
  
  if (!data) return {};

  return {
    title: data.metaTitle || `${data.title} | フォルティア行政書士事務所`,
    description: data.metaDescription || data.overview,
    openGraph: {
      title: data.metaTitle || data.title,
      description: data.metaDescription || data.overview,
      images: data.ogImageUrl ? [data.ogImageUrl] : [],
    },
  };
}

// 関連サービスの型定義
interface RelatedService {
  _id: string;
  title: string;
  slug: string;
  overview?: string;
  categorySlug: string;
}

// 関連サービスの取得
async function getRelatedServices(currentServiceId: string, tags: string[]): Promise<RelatedService[]> {
  if (!tags || tags.length === 0) return [];
  
  try {
    return await sanityClient.fetch(relatedServicesByTagQuery, {
      currentServiceId,
      tags,
    });
  } catch (error) {
    console.error('Failed to fetch related services:', error);
    return [];
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category, slug, lang } = await params;
  
  // Sanityが設定されていない場合のフォールバック
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header lang={lang} />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-gray-600">Sanityの設定が必要です。環境変数を設定してください。</p>
        </div>
      </div>
    );
  }

  const data: ServiceDetail = await sanityClient.fetch(serviceDetailQuery, { slug });

  if (!data) {
    notFound();
  }

  // 関連サービスの取得（新しいrelated フィールドを優先）
  const relatedServices = data.related ? [] : await getRelatedServices(data._id, data.tag || []);
  
  // relatedServicesQueryを使用した関連サービス取得
  const relatedServicesByCategory = data.parentCategoryRef && data.tag && data.tag.length > 0 
    ? await sanityClient.fetch(relatedServicesQuery, {
        tags: data.tag,
        currentSlug: slug,
        parentCategoryId: data.parentCategoryRef,
      })
    : [];

  // お客様の声を取得（サービス名で完全一致）
  const testimonials = await sanityClient.fetch(testimonialsByServiceQuery, {
    serviceName: data.title,
  });

  // お役立ち記事を取得（カテゴリ名で完全一致）
  const newsArticles = await sanityClient.fetch(newsByCategoryQuery, {
    categoryName: data.title,
  });

  // FAQ構造化データの生成
  const faqStructuredData = data.faq && data.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  // Service構造化データの生成
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.overview || data.metaDescription || '',
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
    ...(data.priceMin || data.priceMax || data.price ? {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'JPY',
        ...(data.priceMin && data.priceMax ? {
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            minPrice: data.priceMin,
            maxPrice: data.priceMax,
            priceCurrency: 'JPY'
          }
        } : data.priceMin ? {
          price: data.priceMin,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            minPrice: data.priceMin,
            priceCurrency: 'JPY'
          }
        } : data.priceMax ? {
          price: data.priceMax,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            maxPrice: data.priceMax,
            priceCurrency: 'JPY'
          }
        } : {
          price: data.price || ''
        }),
        ...(data.priceNote ? {
          description: data.priceNote
        } : {})
      }
    } : {}),
    areaServed: ['東京都', '千葉県', '埼玉県', '神奈川県']
  };

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

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* パンくず */}
        <Breadcrumbs
          segments={[
            { name: 'ホーム', href: `/${lang}` },
            { name: 'サービス案内', href: `/${lang}/services` },
            { name: data.parentCategory?.title || category, href: `/${lang}/services/${category}` },
            { name: data.title, href: `/${lang}/services/${category}/${slug}` },
          ]}
        />

        {/* ページタイトル */}
        <section aria-label="ページタイトル">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004080] mb-6 sm:mb-8">
            {data.title}
          </h1>
        </section>

        {/* 本文と目次 */}
        {data.content && data.content.length > 0 && (
          <div className="lg:flex lg:gap-8">
            {/* 本文 */}
            <article className="flex-1">
              {data.showToc && data.content && (() => {
                const toc = generateTocFromContent(data.content);
                const headingIndexRef = { current: 0 };
                return (
                  <>
                    {/* モバイル用目次 */}
                    {toc.length > 0 && (
                      <div className="lg:hidden mb-8">
                        <TableOfContents 
                          items={toc} 
                          title={data.tocTitle || '目次'}
                        />
                      </div>
                    )}
                    <div className="prose prose-lg max-w-none">
                      <PortableTextWithToc 
                        content={data.content} 
                        headingIndexRef={headingIndexRef} 
                      />
                    </div>
                  </>
                );
              })()}
              {!data.showToc && (
                <div className="prose prose-lg max-w-none">
                  <PortableTextWithToc 
                    content={data.content} 
                    headingIndexRef={{ current: 0 }} 
                  />
                </div>
              )}
            </article>

            {/* デスクトップ用サイドバー目次 */}
            {data.showToc && data.content && (() => {
              const toc = generateTocFromContent(data.content);
              return toc.length > 0 ? (
                <aside className="hidden lg:block lg:w-80 lg:sticky lg:top-24 lg:h-fit">
                  <TableOfContents 
                    items={toc} 
                    title={data.tocTitle || '目次'}
                  />
                </aside>
              ) : null;
            })()}
          </div>
        )}

        {/* CTA 1: サービス基本情報後 */}
        <SimpleCTA 
          serviceName={data.title} 
          variant="primary"
          className="my-12 py-8 bg-gray-50 rounded-lg"
        />

        {/* よくある質問 */}
        {data.faq && data.faq.length > 0 && (
          <section aria-label="よくある質問">
            <h2 className="text-xl sm:text-2xl font-bold text-[#004080] mb-4 sm:mb-6">
              よくある質問
            </h2>
            <FaqAccordion faqs={data.faq} />
          </section>
        )}

        {/* お客様の声 */}
        <TestimonialsSection 
          testimonials={testimonials} 
          serviceName={data.title}
        />

        {/* CTA 2: お客様の声後 */}
        {testimonials.length > 0 && (
          <SimpleCTA 
            serviceName={data.title} 
            variant="secondary"
            className="my-12"
          />
        )}

        {/* お役立ち記事 */}
        <NewsSection
          articles={newsArticles}
          serviceName={data.title}
        />

        {/* 関連サービス */}
        {data.related && data.related.length > 0 && (
          <section>
            <h2 className="text-lg sm:text-xl font-bold my-4 sm:my-6">関連サービス</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {data.related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${lang}/services/${item.parentCategory.slug}/${item.slug}`} className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.overview}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {/* relatedServicesQueryを使用した関連サービス */}
        {!data.related && relatedServicesByCategory.length > 0 && (
          <RelatedServices
            services={relatedServicesByCategory}
            currentCategorySlug={category}
            lang={lang}
          />
        )}
        
        {/* 既存の関連サービス（フォールバック） */}
        {!data.related && relatedServicesByCategory.length === 0 && relatedServices.length > 0 && (
          <section aria-label="関連サービス" className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#004080] mb-2">
              このようなサービスもご覧になっています
            </h2>
            <p className="text-gray-600 mb-6">関連する他のサービスもぜひご確認ください</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service._id}
                  href={`/${lang}/services/${service.categorySlug}/${service.slug}`}
                  className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-[#004080] transition-colors">
                    {service.title}
                  </h3>
                  {service.overview && (
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {service.overview}
                    </p>
                  )}
                  <span className="inline-flex items-center text-[#004080] group-hover:text-[#003366] font-medium">
                    詳しく見る
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* CTA */}
      <NewCTASection serviceName={data.title} lang={lang} />

      <UnifiedFooter />
    </div>
  );
}