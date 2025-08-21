import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from '@/lib/sanity.client';
import { allServiceCategoriesQuery } from '@/lib/queries';
import { ServiceCategory } from '@/lib/types';
import CategoryCard from '@/components/CategoryCard';
import DebugCategoryCard from '@/components/DebugCategoryCard';
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import { Locale } from '@/lib/i18n/types';
import Link from 'next/link';
import Image from 'next/image';
import { servicesContent } from '@/data/services-content';

// ISRの設定：1日ごとに再生成
export const revalidate = 86400;

// Sanityからカテゴリ一覧を取得
async function getServiceCategories(): Promise<ServiceCategory[]> {
  // 環境変数が設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return [];
  }
  
  try {
    const data = await sanityClient.fetch(allServiceCategoriesQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch service categories:', error);
    return [];
  }
}


interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Services({ params }: PageProps) {
  const { lang } = await params;
  const categories = await getServiceCategories();
  const basePath = `/${lang}`;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={servicesContent[lang].title}
        description={servicesContent[lang].description}
      />

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: lang === 'ja' ? 'ホーム' : 'Home', href: basePath },
              { name: servicesContent[lang].title, href: `${basePath}/services` }
            ]}
          />
          
          {/* カテゴリー一覧 */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">{servicesContent[lang].searchTitle}</h2>
            <p className="text-base text-gray-600 text-center mb-8">{servicesContent[lang].searchDescription}</p>
          </div>
          
          {/* テスト：外国人関連業務のみハードコード、他はSanity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 外国人関連業務：ハードコード版 */}
            <div className="h-full">
              <Link
                href={`${basePath}/services/foreign`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                {/* カテゴリー画像 */}
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  {/* TODO: 実際のSanity画像URLを確認して同じ画像を使用する */}
                  <Image
                    src="/service-icons/foreign-resident.png"
                    alt={lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
                    className="object-cover"
                    fill
                    priority={false}
                    unoptimized
                  />
                </div>

                {/* カテゴリー情報 */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === 'ja' ? '外国人関連業務' : 'Foreign Resident Services'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {lang === 'ja' 
                        ? '外国人を受け入れる企業や日本で暮らす方のために、在留や身分に関わる手続きを幅広くサポートします。' 
                        : 'We provide comprehensive support for residence and status procedures for companies accepting foreign workers and individuals living in Japan.'}
                    </p>
                  </div>

                  {/* 中項目プレビュー */}
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        {lang === 'ja' ? 'サービス例' : 'Service Examples'}
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '特定技能ビザ' : 'Specified Skills Visa'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '高度人材ビザ' : 'Highly Skilled Professional Visa'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '技術・人文知識・国際業務ビザ' : 'Engineer/Specialist in Humanities/International Services Visa'}</span>
                        </li>
                      </ul>
                    </div>

                    {/* 詳しく見るボタン */}
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* 建設・宅地建物取引関連業務：ハードコード版 */}
            <div className="h-full">
              <Link
                href={`${basePath}/services/construction`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                {/* カテゴリー画像 */}
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  {/* TODO: 実際のSanity画像URLを確認して同じ画像を使用する */}
                  <Image
                    src="/service-icons/construction-realestate.png"
                    alt={lang === 'ja' ? '建設・宅建業関連' : 'Construction & Real Estate'}
                    className="object-cover"
                    fill
                    priority={false}
                    unoptimized
                  />
                </div>

                {/* カテゴリー情報 */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === 'ja' ? '建設・宅建業関連' : 'Construction & Real Estate'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {lang === 'ja' 
                        ? '建設業や不動産業を営む事業者様のために、許可申請から更新手続きまで幅広くサポートいたします。' 
                        : 'We provide comprehensive support for construction and real estate businesses, from permit applications to renewal procedures.'}
                    </p>
                  </div>

                  {/* 中項目プレビュー */}
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        {lang === 'ja' ? 'サービス例' : 'Service Examples'}
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '建設業許可申請' : 'Construction Business License Application'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '宅地建物取引業免許申請' : 'Real Estate License Application'}</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-[#004080] mr-2">・</span>
                          <span>{lang === 'ja' ? '経営事項審査申請' : 'Management Evaluation Application'}</span>
                        </li>
                      </ul>
                    </div>

                    {/* 詳しく見るボタン */}
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 自動車関連業務：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/automotive`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/automotive.png" alt={lang === 'ja' ? '自動車関連業務' : 'Automotive Services'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '自動車関連業務' : 'Automotive Services'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '自動車の購入や移転に伴う各種手続きを迅速かつ確実にサポートいたします。' : 'We provide quick and reliable support for various procedures related to vehicle purchases and transfers.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '車庫証明申請' : 'Garage Certificate Application'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '自動車登録手続き' : 'Vehicle Registration Procedures'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '名義変更手続き' : 'Ownership Transfer Procedures'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 飲食・風俗営業：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/food-entertainment`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/food-entertainment.png" alt={lang === 'ja' ? '飲食・風俗営業' : 'Food & Entertainment'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '飲食・風俗営業' : 'Food & Entertainment'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '飲食店や娯楽施設の開業に必要な許可申請を専門的にサポートいたします。' : 'We provide specialized support for permit applications required for opening restaurants and entertainment facilities.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '飲食店営業許可' : 'Restaurant Business License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '風俗営業許可' : 'Entertainment Business License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '深夜酒類提供飲食店営業届出' : 'Late-night Alcohol Service Notification'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 廃棄物処理業許可：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/waste-management`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/waste-management.png" alt={lang === 'ja' ? '廃棄物処理業許可' : 'Waste Management'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '廃棄物処理業許可' : 'Waste Management'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '産業廃棄物の適正処理に必要な許可申請を確実にサポートいたします。' : 'We provide reliable support for permit applications required for proper industrial waste management.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '産業廃棄物収集運搬業許可' : 'Industrial Waste Collection/Transport License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '産業廃棄物処分業許可' : 'Industrial Waste Disposal License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '一般廃棄物処理業許可' : 'General Waste Management License'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 旅行・旅館業：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/travel-hospitality`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/travel-hospitality.png" alt={lang === 'ja' ? '旅行・旅館業' : 'Travel & Hospitality'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '旅行・旅館業' : 'Travel & Hospitality'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '旅行業や宿泊業の開業に必要な登録・許可申請をサポートいたします。' : 'We support registration and permit applications required for starting travel and accommodation businesses.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '旅行業登録' : 'Travel Agency Registration'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '旅館業許可' : 'Hotel Business License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '住宅宿泊事業届出' : 'Private Lodging Business Notification'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 法人設立業務：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/corporate`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/corporate.png" alt={lang === 'ja' ? '法人設立業務' : 'Corporate Establishment'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '法人設立業務' : 'Corporate Establishment'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '起業をお考えの方に、法人設立の手続きを総合的にサポートいたします。' : 'We provide comprehensive support for corporate establishment procedures for those considering starting a business.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '株式会社設立' : 'Stock Company Incorporation'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '合同会社設立' : 'LLC Incorporation'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '定款作成' : 'Articles of Incorporation Drafting'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 営業許可：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/business-license`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/business-license.png" alt={lang === 'ja' ? '営業許可' : 'Business Licenses'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '営業許可' : 'Business Licenses'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '様々な業種の営業許可申請を専門知識でサポートいたします。' : 'We support various business license applications with specialized knowledge across different industries.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '古物商許可申請' : 'Used Goods Dealer License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '酒類販売業免許' : 'Liquor Sales License'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '理美容所開設届' : 'Beauty Salon Opening Notification'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 土地関連業務：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/land`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/land.png" alt={lang === 'ja' ? '土地関連業務' : 'Land-related Services'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '土地関連業務' : 'Land-related Services'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '土地の有効活用や開発に関する許可申請をサポートいたします。' : 'We support permit applications for effective land use and development projects.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '農地転用許可' : 'Agricultural Land Conversion Permit'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '開発許可申請' : 'Development Permit Application'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '土地利用計画書作成' : 'Land Use Plan Preparation'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 権利義務・事実証明：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/legal-documentation`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/legal-documentation.png" alt={lang === 'ja' ? '権利義務・事実証明' : 'Legal Documentation'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '権利義務・事実証明' : 'Legal Documentation'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '契約書作成や法的文書の作成を専門的にサポートいたします。' : 'We provide specialized support for contract drafting and legal document preparation.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '契約書作成' : 'Contract Drafting'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '内容証明郵便' : 'Certified Mail'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '公正証書作成' : 'Notarial Document Preparation'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 医療・介護関連業務：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/medical-care`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/medical-care.png" alt={lang === 'ja' ? '医療・介護関連業務' : 'Medical & Care Services'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? '医療・介護関連業務' : 'Medical & Care Services'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '医療・介護事業の開設や運営に必要な許可申請をサポートいたします。' : 'We support permit applications required for establishing and operating medical and care services.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '医療法人設立' : 'Medical Corporation Establishment'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '介護事業所指定申請' : 'Care Facility Designation Application'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '診療所開設届' : 'Clinic Opening Notification'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* その他の業務：ハードコード版 */}
            <div className="h-full">
              <Link href={`${basePath}/services/other`} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image src="/service-icons/other.png" alt={lang === 'ja' ? 'その他の業務' : 'Other Services'} className="object-cover" fill priority={false} unoptimized />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'ja' ? 'その他の業務' : 'Other Services'}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lang === 'ja' ? '上記以外の各種許認可や手続きについてもお気軽にご相談ください。' : 'Please feel free to consult us about various permits and procedures not listed above.'}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">{lang === 'ja' ? 'サービス例' : 'Service Examples'}</p>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '各種許認可申請' : 'Various Permit Applications'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '手続き代行' : 'Administrative Procedures'}</span></li>
                        <li className="text-sm text-gray-700 flex items-start"><span className="text-[#004080] mr-2">・</span><span>{lang === 'ja' ? '相談・コンサルティング' : 'Consultation & Consulting'}</span></li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
                      <span>{lang === 'ja' ? '詳しく見る' : 'Learn More'}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 他のカテゴリー：Sanity版（比較用、最終的に削除予定） */}
            {categories.length > 0 && (
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="text-sm font-medium text-yellow-800 mb-2">⚠️ 比較用: 残りのSanityカード（最終的に削除予定）</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <div key={category._id} className="text-xs bg-white p-2 rounded border">
                      <strong>{category.title}</strong> (slug: {category.slug})
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* デバッグ情報 */}
          {categories.length > 0 && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Debug: Available Sanity Categories</h3>
              <DebugCategoryCard categories={categories} />
            </div>
          )}

          {/* 元のフォールバック（現在は使用されない） */}
          {false && (
            /* 多言語対応のハードコーディングされたサービスを表示 */
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {servicesContent[lang].categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`${basePath}/services/${category.slug}`} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center block"
                >
                  <div className={`w-12 h-12 ${category.colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-6 h-6 ${category.colorClass.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>


      <NewCTASection lang={lang} />
      <UnifiedFooter />
    </div>
  );
}