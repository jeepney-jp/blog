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
          id: "business-manager",
          title: "経営・管理ビザ",
          target: "企業等の経営者や管理者が取得する在留資格です。"
        },
        {
          id: "designated-activities",
          title: "特定活動ビザ",
          target: "外交官等の家事使用人、ワーキング・ホリデー、介護福祉士の候補者等、幅広い該当者がいます。就労が一切できない場合もあれば、幅広い選択肢の中で就労が可能な場合もあります。（「特定活動46号／本邦大学卒業者」は様々な分野で就労可能。取得条件：日本の大学を卒業し、日本語能力試験N1を取得）。"
        },
        {
          id: "intra-company-transfer",
          title: "企業内転勤ビザ",
          target: "日本に本社や支社、支店がある外国法人からの転勤者が取得する在留資格です。"
        },
        {
          id: "student",
          title: "留学ビザ",
          target: "大学，専門学校，日本語学校等の学生（いわゆる留学生）が取得します。"
        },
        {
          id: "dependent",
          title: "家族滞在ビザ",
          target: "在留外国人の配偶者・子供が該当します。"
        },
        {
          id: "long-term-resident",
          title: "定住者ビザ",
          target: "日系３世、中国残留邦人、第三国定住難民等が該当します。"
        },
        {
          id: "specified-skilled-worker",
          title: "特定技能ビザ",
          target: "特定の分野の中で、指定の試験合格者が取得できる在留資格です。分野は、介護、ビルクリーニング、農業、漁業、飲食料品製造業、外食業、素形材産業、産業機械製造業、電気・電子情報関連産業、建設業、造船舶用工業、自動車整備業、航空業、宿泊業の14職種です。各分野に該当している場合でも、それぞれ明確に定められた規定の業務を行わない場合は不許可となりますので、ご注意ください。特定技能制度は、労働力不足解消のための制度です。"
        },
        {
          id: "highly-skilled-professional",
          title: "高度人材ビザ",
          target: "ポイント制による高度人材。事業の経営者、研究者、技術者、3つの活動類型があります。高度専門職1号として3年以上活動を行っていた外国人は高度専門職2号が取得でき、優遇措置が受けられるようになります。"
        },
        {
          id: "permanent-resident",
          title: "永住ビザ",
          target: "永住許可を受けた外国人が取得できる在留資格です。取得できる条件は以下の通りです。・素行が善良（法律を守り、社会的に非難されることがない生活を送っている）・生活する上で十分な資産または技能（配偶者の資産や技能も含みます）・日本国の利益に合すると認められること。原則として、10年以上日本に在留していることが必要です。税金や保険料の未納がある場合、不許可の可能性が高くなります。"
        },
        {
          id: "engineer-humanities",
          title: "技術・人文知識・国際業務ビザ",
          target: "工学、自然科学、法律学，経済学、社会学その他の人文科学の分野の技術や知識を要する業務（技術・人文知識）、外国の文化に基盤を有する思考や感受性を必要とする業務（国際業務）に従事する外国人のための在留資格です。機械工学等の技術者、エンジニア、マーケティング業務従事者、デザイナー、通訳、民間企業の語学教師等が該当します。幅広く該当しますが、「技術・人文知識」「国際業務」に該当しない業務や、学歴・経歴・資格等から相応の能力がないと判断された場合には、在留資格が取得できません。"
        },
        {
          id: "skilled-labor",
          title: "技能ビザ",
          target: "産業上の特殊な分野に属する熟練した技能を要する外国人が該当します。料理の調理師，スポーツ指導者、航空機の操縦者、貴金属等の加工職人等が対象となっており、「技術・人文知識・国際業務」との区別にご注意ください。"
        },
        {
          id: "entertainer",
          title: "興行ビザ",
          target: "俳優、歌手、ダンサー、プロスポーツ選手等、興行のために来日する外国人のための在留資格です。"
        },
        {
          id: "artist",
          title: "芸術ビザ",
          target: "音楽、美術、文学等の芸術分野で収入を得る活動を行うための在留資格。「興行」に該当する場合を除きます。"
        },
        {
          id: "spouse-of-japanese",
          title: "日本人の配偶者等",
          target: "日本人の配偶者、実子、特別養子が該当します。"
        },
        {
          id: "spouse-of-permanent-resident",
          title: "永住者の配偶者等",
          target: "永住者・特別永住者の配偶者、日本で出生し引き続き在留している実子が該当します。"
        },
        {
          id: "long-term-resident-final",
          title: "定住者",
          target: "日系３世、中国残留邦人、第三国定住難民等が該当します。"
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
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "construction-renewal",
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "real-estate-license",
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "construction-change",
          title: "テスト",
          target: "テスト",
          priceMin: 0
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
          id: "auto-dismantling-permit",
          title: "自動車解体業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "auto-driving-agency",
          title: "自動車運転代行業認定",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "freight-transport-registration",
          title: "利用運送事業登録",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "rental-car-permit",
          title: "有償貸渡許可（レンタカー）",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "passenger-transport-permit",
          title: "旅客自動車運送事業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "freight-transport-permit",
          title: "貨物自動車運送事業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "garage-certificate",
          title: "自動車保管場所証明書（車庫証明）",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "mini-vehicle-notification1",
          title: "軽自動車届出",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "mini-vehicle-notification2",
          title: "軽自動車届出",
          target: "テスト",
          priceMin: 0
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
          id: "adult-entertainment-notification",
          title: "性風俗特殊営業営業開始届出",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "late-night-alcohol-notification",
          title: "深夜酒類提供飲食店営業開始届出",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "entertainment-permit",
          title: "風俗営業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "food-manufacturing-permit",
          title: "食品製造業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "restaurant-permit",
          title: "飲食店営業許可",
          target: "テスト",
          priceMin: 0
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
          id: "general-waste-permit",
          title: "一般廃棄物処理業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "general-waste-facility-permit",
          title: "一般廃棄物処理施設設置許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "industrial-waste-permit",
          title: "産業廃棄物処理業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "industrial-waste-transport-permit",
          title: "産業廃棄物収集運搬業許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "industrial-waste-facility-permit",
          title: "産業廃棄物処理施設設置許可",
          target: "テスト",
          priceMin: 0
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
          title: "旅行業登録",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "minpaku-permit",
          title: "民泊許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "hotel-permit",
          title: "旅館営業許可",
          target: "テスト",
          priceMin: 0
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
          id: "social-welfare-corporation",
          title: "社会福祉法人設立認可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "medical-corporation",
          title: "医療法人設立",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "community-association",
          title: "自治会、町内会等の法人化",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "regional-organization",
          title: "地縁団体認可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "school-corporation",
          title: "学校法人設立認可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "religious-corporation",
          title: "宗教法人設立（規則認証）",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "npo-corporation",
          title: "NPO法人設立認証",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "general-foundation",
          title: "社団・財団法人設立",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "company-establishment",
          title: "会社設立",
          target: "テスト",
          priceMin: 0
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
          id: "warehouse-registration",
          title: "倉庫業登録",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "financial-instruments-registration",
          title: "金融商品取引業登録",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "telecommunications-notification",
          title: "電気通信事業者届出",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "money-lending-registration",
          title: "貸金業登録",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "used-goods-permit",
          title: "古物商許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "liquor-sales-license",
          title: "酒類販売業免許",
          target: "テスト",
          priceMin: 0
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
          id: "factory-establishment-permit",
          title: "工場設置認可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "development-permit",
          title: "開発行為許可",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "farmland-permit",
          title: "農地許可",
          target: "テスト",
          priceMin: 0
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
          id: "voluntary-guardianship-contract",
          title: "任意成年後見契約",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "certified-mail",
          title: "内容証明郵便",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "various-contracts",
          title: "各種契約書",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "will-inheritance",
          title: "遺言・相続",
          target: "テスト",
          priceMin: 0
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
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "care-service-designation",
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "pharmacy-license",
          title: "テスト",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "medical-device",
          title: "テスト",
          target: "テスト",
          priceMin: 0
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
          id: "financing",
          title: "融資",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "public-subsidies",
          title: "公的補助金・助成金",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "translation",
          title: "翻訳",
          target: "テスト",
          priceMin: 0
        },
        {
          id: "apostille-application",
          title: "アポスティーユ申請",
          target: "テスト",
          priceMin: 0
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
          id: "business-manager",
          title: "Business Manager Visa",
          target: "Residence status for corporate executives and managers."
        },
        {
          id: "designated-activities",
          title: "Designated Activities Visa",
          target: "Wide range of applicable persons including domestic workers for diplomats, working holiday participants, and nursing care worker candidates. Some cases allow no employment at all, while others permit employment across various options. ('Designated Activities No. 46/University Graduates' allows work in various fields. Requirements: graduation from a Japanese university and JLPT N1 certification)."
        },
        {
          id: "intra-company-transfer",
          title: "Intra-company Transfer Visa",
          target: "Residence status for transferees from foreign corporations with headquarters, branches, or offices in Japan."
        },
        {
          id: "student",
          title: "Student Visa",
          target: "For students at universities, vocational schools, Japanese language schools, etc. (international students)."
        },
        {
          id: "dependent",
          title: "Dependent Visa",
          target: "For spouses and children of foreign residents."
        },
        {
          id: "long-term-resident",
          title: "Long-term Resident Visa",
          target: "For third-generation Japanese descendants, Chinese orphans left in China, third-country resettlement refugees, etc."
        },
        {
          id: "specified-skilled-worker",
          title: "Specified Skilled Worker Visa",
          target: "Residence status for designated test passers in specific fields. Fields include care work, building cleaning, agriculture, fishery, food and beverage manufacturing, food service, materials and processing industries, industrial machinery manufacturing, electrical and electronics information-related industries, construction, shipbuilding and ship machinery, automobile maintenance, aviation, and accommodation - totaling 14 occupations. Even if applicable to each field, denial may result if specific regulated duties are not performed. The Specified Skilled Worker system is designed to address labor shortages."
        },
        {
          id: "highly-skilled-professional",
          title: "Highly Skilled Professional Visa",
          target: "Point-based highly skilled professionals. Three activity categories: business management, research, and technology. Foreign nationals who have been active as Highly Skilled Professional No. 1 for three years or more can obtain Highly Skilled Professional No. 2 and receive preferential treatment."
        },
        {
          id: "permanent-resident",
          title: "Permanent Residence Visa",
          target: "Residence status for foreign nationals who have received permanent residence permission. Conditions include: good conduct (law-abiding lifestyle without social criticism), sufficient assets or skills for living (including spouse's assets and skills), and recognition as beneficial to Japan's interests. Generally requires 10+ years of residence in Japan. Unpaid taxes or insurance premiums increase denial likelihood."
        },
        {
          id: "engineer-humanities",
          title: "Engineer/Specialist in Humanities/International Services Visa",
          target: "Residence status for foreign nationals engaged in work requiring technical knowledge in engineering, natural sciences, law, economics, sociology, and other humanities fields (Engineer/Specialist in Humanities), or work requiring thinking and sensitivity based on foreign culture (International Services). Includes mechanical engineers, marketers, designers, interpreters, private language teachers, etc. While broadly applicable, residence status cannot be obtained for work not falling under 'Engineer/Specialist in Humanities' or 'International Services' or when deemed lacking appropriate ability based on education, experience, qualifications, etc."
        },
        {
          id: "skilled-labor",
          title: "Skilled Labor Visa",
          target: "For foreign nationals requiring skilled labor in specialized industrial fields. Targets chefs, sports instructors, aircraft pilots, precious metal craftsmen, etc. Please note the distinction from 'Engineer/Specialist in Humanities/International Services'."
        },
        {
          id: "entertainer",
          title: "Entertainer Visa",
          target: "Residence status for foreign nationals coming to Japan for entertainment purposes, including actors, singers, dancers, professional athletes, etc."
        },
        {
          id: "artist",
          title: "Artist Visa",
          target: "Residence status for activities generating income in artistic fields such as music, fine arts, literature, etc. Excludes cases falling under 'Entertainer'."
        },
        {
          id: "spouse-of-japanese",
          title: "Spouse of Japanese National",
          target: "For spouses, biological children, and special adoptees of Japanese nationals."
        },
        {
          id: "spouse-of-permanent-resident",
          title: "Spouse of Permanent Resident",
          target: "For spouses of permanent residents/special permanent residents and biological children born and continuously residing in Japan."
        },
        {
          id: "long-term-resident-final",
          title: "Long-term Resident",
          target: "For third-generation Japanese descendants, Chinese orphans left in China, third-country resettlement refugees, etc."
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
          priceMin: 0        },
        {
          id: "construction-renewal",
          title: "Construction Business Permit Renewal",
          target: "Business operators who already have construction permits",
          priceMin: 0,
        },
        {
          id: "real-estate-license",
          title: "Real Estate License Application",
          target: "Business operators in the real estate industry",
          priceMin: 0,
        },
        {
          id: "construction-change",
          title: "Construction Permit Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "vehicle-registration",
          title: "Vehicle Registration",
          target: "Those requiring vehicle name change",
          priceMin: 0,
        },
        {
          id: "number-change",
          title: "License Plate Change",
          target: "Those requiring number plate change due to relocation",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "liquor-license",
          title: "Liquor Sales License Application",
          target: "Business operators selling alcoholic beverages",
          priceMin: 0,
        },
        {
          id: "entertainment-permit",
          title: "Entertainment Business Permit Application",
          target: "Business operators in entertainment industry",
          priceMin: 0,
        },
        {
          id: "food-delivery",
          title: "Food Business Notification",
          target: "Business operators manufacturing/selling food products",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "general-waste-permit",
          title: "General Waste Disposal Permit",
          target: "Business operators handling general waste disposal",
          priceMin: 0,
        },
        {
          id: "waste-renewal",
          title: "Waste Management Permit Renewal",
          target: "Business operators with existing permits",
          priceMin: 0,
        },
        {
          id: "waste-change",
          title: "Change Permit/Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "hotel-permit",
          title: "Hotel Business Permit Application",
          target: "Business operators running hotels/inns",
          priceMin: 0,
        },
        {
          id: "minpaku-notification",
          title: "Vacation Rental Business Notification",
          target: "Business operators running vacation rentals",
          priceMin: 0,
        },
        {
          id: "travel-renewal",
          title: "Travel Agency Registration Renewal",
          target: "Business operators with existing travel agency registration",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "llc-establishment",
          title: "LLC Establishment",
          target: "Those considering LLC establishment",
          priceMin: 0,
        },
        {
          id: "nonprofit-establishment",
          title: "General Incorporated Association/NPO Establishment",
          target: "Those considering nonprofit corporation establishment",
          priceMin: 0,
        },
        {
          id: "corporate-change",
          title: "Corporate Change Procedures",
          target: "Those with changes to corporate registration matters",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "permit-renewal",
          title: "Business Permit Renewal",
          target: "Business operators with existing permits",
          priceMin: 0,
        },
        {
          id: "permit-change",
          title: "Business Permit Change Notification",
          target: "Business operators with changes to permit details",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "development-permit",
          title: "Development Permit Application",
          target: "Business operators undertaking development projects",
          priceMin: 0,
        },
        {
          id: "land-boundary",
          title: "Land Boundary Confirmation",
          target: "Those needing to clarify land boundaries",
          priceMin: 0,
        },
        {
          id: "land-use-change",
          title: "Land Category Change Registration",
          target: "Those changing land categories",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "certified-mail",
          title: "Certified Mail Preparation",
          target: "Those considering debt collection or contract termination",
          priceMin: 0,
        },
        {
          id: "document-verification",
          title: "Various Legal Document Preparation",
          target: "Those needing public document preparation",
          priceMin: 0,
        },
        {
          id: "consultation",
          title: "Legal Consultation & Document Review",
          target: "Those wanting contract content or document verification",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "care-service-designation",
          title: "Care Facility Designation Application",
          target: "Those starting care businesses",
          priceMin: 0,
        },
        {
          id: "pharmacy-license",
          title: "Pharmacy License Application",
          target: "Those establishing pharmacies",
          priceMin: 0,
        },
        {
          id: "medical-device",
          title: "Medical Device Sales Business Permit",
          target: "Business operators selling medical devices",
          priceMin: 0,
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
          priceMin: 0,
        },
        {
          id: "document-collection",
          title: "Various Certificate Collection Agency",
          target: "Those needing certificate collection",
          priceMin: 0,
        },
        {
          id: "consultation-other",
          title: "Administrative Procedure Consultation",
          target: "Those wanting procedure consultation",
          priceMin: 0,
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
  },
  'zh-CN': {
    foreign: {
      title: "外国人相关业务",
      catchphrase: "在留资格・签证申请的专业支持",
      heroTitle: "【专家支持】外国人相关业务指南",
      metaTitle: "外国人相关业务 | Fortia行政书士事务所",
      metaDescription: "专业支持外国人的在留资格・签证申请",
      services: [],
      faq: [],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
    construction: { title: "建设・不动产业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    automotive: { title: "汽车相关业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    corporate: { title: "法人设立业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    "business-license": { title: "营业许可", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    land: { title: "土地相关业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    "legal-documentation": { title: "权利义务・事实证明", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    "medical-care": { title: "医疗・护理相关业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" },
    other: { title: "其他业务", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首页", services: "服务" }, tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" }, faqTitle: "常见问题" }
  },
  'zh-TW': {
    foreign: {
      title: "外國人相關業務",
      catchphrase: "在留資格・簽證申請的專業支援",
      heroTitle: "【專家支援】外國人相關業務指南",
      metaTitle: "外國人相關業務 | Fortia行政書士事務所",
      metaDescription: "專業支援外國人的在留資格・簽證申請",
      services: [],
      faq: [],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    construction: { title: "建設・不動產業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    automotive: { title: "汽車相關業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    corporate: { title: "法人設立業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    "business-license": { title: "營業許可", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    land: { title: "土地相關業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    "legal-documentation": { title: "權利義務・事實證明", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    "medical-care": { title: "醫療・護理相關業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    other: { title: "其他業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" }
  }
};

export type { ServiceItem, FaqItem, CategoryPageContent };