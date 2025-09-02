"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useParams } from "next/navigation";
import NewCTASection from "@/components/NewCTASection";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";
import { breadcrumbContent } from "@/data/breadcrumb-content";


export default function About() {
  const params = useParams();
  const lang = params.lang as Locale;

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
      memberNote: "※ Staff introduction includes some sample data",
      weekdays: "Weekdays: 9:00 - 18:00",
      saturday: "Saturday: 9:00 - 17:00",
      holiday: "Sun/Holidays: Closed",
      qualification: "Administrative Scrivener (Registration No: 08100026)",
      association: "Member of Chiba Prefecture Administrative Scrivener Association",
      businessContent: "Visa applications, various permits and licenses, contract creation, foreign talent life support, etc.",
      certification: "Ministry of Justice certified Registered Support Organization: 19-000917",
      relatedCompanies: "Related Companies",
      employees: "Number of Employees",
      representativeName: "Representative Name",
      ceoMessage1: "Since registering as an administrative scrivener in 2003, I have supported many clients with permit applications, inheritance procedures, and company establishment for over 20 years.",
      ceoMessage2: "Our office strives to provide optimal solutions tailored to each client's situation with prompt and courteous service.",
      ceoMessage3: "Please feel free to consult with us if you have any concerns.",
      accessInfo: "Access Information",
      officeHistory: "Office History",
      historyDescription: "Introducing our history of working alongside the local community",
      timeline: {
        "2024-01": {
          title: "Office Relocation & Expansion",
          description: "Building a system to serve more clients",
          dateLabel: "January 2024"
        },
        "2023-06": {
          title: "Started Online Consultation Service",
          description: "Established support system for clients nationwide",
          dateLabel: "June 2023"
        },
        "2022-09": {
          title: "Staff Expansion",
          description: "Expanded expertise to meet broader needs",
          dateLabel: "September 2022"
        },
        "2021-12": {
          title: "Corporate Support Department Established",
          description: "Full-scale launch of enterprise services",
          dateLabel: "December 2021"
        },
        "2008-01": {
          title: "Fortia Administrative Law Office Established",
          description: "Opened as a community-based administrative law office",
          dateLabel: "January 2008"
        },
        "2019-10": {
          title: "Administrative Scrivener Registration",
          description: "Started preparations for independence",
          dateLabel: "October 2019"
        },
        "2014-04": {
          title: "Joined Major Law Firm",
          description: "Gained practical experience as an administrative scrivener",
          dateLabel: "April 2014"
        }
      },
      mobileNote: "※ Tap to view details"
    },
    'zh-CN': {
      pageTitle: "事务所概要",
      pageDescription: "关于Fortia行政书士事务所",
      ceoGreeting: "代表问候",
      officeInfo: "事务所信息",
      representative: "行政书士・代表",
      establishedDate: "成立日期",
      address: "地址",
      contact: "联系方式",
      businessHours: "营业时间",
      qualifications: "资格・注册",
      teamMembers: "员工介绍",
      memberNote: "※员工介绍包含部分样本数据",
      weekdays: "平日: 9:00 - 18:00",
      saturday: "周六: 9:00 - 17:00",
      holiday: "周日及节假日: 休息",
      qualification: "行政书士（注册号：第08100026号）",
      association: "千叶县行政书士会所属",
      businessContent: "签证申请、各种许可申请、合同书制作、外国人才生活支援等",
      certification: "法务省认定 注册支援机关认定：19登-000917",
      relatedCompanies: "关联公司",
      employees: "员工人数",
      representativeName: "代表姓名",
      ceoMessage1: "自2003年注册为行政书士以来，在过去的20年里，我们为许多客户提供了许可申请、继承手续、公司设立等支持。",
      ceoMessage2: "我们事务所努力根据每位客户的情况提供最佳解决方案，并提供迅速而周到的服务。",
      ceoMessage3: "如有任何疑问，请随时与我们联系。",
      accessInfo: "交通信息",
      officeHistory: "事务所沿革",
      historyDescription: "介绍我们与地区社会共同发展的历史",
      timeline: {
        "2024-01": {
          title: "事务所搬迁・规模扩大",
          description: "建立为更多客户提供服务的体制",
          dateLabel: "2024年 1月"
        },
        "2023-06": {
          title: "开始在线咨询服务",
          description: "建立全国客户支援体制",
          dateLabel: "2023年 6月"
        },
        "2022-09": {
          title: "增加员工",
          description: "扩充专业领域，满足更广泛的需求",
          dateLabel: "2022年 9月"
        },
        "2021-12": {
          title: "成立法人支援部门",
          description: "正式开始企业服务",
          dateLabel: "2021年 12月"
        },
        "2008-01": {
          title: "Fortia行政书士事务所 成立",
          description: "作为扎根地区的行政书士事务所开业",
          dateLabel: "2008年 1月"
        },
        "2019-10": {
          title: "行政书士注册",
          description: "开始独立准备",
          dateLabel: "2019年 10月"
        },
        "2014-04": {
          title: "进入大型律师事务所",
          description: "积累行政书士实务经验",
          dateLabel: "2014年 4月"
        }
      },
      mobileNote: "※ 点击查看详情"
    },
    'zh-TW': {
      pageTitle: "事務所概要",
      pageDescription: "關於Fortia行政書士事務所",
      ceoGreeting: "代表問候",
      officeInfo: "事務所資訊",
      representative: "行政書士・代表",
      establishedDate: "成立日期",
      address: "地址",
      contact: "聯絡方式",
      businessHours: "營業時間",
      qualifications: "資格・註冊",
      teamMembers: "員工介紹",
      memberNote: "※員工介紹包含部分樣本資料",
      weekdays: "平日: 9:00 - 18:00",
      saturday: "週六: 9:00 - 17:00",
      holiday: "週日及節假日: 休息",
      qualification: "行政書士（註冊號：第08100026號）",
      association: "千葉縣行政書士會所屬",
      businessContent: "簽證申請、各種許可申請、合約書製作、外國人才生活支援等",
      certification: "法務省認定 註冊支援機關認定：19登-000917",
      relatedCompanies: "關聯公司",
      employees: "員工人數",
      representativeName: "代表姓名",
      ceoMessage1: "自2003年註冊為行政書士以來，在過去的20年裡，我們為許多客戶提供了許可申請、繼承手續、公司設立等支援。",
      ceoMessage2: "我們事務所努力根據每位客戶的情況提供最佳解決方案，並提供迅速而周到的服務。",
      ceoMessage3: "如有任何疑問，請隨時與我們聯繫。",
      accessInfo: "交通資訊",
      officeHistory: "事務所沿革",
      historyDescription: "介紹我們與地區社會共同發展的歷史",
      timeline: {
        "2024-01": {
          title: "事務所搬遷・規模擴大",
          description: "建立為更多客戶提供服務的體制",
          dateLabel: "2024年 1月"
        },
        "2023-06": {
          title: "開始線上諮詢服務",
          description: "建立全國客戶支援體制",
          dateLabel: "2023年 6月"
        },
        "2022-09": {
          title: "增加員工",
          description: "擴充專業領域，滿足更廣泛的需求",
          dateLabel: "2022年 9月"
        },
        "2021-12": {
          title: "成立法人支援部門",
          description: "正式開始企業服務",
          dateLabel: "2021年 12月"
        },
        "2008-01": {
          title: "Fortia行政書士事務所 成立",
          description: "作為紮根地區的行政書士事務所開業",
          dateLabel: "2008年 1月"
        },
        "2019-10": {
          title: "行政書士註冊",
          description: "開始獨立準備",
          dateLabel: "2019年 10月"
        },
        "2014-04": {
          title: "進入大型律師事務所",
          description: "積累行政書士實務經驗",
          dateLabel: "2014年 4月"
        }
      },
      mobileNote: "※ 點擊查看詳情"
    },
    vi: {
      pageTitle: "Giới thiệu văn phòng",
      pageDescription: "Về Văn phòng Luật hành chính Fortia",
      ceoGreeting: "Lời chào từ đại diện",
      officeInfo: "Thông tin văn phòng",
      representative: "Luật sư hành chính・Đại diện",
      establishedDate: "Ngày thành lập",
      address: "Địa chỉ",
      contact: "Liên hệ",
      businessHours: "Giờ làm việc",
      qualifications: "Chứng chỉ・Đăng ký",
      teamMembers: "Giới thiệu nhân viên",
      memberNote: "※ Giới thiệu nhân viên bao gồm một số dữ liệu mẫu",
      weekdays: "Ngày thường: 9:00 - 18:00",
      saturday: "Thứ 7: 9:00 - 17:00",
      holiday: "CN & Ngày lễ: Nghỉ",
      qualification: "Luật sư hành chính (Số đăng ký: 08100026)",
      association: "Thành viên Hiệp hội Luật sư hành chính tỉnh Chiba",
      businessContent: "Xin visa, các loại giấy phép, soạn hợp đồng, hỗ trợ cuộc sống cho lao động nước ngoài, v.v.",
      certification: "Bộ Tư pháp chứng nhận Tổ chức hỗ trợ đã đăng ký: 19-000917",
      relatedCompanies: "Công ty liên quan",
      employees: "Số lượng nhân viên",
      representativeName: "Tên đại diện",
      ceoMessage1: "Kể từ khi đăng ký làm luật sư hành chính vào năm 2003, trong hơn 20 năm qua, chúng tôi đã hỗ trợ nhiều khách hàng trong việc xin giấy phép, thủ tục thừa kế và thành lập công ty.",
      ceoMessage2: "Văn phòng chúng tôi nỗ lực cung cấp giải pháp tối ưu phù hợp với hoàn cảnh của từng khách hàng với dịch vụ nhanh chóng và chu đáo.",
      ceoMessage3: "Xin vui lòng liên hệ với chúng tôi nếu bạn có bất kỳ thắc mắc nào.",
      accessInfo: "Thông tin truy cập",
      officeHistory: "Lịch sử văn phòng",
      historyDescription: "Giới thiệu lịch sử phát triển cùng cộng đồng địa phương",
      timeline: {
        "2024-01": {
          title: "Chuyển văn phòng・Mở rộng quy mô",
          description: "Xây dựng hệ thống phục vụ nhiều khách hàng hơn",
          dateLabel: "Tháng 1 năm 2024"
        },
        "2023-06": {
          title: "Bắt đầu dịch vụ tư vấn trực tuyến",
          description: "Thiết lập hệ thống hỗ trợ khách hàng toàn quốc",
          dateLabel: "Tháng 6 năm 2023"
        },
        "2022-09": {
          title: "Tăng cường nhân viên",
          description: "Mở rộng lĩnh vực chuyên môn, đáp ứng nhu cầu rộng hơn",
          dateLabel: "Tháng 9 năm 2022"
        },
        "2021-12": {
          title: "Thành lập bộ phận hỗ trợ pháp nhân",
          description: "Chính thức bắt đầu dịch vụ doanh nghiệp",
          dateLabel: "Tháng 12 năm 2021"
        },
        "2008-01": {
          title: "Thành lập Văn phòng Luật hành chính Fortia",
          description: "Khai trương như một văn phòng luật hành chính gắn bó với địa phương",
          dateLabel: "Tháng 1 năm 2008"
        },
        "2019-10": {
          title: "Đăng ký luật sư hành chính",
          description: "Bắt đầu chuẩn bị độc lập",
          dateLabel: "Tháng 10 năm 2019"
        },
        "2014-04": {
          title: "Gia nhập công ty luật lớn",
          description: "Tích lũy kinh nghiệm thực tế luật sư hành chính",
          dateLabel: "Tháng 4 năm 2014"
        }
      },
      mobileNote: "※ Nhấn để xem chi tiết"
    }
  };

  const t = content[lang];

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
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="pb-8 sm:pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12">{t.ceoGreeting}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* 代表者写真とプロフィール - 左側 */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                  <Image 
                    src="/鈴木.jpg" 
                    alt="代表者写真"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">鈴木 高広</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">Takahiro Suzuki</p>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  <p>{t.qualification}</p>
                  <p>{t.association}</p>
                </div>
              </div>
            </div>
            
            {/* 挨拶文 - 右側 */}
            <div className="lg:col-span-2">
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p className="leading-loose">{t.ceoMessage1}</p>
                <p className="leading-loose">{t.ceoMessage2}</p>
                <p className="leading-loose">{t.ceoMessage3}</p>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <p className="text-right font-medium">
                    {t.representative}<br />
                    鈴木 高広
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12">{t.officeInfo}</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* オフィス写真 - 横長で表示 */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <div className="w-full aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/事務所内1.png" 
                  alt="事務所内の様子"
                  width={1400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* 事務所情報テーブル */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">事務所名</h3>
                    <p className="text-sm sm:text-base text-gray-700">フォルティア行政書士事務所</p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.representativeName}</h3>
                    <p className="text-sm sm:text-base text-gray-700">鈴木 高広</p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.establishedDate}</h3>
                    <p className="text-sm sm:text-base text-gray-700">2008年1月1日</p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.address}</h3>
                    <p className="text-sm sm:text-base text-gray-700">〒297-0026 千葉県茂原市茂原579番地</p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.contact}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      TEL: 0475-44-8027<br />
                      FAX: 0475-22-5777<br />
                      Email: info@fortia-gyosei.com
                    </p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.businessHours}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      {t.weekdays}<br />
                      {t.saturday}<br />
                      {t.holiday}
                    </p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">業務内容</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {t.businessContent}
                    </p>
                  </div>
                  
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{t.employees}</h3>
                    <p className="text-sm sm:text-base text-gray-700">10名</p>
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
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}