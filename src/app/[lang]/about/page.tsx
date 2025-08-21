"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { useParams } from "next/navigation";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";
import { staffContent } from "@/data/staff-content";


export default function About() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  // 多言語コンテンツ
  const content = {
    ja: {
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
      saturday: "土曜: 9:00 - 17:00",
      holiday: "日祝: 休業",
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
    },
    en: {
      pageTitle: "About Us",
      pageDescription: "About Fortia Administrative Law Office",
      ceoGreeting: "CEO's Message",
      officeInfo: "Office Information",
      representative: "Administrative Scrivener・CEO",
      establishedDate: "Established",
      address: "Address",
      contact: "Contact",
      businessHours: "Business Hours",
      qualifications: "Qualifications & Registration",
      teamMembers: "Our Team",
      memberNote: "※Staff introduction includes some sample data",
      weekdays: "Weekdays: 9:00 - 18:00",
      saturday: "Saturday: 9:00 - 17:00",
      holiday: "Sunday & Holidays: Closed",
      qualification: "Administrative Scrivener (Registration No.: 08100026)",
      association: "Member of Chiba Prefectural Administrative Scriveners Association",
      businessContent: "Visa applications, various licensing applications, contract drafting, foreign worker life support, etc.",
      certification: "Ministry of Justice Certified Registered Support Organization: 19-000917",
      relatedCompanies: "Related Companies",
      employees: "Number of Employees",
      representativeName: "Representative Name",
      ceoMessage1: "I registered as an administrative scrivener in 2003 and have been supporting many clients with licensing applications, inheritance procedures, and company establishment for 20 years.",
      ceoMessage2: "At our office, we propose optimal solutions tailored to each client's situation and strive for prompt and courteous service.",
      ceoMessage3: "Please feel free to contact us if you have any concerns.",
      accessInfo: "Access Information",
      officeHistory: "Office History",
      historyDescription: "Introducing our history of walking together with the local community",
      timeline: {
        "2024-01": {
          title: "Office relocation and expansion",
          description: "Establishing a system to serve more customers",
          dateLabel: "January 2024"
        },
        "2023-06": {
          title: "Online consultation service launched",
          description: "Built support system for customers nationwide",
          dateLabel: "June 2023"
        },
        "2022-09": {
          title: "Staff expansion",
          description: "Expanded specialized fields to meet wider needs",
          dateLabel: "September 2022"
        },
        "2021-12": {
          title: "Corporate support division established",
          description: "Started full-scale corporate services",
          dateLabel: "December 2021"
        },
        "2008-01": {
          title: "Fortia Administrative Law Office established",
          description: "Opened as a community-based administrative law office",
          dateLabel: "January 2008"
        },
        "2019-10": {
          title: "Administrative scrivener registration",
          description: "Started preparation for independence",
          dateLabel: "October 2019"
        },
        "2014-04": {
          title: "Joined major law firm",
          description: "Gained practical experience as an administrative scrivener",
          dateLabel: "April 2014"
        }
      },
      mobileNote: "※ Tap for details"
    }
  };

  const t = content[lang];
  const staffData = staffContent[lang];
  const staff = staffData.staff;

  const toggleMember = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      <PageHeader 
        title={t.pageTitle}
        description={t.pageDescription}
      />

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.ceoGreeting}</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1 flex flex-col">
                {/* 代表者写真 */}
                <div className="mb-8">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg overflow-hidden relative">
                    <Image 
                      src="/ceo-photo.jpg" 
                      alt="代表 鈴木康嗣" 
                      fill
                      sizes="192px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">鈴木 康嗣｜Yasutsugu Suzuki</h3>
                  <p className="text-gray-600">{t.representative}</p>
                </div>
                <p className="text-gray-700 mb-4">
                  {t.ceoMessage1}
                </p>
                <p className="text-gray-700 mb-4">
                  {t.ceoMessage2}
                </p>
                <p className="text-gray-700">
                  {t.ceoMessage3}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.officeInfo}</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.establishedDate}</h3>
                    <p className="text-gray-700">
                      2008年
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.address}</h3>
                    <p className="text-gray-700">
                      〒297-0026<br />
                      千葉県茂原市八千代2丁目6番地の13
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.contact}</h3>
                    <p className="text-gray-700">
                      TEL: 0475-22-8741<br />
                      FAX: 0475-22-8742<br />
                      Email: info@fortia-office.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.businessHours}</h3>
                    <p className="text-gray-700">
                      {t.weekdays}<br />
                      {t.saturday}<br />
                      {t.holiday}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.representativeName}</h3>
                    <p className="text-gray-700">
                      鈴木 康嗣
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.employees}</h3>
                    <p className="text-gray-700">
                      10名
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.qualifications}</h3>
                    <p className="text-gray-700">
                      {t.qualification}<br />
                      {t.association}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">業務内容</h3>
                    <p className="text-gray-700">
                      {t.businessContent}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">認定</h3>
                    <p className="text-gray-700">
                      {t.certification}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.relatedCompanies}</h3>
                    <p className="text-gray-700">
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

      {/* Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{staffData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {staff.map((member) => (
              <div key={member._id} className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  {/* メンバー写真 - 正方形 */}
                  <div className="mb-4 relative">
                    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                      <Image 
                        src={member.photo.asset.url} 
                        alt={member.photo.alt || member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-[center_30%]"
                      />
                    </div>
                    
                    {/* プラスボタン - 写真の右下に配置 */}
                    <button
                      onClick={() => toggleMember(member._id)}
                      className="absolute bottom-2 right-2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                      aria-label={`${member.name}の詳細を${expandedMember === member._id ? '閉じる' : '開く'}`}
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedMember === member._id ? 'rotate-45' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* 名前 */}
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-3">
                    {member.nameRomaji}
                  </p>
                  {member.position && (
                    <p className="text-sm text-gray-500 text-center mb-3">
                      {member.position}
                    </p>
                  )}
                  
                  {/* 自己紹介（展開時） */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedMember === member._id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.introduction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office History Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.officeHistory}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.historyDescription}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* 縦のライン - 左寄りに配置 */}
            <div className="absolute left-32 md:left-48 h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {/* 2024年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2024-01"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2024-01"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2024-01"].description}
                  </p>
                </div>
              </div>

              {/* 2023年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2023-06"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2023-06"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2023-06"].description}
                  </p>
                </div>
              </div>

              {/* 2022年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2022-09"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2022-09"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2022-09"].description}
                  </p>
                </div>
              </div>

              {/* 2021年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2021-12"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2021-12"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2021-12"].description}
                  </p>
                </div>
              </div>

              {/* 2008年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2008-01"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2008-01"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2008-01"].description}
                  </p>
                </div>
              </div>

              {/* 2019年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2019-10"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2019-10"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2019-10"].description}
                  </p>
                </div>
              </div>

              {/* 2014年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{t.timeline["2014-04"].dateLabel}</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2014-04"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2014-04"].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* モバイル表示の場合の注記 */}
          <p className="text-center text-sm text-gray-500 mt-12 md:hidden">
            {t.mobileNote}
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t.accessInfo}</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502.435134159015!2d140.2966433!3d35.4246401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b90562f4a5a3%3A0xc335baa974e81428!2z44CSMjk3LTAwMjYg5Y2D6JGJ55yM6IyC5Y6f5biC6IyC5Y6f77yV77yX77yZ!5e0!3m2!1sja!2sjp!4v1752280876305!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-lg">
              〒297-0026 千葉県茂原市八千代2丁目6番地の13
            </p>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}