import Link from 'next/link';
import { ServiceDetailLite } from '@/lib/types';

interface ServiceTableProps {
  services: ServiceDetailLite[];
  categorySlug: string;
  lang?: string;
}

export default function ServiceTable({ services, categorySlug, lang }: ServiceTableProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{lang === 'en' ? 'Service List' : 'サービス一覧'}</h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {lang === 'en' ? 'Service Name' : 'サービス名'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {lang === 'en' ? 'Target' : '対象者'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {lang === 'en' ? 'Price Estimate' : '料金目安'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {lang === 'en' ? 'Details' : '詳細'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{service.title}</div>
                  <div className="text-sm text-gray-500">{service.overview}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service.target}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={lang ? `/${lang}/services/${categorySlug}/${service.slug}` : `/services/${categorySlug}/${service.slug}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {lang === 'en' ? 'View Details →' : '詳細を見る →'}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}