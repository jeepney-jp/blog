import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Locale } from '@/lib/i18n/types';
import { featuresFaqContent } from '@/data/features-faq-content';

// 多言語コンテンツ
const content = {
  ja: {
    pageTitle: "当事務所の特徴",
    pageDescription: "フォルティア行政書士事務所の強みと独自のサービスをご紹介します",
    breadcrumbHome: "ホーム",
    breadcrumbFeatures: "特徴",
    heroTitle1: "申請の不安、",
    heroTitle2: "すべて私たちが解決します。",
    heroSubtitle: "煩雑な手続きから解放され、ビジネスや生活に集中できる環境を",
    keyPoint1: {
      title: "圧倒的実績",
      subtitle: "10,000件超の申請実績"
    },
    keyPoint2: {
      title: "業界最安水準",
      subtitle: "明朗会計で安心料金"
    },
    keyPoint3: {
      title: "多言語対応",
      subtitle: "9言語で完全サポート"
    },
    concernsTitle: "こんなことでお悩みではありませんか？",
    concerns: [
      {
        title: "初めての申請で不安",
        description: "実績が豊富な事務所に任せたいけど、どこを選べばいいか分からない…"
      },
      {
        title: "複雑なケースへの対応",
        description: "自分のケースは少し複雑。本当に許可が取れるのか心配で夜も眠れない…"
      },
      {
        title: "費用と品質のバランス",
        description: "費用をできるだけ抑えたいが、安かろう悪かろうでは困る…"
      },
      {
        title: "料金体系の不透明さ",
        description: "最終的にいくら請求されるのか分からず、予算が立てられない…"
      },
      {
        title: "日本語の壁",
        description: "複雑な手続きの説明を、正確に理解できるか不安…"
      },
      {
        title: "多言語コミュニケーション",
        description: "外国人スタッフとのやり取りをスムーズに進めたいが、言語の壁を感じる…"
      },
      {
        title: "迫る申請期限",
        description: "申請の期限が迫っていて、とにかく手続きを急いでいる…"
      },
      {
        title: "時間の制約",
        description: "平日は仕事で忙しく、事務所に何度も足を運ぶ時間がない…"
      }
    ],
    solutionTitle: "そのお悩み、解決の鍵は当事務所の",
    solutionHighlight: "「4つの強み」",
    solutionTitle2: "にあります",
    solutionDescription: "それぞれの強みが、お客様の課題をどう解決できるのか、このすぐ下で詳しくご説明します。",
    strengthsGrid: [
      {
        title: "申請実績10,000件超の信頼",
        description: "豊富な経験とノウハウで、複雑なケースにも対応"
      },
      {
        title: "業界最安水準の料金設定",
        description: "明確な料金体系で、追加費用の心配なし"
      },
      {
        title: "多言語対応で安心サポート",
        description: "9言語対応で言語の壁を完全に解消"
      },
      {
        title: "スピード対応とオンライン完結",
        description: "お急ぎの案件も迅速に対応、来所不要"
      }
    ],
    detailedStrengths: {
      point1: {
        label: "ポイント 1",
        title: "申請実績10,000件超の信頼",
        statsTitle1: "申請実績件数",
        statsTitle2: "許可率",
        description: "2008年の創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績と信頼があります。豊富な経験とノウハウにより、お客様の状況に応じた最適な申請戦略をご提案します。"
      },
      point2: {
        label: "ポイント 2",
        title: "業界最安水準の料金設定",
        savingsText: "平均相場より",
        savingsAmount: "30%安い",
        guarantee1: "🔒 明朗会計",
        guarantee2: "👍 追加費用なし",
        description: "高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。料金体系は明確で、追加費用の心配もありません。"
      },
      point3: {
        label: "ポイント 3",
        title: "多言語対応で安心サポート",
        languagesTitle: "対応可能言語（9言語）",
        languages: ["英語", "中国語", "ベトナム語", "タガログ語", "韓国語", "ポルトガル語"],
        description: "多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。"
      },
      point4: {
        label: "ポイント 4",
        title: "スピード対応とオンライン完結の利便性",
        feature1: "最短即日対応",
        feature1Sub: "お急ぎの案件も安心",
        feature2: "オンライン完結",
        feature2Sub: "来所不要で手続き可能",
        description: "お急ぎの申請にも迅速に対応します。初回のご相談から申請手続きまでオンラインで完結できるため、事務所へお越しいただかなくても、全国どこからでもご依頼いただけます。"
      }
    },
    trustTitle: "信頼の理由",
    trustSubtitle: "導入企業数・業界シェア共に実績が豊富です",
    trustCompanies: "導入企業は業界を問わず0000社以上",
    trustLogo: "導入企業ロゴ",
    faqTitle: "よくあるご質問",
    faqSubtitle: "よくご質問いただく内容をご紹介します",
    faqEmpty: "現在、よくある質問を準備中です。"
  },
  en: {
    pageTitle: "Our Features",
    pageDescription: "Introducing the strengths and unique services of Fortia Administrative Law Office",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    heroTitle1: "All your application concerns,",
    heroTitle2: "we solve them all.",
    heroSubtitle: "Free yourself from complex procedures and focus on your business and life",
    keyPoint1: {
      title: "Outstanding Track Record",
      subtitle: "Over 10,000 application cases"
    },
    keyPoint2: {
      title: "Industry-Low Pricing",
      subtitle: "Transparent and reliable fees"
    },
    keyPoint3: {
      title: "Multilingual Support",
      subtitle: "Complete support in 9 languages"
    },
    concernsTitle: "Are you facing any of these concerns?",
    concerns: [
      {
        title: "Anxiety about first application",
        description: "I want to entrust it to an office with abundant experience, but I don't know which one to choose..."
      },
      {
        title: "Handling complex cases",
        description: "My case is a bit complex. I'm worried whether I can really get permission and can't sleep at night..."
      },
      {
        title: "Balance between cost and quality",
        description: "I want to keep costs down as much as possible, but cheap doesn't necessarily mean good..."
      },
      {
        title: "Unclear fee structure",
        description: "I don't know how much I'll be charged in the end, so I can't make a budget..."
      },
      {
        title: "Language barrier",
        description: "I'm worried whether I can accurately understand complex procedure explanations..."
      },
      {
        title: "Multilingual communication",
        description: "I want to proceed smoothly with foreign staff, but feel a language barrier..."
      },
      {
        title: "Approaching deadline",
        description: "The application deadline is approaching and I'm in a hurry to complete the procedures..."
      },
      {
        title: "Time constraints",
        description: "I'm busy with work on weekdays and don't have time to visit the office multiple times..."
      }
    ],
    solutionTitle: "The key to solving your concerns lies in our office's",
    solutionHighlight: "\"4 Key Strengths\"",
    solutionTitle2: "",
    solutionDescription: "We will explain in detail below how each strength can solve your challenges.",
    strengthsGrid: [
      {
        title: "Trust with over 10,000 application cases",
        description: "Handle complex cases with abundant experience and know-how"
      },
      {
        title: "Industry-low pricing structure",
        description: "Clear fee structure with no worry about additional costs"
      },
      {
        title: "Reliable multilingual support",
        description: "9-language support completely eliminates language barriers"
      },
      {
        title: "Fast response and online completion",
        description: "Quick response to urgent cases, no office visit required"
      }
    ],
    detailedStrengths: {
      point1: {
        label: "Point 1",
        title: "Trust with over 10,000 application cases",
        statsTitle1: "Application Cases",
        statsTitle2: "Approval Rate",
        description: "Since our establishment in 2008, we have supported over 10,000 applications with a proven track record and trust boasting a 99% approval rate. With our abundant experience and know-how, we propose optimal application strategies according to each customer's situation."
      },
      point2: {
        label: "Point 2",
        title: "Industry-low pricing structure",
        savingsText: "Compared to average market rate",
        savingsAmount: "30% cheaper",
        guarantee1: "🔒 Transparent pricing",
        guarantee2: "👍 No additional fees",
        description: "We provide high-quality services at low prices, achieving industry-low pricing through efficient operations that eliminate waste. Our fee structure is clear with no worry about additional costs."
      },
      point3: {
        label: "Point 3",
        title: "Reliable multilingual support",
        languagesTitle: "Supported Languages (9 languages)",
        languages: ["English", "Chinese", "Vietnamese", "Tagalog", "Korean", "Portuguese"],
        description: "Multilingual staff provide support in your native language. Even those who are concerned about Japanese can consult with confidence."
      },
      point4: {
        label: "Point 4",
        title: "Fast response and online completion convenience",
        feature1: "Same-day response",
        feature1Sub: "Urgent cases handled safely",
        feature2: "Online completion",
        feature2Sub: "No office visit required",
        description: "We respond quickly to urgent applications. From initial consultation to application procedures can be completed online, allowing you to request our services from anywhere in Japan without visiting our office."
      }
    },
    trustTitle: "Reasons for Trust",
    trustSubtitle: "Rich track record in both number of client companies and industry share",
    trustCompanies: "Over 0000 client companies across all industries",
    trustLogo: "Client Company Logo",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Introducing commonly asked questions",
    faqEmpty: "We are currently preparing frequently asked questions."
  }
};

