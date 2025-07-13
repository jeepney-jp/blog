import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbSegment {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
}

export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  // SEO構造化データの生成
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.name,
      item: `${process.env.NEXT_PUBLIC_BASE_URL || ''}${segment.href}`,
    })),
  };

  return (
    <>
      {/* 構造化データ */}
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* パンくずリストUI */}
      <nav aria-label="パンくずリスト" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li key={segment.href} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-900 font-medium">{segment.name}</span>
                ) : (
                  <>
                    <Link 
                      href={segment.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {segment.name}
                    </Link>
                    <span className="mx-2 text-gray-400">＞</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}