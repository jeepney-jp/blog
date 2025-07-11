"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function CounterAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`CounterAnimation started for end: ${end}`);
    let startTime: number | null = null;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // イージング関数（ease-out）
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">フォルティア行政書士事務所</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                お役立ち情報
              </Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
                お客様の声
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white min-h-screen flex items-center py-12"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full z-10 flex items-center">
          <div className="flex w-full">
            <div className="flex-1 flex items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                  人と社会を繋げる、<br />
                  リーガルサービス
                </h2>
              </div>
            </div>
            
            <div className="flex-1 flex justify-end items-end pb-16">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                無料相談のお申込み
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                <CounterAnimation end={1000} />
                <span className="text-3xl">+</span>
              </div>
              <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>年間問合せ件数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                <CounterAnimation end={100} />
                <span className="text-3xl">+</span>
              </div>
              <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>年間申請件数</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                <CounterAnimation end={98} />
                <span className="text-3xl">%</span>
              </div>
              <div className="text-lg text-gray-700" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>申請許可率</div>
            </div>
          </div>
        </div>
      </section>

      {/* 残りのセクションは元のまま... */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">事務所案内</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">ABOUT US</p>
          </div>
        </div>
      </section>
    </div>
  );
}