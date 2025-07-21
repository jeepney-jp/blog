"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ToastNotification from "@/components/ToastNotification";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
};

export default function Contact() {
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
          message: data.message || 'お問い合わせを受け付けました。',
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
          message: data.error || '送信に失敗しました。',
        });
        setShowToast(true);
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'ネットワークエラーが発生しました。',
      });
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <PageHeader
        title="お問い合わせ"
        description="お気軽にご相談ください"
      />

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
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
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      ご相談内容
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">選択してください</option>
                      <option value="permit">許認可申請</option>
                      <option value="inheritance">相続手続き</option>
                      <option value="company">会社設立</option>
                      <option value="contract">契約書作成</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ご相談内容を詳しくお聞かせください"
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
                      プライバシーポリシーに同意します <span className="text-red-500">*</span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ先</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">電話でのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-blue-600">03-1234-5678</p>
                    <p className="text-gray-600">
                      平日: 9:00 - 18:00<br />
                      土曜: 9:00 - 17:00<br />
                      日祝: 休業
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">FAXでのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-gray-900">03-1234-5679</p>
                    <p className="text-gray-600">24時間受付</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">メールでのお問い合わせ</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">info@tanaka-gyosei.com</p>
                    <p className="text-gray-600">24時間受付（返信は営業時間内）</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">事務所住所</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      千代田ビル3階
                    </p>
                    <p className="text-sm text-gray-600">
                      ※駐車場はございません。公共交通機関をご利用ください。
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">アクセス</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">最寄り駅</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">東京駅</h4>
                  <p className="text-gray-600">JR各線 徒歩5分</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">大手町駅</h4>
                  <p className="text-gray-600">東京メトロ各線 徒歩3分</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">二重橋前駅</h4>
                  <p className="text-gray-600">東京メトロ千代田線 徒歩2分</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">お車でお越しの場合</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  首都高速都心環状線「神田橋IC」より約5分
                </p>
                <p className="text-sm text-gray-600">
                  ※駐車場はございません。近隣のコインパーキングをご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-base font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer"><span className="text-gray-300">フォルティア</span><span className="text-gray-300 ml-1">行政書士事務所</span></h3>
              </Link>
              <p className="text-gray-400">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">営業時間</h3>
              <p className="text-gray-400">
                平日: 9:00 - 18:00<br />
                土曜: 9:00 - 17:00<br />
                日祝: 休業
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">主要業務エリア</h3>
              <p className="text-gray-400">
                東京都、千葉県、埼玉県、神奈川県<br />
                ※その他地域もご相談ください
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 フォルティア行政書士事務所. All rights reserved.</p>
          </div>
        </div>
      </footer>

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