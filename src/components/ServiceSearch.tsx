'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ServiceItem {
  _id: string;
  title: string;
  slug: string;
  categorySlug: string;
  tags?: string[];
}

interface ServiceSearchProps {
  services: ServiceItem[];
}

export default function ServiceSearch({ services }: ServiceSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<ServiceItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // 検索処理
  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredServices([]);
      setIsOpen(false);
      return;
    }

    const results = services.filter(service => {
      const term = searchTerm.toLowerCase();
      // タイトルでの検索
      if (service.title.toLowerCase().includes(term)) return true;
      // タグでの検索
      if (service.tags?.some(tag => tag.toLowerCase().includes(term))) return true;
      return false;
    });

    setFilteredServices(results); // 全件表示
    setIsOpen(results.length > 0);
  }, [searchTerm, services]);

  // クリック外で閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto" ref={searchRef}>
      <div className="relative">
        {/* 検索入力 */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="サービス名を入力（例：建設業許可、ビザ申請）"
            className="w-full px-4 py-3 pl-12 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* 検索結果ドロップダウン */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {filteredServices.length > 0 && (
              <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                {filteredServices.length}件のサービスが見つかりました
              </div>
            )}
            <ul className="py-2">
              {filteredServices.map((service) => (
                <li key={service._id}>
                  <Link
                    href={`/services/${service.categorySlug}/${service.slug}`}
                    onClick={() => {
                      setSearchTerm('');
                      setIsOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{service.title}</div>
                    {service.tags && service.tags.length > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        {service.tags.slice(0, 3).join('、')}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 検索ガイダンス */}
      <p className="mt-2 text-sm text-gray-600 text-center">
        キーワードの一部を入力すると、関連するサービスが表示されます
      </p>
    </div>
  );
}