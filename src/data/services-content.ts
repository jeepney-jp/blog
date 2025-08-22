import { Locale } from '@/lib/i18n/types';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  colorClass: {
    bg: string;
    text: string;
  };
}

interface ServicesContent {
  title: string;
  description: string;
  searchTitle: string;
  searchDescription: string;
  categories: ServiceCategory[];
}

type ServicesContentMultilang = {
  [K in Locale]: ServicesContent;
};

export const servicesContent: ServicesContentMultilang = {
  ja: {
    title: "サービス総合案内",
    description: "お客様のニーズに合わせた幅広いサービスを提供しています",
    searchTitle: "カテゴリーから探す",
    searchDescription: "業種や目的からお探しください",
    categories: [
      {
        id: "foreign",
        title: "外国人関連業務",
        description: "在留資格・ビザ申請サポート",
        slug: "foreign",
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        colorClass: {
          bg: "bg-blue-100",
          text: "text-blue-600"
        }
      },
      {
        id: "construction",
        title: "建設・宅建業関連",
        description: "建設業許可・宅建業免許",
        slug: "construction",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        colorClass: {
          bg: "bg-green-100",
          text: "text-green-600"
        }
      },
      {
        id: "automotive",
        title: "自動車関連業務",
        description: "車庫証明・自動車登録",
        slug: "automotive",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        colorClass: {
          bg: "bg-red-100",
          text: "text-red-600"
        }
      },
      {
        id: "food-entertainment",
        title: "飲食・風俗営業",
        description: "飲食店営業許可・風俗営業許可",
        slug: "food-entertainment",
        icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
        colorClass: {
          bg: "bg-orange-100",
          text: "text-orange-600"
        }
      },
      {
        id: "waste-management",
        title: "廃棄物処理業許可",
        description: "産業廃棄物収集運搬業許可",
        slug: "waste-management",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
        colorClass: {
          bg: "bg-purple-100",
          text: "text-purple-600"
        }
      },
      {
        id: "travel-hospitality",
        title: "旅行・旅館業",
        description: "旅行業登録・旅館業許可",
        slug: "travel-hospitality",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-teal-100",
          text: "text-teal-600"
        }
      },
      {
        id: "corporate",
        title: "法人設立業務",
        description: "株式会社・合同会社設立",
        slug: "corporate",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        colorClass: {
          bg: "bg-indigo-100",
          text: "text-indigo-600"
        }
      },
      {
        id: "business-license",
        title: "営業許可",
        description: "各種営業許可申請",
        slug: "business-license",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-yellow-100",
          text: "text-yellow-600"
        }
      },
      {
        id: "land",
        title: "土地関連業務",
        description: "農地転用・開発許可",
        slug: "land",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-emerald-100",
          text: "text-emerald-600"
        }
      },
      {
        id: "legal-documentation",
        title: "権利義務・事実証明",
        description: "契約書作成・内容証明",
        slug: "legal-documentation",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        colorClass: {
          bg: "bg-rose-100",
          text: "text-rose-600"
        }
      },
      {
        id: "medical-care",
        title: "医療・介護関連業務",
        description: "医療法人設立・介護事業所指定",
        slug: "medical-care",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        colorClass: {
          bg: "bg-pink-100",
          text: "text-pink-600"
        }
      },
      {
        id: "other",
        title: "その他の業務",
        description: "各種許認可・手続き代行",
        slug: "other",
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
        colorClass: {
          bg: "bg-gray-100",
          text: "text-gray-600"
        }
      }
    ]
  },
  en: {
    title: "Service Overview",
    description: "We provide a wide range of services tailored to your needs",
    searchTitle: "Search by Category",
    searchDescription: "Find services by industry or purpose",
    categories: [
      {
        id: "foreign",
        title: "Foreign Resident Services",
        description: "Visa & residence status applications",
        slug: "foreign",
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        colorClass: {
          bg: "bg-blue-100",
          text: "text-blue-600"
        }
      },
      {
        id: "construction",
        title: "Construction & Real Estate",
        description: "Construction permits & real estate licenses",
        slug: "construction",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        colorClass: {
          bg: "bg-green-100",
          text: "text-green-600"
        }
      },
      {
        id: "automotive",
        title: "Automotive Services",
        description: "Vehicle registration & garage certificates",
        slug: "automotive",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        colorClass: {
          bg: "bg-red-100",
          text: "text-red-600"
        }
      },
      {
        id: "food-entertainment",
        title: "Food & Entertainment",
        description: "Restaurant & entertainment licenses",
        slug: "food-entertainment",
        icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
        colorClass: {
          bg: "bg-orange-100",
          text: "text-orange-600"
        }
      },
      {
        id: "waste-management",
        title: "Waste Management",
        description: "Industrial waste collection permits",
        slug: "waste-management",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
        colorClass: {
          bg: "bg-purple-100",
          text: "text-purple-600"
        }
      },
      {
        id: "travel-hospitality",
        title: "Travel & Hospitality",
        description: "Travel agency & hotel business permits",
        slug: "travel-hospitality",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-teal-100",
          text: "text-teal-600"
        }
      },
      {
        id: "corporate",
        title: "Corporate Establishment",
        description: "Company incorporation services",
        slug: "corporate",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        colorClass: {
          bg: "bg-indigo-100",
          text: "text-indigo-600"
        }
      },
      {
        id: "business-license",
        title: "Business Licenses",
        description: "Various business permit applications",
        slug: "business-license",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-yellow-100",
          text: "text-yellow-600"
        }
      },
      {
        id: "land",
        title: "Land-related Services",
        description: "Agricultural land conversion & development permits",
        slug: "land",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        colorClass: {
          bg: "bg-emerald-100",
          text: "text-emerald-600"
        }
      },
      {
        id: "legal-documentation",
        title: "Legal Documentation",
        description: "Contract drafting & certified mail",
        slug: "legal-documentation",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        colorClass: {
          bg: "bg-rose-100",
          text: "text-rose-600"
        }
      },
      {
        id: "medical-care",
        title: "Medical & Care Services",
        description: "Medical corporation & care facility permits",
        slug: "medical-care",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        colorClass: {
          bg: "bg-pink-100",
          text: "text-pink-600"
        }
      },
      {
        id: "other",
        title: "Other Services",
        description: "Various permits & administrative procedures",
        slug: "other",
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
        colorClass: {
          bg: "bg-gray-100",
          text: "text-gray-600"
        }
      }
    ]
  },
  'zh-CN': {
    title: "服务总览",
    description: "提供满足客户需求的广泛服务",
    searchTitle: "按类别搜索",
    searchDescription: "按行业或目的查找服务",
    categories: []
  },
  'zh-TW': {
    title: "服務總覽",
    description: "提供滿足客戶需求的廣泛服務",
    searchTitle: "按類別搜尋",
    searchDescription: "按行業或目的查找服務",
    categories: []
  }
};

export type { ServiceCategory, ServicesContent };