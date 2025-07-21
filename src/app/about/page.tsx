"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

export default function About() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const members = [
    {
      id: 1,
      name: "山田 花子｜Hanako Yamada",
      photo: "/スタッフサンプル1.png",
      introduction: "行政書士として10年の経験があります。主に建設業許可や産業廃棄物処理業許可を担当しています。お客様の事業がスムーズに進むよう、全力でサポートいたします。"
    },
    {
      id: 2,
      name: "佐藤 一郎｜Ichiro Sato",
      photo: "/スタッフサンプル1.png",
      introduction: "相続・遺言の専門家として、多くのご家族の大切な手続きをお手伝いしてきました。分かりやすい説明と親身な対応を心がけています。"
    },
    {
      id: 3,
      name: "高橋 美咲｜Misaki Takahashi",
      photo: "/スタッフサンプル1.png",
      introduction: "外国人の在留資格申請を主に担当しています。国際結婚や就労ビザなど、複雑な手続きも丁寧にサポートいたします。"
    },
    {
      id: 4,
      name: "渡辺 健太｜Kenta Watanabe",
      photo: "/スタッフサンプル2.png",
      introduction: "会社設立・法人設立のサポートを専門としています。起業家の皆様の夢の実現に向けて、設立から運営まで幅広くお手伝いします。"
    },
    {
      id: 5,
      name: "木村 さくら｜Sakura Kimura",
      photo: "/スタッフサンプル2.png",
      introduction: "契約書作成や各種法務書類の作成を担当しています。正確で分かりやすい書類作成を心がけ、お客様の権利を守ります。"
    },
    {
      id: 6,
      name: "中村 大輔｜Daisuke Nakamura",
      photo: "/スタッフサンプル2.png",
      introduction: "自動車関連業務を中心に、運送業許可や車庫証明など幅広く対応しています。迅速な手続きでお客様のビジネスをサポートします。"
    }
  ];

  const toggleMember = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <PageHeader 
        title="事務所概要"
        description="フォルティア行政書士事務所について"
      />

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">代表者挨拶</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1 flex flex-col">
                {/* 代表者写真 */}
                <div className="mb-8">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
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
                  <p className="text-gray-600">行政書士・代表</p>
                </div>
                <p className="text-gray-700 mb-4">
                  平成15年に行政書士登録を行い、これまで20年にわたり、多くのお客様の許認可申請、相続手続き、会社設立などをサポートしてまいりました。
                </p>
                <p className="text-gray-700 mb-4">
                  当事務所では、お客様一人ひとりの状況に合わせた最適な解決策を提案し、迅速かつ丁寧な対応を心がけております。
                </p>
                <p className="text-gray-700">
                  お困りごとがございましたら、お気軽にご相談ください。
                </p>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">事務所情報</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm flex-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">設立日</h3>
                    <p className="text-gray-700">
                      2014年
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">所在地</h3>
                    <p className="text-gray-700">
                      〒297-0026<br />
                      千葉県茂原市茂原579
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">連絡先</h3>
                    <p className="text-gray-700">
                      TEL: 03-1234-5678<br />
                      FAX: 03-1234-5679<br />
                      Email: info@tanaka-gyosei.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">営業時間</h3>
                    <p className="text-gray-700">
                      平日: 9:00 - 18:00<br />
                      土曜: 9:00 - 17:00<br />
                      日祝: 休業
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">資格・登録</h3>
                    <p className="text-gray-700">
                      行政書士（登録番号：15123456）<br />
                      東京都行政書士会所属
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">メンバー紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {members.map((member) => (
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
                        className="object-cover"
                      />
                    </div>
                    
                    {/* プラスボタン - 写真の右下に配置 */}
                    <button
                      onClick={() => toggleMember(member.id)}
                      className="absolute bottom-2 right-2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                      aria-label={`${member.name}の詳細を${expandedMember === member.id ? '閉じる' : '開く'}`}
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedMember === member.id ? 'rotate-45' : ''}`} 
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
                    expandedMember === member.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">アクセス</h2>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お困りごとはございませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            初回相談は無料です。お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </Link>
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
    </div>
  );
}