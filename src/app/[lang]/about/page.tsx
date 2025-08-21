"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { PortableText } from '@portabletext/react';
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";

interface Staff {
  _id: string;
  name: string;
  nameRomaji: string;
  position?: string;
  photo: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  introduction: Array<{
    _type: string;
    children?: Array<{
      _type: string;
      text?: string;
      marks?: string[];
    }>;
    style?: string;
    listItem?: string;
  }>;
  order: number;
}

export default function About() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

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
      qualification: "行政書士（登録番号：15123456）",
      association: "東京都行政書士会所属",
      ceoMessage1: "平成15年に行政書士登録を行い、これまで20年にわたり、多くのお客様の許認可申請、相続手続き、会社設立などをサポートしてまいりました。",
      ceoMessage2: "当事務所では、お客様一人ひとりの状況に合わせた最適な解決策を提案し、迅速かつ丁寧な対応を心がけております。",
      ceoMessage3: "お困りごとがございましたら、お気軽にご相談ください。",
      accessInfo: "アクセス情報",
      officeHistory: "事務所の沿革",
      historyDescription: "地域の皆様と共に歩んできた、私たちの歴史をご紹介します",
      timeline: {
        "2024-01": {
          title: "事務所移転・規模拡大",
          description: "より多くのお客様にサービスを提供できる体制へ"
        },
        "2023-06": {
          title: "オンライン相談サービス開始",
          description: "全国のお客様へのサポート体制を構築"
        },
        "2022-09": {
          title: "スタッフ増員",
          description: "専門分野を拡充し、より幅広いニーズに対応"
        },
        "2021-12": {
          title: "法人サポート部門設立",
          description: "企業向けサービスを本格的に開始"
        },
        "2020-04": {
          title: "フォルティア行政書士事務所 設立",
          description: "地域に根ざした行政書士事務所として開業"
        },
        "2019-10": {
          title: "行政書士登録",
          description: "独立に向けて準備を開始"
        },
        "2014-04": {
          title: "大手法律事務所に入所",
          description: "行政書士としての実務経験を積む"
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
      qualification: "Administrative Scrivener (Registration No.: 15123456)",
      association: "Member of Tokyo Administrative Scriveners Association",
      ceoMessage1: "I registered as an administrative scrivener in 2003 and have been supporting many clients with licensing applications, inheritance procedures, and company establishment for 20 years.",
      ceoMessage2: "At our office, we propose optimal solutions tailored to each client's situation and strive for prompt and courteous service.",
      ceoMessage3: "Please feel free to contact us if you have any concerns.",
      accessInfo: "Access Information",
      officeHistory: "Office History",
      historyDescription: "Introducing our history of walking together with the local community",
      timeline: {
        "2024-01": {
          title: "Office relocation and expansion",
          description: "Establishing a system to serve more customers"
        },
        "2023-06": {
          title: "Online consultation service launched",
          description: "Built support system for customers nationwide"
        },
        "2022-09": {
          title: "Staff expansion",
          description: "Expanded specialized fields to meet wider needs"
        },
        "2021-12": {
          title: "Corporate support division established",
          description: "Started full-scale corporate services"
        },
        "2020-04": {
          title: "Fortia Administrative Law Office established",
          description: "Opened as a community-based administrative law office"
        },
        "2019-10": {
          title: "Administrative scrivener registration",
          description: "Started preparation for independence"
        },
        "2014-04": {
          title: "Joined major law firm",
          description: "Gained practical experience as an administrative scrivener"
        }
      },
      mobileNote: "※ Tap for details"
    }
  };

  const t = content[lang];

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await fetch('/api/staff');
      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    } finally {
      setLoading(false);
    }
  };

  const hardcodedMembers = [
    {
      id: 1,
      name: "山田 花子｜Hanako Yamada",
      photo: "/スタッフサンプル1.png",
      introduction: {
        ja: "行政書士として10年の経験があります。主に建設業許可や産業廃棄物処理業許可を担当しています。お客様の事業がスムーズに進むよう、全力でサポートいたします。",
        en: "I have 10 years of experience as an administrative scrivener. I mainly handle construction industry permits and industrial waste disposal permits. I will do my best to support your business operations smoothly."
      }
    },
    {
      id: 2,
      name: "佐藤 一郎｜Ichiro Sato",
      photo: "/スタッフサンプル1.png",
      introduction: {
        ja: "相続・遺言の専門家として、多くのご家族の大切な手続きをお手伝いしてきました。分かりやすい説明と親身な対応を心がけています。",
        en: "As a specialist in inheritance and wills, I have helped many families with important procedures. I strive for clear explanations and caring support."
      }
    },
    {
      id: 3,
      name: "高橋 美咲｜Misaki Takahashi",
      photo: "/スタッフサンプル1.png",
      introduction: {
        ja: "外国人の在留資格申請を主に担当しています。国際結婚や就労ビザなど、複雑な手続きも丁寧にサポートいたします。",
        en: "I mainly handle residence status applications for foreigners. I provide careful support for complex procedures such as international marriage and work visas."
      }
    },
    {
      id: 4,
      name: "渡辺 健太｜Kenta Watanabe",
      photo: "/スタッフサンプル2.png",
      introduction: {
        ja: "会社設立・法人設立のサポートを専門としています。起業家の皆様の夢の実現に向けて、設立から運営まで幅広くお手伝いします。",
        en: "I specialize in supporting company and corporate establishment. I provide comprehensive assistance from establishment to operation to help entrepreneurs realize their dreams."
      }
    },
    {
      id: 5,
      name: "木村 さくら｜Sakura Kimura",
      photo: "/スタッフサンプル2.png",
      introduction: {
        ja: "契約書作成や各種法務書類の作成を担当しています。正確で分かりやすい書類作成を心がけ、お客様の権利を守ります。",
        en: "I handle contract drafting and various legal document preparation. I strive to create accurate and clear documents to protect our clients' rights."
      }
    },
    {
      id: 6,
      name: "中村 大輔｜Daisuke Nakamura",
      photo: "/スタッフサンプル2.png",
      introduction: {
        ja: "自動車関連業務を中心に、運送業許可や車庫証明など幅広く対応しています。迅速な手続きでお客様のビジネスをサポートします。",
        en: "I mainly handle automotive-related services, including transportation business permits and garage certificates. I support your business with prompt procedures."
      }
    }
  ];

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
                      2014年
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.address}</h3>
                    <p className="text-gray-700">
                      〒297-0026<br />
                      千葉県茂原市茂原579
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.contact}</h3>
                    <p className="text-gray-700">
                      TEL: 03-1234-5678<br />
                      FAX: 03-1234-5679<br />
                      Email: info@tanaka-gyosei.com
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
                    <h3 className="text-lg font-semibold mb-2">{t.qualifications}</h3>
                    <p className="text-gray-700">
                      {t.qualification}<br />
                      {t.association}
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.teamMembers}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {loading ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">読み込み中...</p>
              </div>
            ) : staff.length > 0 ? (
              staff.map((member) => (
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
                      <div className="text-gray-600 text-sm leading-relaxed prose prose-sm max-w-none">
                        <PortableText value={member.introduction} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            ) : (
              /* フォールバック: Sanityにデータがない場合はハードコードされたデータを表示 */
              hardcodedMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    {/* メンバー写真 - 正方形 */}
                    <div className="mb-4 relative">
                      <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                        <Image 
                          src={member.photo} 
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-[center_30%]"
                        />
                      </div>
                      
                      {/* プラスボタン - 写真の右下に配置 */}
                      <button
                        onClick={() => toggleMember(member.id.toString())}
                        className="absolute bottom-2 right-2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                        aria-label={`${member.name}の詳細を${expandedMember === member.id.toString() ? '閉じる' : '開く'}`}
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${expandedMember === member.id.toString() ? 'rotate-45' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* 名前 */}
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{member.name}</h3>
                    
                    {/* 自己紹介（展開時） */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedMember === member.id.toString() ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.introduction[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
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
                  <h3 className="text-lg font-bold text-gray-900">2024年 1月</h3>
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
                  <h3 className="text-lg font-bold text-gray-900">2023年 6月</h3>
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
                  <h3 className="text-lg font-bold text-gray-900">2022年 9月</h3>
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
                  <h3 className="text-lg font-bold text-gray-900">2021年 12月</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2021-12"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2021-12"].description}
                  </p>
                </div>
              </div>

              {/* 2020年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">2020年 4月</h3>
                </div>
                <div className="absolute left-32 md:left-48 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700 font-semibold mb-1">{t.timeline["2020-04"].title}</p>
                  <p className="text-gray-600">
                    {t.timeline["2020-04"].description}
                  </p>
                </div>
              </div>

              {/* 2019年 */}
              <div className="relative flex items-start">
                <div className="w-32 md:w-48 text-right pr-8 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">2019年 10月</h3>
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
                  <h3 className="text-lg font-bold text-gray-900">2014年 4月</h3>
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
              〒297-0026 千葉県茂原市茂原579
            </p>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}