// ファイル名: app/(public)/services/[category]/page.tsx

import { Metadata } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { categoryPageQuery, categorySlugsQuery } from '@/lib/queries';
import { ServiceCategory } from '@/lib/types';
import Header from '@/components/Header';
import { FaqAccordion } from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBanner from '@/components/CtaBanner';
import ServiceTable from '@/components/ServiceTable';
import Script from 'next/script';
import UnifiedFooter from '@/components/UnifiedFooter';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  // ビルド時はSanityクエリをスキップ
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  
  const slugs = await sanityClient.fetch(categorySlugsQuery);
  return slugs.map((slug: { slug: string }) => ({ category: slug.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  
  // 環境変数チェック
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return {
      title: `${category} | サービスカテゴリ`,
    };
  }

  const data: ServiceCategory = await sanityClient.fetch(categoryPageQuery, {
    slug: category,
  });
  
  if (!data) {
    return {
      title: `${category} | サービスカテゴリ`,
    };
  }

  return {
    title: data.metaTitle || `${data.title} | フォルティア行政書士事務所`,
    description: data.metaDescription || data.catchphrase,
    openGraph: {
      title: data.metaTitle || data.title,
      description: data.metaDescription || data.catchphrase,
      images: data.ogImageUrl ? [data.ogImageUrl] : [],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  // Sanityが設定されていない場合のフォールバック
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-gray-600">Sanityの設定が必要です。環境変数を設定してください。</p>
        </div>
      </div>
    );
  }
  
  const data: ServiceCategory = await sanityClient.fetch(categoryPageQuery, {
    slug: category,
  });

  if (!data) return <div>ページが見つかりません</div>;

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
    description: data.catchphrase || data.metaDescription || '',
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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
          { name: 'ホーム', href: '/' },
          { name: 'サービス案内', href: '/services' },
          { name: data.title, href: `/services/${category}` },
        ]}
      />

      {/* Hero セクション */}
      <section>
        <h1 className="text-3xl font-bold mb-4">
          【専門家がサポート】{data.title}のご案内
        </h1>
      </section>

      {/* 中項目テーブル */}
      {data.services && data.services.length > 0 && (
        <ServiceTable services={data.services} categorySlug={data.slug} />
      )}

      {/* FAQ アコーディオン */}
      {data.faq && data.faq.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">よくあるご質問</h2>
          <FaqAccordion faqs={data.faq} />
        </section>
      )}

      {/* CTA */}
      <CtaBanner categoryTitle={data.title} />
      </div>

      <UnifiedFooter />
    </div>
  );
}