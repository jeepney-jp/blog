import { Locale } from '@/lib/i18n/types';

interface ServiceItem {
  id: string;
  title: string;
  target: string;
  priceMin?: number;
  priceMax?: number;
  priceNote?: string;
  overview?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface CategoryPageContent {
  title: string;
  catchphrase: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  services: ServiceItem[];
  faq: FaqItem[];
  breadcrumbs: {
    home: string;
    services: string;
  };
  tableHeaders: {
    serviceName: string;
    serviceOverview: string;
    pricingGuide: string;
  };
  faqTitle: string;
}

type CategoryPagesContent = {
  [K in Locale]: {
    [categorySlug: string]: CategoryPageContent;
  };
};

export const categoryPagesContent: CategoryPagesContent = {
  ja: {
    foreign: {
      title: "外国人関連業務",
      catchphrase: "在留資格・ビザ申請のプロフェッショナルサポート",
      heroTitle: "【専門家がサポート】外国人関連業務のご案内",
      metaTitle: "外国人関連業務 | フォルティア行政書士事務所",
      metaDescription: "在留資格・ビザ申請の専門家が安心サポート。特定技能、技術・人文知識・国際業務、経営・管理など幅広く対応。",
      services: [
        {
          id: "specified-skilled-worker",
          title: "特定技能ビザ",
          target: "特定の分野で働く外国人の方",
          priceMin: 100000,
          priceMax: 200000,
          overview: "人手不足が深刻な特定産業分野において、一定の専門性・技能を有する外国人を受け入れる制度"
        },
        {
          id: "engineer-humanities",
          title: "技術・人文知識・国際業務ビザ",
          target: "技術職・事務職・通訳翻訳などで働く外国人の方",
          priceMin: 120000,
          priceMax: 250000,
          overview: "日本の企業で専門的な業務に従事する外国人向けの就労ビザ"
        },
        {
          id: "business-manager",
          title: "経営・管理ビザ",
          target: "日本で起業・経営を行う外国人の方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "日本において事業の経営を行い又は事業の管理に従事する外国人向けのビザ"
        },
        {
          id: "spouse-visa",
          title: "日本人の配偶者等ビザ",
          target: "日本人と結婚された外国人の方",
          priceMin: 80000,
          priceMax: 150000,
          overview: "日本人の配偶者・子・特別養子として日本に在住する外国人向けのビザ"
        },
        {
          id: "permanent-resident",
          title: "永住許可申請",
          target: "日本に永住を希望する外国人の方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "日本に永続的に在留することを希望する外国人向けの許可申請"
        },
        {
          id: "naturalization",
          title: "帰化許可申請",
          target: "日本国籍の取得を希望する外国人の方",
          priceMin: 200000,
          priceMax: 500000,
          overview: "外国人が日本国籍を取得するための許可申請手続き"
        }
      ],
      faq: [
        {
          question: "ビザ申請にはどのくらいの期間がかかりますか？",
          answer: "申請内容により異なりますが、一般的には1〜3ヶ月程度です。特定技能ビザは比較的早く、永住許可申請は時間がかかる傾向があります。"
        },
        {
          question: "必要書類は何ですか？",
          answer: "申請するビザの種類により異なります。詳細については無料相談でご案内いたします。一般的にはパスポート、在留カード、所得証明書、雇用契約書などが必要です。"
        },
        {
          question: "申請が不許可になった場合はどうなりますか？",
          answer: "不許可の理由を分析し、再申請の準備をサポートいたします。当事務所では高い許可率を誇っておりますので、安心してお任せください。"
        }
      ],
      breadcrumbs: {
        home: "ホーム",
        services: "サービス案内"
      },
      tableHeaders: {
        serviceName: "サービス名",
        serviceOverview: "サービス概要",
        pricingGuide: "料金目安"
      },
      faqTitle: "よくあるご質問"
    },
    construction: {
      title: "建設・宅建業関連",
      catchphrase: "建設業許可・宅建業免許の専門サポート",
      heroTitle: "【専門家がサポート】建設・宅建業関連のご案内",
      metaTitle: "建設・宅建業関連 | フォルティア行政書士事務所",
      metaDescription: "建設業許可、宅建業免許の取得から更新まで専門家がサポート。経験豊富な行政書士が確実な手続きを提供。",
      services: [
        {
          id: "construction-permit",
          title: "建設業許可申請",
          target: "建設業を営む事業者の方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "建設工事を請け負うために必要な許可の取得申請"
        },
        {
          id: "construction-renewal",
          title: "建設業許可更新",
          target: "既に建設業許可を取得している事業者の方",
          priceMin: 80000,
          priceMax: 150000,
          overview: "5年ごとに必要な建設業許可の更新手続き"
        },
        {
          id: "real-estate-license",
          title: "宅建業免許申請",
          target: "不動産業を営む事業者の方",
          priceMin: 200000,
          priceMax: 350000,
          overview: "宅地建物取引業を営むために必要な免許の取得申請"
        },
        {
          id: "construction-change",
          title: "建設業許可変更届",
          target: "許可内容に変更が生じた事業者の方",
          priceMin: 30000,
          priceMax: 80000,
          overview: "商号変更、役員変更等に伴う変更届出手続き"
        }
      ],
      faq: [
        {
          question: "建設業許可はいつから必要ですか？",
          answer: "建築一式工事で1,500万円以上、その他の工事で500万円以上の請負工事を行う場合に必要です。"
        },
        {
          question: "許可の有効期間はどのくらいですか？",
          answer: "建設業許可、宅建業免許ともに5年間です。期限前に更新手続きが必要です。"
        }
      ],
      breadcrumbs: {
        home: "ホーム",
        services: "サービス案内"
      },
      tableHeaders: {
        serviceName: "サービス名",
        serviceOverview: "サービス概要",
        pricingGuide: "料金目安"
      },
      faqTitle: "よくあるご質問"
    },
    automotive: {
      title: "自動車関連業務",
      catchphrase: "車庫証明・自動車登録の迅速サポート",
      heroTitle: "【専門家がサポート】自動車関連業務のご案内",
      metaTitle: "自動車関連業務 | フォルティア行政書士事務所",
      metaDescription: "車庫証明、自動車登録の手続きを迅速サポート。忙しい方に代わって確実な手続きを代行いたします。",
      services: [
        {
          id: "garage-certificate",
          title: "車庫証明申請",
          target: "新車・中古車を購入される方",
          priceMin: 15000,
          priceMax: 25000,
          overview: "自動車の保管場所証明書の取得申請"
        },
        {
          id: "vehicle-registration",
          title: "自動車登録",
          target: "自動車の名義変更が必要な方",
          priceMin: 20000,
          priceMax: 40000,
          overview: "移転登録、変更登録等の各種自動車登録手続き"
        },
        {
          id: "number-change",
          title: "ナンバープレート変更",
          target: "引越し等でナンバー変更が必要な方",
          priceMin: 10000,
          priceMax: 20000,
          overview: "住所変更に伴うナンバープレートの変更手続き"
        }
      ],
      faq: [
        {
          question: "車庫証明の取得にはどのくらい時間がかかりますか？",
          answer: "申請から交付まで通常3〜7日程度です。地域により多少異なります。"
        },
        {
          question: "必要な書類は何ですか？",
          answer: "車庫証明には保管場所使用権原疎明書面、所在図・配置図などが必要です。詳細はお問い合わせください。"
        }
      ],
      breadcrumbs: {
        home: "ホーム",
        services: "サービス案内"
      },
      tableHeaders: {
        serviceName: "サービス名",
        serviceOverview: "サービス概要",
        pricingGuide: "料金目安"
      },
      faqTitle: "よくあるご質問"
    }
  },
  en: {
    foreign: {
      title: "Foreign Resident Services",
      catchphrase: "Professional support for visa and residence status applications",
      heroTitle: "Foreign Resident Services - Professional Support",
      metaTitle: "Foreign Resident Services | Fortia Administrative Law Office",
      metaDescription: "Expert support for visa and residence status applications. Comprehensive assistance for Specified Skilled Worker, Engineer, Business Manager visas and more.",
      services: [
        {
          id: "specified-skilled-worker",
          title: "Specified Skilled Worker Visa",
          target: "Foreign workers in specific industries",
          priceMin: 100000,
          priceMax: 200000,
          overview: "A system to accept foreign workers with certain expertise and skills in specific industrial fields facing serious labor shortages"
        },
        {
          id: "engineer-humanities",
          title: "Engineer/Humanities/International Services Visa",
          target: "Foreign workers in technical, clerical, or interpretation/translation roles",
          priceMin: 120000,
          priceMax: 250000,
          overview: "Work visa for foreigners engaged in specialized work at Japanese companies"
        },
        {
          id: "business-manager",
          title: "Business Manager Visa",
          target: "Foreign entrepreneurs and business managers in Japan",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Visa for foreigners who manage businesses or engage in business management in Japan"
        },
        {
          id: "spouse-visa",
          title: "Spouse of Japanese National Visa",
          target: "Foreign nationals married to Japanese citizens",
          priceMin: 80000,
          priceMax: 150000,
          overview: "Visa for foreigners residing in Japan as spouses, children, or special adoptees of Japanese nationals"
        },
        {
          id: "permanent-resident",
          title: "Permanent Residence Application",
          target: "Foreign nationals seeking permanent residence in Japan",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Permission application for foreigners wishing to reside permanently in Japan"
        },
        {
          id: "naturalization",
          title: "Naturalization Application",
          target: "Foreign nationals seeking Japanese citizenship",
          priceMin: 200000,
          priceMax: 500000,
          overview: "Permission application process for foreigners to acquire Japanese nationality"
        }
      ],
      faq: [
        {
          question: "How long does a visa application take?",
          answer: "It varies depending on the application type, but generally takes 1-3 months. Specified Skilled Worker visas tend to be processed relatively quickly, while permanent residence applications take longer."
        },
        {
          question: "What documents are required?",
          answer: "Required documents vary by visa type. We'll provide detailed guidance during a free consultation. Generally, passport, residence card, income certificate, employment contract, etc. are needed."
        },
        {
          question: "What happens if the application is denied?",
          answer: "We analyze the reason for denial and support preparation for reapplication. Our office boasts a high approval rate, so you can trust us with confidence."
        }
      ],
      breadcrumbs: {
        home: "Home",
        services: "Services"
      },
      tableHeaders: {
        serviceName: "Service Name",
        serviceOverview: "Service Overview",
        pricingGuide: "Pricing Guide"
      },
      faqTitle: "Frequently Asked Questions"
    },
    construction: {
      title: "Construction & Real Estate",
      catchphrase: "Expert support for construction permits and real estate licenses",
      heroTitle: "Construction & Real Estate Services - Professional Support",
      metaTitle: "Construction & Real Estate | Fortia Administrative Law Office",
      metaDescription: "Expert support for construction permits and real estate licenses from application to renewal. Experienced administrative lawyers provide reliable procedures.",
      services: [
        {
          id: "construction-permit",
          title: "Construction Business Permit Application",
          target: "Business operators in the construction industry",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Application for permits required to contract construction work"
        },
        {
          id: "construction-renewal",
          title: "Construction Business Permit Renewal",
          target: "Business operators who already have construction permits",
          priceMin: 80000,
          priceMax: 150000,
          overview: "Renewal procedures for construction business permits required every 5 years"
        },
        {
          id: "real-estate-license",
          title: "Real Estate License Application",
          target: "Business operators in the real estate industry",
          priceMin: 200000,
          priceMax: 350000,
          overview: "Application for licenses required to operate real estate transaction business"
        },
        {
          id: "construction-change",
          title: "Construction Permit Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 30000,
          priceMax: 80000,
          overview: "Change notification procedures for company name changes, officer changes, etc."
        }
      ],
      faq: [
        {
          question: "When is a construction business permit required?",
          answer: "Required for construction work contracts of 15 million yen or more for architectural construction, and 5 million yen or more for other types of construction."
        },
        {
          question: "How long is the permit valid?",
          answer: "Both construction business permits and real estate licenses are valid for 5 years. Renewal procedures are required before expiration."
        }
      ],
      breadcrumbs: {
        home: "Home",
        services: "Services"
      },
      tableHeaders: {
        serviceName: "Service Name",
        serviceOverview: "Service Overview",
        pricingGuide: "Pricing Guide"
      },
      faqTitle: "Frequently Asked Questions"
    },
    automotive: {
      title: "Automotive Services",
      catchphrase: "Quick support for garage certificates and vehicle registration",
      heroTitle: "Automotive Services - Professional Support",
      metaTitle: "Automotive Services | Fortia Administrative Law Office",
      metaDescription: "Quick support for garage certificates and vehicle registration procedures. We handle reliable procedures on behalf of busy clients.",
      services: [
        {
          id: "garage-certificate",
          title: "Garage Certificate Application",
          target: "Those purchasing new or used vehicles",
          priceMin: 15000,
          priceMax: 25000,
          overview: "Application for vehicle storage location certificate"
        },
        {
          id: "vehicle-registration",
          title: "Vehicle Registration",
          target: "Those requiring vehicle name change",
          priceMin: 20000,
          priceMax: 40000,
          overview: "Various vehicle registration procedures including transfer and change registration"
        },
        {
          id: "number-change",
          title: "License Plate Change",
          target: "Those requiring number plate change due to relocation",
          priceMin: 10000,
          priceMax: 20000,
          overview: "License plate change procedures due to address changes"
        }
      ],
      faq: [
        {
          question: "How long does it take to obtain a garage certificate?",
          answer: "Usually 3-7 days from application to issuance. It may vary slightly by region."
        },
        {
          question: "What documents are required?",
          answer: "For garage certificates, documents proving usage rights of storage location, location maps, layout diagrams, etc. are required. Please contact us for details."
        }
      ],
      breadcrumbs: {
        home: "Home",
        services: "Services"
      },
      tableHeaders: {
        serviceName: "Service Name",
        serviceOverview: "Service Overview",
        pricingGuide: "Pricing Guide"
      },
      faqTitle: "Frequently Asked Questions"
    }
  }
};

export type { ServiceItem, FaqItem, CategoryPageContent };