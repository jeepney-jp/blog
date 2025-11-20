"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { breadcrumbContent } from "@/data/breadcrumb-content";

export default function About() {
  const lang = 'ja'; // ルートページは日本語固定

  // 日本語コンテンツ
  const content = {
    pageTitle: "事務所概要",
    pageDescription: "フォルティア行政書士事務所について",
    ceoGreeting: "代表者挨拶",
    officeInfo: "事務所情報",
    representative: "行政書士・代表",
    establishedDate: "設立日",
    address: "所在地",
    contact: "連絡先",
    businessHours: "営業時間",
    qualifications: "資格・登録",
    teamMembers: "スタッフ紹介",
    memberNote: "※スタッフ紹介は一部サンプルデータを含みます",
    weekdays: "平日: 9:00 - 18:00",
    holiday: "土日祝: 休業",
    qualification: "行政書士（登録番号：第08100026号）",
    association: "千葉県行政書士会所属",
    businessContent: "ビザ申請、各種許認可申請、契約書作成、外国人材生活支援等",
    certification: "法務省認定　登録支援機関認定：１９登－０００９１７",
    relatedCompanies: "関連会社",
    employees: "従業員数",
    representativeName: "代表者名",
    ceoMessage1: "平成15年に行政書士登録を行い、これまで20年にわたり、多くのお客様の許認可申請、相続手続き、会社設立などをサポートしてまいりました。",
    ceoMessage2: "当事務所では、お客様一人ひとりの状況に合わせた最適な解決策を提案し、迅速かつ丁寧な対応を心がけております。",
    ceoMessage3: "お困りごとがございましたら、お気軽にご相談ください。",
    accessInfo: "アクセス情報",
    officeHistory: "事務所の沿革",
    historyDescription: "地域の皆様と共に歩んできた、私たちの歴史をご紹介します",
    timeline: {
      "2024-01": {
        title: "事務所移転・規模拡大",
        description: "より多くのお客様にサービスを提供できる体制へ",
        dateLabel: "2024年 1月"
      },
      "2023-06": {
        title: "オンライン相談サービス開始",
        description: "全国のお客様へのサポート体制を構築",
        dateLabel: "2023年 6月"
      },
      "2022-09": {
        title: "スタッフ増員",
        description: "専門分野を拡充し、より幅広いニーズに対応",
        dateLabel: "2022年 9月"
      },
      "2021-12": {
        title: "法人サポート部門設立",
        description: "企業向けサービスを本格的に開始",
        dateLabel: "2021年 12月"
      },
      "2008-01": {
        title: "フォルティア行政書士事務所 設立",
        description: "地域に根ざした行政書士事務所として開業",
        dateLabel: "2008年 1月"
      },
      "2019-10": {
        title: "行政書士登録",
        description: "独立に向けて準備を開始",
        dateLabel: "2019年 10月"
      },
      "2014-04": {
        title: "大手法律事務所に入所",
        description: "行政書士としての実務経験を積む",
        dateLabel: "2014年 4月"
      }
    },
    mobileNote: "※ タップして詳細をご覧ください"
  };

  const t = content;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={t.pageTitle}
        description={t.pageDescription}
      />

      {/* About Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: breadcrumbContent[lang].home, href: "/" },
              { name: breadcrumbContent[lang].about, href: "/about" }
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
            <div className="flex flex-col h-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{t.ceoGreeting}</h2>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm flex-1 flex flex-col">
                {/* 代表者写真 */}
                <div className="mb-6 sm:mb-8">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto bg-gray-200 rounded-lg overflow-hidden relative">
                    <Image 
                      src="/ceo-photo.jpg" 
                      alt="代表 鈴木康嗣" 
                      fill
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">鈴木 康嗣｜Yasutsugu Suzuki</h3>
                  <p className="text-sm sm:text-base text-gray-600">{t.representative}</p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  {t.ceoMessage1}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  {t.ceoMessage2}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t.ceoMessage3}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{t.officeInfo}</h2>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm flex-1">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.establishedDate}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      2008年
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.address}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      〒297-0024<br />
                      千葉県茂原市八千代2丁目6番地の13
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.contact}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      TEL: 070-5462-6133<br />
                      Email: info@fortia-office.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.businessHours}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.weekdays}<br />
                      {t.holiday}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.representativeName}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      鈴木 康嗣
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.employees}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      10名
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.qualifications}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.qualification}<br />
                      {t.association}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">業務内容</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.businessContent}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">認定</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.certification}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.relatedCompanies}</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      株式会社World Wide Works<br />
                      （労働者派遣事業許可番号：派１２－３０１６５５）<br />
                      （有料職業紹介事業許可番号：１２－ユ－３０１０９９）<br /><br />
                      有限会社鈴木弥七商店（不動産業他）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4 sm:mb-6 lg:mb-8">{t.accessInfo}</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.2931610577148!2d140.2955048!3d35.422767199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b90f6da84b7b%3A0x2f0faea551e8aed!2z44CSMjk3LTAwMjQg5Y2D6JGJ55yM6IyC5Y6f5biC5YWr5Y2D5Luj77yS5LiB55uu77yW4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1755905617223!5m2!1sja!2sjp&maptype=roadmap&zoom=16" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full sm:h-80 lg:h-96"
            />
          </div>
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
              〒297-0024 千葉県茂原市八千代2丁目6番地の13
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              ※ 地図の左下にあるストリートビュー画像をクリックすると360度ビューに切り替わります
            </p>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}