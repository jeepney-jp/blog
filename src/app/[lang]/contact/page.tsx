"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ToastNotification from "@/components/ToastNotification";
import UnifiedFooter from "@/components/UnifiedFooter";
import { Locale } from "@/lib/i18n/types";

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
    service: "ご相談内容",
    message: "メッセージ",
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
      saturday: "土曜: 9:00 - 17:00",
      holiday: "日祝: 休業"
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
    service: "Consultation Topic",
    message: "Message",
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
      saturday: "Saturday: 9:00 - 17:00",
      holiday: "Sunday & Holidays: Closed"
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
  }
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
};

export default function Contact() {
  const params = useParams();
  const lang = params.lang as Locale;
  const t = content[lang];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
          service: '',
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
      <Header lang={lang} />

      <PageHeader
        title={t.pageTitle}
        description={t.pageDescription}
      />

      {/* Contact Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    >
                      <option value="">{t.serviceOptions[""]}</option>
                      <option value="permit">{t.serviceOptions.permit}</option>
                      <option value="inheritance">{t.serviceOptions.inheritance}</option>
                      <option value="company">{t.serviceOptions.company}</option>
                      <option value="contract">{t.serviceOptions.contract}</option>
                      <option value="other">{t.serviceOptions.other}</option>
                    </select>
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
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">03-1234-5678</p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {t.businessHours.weekdays}<br />
                      {t.businessHours.saturday}<br />
                      {t.businessHours.holiday}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.faxContact}</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-gray-900">03-1234-5679</p>
                    <p className="text-sm sm:text-base text-gray-600">{t.available24h}</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.emailContact}</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">info@tanaka-gyosei.com</p>
                    <p className="text-sm sm:text-base text-gray-600">{t.available24hWithReply}</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.officeAddress}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      千代田ビル3階
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

      {/* Access Map */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.accessTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t.nearestStations}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">東京駅</h4>
                  <p className="text-gray-600">{t.byTrain.tokyo}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">大手町駅</h4>
                  <p className="text-gray-600">{t.byTrain.otemachi}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">二重橋前駅</h4>
                  <p className="text-gray-600">{t.byTrain.nijubashimae}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t.byCar}</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  {t.carDirection}
                </p>
                <p className="text-sm text-gray-600">
                  {t.carParkingNote}
                </p>
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