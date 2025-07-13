// components/RelatedServices.tsx

import Link from 'next/link';

type RelatedService = {
  _id: string;
  title: string;
  slug: { current: string };
  overview: string;
  target: string;
  price: string;
  tag: string[];
};

type Props = {
  services: RelatedService[];
  currentCategorySlug: string;
};

export default function RelatedServices({ services, currentCategorySlug }: Props) {
  if (!services || services.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4">関連サービス</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link
            key={service._id}
            href={`/services/${currentCategorySlug}/${service.slug.current}`}
            className="block border border-gray-200 p-4 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{service.overview}</p>
            <p className="text-sm text-gray-500 mt-2">対象: {service.target}</p>
            <p className="text-sm text-blue-600 mt-1">料金目安: {service.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}