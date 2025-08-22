import Link from "next/link";
import Image from 'next/image';
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { getNews } from '@/lib/sanity';
import { Locale } from '@/lib/i18n/types';
import { servicesContent } from '@/data/services-content';

// ISR設定：60秒ごとに再生成（開発中は短めに設定）
export const revalidate = 60;

// カテゴリIDからアイコンファイル名へのマッピング
function getIconFileName(categoryId: string): string {
  const iconMap: { [key: string]: string } = {
    'foreign': 'foreign-resident',
    'construction': 'construction-realestate',
    'automotive': 'automotive',
    'food-entertainment': 'restaurant-entertainment',
    'waste-management': 'waste-management',
    'travel-hospitality': 'travel-hotel',
    'corporate': 'corporate-establishment',
    'business-license': 'business-license',
    'land': 'land-services',
    'legal-documentation': 'rights-documentation',
    'medical-care': 'medical-care',
    'other': 'other-services'
  };
  
  return iconMap[categoryId] || 'other-services';
}

interface PageProps {
  params: Promise<{ lang: Locale }>;
}


interface NewsItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  category: string;
}



// 多言語コンテンツ
const content = {
  ja: {
    hero: {
      title1: "人と社会をつなげる、",
      title2: "リーガルサービス",
      freeConsultation: "無料相談はこちらから",
      viewServices: "サービス内容を見る",
    },
    features: {
      title: "当事務所の特徴",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "申請実績10,000件超の信頼",
        description: "2008年の創業以来、10,000件を超える申請を支援し、許可率99％を誇る確かな実績と信頼があります。",
        applications: "申請実績",
        approvalRate: "許可率",
      },
      pricing: {
        title: "業界最安水準の料金設定",
        description: "高品質なサービスを低価格でご提供、無駄を省いた効率的な業務で、業界最安水準の料金を実現しています。",
        savings: "平均相場より最大30%安い",
        comparison: "他社との見積もり比較で実感",
      },
      multilingual: {
        title: "多言語対応で安心サポート",
        description: "多言語対応スタッフが母国語でサポート。日本語に不安のある方でも安心してご相談いただけます。",
      },
    },
    services: {
      title: "サービス",
      subtitle: "OUR SERVICES",
      searchByName: "サービス名から探す",
      searchByCategory: "カテゴリから探す",
      viewAll: "すべて見る",
    },
    about: {
      title: "事務所案内",
      subtitle: "ABOUT US",
      description: "お客様の人生に寄り添いながら、一人ひとりのニーズに合わせたオーダーメイドのサービスをご提供します。在留資格から許認可まで、幅広い分野で皆様をサポートいたします。",
      learnMore: "詳しく見る",
    },
    news: {
      title: "最新のお知らせ",
      subtitle: "NEWS & UPDATES",
      viewAll: "すべてのお知らせを見る",
      noNews: "現在お知らせはございません。",
    },
  },
  en: {
    hero: {
      title1: "Legal Services Connecting",
      title2: "People and Society",
      freeConsultation: "Free Consultation",
      viewServices: "View Our Services",
    },
    features: {
      title: "Our Strengths",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "Trusted with 10,000+ Applications",
        description: "Since our founding in 2008, we have supported over 10,000 applications with a 99% approval rate, demonstrating our proven track record and reliability.",
        applications: "Applications",
        approvalRate: "Approval Rate",
      },
      pricing: {
        title: "Industry-Leading Affordable Rates",
        description: "We provide high-quality services at low prices. Through efficient operations that eliminate waste, we achieve industry-leading affordable rates.",
        savings: "Up to 30% less than average market rates",
        comparison: "Compare quotes with competitors to see the difference",
      },
      multilingual: {
        title: "Multilingual Support for Peace of Mind",
        description: "Our multilingual staff provide support in your native language. Even if you're not confident in Japanese, you can consult with us with peace of mind.",
      },
    },
    services: {
      title: "Services",
      subtitle: "OUR SERVICES",
      searchByName: "Search by Service Name",
      searchByCategory: "Search by Category",
      viewAll: "View All",
    },
    about: {
      title: "About Us",
      subtitle: "ABOUT US",
      description: "We provide customized services tailored to each individual's needs while staying close to our clients' lives. We support you in a wide range of fields, from residence status to permits and licenses.",
      learnMore: "Learn More",
    },
    news: {
      title: "Latest News",
      subtitle: "NEWS & UPDATES",
      viewAll: "View All News",
      noNews: "No news available at the moment.",
    },
  },
  'zh-CN': {
    hero: {
      title1: "连接人与社会的",
      title2: "法律服务",
      freeConsultation: "免费咨询请点击这里",
      viewServices: "查看服务内容",
    },
    features: {
      title: "本事务所特色",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "超过10,000件申请实绩的信赖",
        description: "自2008年创业以来，支持了10,000件以上的申请，拥有99%批准率的确实实绩和信赖。",
        applications: "申请实绩",
        approvalRate: "批准率",
      },
      pricing: {
        title: "业界最低水准的费用设定",
        description: "以低价格提供高品质服务，通过消除浪费的高效业务，实现业界最低水准的费用。",
        savings: "比平均行情最多便宜30%",
        comparison: "与其他公司的报价比较中体验",
      },
      multilingual: {
        title: "多语言对应的安心支持",
        description: "多语言对应工作人员用母语提供支持。对日语不安的人也可以安心咨询。",
      },
    },
    services: {
      title: "服务",
      subtitle: "OUR SERVICES",
      searchByName: "按服务名称查找",
      searchByCategory: "按类别查找",
      viewAll: "查看全部",
    },
    about: {
      title: "事务所介绍",
      subtitle: "ABOUT US",
      description: "在贴近客户人生的同时，提供符合每个人需求的定制服务。从在留资格到许可认证，在广泛的领域为大家提供支持。",
      learnMore: "详细了解",
    },
    news: {
      title: "最新通知",
      subtitle: "NEWS & UPDATES",
      viewAll: "查看所有通知",
      noNews: "目前没有通知。",
    },
  },
  'zh-TW': {
    hero: {
      title1: "連接人與社會的",
      title2: "法律服務",
      freeConsultation: "免費諮詢請點擊這裡",
      viewServices: "查看服務內容",
    },
    features: {
      title: "本事務所特色",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "超過10,000件申請實績的信賴",
        description: "自2008年創業以來，支援了10,000件以上的申請，擁有99%批准率的確實實績和信賴。",
        applications: "申請實績",
        approvalRate: "批准率",
      },
      pricing: {
        title: "業界最低水準的費用設定",
        description: "以低價格提供高品質服務，透過消除浪費的高效業務，實現業界最低水準的費用。",
        savings: "比平均行情最多便宜30%",
        comparison: "與其他公司的報價比較中體驗",
      },
      multilingual: {
        title: "多語言對應的安心支援",
        description: "多語言對應工作人員用母語提供支援。對日語不安的人也可以安心諮詢。",
      },
    },
    services: {
      title: "服務",
      subtitle: "OUR SERVICES",
      searchByName: "按服務名稱查找",
      searchByCategory: "按類別查找",
      viewAll: "查看全部",
    },
    about: {
      title: "事務所介紹",
      subtitle: "ABOUT US",
      description: "在貼近客戶人生的同時，提供符合每個人需求的訂製服務。從在留資格到許可認證，在廣泛的領域為大家提供支援。",
      learnMore: "詳細了解",
    },
    news: {
      title: "最新通知",
      subtitle: "NEWS & UPDATES",
      viewAll: "查看所有通知",
      noNews: "目前沒有通知。",
    },
  },
  vi: {
    hero: {
      title1: "Dịch vụ pháp lý kết nối",
      title2: "con người và xã hội",
      freeConsultation: "Tư vấn miễn phí tại đây",
      viewServices: "Xem nội dung dịch vụ",
    },
    features: {
      title: "Đặc điểm văn phòng chúng tôi",
      subtitle: "OUR STRENGTHS",
      achievement: {
        title: "Niềm tin với hơn 10,000 hồ sơ xử lý",
        description: "Từ khi thành lập năm 2008, chúng tôi đã hỗ trợ hơn 10,000 đơn xin với tỷ lệ phê duyệt 99%, thể hiện thành tích và uy tín vững chắc.",
        applications: "Thành tích xử lý",
        approvalRate: "Tỷ lệ phê duyệt",
      },
      pricing: {
        title: "Mức giá thấp nhất ngành",
        description: "Cung cấp dịch vụ chất lượng cao với giá thấp, thông qua hoạt động hiệu quả loại bỏ lãng phí, chúng tôi đạt được mức giá thấp nhất ngành.",
        savings: "Rẻ hơn giá thị trường tối đa 30%",
        comparison: "Cảm nhận qua so sánh báo giá với các công ty khác",
      },
      multilingual: {
        title: "Hỗ trợ an tâm với nhiều ngôn ngữ",
        description: "Nhân viên hỗ trợ đa ngôn ngữ sẽ hỗ trợ bằng tiếng mẹ đẻ. Những người lo lắng về tiếng Nhật cũng có thể tư vấn một cách yên tâm.",
      },
    },
    services: {
      title: "Dịch vụ",
      subtitle: "OUR SERVICES",
      searchByName: "Tìm theo tên dịch vụ",
      searchByCategory: "Tìm theo danh mục",
      viewAll: "Xem tất cả",
    },
    about: {
      title: "Giới thiệu văn phòng",
      subtitle: "ABOUT US",
      description: "Chúng tôi cung cấp dịch vụ tùy chỉnh phù hợp với nhu cầu của từng cá nhân trong khi gắn bó với cuộc sống của khách hàng. Chúng tôi hỗ trợ bạn trong nhiều lĩnh vực rộng lớn, từ tư cách lưu trú đến giấy phép.",
      learnMore: "Tìm hiểu chi tiết",
    },
    news: {
      title: "Thông báo mới nhất",
      subtitle: "NEWS & UPDATES",
      viewAll: "Xem tất cả thông báo",
      noNews: "Hiện tại không có thông báo nào.",
    },
  },
};

