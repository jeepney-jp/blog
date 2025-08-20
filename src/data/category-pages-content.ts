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
    },
    "food-entertainment": {
      title: "飲食・風俗営業関連業務",
      catchphrase: "飲食店営業許可・風俗営業許可の専門サポート",
      heroTitle: "【専門家がサポート】飲食・風俗営業関連業務のご案内",
      metaTitle: "飲食・風俗営業関連業務 | フォルティア行政書士事務所",
      metaDescription: "飲食店営業許可、風俗営業許可の取得から更新まで専門家がサポート。確実な手続きで営業開始をバックアップ。",
      services: [
        {
          id: "restaurant-permit",
          title: "飲食店営業許可申請",
          target: "飲食店を開業される方",
          priceMin: 80000,
          priceMax: 150000,
          overview: "飲食店を営業するために必要な許可の取得申請"
        },
        {
          id: "liquor-license",
          title: "酒類販売業免許申請",
          target: "酒類の販売を行う事業者の方",
          priceMin: 100000,
          priceMax: 200000,
          overview: "酒類の販売を行うために必要な免許の取得申請"
        },
        {
          id: "entertainment-permit",
          title: "風俗営業許可申請",
          target: "風俗営業を行う事業者の方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "パチンコ店、麻雀店、キャバレー等の風俗営業許可申請"
        },
        {
          id: "food-delivery",
          title: "食品営業届出",
          target: "食品の製造・販売を行う事業者の方",
          priceMin: 50000,
          priceMax: 100000,
          overview: "食品衛生法に基づく営業届出手続き"
        }
      ],
      faq: [
        {
          question: "飲食店営業許可の取得にはどのくらい時間がかかりますか？",
          answer: "申請から許可まで通常2〜4週間程度です。事前相談や図面作成の時間も含めると1〜2ヶ月程度の余裕を見ておくことをお勧めします。"
        },
        {
          question: "許可の有効期間はありますか？",
          answer: "飲食店営業許可は5〜8年（自治体により異なる）、酒類販売業免許は6年間有効です。期限前に更新手続きが必要です。"
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
    "waste-management": {
      title: "廃棄物処理業許可関連業務",
      catchphrase: "産業廃棄物収集運搬業許可の専門サポート",
      heroTitle: "【専門家がサポート】廃棄物処理業許可関連業務のご案内",
      metaTitle: "廃棄物処理業許可関連業務 | フォルティア行政書士事務所",
      metaDescription: "産業廃棄物収集運搬業許可、一般廃棄物処理業許可の取得から更新まで専門家がサポート。",
      services: [
        {
          id: "industrial-waste-permit",
          title: "産業廃棄物収集運搬業許可申請",
          target: "産業廃棄物の収集運搬を行う事業者の方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "産業廃棄物の収集又は運搬を業として行うために必要な許可申請"
        },
        {
          id: "general-waste-permit",
          title: "一般廃棄物処理業許可申請",
          target: "一般廃棄物の処理を行う事業者の方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "一般廃棄物の収集運搬又は処分を業として行うために必要な許可申請"
        },
        {
          id: "waste-renewal",
          title: "廃棄物処理業許可更新",
          target: "既に許可を取得している事業者の方",
          priceMin: 80000,
          priceMax: 150000,
          overview: "5年ごとに必要な廃棄物処理業許可の更新手続き"
        },
        {
          id: "waste-change",
          title: "変更許可・変更届出",
          target: "許可内容に変更が生じた事業者の方",
          priceMin: 30000,
          priceMax: 100000,
          overview: "事業範囲の変更、施設の変更等に伴う許可申請・届出"
        }
      ],
      faq: [
        {
          question: "許可の取得にはどのような要件がありますか？",
          answer: "欠格要件に該当しないこと、講習会の受講、適切な施設・設備を有すること、財政的基礎を有することなどが必要です。"
        },
        {
          question: "許可の有効期間はどのくらいですか？",
          answer: "廃棄物処理業許可の有効期間は5年間です。期限の2ヶ月前までに更新申請が必要です。"
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
    "travel-hospitality": {
      title: "旅行・旅館業関連業務",
      catchphrase: "旅行業登録・旅館業許可の専門サポート",
      heroTitle: "【専門家がサポート】旅行・旅館業関連業務のご案内",
      metaTitle: "旅行・旅館業関連業務 | フォルティア行政書士事務所",
      metaDescription: "旅行業登録、旅館業許可、民泊の届出など旅行・宿泊業関連の許認可手続きを専門家がサポート。",
      services: [
        {
          id: "travel-agency",
          title: "旅行業登録申請",
          target: "旅行業を営む事業者の方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "旅行業を営むために必要な登録申請手続き"
        },
        {
          id: "hotel-permit",
          title: "旅館業許可申請",
          target: "旅館・ホテルを営む事業者の方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "旅館業法に基づく営業許可の取得申請"
        },
        {
          id: "minpaku-notification",
          title: "住宅宿泊事業届出",
          target: "民泊を営む事業者の方",
          priceMin: 80000,
          priceMax: 150000,
          overview: "住宅宿泊事業法に基づく民泊の届出手続き"
        },
        {
          id: "travel-renewal",
          title: "旅行業登録更新",
          target: "既に旅行業登録をしている事業者の方",
          priceMin: 100000,
          priceMax: 200000,
          overview: "5年ごとに必要な旅行業登録の更新手続き"
        }
      ],
      faq: [
        {
          question: "旅行業登録と旅行業代理店業務取扱管理者の違いは何ですか？",
          answer: "旅行業登録は事業者の登録で、旅行業務取扱管理者は営業所ごとに必要な有資格者です。両方が必要になります。"
        },
        {
          question: "民泊と旅館業許可の違いは何ですか？",
          answer: "民泊は年間180日以内の営業で届出制、旅館業は年間を通じた営業が可能で許可制です。営業規模や形態により適切な制度を選択します。"
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
    "corporate": {
      title: "法人設立業務",
      catchphrase: "株式会社・合同会社設立の専門サポート",
      heroTitle: "【専門家がサポート】法人設立業務のご案内",
      metaTitle: "法人設立業務 | フォルティア行政書士事務所",
      metaDescription: "株式会社、合同会社の設立から設立後の手続きまで専門家がワンストップでサポート。",
      services: [
        {
          id: "corporation-establishment",
          title: "株式会社設立",
          target: "株式会社の設立を検討されている方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "定款作成から登記申請まで株式会社設立の全手続き"
        },
        {
          id: "llc-establishment",
          title: "合同会社設立",
          target: "合同会社の設立を検討されている方",
          priceMin: 100000,
          priceMax: 200000,
          overview: "定款作成から登記申請まで合同会社設立の全手続き"
        },
        {
          id: "nonprofit-establishment",
          title: "一般社団法人・NPO法人設立",
          target: "非営利法人の設立を検討されている方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "一般社団法人、NPO法人等の非営利法人設立手続き"
        },
        {
          id: "corporate-change",
          title: "法人変更手続き",
          target: "法人の登記事項に変更が生じた方",
          priceMin: 30000,
          priceMax: 100000,
          overview: "商号変更、本店移転、役員変更等の各種変更手続き"
        }
      ],
      faq: [
        {
          question: "株式会社と合同会社の違いは何ですか？",
          answer: "株式会社は社会的信用が高く、合同会社は設立費用が安く手続きが簡単です。事業内容や将来の展望に応じて選択します。"
        },
        {
          question: "設立にはどのくらいの期間がかかりますか？",
          answer: "書類の準備から登記完了まで、通常2〜4週間程度です。定款認証や登記申請のスケジュールにより前後します。"
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
    "business-license": {
      title: "営業許可",
      catchphrase: "各種営業許可申請の専門サポート",
      heroTitle: "【専門家がサポート】営業許可のご案内",
      metaTitle: "営業許可 | フォルティア行政書士事務所",
      metaDescription: "各種営業許可の取得から更新まで専門家がサポート。幅広い業種の許可申請に対応。",
      services: [
        {
          id: "various-permits",
          title: "各種営業許可申請",
          target: "営業許可が必要な事業を開始される方",
          priceMin: 80000,
          priceMax: 200000,
          overview: "業種に応じた各種営業許可の取得申請"
        },
        {
          id: "permit-renewal",
          title: "営業許可更新",
          target: "既に許可を取得している事業者の方",
          priceMin: 50000,
          priceMax: 100000,
          overview: "有効期限の到来に伴う営業許可の更新手続き"
        },
        {
          id: "permit-change",
          title: "営業許可変更届",
          target: "許可内容に変更が生じた事業者の方",
          priceMin: 20000,
          priceMax: 60000,
          overview: "営業所の移転、営業内容の変更等の届出手続き"
        }
      ],
      faq: [
        {
          question: "どのような業種で営業許可が必要ですか？",
          answer: "飲食業、理美容業、クリーニング業、古物営業、警備業など多岐にわたります。業種により許可要件が異なりますので、詳細はご相談ください。"
        },
        {
          question: "許可取得の要件は何ですか？",
          answer: "業種により異なりますが、一般的に施設基準、人的要件、財政的基礎などが求められます。事前に要件を確認し、準備を進めます。"
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
    "land": {
      title: "土地関連業務",
      catchphrase: "農地転用・開発許可の専門サポート",
      heroTitle: "【専門家がサポート】土地関連業務のご案内",
      metaTitle: "土地関連業務 | フォルティア行政書士事務所",
      metaDescription: "農地転用、開発許可、土地利用に関する各種手続きを専門家がサポート。",
      services: [
        {
          id: "farmland-conversion",
          title: "農地転用許可申請",
          target: "農地を宅地等に転用される方",
          priceMin: 100000,
          priceMax: 300000,
          overview: "農地法に基づく農地転用許可の申請手続き"
        },
        {
          id: "development-permit",
          title: "開発許可申請",
          target: "開発行為を行う事業者の方",
          priceMin: 200000,
          priceMax: 500000,
          overview: "都市計画法に基づく開発許可の申請手続き"
        },
        {
          id: "land-boundary",
          title: "土地境界確定",
          target: "土地の境界を明確にしたい方",
          priceMin: 150000,
          priceMax: 400000,
          overview: "隣接地との境界確定に関する手続き"
        },
        {
          id: "land-use-change",
          title: "地目変更登記",
          target: "土地の地目を変更される方",
          priceMin: 50000,
          priceMax: 100000,
          overview: "農地から宅地等への地目変更登記手続き"
        }
      ],
      faq: [
        {
          question: "農地転用にはどのような手続きが必要ですか？",
          answer: "農地の所在地や面積により、農業委員会への届出または都道府県知事の許可が必要です。市街化区域内の農地は届出制です。"
        },
        {
          question: "開発許可が必要な開発行為とは何ですか？",
          answer: "建築物の建築等を目的とした土地の区画形質の変更で、一定規模以上のものが対象となります。都市計画区域により基準が異なります。"
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
    "legal-documentation": {
      title: "権利義務・事実証明業務",
      catchphrase: "契約書作成・内容証明の専門サポート",
      heroTitle: "【専門家がサポート】権利義務・事実証明業務のご案内",
      metaTitle: "権利義務・事実証明業務 | フォルティア行政書士事務所",
      metaDescription: "契約書作成、内容証明郵便、各種証明書類の作成を専門家がサポート。",
      services: [
        {
          id: "contract-drafting",
          title: "契約書作成",
          target: "契約書の作成が必要な方",
          priceMin: 50000,
          priceMax: 200000,
          overview: "売買契約、賃貸借契約、業務委託契約等の各種契約書作成"
        },
        {
          id: "certified-mail",
          title: "内容証明郵便作成",
          target: "債権回収や契約解除等をお考えの方",
          priceMin: 30000,
          priceMax: 80000,
          overview: "法的効力のある内容証明郵便の作成・発送手続き"
        },
        {
          id: "document-verification",
          title: "各種証明書類作成",
          target: "公的書類の作成が必要な方",
          priceMin: 20000,
          priceMax: 100000,
          overview: "遺産分割協議書、念書、覚書等の各種書類作成"
        },
        {
          id: "consultation",
          title: "法的相談・書類チェック",
          target: "契約内容や書類の確認をしたい方",
          priceMin: 10000,
          priceMax: 30000,
          overview: "契約書の内容チェックや法的アドバイス"
        }
      ],
      faq: [
        {
          question: "内容証明郵便の効果は何ですか？",
          answer: "相手方に意思表示の内容と日付を確実に伝達でき、後日の証拠として活用できます。債権回収や契約解除の通知に有効です。"
        },
        {
          question: "契約書作成で注意すべき点は何ですか？",
          answer: "当事者の権利義務を明確にし、トラブル防止のための条項を盛り込むことが重要です。法的要件を満たした適切な内容とします。"
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
    "medical-care": {
      title: "医療・介護関連業務",
      catchphrase: "医療法人設立・介護事業所指定の専門サポート",
      heroTitle: "【専門家がサポート】医療・介護関連業務のご案内",
      metaTitle: "医療・介護関連業務 | フォルティア行政書士事務所",
      metaDescription: "医療法人設立、介護事業所指定、薬局開設など医療・介護関連の許認可手続きを専門家がサポート。",
      services: [
        {
          id: "medical-corporation",
          title: "医療法人設立",
          target: "医療法人の設立を検討されている方",
          priceMin: 300000,
          priceMax: 600000,
          overview: "医療法に基づく医療法人の設立認可申請"
        },
        {
          id: "care-service-designation",
          title: "介護事業所指定申請",
          target: "介護事業を開始される方",
          priceMin: 150000,
          priceMax: 300000,
          overview: "介護保険法に基づく各種介護サービス事業所の指定申請"
        },
        {
          id: "pharmacy-license",
          title: "薬局開設許可申請",
          target: "薬局を開設される方",
          priceMin: 200000,
          priceMax: 400000,
          overview: "薬機法に基づく薬局開設許可の申請手続き"
        },
        {
          id: "medical-device",
          title: "医療機器販売業許可",
          target: "医療機器の販売を行う事業者の方",
          priceMin: 100000,
          priceMax: 200000,
          overview: "医療機器の販売業許可・届出手続き"
        }
      ],
      faq: [
        {
          question: "医療法人設立のメリットは何ですか？",
          answer: "税制上の優遇、社会的信用の向上、事業継承の円滑化、分院展開の可能性などがあります。"
        },
        {
          question: "介護事業所指定の要件は何ですか？",
          answer: "人員基準、設備基準、運営基準を満たす必要があります。サービス種別により基準が異なりますので、詳細はご相談ください。"
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
    "other": {
      title: "その他の業務",
      catchphrase: "各種許認可・手続き代行の専門サポート",
      heroTitle: "【専門家がサポート】その他の業務のご案内",
      metaTitle: "その他の業務 | フォルティア行政書士事務所",
      metaDescription: "上記以外の各種許認可申請、官公署への手続き代行を専門家がサポート。",
      services: [
        {
          id: "various-procedures",
          title: "各種行政手続き代行",
          target: "官公署への手続きが必要な方",
          priceMin: 30000,
          priceMax: 150000,
          overview: "官公署への各種申請・届出・報告等の手続き代行"
        },
        {
          id: "document-collection",
          title: "各種証明書取得代行",
          target: "証明書の取得が必要な方",
          priceMin: 10000,
          priceMax: 50000,
          overview: "住民票、戸籍謄本、登記事項証明書等の取得代行"
        },
        {
          id: "consultation-other",
          title: "行政手続き相談",
          target: "手続きについて相談したい方",
          priceMin: 5000,
          priceMax: 15000,
          overview: "各種行政手続きに関する相談・アドバイス"
        }
      ],
      faq: [
        {
          question: "どのような手続きに対応していますか？",
          answer: "行政書士が扱える業務であれば幅広く対応いたします。具体的な手続きについてはお気軽にご相談ください。"
        },
        {
          question: "相談料はかかりますか？",
          answer: "初回相談は無料です。詳細な検討が必要な場合は別途相談料をいただく場合があります。"
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
    },
    "food-entertainment": {
      title: "Food & Entertainment",
      catchphrase: "Expert support for restaurant and entertainment licenses",
      heroTitle: "Food & Entertainment Services - Professional Support",
      metaTitle: "Food & Entertainment | Fortia Administrative Law Office",
      metaDescription: "Expert support for restaurant permits and entertainment licenses from application to renewal. Reliable procedures to support business launch.",
      services: [
        {
          id: "restaurant-permit",
          title: "Restaurant Business Permit Application",
          target: "Those opening restaurants",
          priceMin: 80000,
          priceMax: 150000,
          overview: "Application for permits required to operate restaurants"
        },
        {
          id: "liquor-license",
          title: "Liquor Sales License Application",
          target: "Business operators selling alcoholic beverages",
          priceMin: 100000,
          priceMax: 200000,
          overview: "Application for licenses required to sell alcoholic beverages"
        },
        {
          id: "entertainment-permit",
          title: "Entertainment Business Permit Application",
          target: "Business operators in entertainment industry",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Entertainment business permits for pachinko parlors, mahjong parlors, cabarets, etc."
        },
        {
          id: "food-delivery",
          title: "Food Business Notification",
          target: "Business operators manufacturing/selling food products",
          priceMin: 50000,
          priceMax: 100000,
          overview: "Business notification procedures under Food Sanitation Act"
        }
      ],
      faq: [
        {
          question: "How long does it take to obtain a restaurant business permit?",
          answer: "Usually 2-4 weeks from application to permit. Including preliminary consultation and drawing preparation, we recommend allowing 1-2 months."
        },
        {
          question: "Are there validity periods for permits?",
          answer: "Restaurant business permits are valid for 5-8 years (varies by municipality), liquor sales licenses for 6 years. Renewal procedures are required before expiration."
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
    "waste-management": {
      title: "Waste Management",
      catchphrase: "Expert support for industrial waste collection and transport permits",
      heroTitle: "Waste Management Services - Professional Support",
      metaTitle: "Waste Management | Fortia Administrative Law Office",
      metaDescription: "Expert support for industrial waste collection permits and general waste disposal permits from application to renewal.",
      services: [
        {
          id: "industrial-waste-permit",
          title: "Industrial Waste Collection/Transport Permit",
          target: "Business operators collecting/transporting industrial waste",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Permit application for businesses engaged in industrial waste collection or transport"
        },
        {
          id: "general-waste-permit",
          title: "General Waste Disposal Permit",
          target: "Business operators handling general waste disposal",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Permit application for businesses engaged in general waste collection, transport, or disposal"
        },
        {
          id: "waste-renewal",
          title: "Waste Management Permit Renewal",
          target: "Business operators with existing permits",
          priceMin: 80000,
          priceMax: 150000,
          overview: "Renewal procedures for waste management permits required every 5 years"
        },
        {
          id: "waste-change",
          title: "Change Permit/Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 30000,
          priceMax: 100000,
          overview: "Permit applications and notifications for business scope changes, facility changes, etc."
        }
      ],
      faq: [
        {
          question: "What requirements are needed to obtain permits?",
          answer: "Requirements include not falling under disqualification criteria, attending training courses, having appropriate facilities/equipment, and financial foundation."
        },
        {
          question: "How long are permits valid?",
          answer: "Waste management permits are valid for 5 years. Renewal applications must be submitted 2 months before expiration."
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
    "travel-hospitality": {
      title: "Travel & Hospitality",
      catchphrase: "Expert support for travel agency registration and hotel business permits",
      heroTitle: "Travel & Hospitality Services - Professional Support",
      metaTitle: "Travel & Hospitality | Fortia Administrative Law Office",
      metaDescription: "Expert support for travel agency registration, hotel business permits, and vacation rental notifications for travel and accommodation businesses.",
      services: [
        {
          id: "travel-agency",
          title: "Travel Agency Registration",
          target: "Business operators in travel industry",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Registration procedures required to operate travel agencies"
        },
        {
          id: "hotel-permit",
          title: "Hotel Business Permit Application",
          target: "Business operators running hotels/inns",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Business permit application under Hotel Business Act"
        },
        {
          id: "minpaku-notification",
          title: "Vacation Rental Business Notification",
          target: "Business operators running vacation rentals",
          priceMin: 80000,
          priceMax: 150000,
          overview: "Vacation rental notification procedures under Residential Accommodation Business Act"
        },
        {
          id: "travel-renewal",
          title: "Travel Agency Registration Renewal",
          target: "Business operators with existing travel agency registration",
          priceMin: 100000,
          priceMax: 200000,
          overview: "Renewal procedures for travel agency registration required every 5 years"
        }
      ],
      faq: [
        {
          question: "What's the difference between travel agency registration and travel business manager?",
          answer: "Travel agency registration is for business operators, while travel business managers are qualified personnel required for each office. Both are necessary."
        },
        {
          question: "What's the difference between vacation rentals and hotel permits?",
          answer: "Vacation rentals operate up to 180 days annually under notification system, while hotel businesses can operate year-round under permit system. Choose based on business scale and format."
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
    "corporate": {
      title: "Corporate Establishment",
      catchphrase: "Expert support for company and LLC establishment",
      heroTitle: "Corporate Establishment Services - Professional Support",
      metaTitle: "Corporate Establishment | Fortia Administrative Law Office",
      metaDescription: "One-stop expert support from company and LLC establishment to post-establishment procedures.",
      services: [
        {
          id: "corporation-establishment",
          title: "Company Incorporation",
          target: "Those considering company incorporation",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Complete company incorporation procedures from articles of incorporation to registration"
        },
        {
          id: "llc-establishment",
          title: "LLC Establishment",
          target: "Those considering LLC establishment",
          priceMin: 100000,
          priceMax: 200000,
          overview: "Complete LLC establishment procedures from articles of incorporation to registration"
        },
        {
          id: "nonprofit-establishment",
          title: "General Incorporated Association/NPO Establishment",
          target: "Those considering nonprofit corporation establishment",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Establishment procedures for general incorporated associations, NPOs, and other nonprofit corporations"
        },
        {
          id: "corporate-change",
          title: "Corporate Change Procedures",
          target: "Those with changes to corporate registration matters",
          priceMin: 30000,
          priceMax: 100000,
          overview: "Various change procedures including company name changes, head office relocations, officer changes, etc."
        }
      ],
      faq: [
        {
          question: "What's the difference between companies and LLCs?",
          answer: "Companies have higher social credibility, while LLCs have lower establishment costs and simpler procedures. Choose based on business content and future prospects."
        },
        {
          question: "How long does establishment take?",
          answer: "Usually 2-4 weeks from document preparation to registration completion. Timeline varies depending on articles of incorporation authentication and registration application schedules."
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
    "business-license": {
      title: "Business Licenses",
      catchphrase: "Expert support for various business permit applications",
      heroTitle: "Business Licenses - Professional Support",
      metaTitle: "Business Licenses | Fortia Administrative Law Office",
      metaDescription: "Expert support for various business permits from application to renewal. Comprehensive support for permits across diverse industries.",
      services: [
        {
          id: "various-permits",
          title: "Various Business Permit Applications",
          target: "Those starting businesses requiring permits",
          priceMin: 80000,
          priceMax: 200000,
          overview: "Permit applications for various business types as required by industry"
        },
        {
          id: "permit-renewal",
          title: "Business Permit Renewal",
          target: "Business operators with existing permits",
          priceMin: 50000,
          priceMax: 100000,
          overview: "Business permit renewal procedures upon expiration"
        },
        {
          id: "permit-change",
          title: "Business Permit Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 20000,
          priceMax: 60000,
          overview: "Notification procedures for office relocations, business content changes, etc."
        }
      ],
      faq: [
        {
          question: "What types of businesses require permits?",
          answer: "Many industries including food service, beauty/barber shops, dry cleaning, secondhand goods, security services, etc. Permit requirements vary by industry - please consult for details."
        },
        {
          question: "What are the permit requirements?",
          answer: "Requirements vary by industry but generally include facility standards, personnel requirements, and financial foundation. We verify requirements beforehand and proceed with preparations."
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
    "land": {
      title: "Land-related Services",
      catchphrase: "Expert support for farmland conversion and development permits",
      heroTitle: "Land-related Services - Professional Support",
      metaTitle: "Land-related Services | Fortia Administrative Law Office",
      metaDescription: "Expert support for farmland conversion, development permits, and various land use procedures.",
      services: [
        {
          id: "farmland-conversion",
          title: "Farmland Conversion Permit",
          target: "Those converting farmland to residential land, etc.",
          priceMin: 100000,
          priceMax: 300000,
          overview: "Farmland conversion permit application procedures under Agricultural Land Act"
        },
        {
          id: "development-permit",
          title: "Development Permit Application",
          target: "Business operators undertaking development projects",
          priceMin: 200000,
          priceMax: 500000,
          overview: "Development permit application procedures under City Planning Act"
        },
        {
          id: "land-boundary",
          title: "Land Boundary Confirmation",
          target: "Those needing to clarify land boundaries",
          priceMin: 150000,
          priceMax: 400000,
          overview: "Procedures for boundary confirmation with adjacent properties"
        },
        {
          id: "land-use-change",
          title: "Land Category Change Registration",
          target: "Those changing land categories",
          priceMin: 50000,
          priceMax: 100000,
          overview: "Land category change registration procedures from farmland to residential land, etc."
        }
      ],
      faq: [
        {
          question: "What procedures are required for farmland conversion?",
          answer: "Depending on farmland location and area, notification to agricultural committee or prefectural governor's permit is required. Farmland in urbanization promotion areas requires notification."
        },
        {
          question: "What constitutes development activities requiring permits?",
          answer: "Land subdivision changes for building construction purposes above certain scales. Standards vary by city planning areas."
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
    "legal-documentation": {
      title: "Legal Documentation",
      catchphrase: "Expert support for contract drafting and certified mail",
      heroTitle: "Legal Documentation Services - Professional Support",
      metaTitle: "Legal Documentation | Fortia Administrative Law Office",
      metaDescription: "Expert support for contract drafting, certified mail, and various legal document preparation.",
      services: [
        {
          id: "contract-drafting",
          title: "Contract Drafting",
          target: "Those needing contract preparation",
          priceMin: 50000,
          priceMax: 200000,
          overview: "Drafting various contracts including sales, lease, and service agreements"
        },
        {
          id: "certified-mail",
          title: "Certified Mail Preparation",
          target: "Those considering debt collection or contract termination",
          priceMin: 30000,
          priceMax: 80000,
          overview: "Preparation and sending of legally effective certified mail"
        },
        {
          id: "document-verification",
          title: "Various Legal Document Preparation",
          target: "Those needing public document preparation",
          priceMin: 20000,
          priceMax: 100000,
          overview: "Preparation of various documents including inheritance division agreements, memorandums, etc."
        },
        {
          id: "consultation",
          title: "Legal Consultation & Document Review",
          target: "Those wanting contract content or document verification",
          priceMin: 10000,
          priceMax: 30000,
          overview: "Contract content review and legal advice"
        }
      ],
      faq: [
        {
          question: "What is the effect of certified mail?",
          answer: "It reliably conveys the content and date of intent to the other party and can be used as evidence later. Effective for debt collection and contract termination notices."
        },
        {
          question: "What should be noted in contract drafting?",
          answer: "It's important to clarify parties' rights and obligations and include clauses to prevent disputes. We ensure appropriate content that meets legal requirements."
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
    "medical-care": {
      title: "Medical & Care Services",
      catchphrase: "Expert support for medical corporation establishment and care facility designation",
      heroTitle: "Medical & Care Services - Professional Support",
      metaTitle: "Medical & Care Services | Fortia Administrative Law Office",
      metaDescription: "Expert support for medical corporation establishment, care facility designation, pharmacy licenses, and other medical/care-related permits.",
      services: [
        {
          id: "medical-corporation",
          title: "Medical Corporation Establishment",
          target: "Those considering medical corporation establishment",
          priceMin: 300000,
          priceMax: 600000,
          overview: "Medical corporation establishment authorization application under Medical Care Act"
        },
        {
          id: "care-service-designation",
          title: "Care Facility Designation Application",
          target: "Those starting care businesses",
          priceMin: 150000,
          priceMax: 300000,
          overview: "Designation applications for various care service facilities under Long-Term Care Insurance Act"
        },
        {
          id: "pharmacy-license",
          title: "Pharmacy License Application",
          target: "Those establishing pharmacies",
          priceMin: 200000,
          priceMax: 400000,
          overview: "Pharmacy establishment license application procedures under Pharmaceutical and Medical Device Act"
        },
        {
          id: "medical-device",
          title: "Medical Device Sales Business Permit",
          target: "Business operators selling medical devices",
          priceMin: 100000,
          priceMax: 200000,
          overview: "Medical device sales business permit and notification procedures"
        }
      ],
      faq: [
        {
          question: "What are the benefits of medical corporation establishment?",
          answer: "Benefits include tax advantages, improved social credibility, smooth business succession, and possibilities for branch clinic expansion."
        },
        {
          question: "What are the requirements for care facility designation?",
          answer: "Must meet personnel standards, facility standards, and operational standards. Standards vary by service type - please consult for details."
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
    "other": {
      title: "Other Services",
      catchphrase: "Expert support for various permits and administrative procedures",
      heroTitle: "Other Services - Professional Support",
      metaTitle: "Other Services | Fortia Administrative Law Office",
      metaDescription: "Expert support for various permit applications and government office procedures beyond the above categories.",
      services: [
        {
          id: "various-procedures",
          title: "Various Administrative Procedure Agency",
          target: "Those needing government office procedures",
          priceMin: 30000,
          priceMax: 150000,
          overview: "Agency services for various applications, notifications, and reports to government offices"
        },
        {
          id: "document-collection",
          title: "Various Certificate Collection Agency",
          target: "Those needing certificate collection",
          priceMin: 10000,
          priceMax: 50000,
          overview: "Collection agency for residence certificates, family register copies, registration certificates, etc."
        },
        {
          id: "consultation-other",
          title: "Administrative Procedure Consultation",
          target: "Those wanting procedure consultation",
          priceMin: 5000,
          priceMax: 15000,
          overview: "Consultation and advice on various administrative procedures"
        }
      ],
      faq: [
        {
          question: "What types of procedures do you handle?",
          answer: "We handle a wide range of procedures that administrative lawyers can handle. Please feel free to consult about specific procedures."
        },
        {
          question: "Is there a consultation fee?",
          answer: "Initial consultation is free. Separate consultation fees may apply for detailed examinations."
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