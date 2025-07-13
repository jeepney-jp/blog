// ファイル名: app/(public)/services/[category]/page.tsx

import { sanityClient } from '@/lib/sanity.client';
import { categoryPageQuery, categorySlugsQuery } from '@/lib/queries';
import { ServiceCategory } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBanner from '@/components/CtaBanner';
import ServiceTable from '@/components/ServiceTable';

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

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return {
    title: `${category} | サービスカテゴリ`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  // Sanityが設定されていない場合のフォールバック
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-gray-600">Sanityの設定が必要です。環境変数を設定してください。</p>
      </div>
    );
  }
  
  const data: ServiceCategory = await sanityClient.fetch(categoryPageQuery, {
    slug: category,
  });

  if (!data) return <div>ページが見つかりません</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* パンくず */}
      <Breadcrumbs
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'サービス案内', href: '/services' },
          { label: data.title },
        ]}
      />

      {/* Hero セクション */}
      <section>
        <h1 className="text-3xl font-bold mb-4">
          【専門家がサポート】{data.title}のご案内
        </h1>
        {data.expertiseDescription && (
          <PortableText value={data.expertiseDescription} />
        )}
      </section>

      {/* 中項目テーブル */}
      {data.services && data.services.length > 0 && (
        <ServiceTable services={data.services} categorySlug={data.slug} />
      )}

      {/* FAQ アコーディオン */}
      {data.faq && data.faq.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">よくあるご質問</h2>
          <FaqAccordion items={data.faq} />
        </section>
      )}

      {/* 実績紹介バナー */}
      <div className="text-center py-8 bg-gray-100 rounded-xl">
        <a
          href={`/cases?category=${data.slug}`}
          className="text-blue-700 hover:underline font-medium"
        >
          {data.title}に関する実績を見る ＞
        </a>
      </div>

      {/* CTA */}
      <CtaBanner
        text={`${data.title}について無料で相談する`}
        href={`/contact?service=${data.slug}`}
      />
    </div>
  );
}