// カテゴリーマッピング（ニュース用）
const categoryMap: { [key: string]: { ja: { name: string; color: string }, en: { name: string; color: string }, 'zh-CN': { name: string; color: string }, 'zh-TW': { name: string; color: string }, vi: { name: string; color: string } } } = {
  business_notice: { 
    ja: { name: '営業案内', color: 'bg-green-100 text-green-800' },
    en: { name: 'Business Notice', color: 'bg-green-100 text-green-800' },
    'zh-CN': { name: '营业通知', color: 'bg-green-100 text-green-800' },
    'zh-TW': { name: '營業通知', color: 'bg-green-100 text-green-800' },
    vi: { name: 'Thông báo kinh doanh', color: 'bg-green-100 text-green-800' }
  },
  important: { 
    ja: { name: '重要なお知らせ', color: 'bg-red-100 text-red-800' },
    en: { name: 'Important Notice', color: 'bg-red-100 text-red-800' },
    'zh-CN': { name: '重要通知', color: 'bg-red-100 text-red-800' },
    'zh-TW': { name: '重要通知', color: 'bg-red-100 text-red-800' },
    vi: { name: 'Thông báo quan trọng', color: 'bg-red-100 text-red-800' }
  },
  event: { 
    ja: { name: 'イベント', color: 'bg-blue-100 text-blue-800' },
    en: { name: 'Events', color: 'bg-blue-100 text-blue-800' },
    'zh-CN': { name: '活动', color: 'bg-blue-100 text-blue-800' },
    'zh-TW': { name: '活動', color: 'bg-blue-100 text-blue-800' },
    vi: { name: 'Sự kiện', color: 'bg-blue-100 text-blue-800' }
  },
  media: { 
    ja: { name: 'メディア', color: 'bg-pink-100 text-pink-800' },
    en: { name: 'Media', color: 'bg-pink-100 text-pink-800' },
    'zh-CN': { name: '媒体', color: 'bg-pink-100 text-pink-800' },
    'zh-TW': { name: '媒體', color: 'bg-pink-100 text-pink-800' },
    vi: { name: 'Truyền thông', color: 'bg-pink-100 text-pink-800' }
  },
  case_study: { 
    ja: { name: '実績紹介', color: 'bg-indigo-100 text-indigo-800' },
    en: { name: 'Case Studies', color: 'bg-indigo-100 text-indigo-800' },
    'zh-CN': { name: '案例介绍', color: 'bg-indigo-100 text-indigo-800' },
    'zh-TW': { name: '案例介紹', color: 'bg-indigo-100 text-indigo-800' },
    vi: { name: 'Giới thiệu thành tích', color: 'bg-indigo-100 text-indigo-800' }
  },
};

