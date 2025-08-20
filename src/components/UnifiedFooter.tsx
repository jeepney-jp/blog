"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { sanityClient } from '@/lib/sanity.client';
import { serviceCategoriesWithSubcategoriesQuery } from '@/lib/queries';

// サービスカテゴリーの型定義
interface ServiceCategory {
  _id: string;
  title: string;
  slug: string;
  subcategories?: {
    _id: string;
    title: string;
    slug: string;
  }[];
}

export default function UnifiedFooter() {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await sanityClient.fetch(serviceCategoriesWithSubcategoriesQuery);
        setServiceCategories(data || []);
      } catch (error) {
        console.error('Failed to fetch service categories for footer:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 第1列: 事務所情報 */}
          <div>
            <Link href="/">
              <h3 className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer">
                <span className="text-white">フォルティア</span>
                <span className="text-white ml-1">行政書士事務所</span>
              </h3>
            </Link>
            <div className="mb-4">
              <p className="text-gray-400">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">営業時間</h4>
              <p className="text-gray-400 text-sm">
                平日: 9:00 - 18:00<br />
                土曜: 9:00 - 17:00<br />
                日祝: 休業
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">主要業務エリア</h4>
              <p className="text-gray-400 text-sm">
                東京都、千葉県、埼玉県、神奈川県<br />
                ※その他地域もご相談ください
              </p>
            </div>
          </div>

          {/* 第2列: サービス */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <div className="md:columns-2 md:gap-x-6 space-y-2">
              {loading ? (
                // ローディング中の表示
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : serviceCategories.length > 0 ? (
                // Sanityデータがある場合
                serviceCategories.map((category) => (
                  <div key={category._id} className="mb-2 break-inside-avoid">
                    <Link 
                      href={`/services/${category.slug}`}
                      className="text-gray-300 hover:text-white font-medium transition-colors block"
                    >
                      {category.title}
                    </Link>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <ul className="ml-4 space-y-1 mt-1">
                        {category.subcategories.map((sub) => (
                          <li key={sub._id}>
                            <Link
                              href={`/services/${category.slug}/${sub.slug}`}
                              className="text-gray-400 hover:text-gray-300 text-sm transition-colors block"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                // フォールバック（Sanityデータがない場合）
                <>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    外国人関連業務
                  </Link>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    建設・宅建業関連
                  </Link>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    法人設立業務
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* 第3列: その他のリンク */}
          <div>
            <h3 className="text-lg font-semibold mb-4">その他</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  事務所案内
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 フォルティア行政書士事務所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}