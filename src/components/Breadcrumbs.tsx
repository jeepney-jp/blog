import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  includeJsonLd?: boolean;
}

export default function Breadcrumbs({ items, includeJsonLd = true }: BreadcrumbsProps) {
  // JSON-LD構造化データの生成
  const jsonLd = includeJsonLd ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}` }),
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
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">{'>'}</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}