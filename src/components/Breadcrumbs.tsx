import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbSegment {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
  includeJsonLd?: boolean;
}

export default function Breadcrumbs({ segments, includeJsonLd = true }: BreadcrumbsProps) {
  // JSON-LD構造化データの生成
  const jsonLd = includeJsonLd ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${segment.href}`,
    })),
  } : null;

  return (
    <>
      {jsonLd && (
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <nav aria-label="パンくずリスト" className="text-sm mb-6">
        <ol className="flex flex-wrap items-center">
          {segments.map((segment, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">{'>'}</span>}
              {index < segments.length - 1 ? (
                <Link
                  href={segment.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {segment.name}
                </Link>
              ) : (
                <span className="text-gray-700">{segment.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}