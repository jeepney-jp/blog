import Link from "next/link";
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

// Sanityからサービスカテゴリーを取得
async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const data = await sanityClient.fetch(serviceCategoriesWithSubcategoriesQuery);
    return data || [];
  } catch (error) {
    console.error('Failed to fetch service categories for footer:', error);
    return [];
  }
}

export default async function Footer() {
  const serviceCategories = await getServiceCategories();
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {serviceCategories.length > 0 ? (
                serviceCategories.map((category) => (
                  <div key={category._id}>
                    <Link 
                      href={`/services/${category.slug}`}
                      className="text-gray-300 hover:text-white font-medium transition-colors block mb-2"
                    >
                      {category.title}
                    </Link>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <ul className="ml-4 space-y-1 mb-3">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    外国人関連業務
                  </Link>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    建設・宅建業関連
                  </Link>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors block">
                    法人設立業務
                  </Link>
                </div>
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
                <Link href="/lawyers" className="text-gray-400 hover:text-white transition-colors">
                  弁護士紹介
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  お客様の声
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  お役立ち情報
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