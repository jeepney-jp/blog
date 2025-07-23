import Link from 'next/link';
import { ServiceDetailLite } from '@/lib/types';

interface ServiceTableProps {
  services: ServiceDetailLite[];
  categorySlug: string;
}

export default function ServiceTable({ services, categorySlug }: ServiceTableProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">サービス一覧</h2>
      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5">
                サービス名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                対象者
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                料金目安
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/10">
                詳細
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{service.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{service.overview}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="max-w-xs">
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
                <td className="px-6 py-4 text-sm font-medium">
                  <Link
                    href={`/services/${categorySlug}/${service.slug}`}
                    className="text-blue-600 hover:text-blue-900 whitespace-nowrap"
                  >
                    詳細を見る →
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