// 多言語対応配列
const languages = {
  ja: ["英語", "中国語", "ベトナム語", "タガログ語", "ネパール語", "シンハラ語", "韓国語", "イタリア語", "スペイン語"],
  en: ["English", "Chinese", "Vietnamese", "Tagalog", "Nepali", "Sinhala", "Korean", "Italian", "Spanish"],
  'zh-CN': ["英语", "中文", "越南语", "他加禄语", "尼泊尔语", "僧伽罗语", "韩语", "意大利语", "西班牙语"],
  'zh-TW': ["英語", "中文", "越南語", "他加祿語", "尼泊爾語", "僧伽羅語", "韓語", "義大利語", "西班牙語"],
  vi: ["Tiếng Anh", "Tiếng Trung", "Tiếng Việt", "Tiếng Tagalog", "Tiếng Nepal", "Tiếng Sinhala", "Tiếng Hàn", "Tiếng Ý", "Tiếng Tây Ban Nha"]
};


// Static params generation
export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' }
  ];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = content[lang];
  const basePath = `/${lang}`;
  
  // データ取得
  let newsItems: NewsItem[] = [];
  
  try {
    newsItems = await getNews().catch(() => []);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const latestNews = newsItems.slice(0, 5);
  
  // サービスカテゴリを取得
  const serviceCategories = servicesContent[lang].categories;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />

      {/* ヒーローセクション */}
      <section className="relative text-white min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hero-background2.png')"}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="text-blue-600 block mb-2 drop-shadow-lg">{t.hero.title1}</span>
              <span className="text-blue-600 block drop-shadow-lg">{t.hero.title2}</span>
            </h1>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 items-start">
              <Link 
                href={`${basePath}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t.hero.freeConsultation}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href={`${basePath}/services`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-transparent rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 border-2 border-blue-600 shadow-lg"
              >
                {t.hero.viewServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 当事務所の特徴セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.features.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 申請実績 */}
            <ScrollAnimationWrapper delay={0}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-48">
                  <Image
                    src="/申請実績1,000件超の信頼.png"
                    alt={t.features.achievement.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-8 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{t.features.achievement.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-24 mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {t.features.achievement.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  {/* 統計値表示エリア */}
                  <div className="h-20 flex items-center">
                    <div className="flex justify-around text-center w-full">
                      <div>
                        <p className="text-3xl font-bold text-blue-600">10,000+</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.applications}</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">99%</p>
                        <p className="text-sm text-gray-500 mt-1">{t.features.achievement.approvalRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 料金設定 */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-48">
                  <Image
                    src="/完全成果報酬制で明朗な料金体系.png"
                    alt={t.features.pricing.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-8 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{t.features.pricing.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-24 mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {t.features.pricing.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  {/* ハイライトボックス */}
                  <div className="h-20 flex items-center">
                    <div className="bg-blue-50 rounded-lg p-4 text-center w-full">
                      <p className="text-blue-900 font-bold text-lg">{t.features.pricing.savings}</p>
                      <p className="text-blue-700 text-sm mt-1">{t.features.pricing.comparison}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* 多言語対応 */}
            <ScrollAnimationWrapper delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-full h-48">
                  <Image
                    src="/母国語対応で安心サポート.png"
                    alt={t.features.multilingual.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {/* タイトルエリア - 固定高 */}
                  <div className="h-8 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{t.features.multilingual.title}</h3>
                  </div>
                  {/* 説明文エリア - 固定高 */}
                  <div className="h-24 mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {t.features.multilingual.description}
                    </p>
                  </div>
                  {/* 薄い区切り線 */}
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  {/* 言語タグエリア */}
                  <div className="h-20 flex items-center">
                    <div className="grid grid-cols-3 gap-2 w-full">
                      {languages[lang].map((language, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-900 rounded text-sm font-medium text-center border border-blue-100">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {serviceCategories.map((category, index) => (
              <ScrollAnimationWrapper key={category.id} delay={index * 0.1}>
                <Link href={`${basePath}/services/${category.slug}`}>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md md:hover:scale-105 hover:bg-blue-100/70 transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer">
                    <div className="w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px] mb-2 sm:mb-4">
                      <Image
                        src={`/service-icons/${getIconFileName(category.id)}.png`}
                        alt={category.title}
                        width={108}
                        height={108}
                        className="object-contain mx-auto w-16 sm:w-20 md:w-[108px] h-16 sm:h-20 md:h-[108px]"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 事務所案内セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.about.subtitle}</p>
          </div>
          <ScrollAnimationWrapper delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] order-1 lg:order-1">
                <Image
                  src="/office-consultation.jpg" 
                  alt="Office consultation"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-2 lg:order-2">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.about.description}
                </p>
                <Link
                  href={`${basePath}/about`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {t.about.learnMore}
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.news.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 tracking-widest">{t.news.subtitle}</p>
          </div>
          {latestNews.length > 0 ? (
            <ScrollAnimationWrapper delay={0}>
              <div className="max-w-6xl mx-auto">
                <ul className="space-y-3">
                  {latestNews.map((news: NewsItem) => (
                    <li key={news._id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <Link
                        href={`${basePath}/news/${news.slug.current}`}
                        className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <time className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0 w-24">
                            {new Date(news.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US')}
                          </time>
                          <div className="flex-shrink-0">
                            {news.category && categoryMap[news.category] && (
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${categoryMap[news.category][lang].color}`}>
                                {categoryMap[news.category][lang].name}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors flex-1 line-clamp-1">
                            {news.title}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ) : (
            <ScrollAnimationWrapper delay={0}>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t.news.noNews}</p>
              </div>
            </ScrollAnimationWrapper>
          )}
          <div className="text-center mt-12">
            <Link
              href={`${basePath}/news`}
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.news.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}