"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { useParams } from "next/navigation";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";
import { staffContent } from "@/data/staff-content";
import { breadcrumbContent } from "@/data/breadcrumb-content";


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
    },
    'zh-CN': {
      pageTitle: "事务所概要",
      pageDescription: "关于Fortia行政书士事务所",
      ceoGreeting: "代表致辞",
      officeInfo: "事务所信息",
      representative: "行政书士・代表",
      establishedDate: "设立日期",
      address: "所在地",
      contact: "联系方式",
      businessHours: "营业时间",
      qualifications: "资格・登记",
      teamMembers: "员工介绍",
      memberNote: "※员工介绍包含部分样例数据",
      weekdays: "平日: 9:00 - 18:00",
      saturday: "周六: 9:00 - 17:00",
      holiday: "周日及节假日: 休业",
      qualification: "行政书士（登记号码：第08100026号）",
      association: "千叶县行政书士会所属",
      businessContent: "签证申请、各种许可认证申请、合同制作、外国人才生活支援等",
      certification: "法务省认定 登记支援机关认定：１９登－０００９１７",
      relatedCompanies: "关联公司",
      employees: "员工人数",
      representativeName: "代表者姓名",
      ceoMessage1: "平成15年进行行政书士登记以来，20年间为众多客户的许可认证申请、继承手续、公司设立等提供支援。",
      ceoMessage2: "本事务所根据每位客户的具体情况提出最佳解决方案，致力于迅速细致的应对。",
      ceoMessage3: "如有困扰，请随时咨询。",
      accessInfo: "交通信息",
      officeHistory: "事务所沿革",
      historyDescription: "介绍与地区居民共同走过的历史",
      timeline: {
        "2024-01": {
          title: "事务所搬迁・规模扩大",
          description: "构建为更多客户提供服务的体制",
          dateLabel: "2024年 1月"
        },
        "2023-06": {
          title: "开始在线咨询服务",
          description: "构建对全国客户的支援体制",
          dateLabel: "2023年 6月"
        },
        "2022-09": {
          title: "增加员工",
          description: "扩充专业领域，应对更广泛的需求",
          dateLabel: "2022年 9月"
        },
        "2021-12": {
          title: "设立法人支援部门",
          description: "正式开始企业服务",
          dateLabel: "2021年 12月"
        },
        "2008-01": {
          title: "Fortia行政书士事务所 设立",
          description: "作为扎根地区的行政书士事务所开业",
          dateLabel: "2008年 1月"
        },
        "2019-10": {
          title: "行政书士登记",
          description: "开始为独立做准备",
          dateLabel: "2019年 10月"
        },
        "2014-04": {
          title: "进入大型法律事务所",
          description: "积累行政书士的实务经验",
          dateLabel: "2014年 4月"
        }
      },
      mobileNote: "※ 点击查看详情"
    },
    'zh-TW': {
      pageTitle: "事務所概要",
      pageDescription: "關於Fortia行政書士事務所",
      ceoGreeting: "代表致辭",
      officeInfo: "事務所資訊",
      representative: "行政書士・代表",
      establishedDate: "設立日期",
      address: "所在地",
      contact: "聯絡方式",
      businessHours: "營業時間",
      qualifications: "資格・登記",
      teamMembers: "員工介紹",
      memberNote: "※員工介紹包含部分樣例資料",
      weekdays: "平日: 9:00 - 18:00",
      saturday: "週六: 9:00 - 17:00",
      holiday: "週日及節假日: 休業",
      qualification: "行政書士（登記號碼：第08100026號）",
      association: "千葉縣行政書士會所屬",
      businessContent: "簽證申請、各種許可認證申請、合約製作、外國人才生活支援等",
      certification: "法務省認定 登記支援機關認定：１９登－０００９１７",
      relatedCompanies: "關聯公司",
      employees: "員工人數",
      representativeName: "代表者姓名",
      ceoMessage1: "平成15年進行行政書士登記以來，20年間為眾多客戶的許可認證申請、繼承手續、公司設立等提供支援。",
      ceoMessage2: "本事務所根據每位客戶的具體情況提出最佳解決方案，致力於迅速細緻的應對。",
      ceoMessage3: "如有困擾，請隨時諮詢。",
      accessInfo: "交通資訊",
      officeHistory: "事務所沿革",
      historyDescription: "介紹與地區居民共同走過的歷史",
      timeline: {
        "2024-01": {
          title: "事務所搬遷・規模擴大",
          description: "構建為更多客戶提供服務的體制",
          dateLabel: "2024年 1月"
        },
        "2023-06": {
          title: "開始線上諮詢服務",
          description: "構建對全國客戶的支援體制",
          dateLabel: "2023年 6月"
        },
        "2022-09": {
          title: "增加員工",
          description: "擴充專業領域，應對更廣泛的需求",
          dateLabel: "2022年 9月"
        },
        "2021-12": {
          title: "設立法人支援部門",
          description: "正式開始企業服務",
          dateLabel: "2021年 12月"
        },
        "2008-01": {
          title: "Fortia行政書士事務所 設立",
          description: "作為紮根地區的行政書士事務所開業",
          dateLabel: "2008年 1月"
        },
        "2019-10": {
          title: "行政書士登記",
          description: "開始為獨立做準備",
          dateLabel: "2019年 10月"
        },
        "2014-04": {
          title: "進入大型法律事務所",
          description: "積累行政書士的實務經驗",
          dateLabel: "2014年 4月"
        }
      },
      mobileNote: "※ 點擊查看詳情"
    },
    vi: {
      pageTitle: "Tổng quan văn phòng",
      pageDescription: "Về văn phòng Hành chính Fortia",
      ceoGreeting: "Lời chào từ đại diện",
      officeInfo: "Thông tin văn phòng",
      representative: "Hành chính・Đại diện",
      establishedDate: "Ngày thành lập",
      address: "Địa chỉ",
      contact: "Liên hệ",
      businessHours: "Giờ làm việc",
      qualifications: "Tư cách・Đăng ký",
      teamMembers: "Giới thiệu nhân viên",
      memberNote: "※Giới thiệu nhân viên bao gồm một phần dữ liệu mẫu",
      weekdays: "Ngày thường: 9:00 - 18:00",
      saturday: "Thứ 7: 9:00 - 17:00",
      holiday: "Chủ nhật & Lễ: Nghỉ",
      qualification: "Hành chính (Số đăng ký: 第08100026号)",
      association: "Thuộc Hiệp hội Hành chính tỉnh Chiba",
      businessContent: "Đơn xin visa, đơn xin giấy phép các loại, tạo hợp đồng, hỗ trợ cuộc sống nhân lực nước ngoài, v.v.",
      certification: "Bộ Tư pháp công nhận　Cơ quan hỗ trợ đăng ký công nhận：１９登－０００９１７",
      relatedCompanies: "Công ty liên quan",
      employees: "Số nhân viên",
      representativeName: "Tên đại diện",
      ceoMessage1: "Đăng ký hành chính vào năm Heisei 15, đã hỗ trợ nhiều khách hàng trong việc đăng ký giấy phép, thủ tục thừa kế, thành lập công ty trong 20 năm qua.",
      ceoMessage2: "Văn phòng chúng tôi đề xuất giải pháp tối ưu phù hợp với tình hình của từng khách hàng, luôn hướng tới phản hồi nhanh chóng và tỉ mỉ.",
      ceoMessage3: "Nếu có khó khăn gì, xin vui lòng tư vấn thoải mái.",
      accessInfo: "Thông tin tiếp cận",
      officeHistory: "Lịch sử văn phòng",
      historyDescription: "Giới thiệu lịch sử của chúng tôi, đã đồng hành cùng mọi người trong khu vực",
      timeline: {
        "2024-01": {
          title: "Chuyển văn phòng・Mở rộng quy mô",
          description: "Hướng tới thể chế có thể cung cấp dịch vụ cho nhiều khách hàng hơn",
          dateLabel: "Tháng 1 năm 2024"
        },
        "2023-06": {
          title: "Bắt đầu dịch vụ tư vấn trực tuyến",
          description: "Xây dựng hệ thống hỗ trợ khách hàng toàn quốc",
          dateLabel: "Tháng 6 năm 2023"
        },
        "2022-09": {
          title: "Tăng cường nhân viên",
          description: "Mở rộng lĩnh vực chuyên môn, đáp ứng nhu cầu rộng lớn hơn",
          dateLabel: "Tháng 9 năm 2022"
        },
        "2021-12": {
          title: "Thành lập bộ phận hỗ trợ pháp nhân",
          description: "Bắt đầu chính thức dịch vụ dành cho doanh nghiệp",
          dateLabel: "Tháng 12 năm 2021"
        },
        "2008-01": {
          title: "Thành lập Văn phòng Hành chính Fortia",
          description: "Khai nghiệp với tư cách văn phòng hành chính gắn bó với địa phương",
          dateLabel: "Tháng 1 năm 2008"
        },
        "2019-10": {
          title: "Đăng ký hành chính",
          description: "Bắt đầu chuẩn bị cho việc độc lập",
          dateLabel: "Tháng 10 năm 2019"
        },
        "2014-04": {
          title: "Gia nhập văn phòng luật lớn",
          description: "Tích lũy kinh nghiệm thực tế về hành chính",
          dateLabel: "Tháng 4 năm 2014"
        }
      },
      mobileNote: "※ Nhấn để xem chi tiết"
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
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: breadcrumbContent[lang].home, href: `/${lang}` },
              { name: breadcrumbContent[lang].about, href: `/${lang}/about` }
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
                      〒297-0026<br />
                      千葉県茂原市八千代2丁目6番地の13
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.contact}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      TEL: 0475-22-8741<br />
                      FAX: 0475-22-8742<br />
                      Email: info@fortia-office.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.businessHours}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.weekdays}<br />
                      {t.saturday}<br />
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

      {/* Members Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12">{staffData.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
            {staff.map((member) => (
              <div key={member._id} className="group">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  {/* メンバー写真 - 正方形 */}
                  <div className="mb-3 sm:mb-4 relative">
                    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                      <Image 
                        src={member.photo.asset.url} 
                        alt={member.photo.alt || member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-[center_30%]"
                      />
                    </div>
                    
                    {/* プラスボタン - 写真の右下に配置 */}
                    <button
                      onClick={() => toggleMember(member._id)}
                      className="absolute bottom-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                      aria-label={`${member.name}の詳細を${expandedMember === member._id ? '閉じる' : '開く'}`}
                    >
                      <svg 
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${expandedMember === member._id ? 'rotate-45' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* 名前 */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center mb-2 sm:mb-3">
                    {member.nameRomaji}
                  </p>
                  {member.position && (
                    <p className="text-xs sm:text-sm text-gray-500 text-center mb-2 sm:mb-3">
                      {member.position}
                    </p>
                  )}
                  
                  {/* 自己紹介（展開時） */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedMember === member._id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              {t.officeHistory}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              {t.historyDescription}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* 縦のライン - 左寄りに配置 */}
            <div className="absolute left-24 sm:left-32 md:left-48 h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* 2024年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2024-01"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2024-01"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2024-01"].description}
                  </p>
                </div>
              </div>

              {/* 2023年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2023-06"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2023-06"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2023-06"].description}
                  </p>
                </div>
              </div>

              {/* 2022年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2022-09"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2022-09"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2022-09"].description}
                  </p>
                </div>
              </div>

              {/* 2021年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2021-12"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2021-12"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2021-12"].description}
                  </p>
                </div>
              </div>

              {/* 2008年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2008-01"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2008-01"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2008-01"].description}
                  </p>
                </div>
              </div>

              {/* 2019年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2019-10"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2019-10"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2019-10"].description}
                  </p>
                </div>
              </div>

              {/* 2014年 */}
              <div className="relative flex items-start">
                <div className="w-24 sm:w-32 md:w-48 text-right pr-4 sm:pr-6 lg:pr-8 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t.timeline["2014-04"].dateLabel}</h3>
                </div>
                <div className="absolute left-24 sm:left-32 md:left-48 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow mt-1"></div>
                <div className="flex-1 pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1">{t.timeline["2014-04"].title}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {t.timeline["2014-04"].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* モバイル表示の場合の注記 */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 lg:mt-12 md:hidden">
            {t.mobileNote}
          </p>
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
              〒297-0026 千葉県茂原市八千代2丁目6番地の13
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              ※ {lang === 'ja' ? '地図の左下にあるストリートビュー画像をクリックすると360度ビューに切り替わります' : 
                  lang === 'en' ? 'Click the Street View image at the bottom left of the map to switch to 360° view' :
                  lang === 'zh-CN' ? '点击地图左下角的街景图像可切换到360度视图' :
                  lang === 'zh-TW' ? '點擊地圖左下角的街景圖像可切換到360度視圖' :
                  'Nhấp vào hình ảnh Street View ở góc dưới bên trái của bản đồ để chuyển đổi sang chế độ xem 360°'}
            </p>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}