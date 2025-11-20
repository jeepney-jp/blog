"use client";

import { useState } from "react";

import Script from "next/script";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import ToastNotification from "@/components/ToastNotification";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";
import { breadcrumbContent } from "@/data/breadcrumb-content";

// reCAPTCHAの型定義
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// 多言語コンテンツ
const content = {
  ja: {
    pageTitle: "お問い合わせ",
    pageDescription: "お気軽にご相談ください",
    contactForm: "お問い合わせフォーム",
    contactInfo: "お問い合わせ先",
    name: "お名前",
    email: "メールアドレス",
    phone: "電話番号",
    message: "ご相談内容",
    privacy: "プライバシーポリシーに同意します",
    submit: "送信する",
    submitting: "送信中...",
    required: "*",
    selectOption: "選択してください",
    messagePlaceholder: "ご相談内容を詳しくお聞かせください",
    phoneContact: "電話でのお問い合わせ",
    faxContact: "FAXでのお問い合わせ",
    emailContact: "メールでのお問い合わせ",
    officeAddress: "事務所住所",
    businessHours: {
      weekdays: "平日: 9:00 - 18:00",
      holiday: "土日祝: 休業"
    },
    available24h: "24時間受付",
    available24hWithReply: "24時間受付（返信は営業時間内）",
    parkingNote: "※駐車場はございません。公共交通機関をご利用ください。",
    accessTitle: "アクセス",
    nearestStations: "最寄り駅",
    byTrain: {
      tokyo: "JR各線 徒歩5分",
      otemachi: "東京メトロ各線 徒歩3分",
      nijubashimae: "東京メトロ千代田線 徒歩2分"
    },
    byCar: "お車でお越しの場合",
    carDirection: "首都高速都心環状線「神田橋IC」より約5分",
    carParkingNote: "※駐車場はございません。近隣のコインパーキングをご利用ください。",
    serviceOptions: {
      "": "選択してください",
      permit: "許認可申請",
      inheritance: "相続手続き",
      company: "会社設立",
      contract: "契約書作成",
      other: "その他"
    },
    successMessage: "お問い合わせを受け付けました。",
    errorMessage: "送信に失敗しました。",
    networkError: "ネットワークエラーが発生しました。"
  },
  en: {
    pageTitle: "Contact",
    pageDescription: "Feel free to contact us",
    contactForm: "Contact Form",
    contactInfo: "Contact Information",
    name: "Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Consultation Details",
    privacy: "I agree to the Privacy Policy",
    submit: "Send",
    submitting: "Sending...",
    required: "*",
    selectOption: "Please select",
    messagePlaceholder: "Please tell us about your consultation in detail",
    phoneContact: "Phone Inquiries",
    faxContact: "FAX Inquiries",
    emailContact: "Email Inquiries",
    officeAddress: "Office Address",
    businessHours: {
      weekdays: "Weekdays: 9:00 - 18:00",
      holiday: "Weekends & Holidays: Closed"
    },
    available24h: "Available 24/7",
    available24hWithReply: "Available 24/7 (replies during business hours)",
    parkingNote: "※ No parking available. Please use public transportation.",
    accessTitle: "Access",
    nearestStations: "Nearest Stations",
    byTrain: {
      tokyo: "JR Lines - 5 min walk",
      otemachi: "Tokyo Metro Lines - 3 min walk",
      nijubashimae: "Tokyo Metro Chiyoda Line - 2 min walk"
    },
    byCar: "By Car",
    carDirection: "About 5 minutes from Kandabashi IC on Metropolitan Expressway",
    carParkingNote: "※ No parking available. Please use nearby coin parking.",
    serviceOptions: {
      "": "Please select",
      permit: "Permit Applications",
      inheritance: "Inheritance Procedures",
      company: "Company Establishment",
      contract: "Contract Drafting",
      other: "Other"
    },
    successMessage: "Your inquiry has been received.",
    errorMessage: "Failed to send.",
    networkError: "A network error occurred."
  },
  'zh-CN': {
    pageTitle: "联系我们",
    pageDescription: "请随时联系我们",
    contactForm: "联系表格",
    contactInfo: "联系信息",
    name: "姓名",
    email: "邮箱地址",
    phone: "电话号码",
    message: "咨询详情",
    privacy: "我同意隐私政策",
    submit: "发送",
    submitting: "发送中...",
    required: "*",
    selectOption: "请选择",
    messagePlaceholder: "请详细告诉我们您的咨询内容",
    phoneContact: "电话咨询",
    faxContact: "传真咨询",
    emailContact: "邮件咨询",
    officeAddress: "事务所地址",
    businessHours: {
      weekdays: "工作日: 9:00 - 18:00",
      holiday: "周末及节假日: 休业"
    },
    available24h: "24小时受理",
    available24hWithReply: "24小时受理（营业时间内回复）",
    parkingNote: "※ 无停车场。请使用公共交通工具。",
    accessTitle: "交通指南",
    nearestStations: "最近车站",
    byTrain: {
      tokyo: "JR各线 步行5分钟",
      otemachi: "东京地铁各线 步行3分钟",
      nijubashimae: "东京地铁千代田线 步行2分钟"
    },
    byCar: "开车前来",
    carDirection: "从首都高速都心环状线「神田桥IC」约5分钟",
    carParkingNote: "※ 无停车场。请使用附近的投币停车场。",
    serviceOptions: {
      "": "请选择",
      permit: "许可认证申请",
      inheritance: "继承手续",
      company: "公司设立",
      contract: "合同制作",
      other: "其他"
    },
    successMessage: "已接收您的咨询。",
    errorMessage: "发送失败。",
    networkError: "发生网络错误。"
  },
  'zh-TW': {
    pageTitle: "聯繫我們",
    pageDescription: "請隨時聯繫我們",
    contactForm: "聯繫表格",
    contactInfo: "聯繫資訊",
    name: "姓名",
    email: "郵箱地址",
    phone: "電話號碼",
    message: "咨询详情",
    privacy: "我同意隱私政策",
    submit: "發送",
    submitting: "發送中...",
    required: "*",
    selectOption: "請選擇",
    messagePlaceholder: "請詳細告訴我們您的諮詢內容",
    phoneContact: "電話諮詢",
    faxContact: "傳真諮詢",
    emailContact: "郵件諮詢",
    officeAddress: "事務所地址",
    businessHours: {
      weekdays: "工作日: 9:00 - 18:00",
      holiday: "週末及節假日: 休業"
    },
    available24h: "24小時受理",
    available24hWithReply: "24小時受理（營業時間內回覆）",
    parkingNote: "※ 無停車場。請使用公共交通工具。",
    accessTitle: "交通指南",
    nearestStations: "最近車站",
    byTrain: {
      tokyo: "JR各線 步行5分鐘",
      otemachi: "東京地鐵各線 步行3分鐘",
      nijubashimae: "東京地鐵千代田線 步行2分鐘"
    },
    byCar: "開車前來",
    carDirection: "從首都高速都心環狀線「神田橋IC」約5分鐘",
    carParkingNote: "※ 無停車場。請使用附近的投幣停車場。",
    serviceOptions: {
      "": "請選擇",
      permit: "許可認證申請",
      inheritance: "繼承手續",
      company: "公司設立",
      contract: "合約製作",
      other: "其他"
    },
    successMessage: "已接收您的諮詢。",
    errorMessage: "發送失敗。",
    networkError: "發生網路錯誤。"
  },
  vi: {
    pageTitle: "Liên hệ",
    pageDescription: "Xin vui lòng tư vấn thoải mái",
    contactForm: "Biểu mẫu liên hệ",
    contactInfo: "Thông tin liên hệ",
    name: "Họ tên",
    email: "Địa chỉ email",
    phone: "Số điện thoại",
    message: "Chi tiết tư vấn",
    privacy: "Tôi đồng ý với chính sách bảo mật",
    submit: "Gửi",
    submitting: "Đang gửi...",
    required: "*",
    selectOption: "Vui lòng chọn",
    messagePlaceholder: "Xin vui lòng cho biết chi tiết nội dung tư vấn",
    phoneContact: "Liên hệ qua điện thoại",
    faxContact: "Liên hệ qua FAX",
    emailContact: "Liên hệ qua email",
    officeAddress: "Địa chỉ văn phòng",
    businessHours: {
      weekdays: "Ngày thường: 9:00 - 18:00",
      holiday: "Cuối tuần & Lễ: Nghỉ"
    },
    available24h: "Tiếp nhận 24 giờ",
    available24hWithReply: "Tiếp nhận 24 giờ (Phản hồi trong giờ làm việc)",
    parkingNote: "※Không có chỗ đậu xe. Xin vui lòng sử dụng phương tiện giao thông công cộng.",
    accessTitle: "Thông tin tiếp cận",
    nearestStations: "Ga gần nhất",
    byTrain: {
      tokyo: "Các tuyến JR đi bộ 5 phút",
      otemachi: "Các tuyến Tokyo Metro đi bộ 3 phút",
      nijubashimae: "Tokyo Metro Chiyoda Line đi bộ 2 phút"
    },
    byCar: "Trường hợp đến bằng ô tô",
    carDirection: "Từ Đường vành đai trung tâm Thủ đô \"Kandabashi IC\" khoảng 5 phút",
    carParkingNote: "※Không có chỗ đậu xe. Xin vui lòng sử dụng bãi đậu xe có trả tiền gần đó.",
    emergencyContact: "Liên hệ khẩn cấp",
    businessDays: "Ngày làm việc",
    saturdays: "Thứ bảy",
    sundays: "Chủ nhật và ngày lễ",
    closed: "Nghỉ",
    serviceOptions: {
      "": "Vui lòng chọn",
      permit: "Đơn xin giấy phép",
      inheritance: "Thủ tục thừa kế",
      company: "Thành lập công ty",
      contract: "Tạo hợp đồng",
      other: "Khác"
    },
    services: {
      visa: "Visa・Tư cách lưu trú",
      construction: "Giấy phép xây dựng",
      corporate: "Thành lập pháp nhân",
      other: "Khác"
    },
    successMessage: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 2-3 ngày làm việc.",
    errorMessage: "Gửi thất bại.",
    networkError: "Xảy ra lỗi mạng."
  }
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

export default function Contact() {
  // const params = useParams();
  const lang = 'ja' as Locale; // ルートページは日本語固定
  const t = content[lang];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // reCAPTCHA トークンを取得
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
      let recaptchaToken = '';
      
      if (typeof window !== 'undefined' && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, {
            action: 'contact_submit'
          });
        } catch (recaptchaError) {
          console.error('reCAPTCHA error:', recaptchaError);
          // reCAPTCHAエラーの場合は警告を出して続行
        }
      }

      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || t.successMessage,
        });
        // トースト通知を表示
        setShowToast(true);
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          privacy: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t.errorMessage,
        });
        setShowToast(true);
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: t.networkError,
      });
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* reCAPTCHA Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      
      <Header lang={lang} />

      <PageHeader
        title={t.pageTitle}
        description={t.pageDescription}
      />

      {/* Contact Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <Breadcrumbs
            segments={[
              { name: breadcrumbContent[lang].home, href: '/' },
              { name: breadcrumbContent[lang].contact, href: '/contact' }
            ]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{t.contactForm}</h2>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.name} <span className="text-red-500">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email} <span className="text-red-500">{t.required}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    />
                  </div>
                  
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message} <span className="text-red-500">{t.required}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                      placeholder={t.messagePlaceholder}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      {t.privacy} <span className="text-red-500">{t.required}</span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                  >
                    {isSubmitting ? t.submitting : t.submit}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{t.contactInfo}</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.phoneContact}</h3>
                  <div className="space-y-2">
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">070-5462-6133</p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {t.businessHours.weekdays}<br />
                      {t.businessHours.holiday}
                    </p>
                  </div>
                </div>
                
                
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.emailContact}</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">info@fortia-office.com</p>
                    <p className="text-sm sm:text-base text-gray-600">{t.available24hWithReply}</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.officeAddress}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      〒297-0024<br />
                      千葉県茂原市八千代2丁目6番地の13
                    </p>
                    <p className="text-sm text-gray-600">
                      {t.parkingNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <UnifiedFooter lang={lang} />

      {/* トースト通知 */}
      <ToastNotification 
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        message={submitStatus.message}
        type={submitStatus.type || 'success'}
      />
    </div>
  );
}