export const metadata: Metadata = {
  title: '当事務所の特徴 | フォルティア行政書士事務所',
  description: 'フォルティア行政書士事務所の特徴をご紹介します。豊富な実績と専門知識で、お客様のニーズにお応えします。',
};


interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function FeaturesPage({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const faqData = featuresFaqContent[lang];
  const faqs = faqData.faqs;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <PageHeader 
        title={t.pageTitle}
        description={t.pageDescription}
      />
      
      {/* Breadcrumb */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href={`/${lang}`} className="hover:text-gray-700">
              {t.breadcrumbHome}
            </Link>
            <span>／</span>
            <span className="text-gray-900">{t.breadcrumbFeatures}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004080' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Catchcopy */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.heroTitle1}<br className="sm:hidden" />
              <span className="text-[#004080]">{t.heroTitle2}</span>
            </h1>
            
            {/* Sub Catchcopy */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              {t.heroSubtitle}
            </p>
            
            {/* 3 Key Points */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{t.keyPoint1.title}</p>
                  <p className="text-sm text-gray-600">{t.keyPoint1.subtitle}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{t.keyPoint2.title}</p>
                  <p className="text-sm text-gray-600">{t.keyPoint2.subtitle}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{t.keyPoint3.title}</p>
                  <p className="text-sm text-gray-600">{t.keyPoint3.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 2-column issues */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              {t.concernsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.concerns.map((concern, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">{concern.title}</h4>
                  <p className="text-gray-600">{concern.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Points */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.solutionTitle}<span className="text-[#004080]">{t.solutionHighlight}</span>{t.solutionTitle2}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {t.solutionDescription}
              </p>
            </div>
            
            {/* 4 Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.strengthsGrid.map((strength, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{strength.title}</h3>
                      <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Point 1 - 申請実績 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt="申請実績のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">{t.detailedStrengths.point1.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t.detailedStrengths.point1.title}
                  </h3>
                  
                  {/* 実績数字の強調 */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#004080]">10,000+</p>
                      <p className="text-sm text-gray-600">{t.detailedStrengths.point1.statsTitle1}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-green-600">99%</p>
                      <p className="text-sm text-gray-600">{t.detailedStrengths.point1.statsTitle2}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t.detailedStrengths.point1.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 - 料金設定 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt="料金体系のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">{t.detailedStrengths.point2.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t.detailedStrengths.point2.title}
                  </h3>
                  
                  {/* 料金メリットの強調 */}
                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{t.detailedStrengths.point2.savingsText}</p>
                        <p className="text-4xl font-bold text-orange-600">{t.detailedStrengths.point2.savingsAmount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">{t.detailedStrengths.point2.guarantee1}</p>
                        <p className="text-sm text-gray-600">{t.detailedStrengths.point2.guarantee2}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t.detailedStrengths.point2.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 - 多言語対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-full">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt="多言語対応のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">{t.detailedStrengths.point3.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t.detailedStrengths.point3.title}
                  </h3>
                  
                  {/* 対応言語の表示 */}
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t.detailedStrengths.point3.languagesTitle}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { flag: "🇬🇧", lang: t.detailedStrengths.point3.languages[0] },
                        { flag: "🇨🇳", lang: t.detailedStrengths.point3.languages[1] },
                        { flag: "🇻🇳", lang: t.detailedStrengths.point3.languages[2] },
                        { flag: "🇵🇭", lang: t.detailedStrengths.point3.languages[3] },
                        { flag: "🇰🇷", lang: t.detailedStrengths.point3.languages[4] },
                        { flag: "🇵🇹", lang: t.detailedStrengths.point3.languages[5] }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-lg">{item.flag}</span>
                          <span className="text-sm">{item.lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t.detailedStrengths.point3.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 - スピード対応 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[35%] h-[200px] md:h-[300px]">
                  <div className="bg-gray-200 flex items-center justify-center h-full">
                    <span className="text-gray-500 text-lg">イメージ</span>
                  </div>
                </div>
                <div className="w-full md:w-[65%] p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-sm font-semibold text-gray-500 mr-4">{t.detailedStrengths.point4.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t.detailedStrengths.point4.title}
                  </h3>
                  
                  {/* スピードと利便性の強調 */}
                  <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <p className="text-sm font-semibold text-gray-700">{t.detailedStrengths.point4.feature1}</p>
                        <p className="text-xs text-gray-600">{t.detailedStrengths.point4.feature1Sub}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">💻</div>
                        <p className="text-sm font-semibold text-gray-700">{t.detailedStrengths.point4.feature2}</p>
                        <p className="text-xs text-gray-600">{t.detailedStrengths.point4.feature2Sub}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t.detailedStrengths.point4.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.trustTitle}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800">
              {t.trustSubtitle}
            </h3>
          </div>

          {/* Company Logos Grid */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-8">
              {t.trustCompanies}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">{t.trustLogo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {faqData.title}
            </h2>
            <h3 className="text-xl font-medium text-gray-800">
              {faqData.subtitle}
            </h3>
          </div>

          {faqs.length > 0 ? (
            <FaqAccordion faqs={faqs} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              {t.faqEmpty}
            </div>
          )}
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}