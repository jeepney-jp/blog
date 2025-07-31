import Link from 'next/link';
import { ServiceDetailLite } from '@/lib/types';

interface ServiceTableProps {
  services: ServiceDetailLite[];
  categorySlug: string;
}

export default function ServiceTable({ services, categorySlug }: ServiceTableProps) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">サービス一覧</h2>
      
      {/* デスクトップ用テーブル表示 */}
      <div className="hidden md:block bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                サービス名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5">
                サービス概要
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

      {/* モバイル用カード表示 */}
      <div className="md:hidden space-y-4">
        {services.map((service) => (
          <div key={service._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="mb-3">
              <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-500 mb-1">サービス概要</span>
                <span className="text-sm text-gray-700">{service.target || '詳細をご確認ください'}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-500 mb-1">料金目安</span>
                <span className="text-sm font-medium text-gray-900">
                  {service.priceMin && service.priceMax
                    ? `¥${service.priceMin.toLocaleString()}〜¥${service.priceMax.toLocaleString()}`
                    : service.priceMin
                    ? `¥${service.priceMin.toLocaleString()}〜`
                    : service.priceNote ?? '個別見積り'}
                </span>
              </div>
            </div>
            
            <Link
              href={`/services/${categorySlug}/${service.slug}`}
              className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              詳細を見る
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}