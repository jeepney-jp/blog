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
          title: "建設業許可申請",
          target: "建設工事業を営む場合に必要な許可申請。一般建設業許可・特定建設業許可に対応。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "construction-renewal",
          title: "建設業許可更新",
          target: "5年ごとに必要な建設業許可の更新手続き。期限管理から申請まで完全サポート。",
          priceMin: 80000,
          priceMax: 120000
        },
        {
          id: "real-estate-license",
          title: "宅地建物取引業免許申請",
          target: "不動産売買・仲介業を営む際に必要な宅建業免許の新規取得申請。",
          priceMin: 120000,
          priceMax: 180000
        },
        {
          id: "construction-change",
          title: "各種変更届出",
          target: "営業所移転、役員変更、商号変更等の各種変更届出手続き。",
          priceMin: 30000,
          priceMax: 80000
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
          title: "自動車保管場所証明書（車庫証明）",
          target: "新車・中古車購入時に必要な車庫証明の取得申請。迅速な手続きで車両登録をサポートします。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "vehicle-registration",
          title: "自動車登録・名義変更",
          target: "車両の所有者変更、住所変更等の各種登録手続き。正確な書類作成で確実に手続きを完了させます。",
          priceMin: 20000,
          priceMax: 35000
        },
        {
          id: "mini-vehicle-notification",
          title: "軽自動車届出",
          target: "軽自動車の登録・名義変更手続き。軽自動車検査協会での各種届出を代行いたします。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "auto-dismantling-permit",
          title: "自動車解体業許可",
          target: "自動車の解体・破砕を行う業者に必要な許可申請。環境への配慮と適切な処理体制が求められます。",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "freight-transport-permit",
          title: "貨物自動車運送事業許可",
          target: "トラック等による貨物運送事業を営む際に必要な許可申請。運行管理体制の整備が求められます。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "passenger-transport-permit",
          title: "旅客自動車運送事業許可",
          target: "タクシーやバス等の旅客運送事業を営む際に必要な許可申請。安全性と事業計画の審査があります。",
          priceMin: 250000,
          priceMax: 450000
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
          target: "レストラン、カフェ、居酒屋等の飲食店営業を行う場合に必要な許可申請。保健所への届出と営業許可取得をサポート。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "liquor-license",
          title: "酒類販売業免許申請",
          target: "アルコール類の販売業を行う場合に必要な免許申請。一般酒類小売業・通信販売酒類小売業等に対応。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "food-manufacturing-permit",
          title: "食品製造業許可申請",
          target: "パン製造、菓子製造、食肉製品製造等の食品製造業に必要な許可申請。HACCPに沿った衛生管理対応。",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "late-night-alcohol-notification",
          title: "深夜酒類提供飲食店営業開始届出",
          target: "深夜12時以降にアルコールを提供する飲食店の営業開始届出。警察署への届出が必要。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "entertainment-permit",
          title: "風俗営業許可申請",
          target: "接待飲食等営業（キャバクラ、スナック等）を行う場合に必要な許可申請。厳格な人的要件・構造要件をクリア。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "adult-entertainment-notification",
          title: "性風俗特殊営業営業開始届出",
          target: "性風俗関連特殊営業の営業開始届出。営業の種別に応じた適切な届出手続きをサポート。",
          priceMin: 80000,
          priceMax: 120000
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
          id: "industrial-waste-transport-permit",
          title: "産業廃棄物収集運搬業許可申請",
          target: "事業活動に伴って生じた産業廃棄物の収集・運搬を業として行う場合に必要な許可申請。積替え保管の有無により要件が異なります。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "industrial-waste-permit",
          title: "産業廃棄物処理業許可申請",
          target: "産業廃棄物の中間処理・最終処分を業として行う場合に必要な許可申請。施設基準や技術管理者の配置が必要です。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "general-waste-permit",
          title: "一般廃棄物処理業許可申請",
          target: "市町村が処理する一般廃棄物の収集運搬・処分を業として行う場合に必要な許可申請。市町村ごとに許可が必要です。",
          priceMin: 100000,
          priceMax: 200000
        },
        {
          id: "industrial-waste-facility-permit",
          title: "産業廃棄物処理施設設置許可申請",
          target: "産業廃棄物の処理施設を設置する際に必要な許可申請。環境影響評価や周辺住民への配慮が求められます。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "general-waste-facility-permit",
          title: "一般廃棄物処理施設設置許可申請",
          target: "一般廃棄物の処理施設を設置する際に必要な許可申請。生活環境影響調査などの厳格な審査があります。",
          priceMin: 400000,
          priceMax: 800000
        },
        {
          id: "waste-permit-renewal",
          title: "廃棄物処理業許可更新申請",
          target: "5年ごとに必要な廃棄物処理業許可の更新手続き。継続的な事業運営のための重要な手続きです。",
          priceMin: 80000,
          priceMax: 150000
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
          target: "旅行業を営む際に必要な登録申請。第1種〜第3種・地域限定まで業務範囲に応じた登録区分があります。営業保証金の供託が必要です。",
          priceMin: 200000,
          priceMax: 500000
        },
        {
          id: "hotel-permit",
          title: "旅館業許可申請",
          target: "旅館・ホテル営業を行う際に必要な許可申請。構造設備基準の確認と保健所での事前協議が重要なプロセスです。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "minpaku-permit",
          title: "住宅宿泊事業届出（民泊）",
          target: "住宅宿泊事業法に基づく民泊営業の届出手続き。年間営業日数180日以内の制限があります。近隣住民への配慮が必要です。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "travel-agent-manager",
          title: "旅行業務取扱管理者選任届",
          target: "各営業所に配置が必要な旅行業務取扱管理者の選任・変更届出。国家資格保有者の配置が義務付けられています。",
          priceMin: 30000,
          priceMax: 50000
        },
        {
          id: "accommodation-registration",
          title: "簡易宿所営業許可申請",
          target: "ゲストハウス、カプセルホテル等の簡易宿所営業許可申請。一般的な旅館業より緩和された基準が適用されます。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "travel-renewal",
          title: "旅行業登録更新",
          target: "5年ごとに必要な旅行業登録の更新手続き。継続的な事業運営に必要な重要な手続きです。",
          priceMin: 100000,
          priceMax: 200000
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
          target: "倉庫業を営む際に必要な登録申請。保管施設の設置基準と業務管理体制の整備が必要です。",
          priceMin: 200000,
          priceMax: 400000
        },
        {
          id: "financial-instruments-registration",
          title: "金融商品取引業登録",
          target: "投資顧問業、投資運用業等の金融商品取引業を営む際の登録申請。高度な専門性と厳格な要件が求められます。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "telecommunications-notification",
          title: "電気通信事業者届出",
          target: "インターネットプロバイダー、電気通信サービスを提供する事業者の届出手続き。サービス種別により手続きが異なります。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "money-lending-registration",
          title: "貸金業登録",
          target: "貸金業を営む際に必要な登録申請。財務基盤、人的素質、業務運営体制の審査があります。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "used-goods-permit",
          title: "古物商許可",
          target: "中古品の売買、交換、委託販売を行う際に必要な許可申請。ネットオークションやリサイクルショップ運営にも必要です。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "liquor-sales-license",
          title: "酒類販売業免許",
          target: "酒類の小売業、卸売業を営む際に必要な免許申請。業態の種類や販売場所により免許区分が異なります。",
          priceMin: 80000,
          priceMax: 120000
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
      services: [
        {
          id: "business-manager",
          title: "经营・管理签证",
          target: "企业等的经营者或管理者取得的在留资格。"
        },
        {
          id: "designated-activities",
          title: "特定活动签证",
          target: "外交官等的家事使用人、打工度假、护理福祉士候选者等，范围广泛。有些情况完全不能就劳，有些情况可在广泛选择中就劳。（「特定活动46号／本邦大学毕业者」可在各种分野就劳。取得条件：毕业于日本大学，取得日语能力考试N1）。"
        },
        {
          id: "intra-company-transfer",
          title: "企业内转勤签证",
          target: "从在日本有总公司或分公司、支店的外国法人转勤者取得的在留资格。"
        },
        {
          id: "student",
          title: "留学签证",
          target: "大学、专门学校、日语学校等学生（即留学生）取得。"
        },
        {
          id: "dependent",
          title: "家族滞在签证",
          target: "在留外国人的配偶・子女适用。"
        },
        {
          id: "long-term-resident",
          title: "定住者签证",
          target: "日系三世、中国残留邦人、第三国定住难民等适用。"
        },
        {
          id: "specified-skilled-worker",
          title: "特定技能签证",
          target: "在特定分野中，指定考试合格者可取得的在留资格。分野有护理、大楼清洁、农业、渔业、饮食料品制造业、外食业、素形材产业、产业机械制造业、电气・电子信息相关产业、建设业、造船舶用工业、汽车整备业、航空业、住宿业的14职种。即使符合各分野，如不进行各自明确规定的指定业务也会不许可，请注意。特定技能制度是为解决劳动力不足的制度。"
        },
        {
          id: "highly-skilled-professional",
          title: "高度人才签证",
          target: "基于积分制的高度人才。有事业经营者、研究者、技术者3个活动类型。作为高度专门职1号活动3年以上的外国人可取得高度专门职2号，能受到优惠措施。"
        },
        {
          id: "permanent-resident",
          title: "永住签证",
          target: "获得永住许可的外国人可取得的在留资格。取得条件如下：・品行善良（遵守法律，过不被社会非难的生活）・生活上有充分资产或技能（含配偶的资产或技能）・被认定符合日本国利益。原则上需在日本在留10年以上。如有税金或保险费欠缴，不许可的可能性很高。"
        },
        {
          id: "engineer-humanities",
          title: "技术・人文知识・国际业务签证",
          target: "需要工学、自然科学、法律学、经济学、社会学等人文科学分野技术或知识的业务（技术・人文知识），需要以外国文化为基盤的思考或感受性的业务（国际业务）的外国人的在留资格。机械工学等技术者、工程师、市场营销业务从事者、设计师、口译、民间企业语学教师等适用。适用范围广泛，但不符合「技术・人文知识」「国际业务」的业务，或从学历・经历・资格等判断没有相应能力的情况无法取得在留资格。"
        },
        {
          id: "skilled-labor",
          title: "技能签证",
          target: "需要产业上特殊分野的熟练技能的外国人适用。料理调理师、体育指导者、航空机操纵者、贵金属等加工职人等为对象，请注意与「技术・人文知识・国际业务」的区别。"
        },
        {
          id: "entertainer",
          title: "兴行签证",
          target: "演员、歌手、舞者、职业体育选手等，为兴行来日的外国人的在留资格。"
        },
        {
          id: "artist",
          title: "艺术签证",
          target: "在音乐、美术、文学等艺术分野进行获得收入活动的在留资格。不包括符合「兴行」的情况。"
        },
        {
          id: "spouse-of-japanese",
          title: "日本人配偶者等",
          target: "日本人的配偶、实子、特别养子适用。"
        },
        {
          id: "spouse-of-permanent-resident",
          title: "永住者配偶者等",
          target: "永住者・特别永住者的配偶、在日本出生并继续在留的实子适用。"
        },
        {
          id: "long-term-resident-final",
          title: "定住者",
          target: "日系三世、中国残留邦人、第三国定住难民等适用。"
        }
      ],
      faq: [
        {
          question: "签证申请需要多长时间？",
          answer: "根据申请内容不同，一般为1〜3个月左右。特定技能签证相对较快，永住许可申请倾向于需要较长时间。"
        },
        {
          question: "需要什么必要文件？",
          answer: "根据申请签证种类不同而异。详细情况请通过免费咨询了解。一般需要护照、在留卡、所得证明书、雇用契约书等。"
        },
        {
          question: "申请不许可的话怎么办？",
          answer: "分析不许可理由，支持准备再申请。本事务所拥有很高的许可率，请放心委托。"
        }
      ],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
    construction: {
      title: "建设・不动产业务",
      catchphrase: "建设业许可・不动产业执照的专业支持",
      heroTitle: "【专家支持】建设・不动产业务指南",
      metaTitle: "建设・不动产业务 | Fortia行政书士事务所",
      metaDescription: "建设业许可、不动产业执照的取得到更新，专家全程支持。经验丰富的行政书士提供可靠的手续。",
      services: [
        {
          id: "construction-permit",
          title: "建设业许可申请",
          target: "经营建设工程业需要的许可申请。对应一般建设业许可・特定建设业许可。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "construction-renewal",
          title: "建设业许可更新",
          target: "每5年需要的建设业许可更新手续。从期限管理到申请完全支持。",
          priceMin: 80000,
          priceMax: 120000
        },
        {
          id: "real-estate-license",
          title: "房地产交易业执照申请",
          target: "经营不动产买卖・中介业时需要的不动产业执照新规取得申请。",
          priceMin: 120000,
          priceMax: 180000
        },
        {
          id: "construction-change",
          title: "各种变更申报",
          target: "营业所迁移、管理人员变更、商号变更等各种变更申报手续。",
          priceMin: 30000,
          priceMax: 80000
        }
      ],
      faq: [
        {
          question: "建设业许可从什么时候开始需要？",
          answer: "建筑一体化工程1,500万日元以上、其他工程500万日元以上的承包工程时需要。"
        },
        {
          question: "许可的有效期间是多久？",
          answer: "建设业许可、不动产业执照均为5年。需要在期限前进行更新手续。"
        }
      ],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
    automotive: {
      title: "汽车相关业务",
      catchphrase: "车库证明・汽车登记的迅速支持",
      heroTitle: "【专家支持】汽车相关业务指南",
      metaTitle: "汽车相关业务 | Fortia行政书士事务所",
      metaDescription: "迅速支持车库证明、汽车登记手续。代替繁忙的您进行可靠的手续办理。",
      services: [
        {
          id: "garage-certificate",
          title: "汽车保管地证明书（车库证明）",
          target: "购买新车・二手车时需要的车库证明取得申请。迅速手续支持车辆登记。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "vehicle-registration",
          title: "汽车登记・名义变更",
          target: "车辆所有者变更、地址变更等各种登记手续。通过准确的文件制作确实完成手续。",
          priceMin: 20000,
          priceMax: 35000
        },
        {
          id: "mini-vehicle-notification",
          title: "轻型汽车申报",
          target: "轻型汽车的登记・名义变更手续。代理在轻型汽车检查协会的各种申报。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "auto-dismantling-permit",
          title: "汽车解体业许可",
          target: "进行汽车解体・破碎的业者需要的许可申请。要求环境配虑和适当的处理体制。",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "freight-transport-permit",
          title: "货物汽车运输业许可",
          target: "经营卡车等货物运输业时需要的许可申请。要求整备运行管理体制。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "passenger-transport-permit",
          title: "旅客汽车运输业许可",
          target: "经营出租车或巴士等旅客运输业时需要的许可申请。需要安全性和业务计划的审查。",
          priceMin: 250000,
          priceMax: 450000
        }
      ],
      faq: [
        {
          question: "车库证明取得需要多长时间？",
          answer: "从申请到颁发通常需芁3〜7天。根据地区略有不同。"
        },
        {
          question: "需要什么文件？",
          answer: "车库证明需要保管地使用权原疏明书面、位置图・配置图等。详细情况请咨询。"
        }
      ],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
    corporate: {
      title: "法人设立业务",
      catchphrase: "股份有限公司・合同公司设立的专业支持",
      heroTitle: "【专家支持】法人设立业务指南",
      metaTitle: "法人设立业务 | Fortia行政书士事务所",
      metaDescription: "从股份有限公司、合同公司的设立到设立后的手续，专家提供一站式服务。",
      services: [
        {
          id: "corporation-establishment",
          title: "股份有限公司设立",
          target: "股份有限公司的新设立手续。从公司章程制作到登记申请，支持一系列手续。",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "llc-establishment",
          title: "合同公司设立",
          target: "合同公司的新设立手续。设立费用低廉，可进行灵活的经营。",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "npo-certification",
          title: "NPO法人设立认证",
          target: "特定非营利活动法人的设立认证申请。支持进行公益活动的团体的法人化。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "general-incorporated-association",
          title: "一般社团法人设立",
          target: "一般社团法人的设立登记申请。适合公益目的事业和互助团体的法人化。",
          priceMin: 100000,
          priceMax: 150000
        },
        {
          id: "corporate-change",
          title: "各种变更登记",
          target: "管理人员变更、总部迁址、资本金变更等法人登记事项的变更手续。",
          priceMin: 30000,
          priceMax: 80000
        },
        {
          id: "corporate-dissolution",
          title: "法人解散・清算",
          target: "法人的解散登记及清算手续。支持事业终止时的适当手续。",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "股份有限公司和合同公司的区别是什么？",
          answer: "股份有限公司具有更高的社会信誉度，合同公司的设立费用较低、手续简单。根据业务内容和将来展望选择。"
        },
        {
          question: "设立需要多长时间？",
          answer: "从文件准备到登记完成通常需芁2〜4周。根据公司章程认证和登记申请的时间安排会有所不同。"
        }
      ],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
    "food-entertainment": {
      title: "餐饮・娱乐业务",
      catchphrase: "餐厅营业许可・娱乐业许可的专业支持",
      heroTitle: "【专家支持】餐饮・娱乐业务指南",
      metaTitle: "餐饮・娱乐业务 | Fortia行政书士事务所",
      metaDescription: "餐厅许可、娱乐业许可的取得到更新，专家全程支持。可靠的手续确保营业开始。",
      services: [
        {
          id: "restaurant-permit",
          title: "餐厅营业许可申请",
          target: "经营餐厅、咖啡店、居酒屋等餐饮店时需要的许可申请。支持向保健所申报和取得营业许可。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "liquor-license",
          title: "酒类销售业许可申请",
          target: "从事酒精饮料销售业时需要的许可申请。对应一般酒类零售业・通信销售酒类零售业等。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "food-manufacturing-permit",
          title: "食品制造业许可申请",
          target: "面包制造、糕点制造、肉制品制造等食品制造业需要的许可申请。对应HACCP的卫生管理。",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "late-night-alcohol-notification",
          title: "深夜酒类提供餐饮店营业开始申报",
          target: "深夜12点以后提供酒精饮料的餐饮店营业开始申报。需要向警察署申报。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "entertainment-permit",
          title: "风俗营业许可申请",
          target: "从事接待餐饮等营业（夜总会、酒吧等）时需要的许可申请。需要满足严格的人员要求・结构要求。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "adult-entertainment-notification",
          title: "性风俗特殊营业营业开始申报",
          target: "性风俗相关特殊营业的营业开始申报。根据营业种类支持适当的申报手续。",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "取得餐厅营业许可需要多长时间？",
          answer: "从申请到许可通常需要2〜4周左右。包括事前协商和图纸制作的时间，建议留出1〜2个月的余量。"
        },
        {
          question: "许可有有效期吗？",
          answer: "餐厅营业许可有效期为5〜8年（因自治体而异），酒类销售业许可有效期为6年。需要在期限前进行更新手续。"
        }
      ],
      breadcrumbs: {
        home: "首页",
        services: "服务"
      },
      tableHeaders: {
        serviceName: "服务名称",
        serviceOverview: "服务概要",
        pricingGuide: "费用指南"
      },
      faqTitle: "常见问题"
    },
    "waste-management": {
      title: "废物处理业许可业务",
      catchphrase: "产业废物收集运输业许可的专业支持",
      heroTitle: "【专家支持】废物处理业许可业务指南",
      metaTitle: "废物处理业许可业务 | Fortia行政书士事务所",
      metaDescription: "产业废物收集运输业许可、一般废物处理业许可的取得到更新，专家全程支持。",
      services: [
        {
          id: "industrial-waste-transport-permit",
          title: "产业废物收集运输业许可申请",
          target: "从事因事业活动而产生的产业废物收集・运输业务时需要的许可申请。根据是否有转运保管，要求也有所不同。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "industrial-waste-permit",
          title: "产业废物处理业许可申请",
          target: "从事产业废物中间处理・最终处理业务时需要的许可申请。需要满足设施标准和配置技术管理者。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "general-waste-permit",
          title: "一般废物处理业许可申请",
          target: "从事市町村处理的一般废物收集运输・处理业务时需要的许可申请。每个市町村都需要许可。",
          priceMin: 100000,
          priceMax: 200000
        },
        {
          id: "industrial-waste-facility-permit",
          title: "产业废物处理设施设置许可申请",
          target: "设置产业废物处理设施时需要的许可申请。需要环境影响评价和对周边居民的配虑。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "general-waste-facility-permit",
          title: "一般废物处理设施设置许可申请",
          target: "设置一般废物处理设施时需要的许可申请。有生活环境影响调查等严格审查。",
          priceMin: 400000,
          priceMax: 800000
        },
        {
          id: "waste-permit-renewal",
          title: "废物处理业许可更新申请",
          target: "每5年需要进行的废物处理业许可更新手续。是持续事业运营的重要手续。",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "取得许可需要什么要求？",
          answer: "需要不属于欠格要件、参加讲习会、具备适当的设施・设备、有财政基础等条件。"
        },
        {
          question: "许可的有效期是多长时间？",
          answer: "废物处理业许可的有效期为5年。需要在期限前2个月进行更新申请。"
        }
      ],
      breadcrumbs: {
        home: "首页",
        services: "服务"
      },
      tableHeaders: {
        serviceName: "服务名称",
        serviceOverview: "服务概要",
        pricingGuide: "费用指南"
      },
      faqTitle: "常见问题"
    },
    "travel-hospitality": {
      title: "旅行・旅馆业务",
      catchphrase: "旅行业登记・旅馆业许可的专业支持",
      heroTitle: "【专家支持】旅行・旅馆业务指南",
      metaTitle: "旅行・旅馆业务 | Fortia行政书士事务所",
      metaDescription: "旅行业登记、旅馆业许可、民宿申报等旅行・住宿业相关的许可认证手续专家支持。",
      services: [
        {
          id: "travel-agency",
          title: "旅行业登记申请",
          target: "从事旅行业时需要的登记申请。根据业务范围有第1种~第3种・地域限定等登记区分。需要营业保证金的供托。",
          priceMin: 200000,
          priceMax: 500000
        },
        {
          id: "hotel-permit",
          title: "旅馆业许可申请",
          target: "从事旅馆・酒店营业时需要的许可申请。结构设备基准的确认和与保健所的事前协商是重要过程。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "minpaku-permit",
          title: "住宅住宿事业申报（民宿）",
          target: "基于住宅住宿事业法的民宿营业申报手续。有年间营业日数180日以内的限制。需要对周边居民的配虑。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "travel-agent-manager",
          title: "旅行业务处理管理者选任届",
          target: "各营业所需要配置的旅行业务处理管理者的选任・变更申报。义务配置国家资格保有者。",
          priceMin: 30000,
          priceMax: 50000
        },
        {
          id: "accommodation-registration",
          title: "简易住所营业许可申请",
          target: "青年旅社、胶囊酒店等简易住所营业许可申请。适用比一般旅馆业更缓和的标准。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "travel-renewal",
          title: "旅行业登记更新",
          target: "每5年需要进行的旅行业登记更新手续。是持续事业运营必要的重要手续。",
          priceMin: 100000,
          priceMax: 200000
        }
      ],
      faq: [
        {
          question: "旅行业登记和旅行业代理店业务处理管理者的区别是什么？",
          answer: "旅行业登记是事业者的登记，旅行业务处理管理者是各营业所需要的有资格者。两者都是必需的。"
        },
        {
          question: "民宿和旅馆业许可的区别是什么？",
          answer: "民宿是年间180日以内的营业采用申报制，旅馆业可以全年营业采用许可制。根据营业规模和形态选择适当的制度。"
        }
      ],
      breadcrumbs: {
        home: "首页",
        services: "服务"
      },
      tableHeaders: {
        serviceName: "服务名称",
        serviceOverview: "服务概要",
        pricingGuide: "费用指南"
      },
      faqTitle: "常见问题"
    },
    "business-license": {
      title: "营业许可",
      catchphrase: "各种营业许可申请的专业支持",
      heroTitle: "【专家支持】营业许可指南",
      metaTitle: "营业许可 | Fortia行政书士事务所",
      metaDescription: "从各种营业许可的取得到更新，专家全程支持。广泛对应各行业的许可申请。",
      services: [
        {
          id: "warehouse-registration",
          title: "仓库业登记",
          target: "经营仓库业时需要的登记申请。需要整备保管设施的设置标准和业务管理体制。",
          priceMin: 200000,
          priceMax: 400000
        },
        {
          id: "financial-instruments-registration",
          title: "金融产品交易业登记",
          target: "经营投资咨询业、投资管理业等金融产品交易业的登记申请。需要高度的专业性和严格的条件。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "telecommunications-notification",
          title: "电信事业者申报",
          target: "互联网服务提供商、电信服务事业者的申报手续。根据服务种类的不同，手续也有所不同。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "money-lending-registration",
          title: "贷款业登记",
          target: "经营贷款业时需要的登记申请。对财务基础、人员素质、业务运营体制进行审查。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "used-goods-permit",
          title: "古物商许可",
          target: "进行二手品买卖、交换、委托销售时需要的许可申请。网上拍卖和回收店运营也需要此许可。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "liquor-sales-license",
          title: "酒类销售业许可",
          target: "经营酒类零售业、批发业时需要的许可申请。根据业态类型和销售地点，许可类别不同。",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "哪些行业需要营业许可？",
          answer: "餐饮业、理发美容业、干洗业、古物营业、保安业等众多行业。不同行业的许可条件不同，详细情况请咨询。"
        },
        {
          question: "获取许可的条件是什么？",
          answer: "条件因行业而异，但通常包括设施标准、人员条件、财务基础等。我们会事先确认条件并进行准备。"
        }
      ],
      breadcrumbs: { home: "首页", services: "服务" },
      tableHeaders: { serviceName: "服务名称", serviceOverview: "服务概要", pricingGuide: "费用指南" },
      faqTitle: "常见问题"
    },
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
      services: [
        {
          id: "business-manager",
          title: "經營・管理簽證",
          target: "企業等的經營者或管理者取得的在留資格。"
        },
        {
          id: "designated-activities",
          title: "特定活動簽證",
          target: "外交官等的家事使用人、打工度假、護理福祉士候選者等，範圍廣泛。有些情況完全不能就勞，有些情況可在廣泛選擇中就勞。（「特定活動46號／本邦大學畢業者」可在各種分野就勞。取得條件：畢業於日本大學，取得日語能力考試N1）。"
        },
        {
          id: "intra-company-transfer",
          title: "企業內轉勤簽證",
          target: "從在日本有總公司或分公司、支店的外國法人轉勤者取得的在留資格。"
        },
        {
          id: "student",
          title: "留學簽證",
          target: "大學、專門學校、日語學校等學生（即留學生）取得。"
        },
        {
          id: "dependent",
          title: "家族滯在簽證",
          target: "在留外國人的配偶・子女適用。"
        },
        {
          id: "long-term-resident",
          title: "定住者簽證",
          target: "日系三世、中國殘留邦人、第三國定住難民等適用。"
        },
        {
          id: "specified-skilled-worker",
          title: "特定技能簽證",
          target: "在特定分野中，指定考試合格者可取得的在留資格。分野有護理、大樓清潔、農業、漁業、飲食料品製造業、外食業、素形材產業、產業機械製造業、電氣・電子資訊相關產業、建設業、造船舶用工業、汽車整備業、航空業、住宿業的14職種。即使符合各分野，如不進行各自明確規定的指定業務也會不許可，請注意。特定技能制度是為解決勞動力不足的制度。"
        },
        {
          id: "highly-skilled-professional",
          title: "高度人才簽證",
          target: "基於積分制的高度人才。有事業經營者、研究者、技術者3個活動類型。作為高度專門職1號活動3年以上的外國人可取得高度專門職2號，能受到優惠措施。"
        },
        {
          id: "permanent-resident",
          title: "永住簽證",
          target: "獲得永住許可的外國人可取得的在留資格。取得條件如下：・品行善良（遵守法律，過不被社會非難的生活）・生活上有充分資產或技能（含配偶的資產或技能）・被認定符合日本國利益。原則上需在日本在留10年以上。如有稅金或保險費欠繳，不許可的可能性很高。"
        },
        {
          id: "engineer-humanities",
          title: "技術・人文知識・國際業務簽證",
          target: "需要工學、自然科學、法律學、經濟學、社會學等人文科學分野技術或知識的業務（技術・人文知識），需要以外國文化為基盤的思考或感受性的業務（國際業務）的外國人的在留資格。機械工學等技術者、工程師、市場行銷業務從事者、設計師、口譯、民間企業語學教師等適用。適用範圍廣泛，但不符合「技術・人文知識」「國際業務」的業務，或從學歷・經歷・資格等判斷沒有相應能力的情況無法取得在留資格。"
        },
        {
          id: "skilled-labor",
          title: "技能簽證",
          target: "需要產業上特殊分野的熟練技能的外國人適用。料理調理師、體育指導者、航空機操縱者、貴金屬等加工職人等為對象，請注意與「技術・人文知識・國際業務」的區別。"
        },
        {
          id: "entertainer",
          title: "興行簽證",
          target: "演員、歌手、舞者、職業體育選手等，為興行來日的外國人的在留資格。"
        },
        {
          id: "artist",
          title: "藝術簽證",
          target: "在音樂、美術、文學等藝術分野進行獲得收入活動的在留資格。不包括符合「興行」的情況。"
        },
        {
          id: "spouse-of-japanese",
          title: "日本人配偶者等",
          target: "日本人的配偶、實子、特別養子適用。"
        },
        {
          id: "spouse-of-permanent-resident",
          title: "永住者配偶者等",
          target: "永住者・特別永住者的配偶、在日本出生並繼續在留的實子適用。"
        },
        {
          id: "long-term-resident-final",
          title: "定住者",
          target: "日系三世、中國殘留邦人、第三國定住難民等適用。"
        }
      ],
      faq: [
        {
          question: "簽證申請需要多長時間？",
          answer: "根據申請內容不同，一般為1〜3個月左右。特定技能簽證相對較快，永住許可申請傾向於需要較長時間。"
        },
        {
          question: "需要什麼必要文件？",
          answer: "根據申請簽證種類不同而異。詳細情況請透過免費諮詢了解。一般需要護照、在留卡、所得證明書、雇用契約書等。"
        },
        {
          question: "申請不許可的話怎麼辦？",
          answer: "分析不許可理由，支援準備再申請。本事務所擁有很高的許可率，請放心委託。"
        }
      ],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    construction: {
      title: "建設・不動產業務",
      catchphrase: "建設業許可・不動產業執照的專業支援",
      heroTitle: "【專家支援】建設・不動產業務指南",
      metaTitle: "建設・不動產業務 | Fortia行政書士事務所",
      metaDescription: "建設業許可、不動產業執照的取得到更新，專家全程支援。經驗豐富的行政書士提供可靠的手續。",
      services: [
        {
          id: "construction-permit",
          title: "建設業許可申請",
          target: "經營建設工程業需要的許可申請。對應一般建設業許可・特定建設業許可。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "construction-renewal",
          title: "建設業許可更新",
          target: "每5年需要的建設業許可更新手續。從期限管理到申請完全支援。",
          priceMin: 80000,
          priceMax: 120000
        },
        {
          id: "real-estate-license",
          title: "房地產交易業執照申請",
          target: "經營不動產買賣・仲介業時需要的不動產業執照新規取得申請。",
          priceMin: 120000,
          priceMax: 180000
        },
        {
          id: "construction-change",
          title: "各種變更申報",
          target: "營業所遷移、管理人員變更、商號變更等各種變更申報手續。",
          priceMin: 30000,
          priceMax: 80000
        }
      ],
      faq: [
        {
          question: "建設業許可從什麼時候開始需要？",
          answer: "建築一體化工程1,500萬日元以上、其他工程500萬日元以上的承包工程時需要。"
        },
        {
          question: "許可的有效期間是多久？",
          answer: "建設業許可、不動產業執照均為5年。需要在期限前進行更新手續。"
        }
      ],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    automotive: {
      title: "汽車相關業務",
      catchphrase: "車庫證明・汽車登記的迅速支援",
      heroTitle: "【專家支援】汽車相關業務指南",
      metaTitle: "汽車相關業務 | Fortia行政書士事務所",
      metaDescription: "迅速支援車庫證明、汽車登記手續。代替繁忙的您進行可靠的手續辦理。",
      services: [
        {
          id: "garage-certificate",
          title: "汽車保管地證明書（車庫證明）",
          target: "購買新車・二手車時需要的車庫證明取得申請。迅速手續支持車輛登記。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "vehicle-registration",
          title: "汽車登記・名義變更",
          target: "車輛所有者變更、住址變更等各種登記手續。通過準確的文件製作確實完成手續。",
          priceMin: 20000,
          priceMax: 35000
        },
        {
          id: "mini-vehicle-notification",
          title: "輕型汽車申報",
          target: "輕型汽車的登記・名義變更手續。代理在輕型汽車檢查協會的各種申報。",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "auto-dismantling-permit",
          title: "汽車解體業許可",
          target: "進行汽車解體・破碎的業者需要的許可申請。要求環境配慮和適當的處理體制。",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "freight-transport-permit",
          title: "貨物汽車運輸業許可",
          target: "經營卡車等貨物運輸業時需要的許可申請。要求整備運行管理體制。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "passenger-transport-permit",
          title: "旅客汽車運輸業許可",
          target: "經營出租車或巴士等旅客運輸業時需要的許可申請。需要安全性和業務計劃的審查。",
          priceMin: 250000,
          priceMax: 450000
        }
      ],
      faq: [
        {
          question: "車庫證明取得需要多長時間？",
          answer: "從申請到發放通常需芁3〜7天。根據地區略有不同。"
        },
        {
          question: "需要什麼文件？",
          answer: "車庫證明需要保管地使用權原疏明書面、位置圖・配置圖等。詳細情況請詢問。"
        }
      ],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    corporate: {
      title: "法人設立業務",
      catchphrase: "股份有限公司・合同公司設立的專業支援",
      heroTitle: "【專家支援】法人設立業務指南",
      metaTitle: "法人設立業務 | Fortia行政書士事務所",
      metaDescription: "從股份有限公司、合同公司的設立到設立後的手續，專家提供一站式服務。",
      services: [
        {
          id: "corporation-establishment",
          title: "股份有限公司設立",
          target: "股份有限公司的新設立手續。從公司章程製作到登記申請，支援一系列手續。",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "llc-establishment",
          title: "合同公司設立",
          target: "合同公司的新設立手續。設立費用低廉，可進行靈活的經營。",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "npo-certification",
          title: "NPO法人設立認證",
          target: "特定非營利活動法人的設立認證申請。支援進行公益活動的團體的法人化。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "general-incorporated-association",
          title: "一般社團法人設立",
          target: "一般社團法人的設立登記申請。適合公益目的事業和互助團體的法人化。",
          priceMin: 100000,
          priceMax: 150000
        },
        {
          id: "corporate-change",
          title: "各種變更登記",
          target: "管理人員變更、總部遷址、資本金變更等法人登記事項的變更手續。",
          priceMin: 30000,
          priceMax: 80000
        },
        {
          id: "corporate-dissolution",
          title: "法人解散・清算",
          target: "法人的解散登記及清算手續。支援事業結束時的適当手續。",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "股份有限公司和合同公司的區別是什麼？",
          answer: "股份有限公司具有更高的社會信譽度，合同公司的設立費用較低、手續簡單。根據業務內容和未來展望選擇。"
        },
        {
          question: "設立需要多長時間？",
          answer: "從文件準備到登記完成通常需芁2〜4週。根據公司章程認證和登記申請的時間安排會有所不同。"
        }
      ],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    "food-entertainment": {
      title: "餐飲・娛樂業務",
      catchphrase: "餐廳營業許可・娛樂業許可的專業支援",
      heroTitle: "【專家支援】餐飲・娛樂業務指南",
      metaTitle: "餐飲・娛樂業務 | Fortia行政書士事務所",
      metaDescription: "餐廳許可、娛樂業許可的取得到更新，專家全程支援。可靠的手續確保營業開始。",
      services: [
        {
          id: "restaurant-permit",
          title: "餐廳營業許可申請",
          target: "經營餐廳、咖啡店、居酒屋等餐飲店時需要的許可申請。支援向保健所申報和取得營業許可。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "liquor-license",
          title: "酒類銷售業許可申請",
          target: "從事酒精飲料銷售業時需要的許可申請。對應一般酒類零售業・通信銷售酒類零售業等。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "food-manufacturing-permit",
          title: "食品製造業許可申請",
          target: "麵包製造、糕點製造、肉製品製造等食品製造業需要的許可申請。對應HACCP的衞生管理。",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "late-night-alcohol-notification",
          title: "深夜酒類提供餐飲店營業開始申報",
          target: "深夜12點以後提供酒精飲料的餐飲店營業開始申報。需要向警察署申報。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "entertainment-permit",
          title: "風俗營業許可申請",
          target: "從事接待餐飲等營業（夜總會、酒吧等）時需要的許可申請。需要滿足嚴格的人員要求・結構要求。",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "adult-entertainment-notification",
          title: "性風俗特殊營業營業開始申報",
          target: "性風俗相關特殊營業的營業開始申報。根據營業種類支援適當的申報手續。",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "取得餐廳營業許可需要多長時間？",
          answer: "從申請到許可通常需要2〜4週左右。包括事前協商和圖紙製作的時間，建議留出1〜2個月的餘量。"
        },
        {
          question: "許可有有效期嗎？",
          answer: "餐廳營業許可有效期為5〜8年（因自治體而異），酒類銷售業許可有效期為6年。需要在期限前進行更新手續。"
        }
      ],
      breadcrumbs: {
        home: "首頁",
        services: "服務"
      },
      tableHeaders: {
        serviceName: "服務名稱",
        serviceOverview: "服務概要",
        pricingGuide: "費用指南"
      },
      faqTitle: "常見問題"
    },
    "waste-management": {
      title: "廢物處理業許可業務",
      catchphrase: "產業廢物收集運輸業許可的專業支援",
      heroTitle: "【專家支援】廢物處理業許可業務指南",
      metaTitle: "廢物處理業許可業務 | Fortia行政書士事務所",
      metaDescription: "產業廢物收集運輸業許可、一般廢物處理業許可的取得到更新，專家全程支援。",
      services: [
        {
          id: "industrial-waste-transport-permit",
          title: "產業廢物收集運輸業許可申請",
          target: "從事因事業活動而產生的產業廢物收集・運輸業務時需要的許可申請。根據是否有轉運保管，要求也有所不同。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "industrial-waste-permit",
          title: "產業廢物處理業許可申請",
          target: "從事產業廢物中間處理・最終處理業務時需要的許可申請。需要滿足設施標準和配置技術管理者。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "general-waste-permit",
          title: "一般廢物處理業許可申請",
          target: "從事市町村處理的一般廢物收集運輸・處理業務時需要的許可申請。每個市町村都需要許可。",
          priceMin: 100000,
          priceMax: 200000
        },
        {
          id: "industrial-waste-facility-permit",
          title: "產業廢物處理設施設置許可申請",
          target: "設置產業廢物處理設施時需要的許可申請。需要環境影響評價和對周邊居民的配慮。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "general-waste-facility-permit",
          title: "一般廢物處理設施設置許可申請",
          target: "設置一般廢物處理設施時需要的許可申請。有生活環境影響調查等嚴格審查。",
          priceMin: 400000,
          priceMax: 800000
        },
        {
          id: "waste-permit-renewal",
          title: "廢物處理業許可更新申請",
          target: "每5年需要進行的廢物處理業許可更新手續。是持續事業運營的重要手續。",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "取得許可需要什麼要求？",
          answer: "需要不屬於欠格要件、參加講習會、具備適當的設施・設備、有財政基礎等條件。"
        },
        {
          question: "許可的有效期是多長時間？",
          answer: "廢物處理業許可的有效期為5年。需要在期限前2個月進行更新申請。"
        }
      ],
      breadcrumbs: {
        home: "首頁",
        services: "服務"
      },
      tableHeaders: {
        serviceName: "服務名稱",
        serviceOverview: "服務概要",
        pricingGuide: "費用指南"
      },
      faqTitle: "常見問題"
    },
    "travel-hospitality": {
      title: "旅行・旅館業務",
      catchphrase: "旅行業登記・旅館業許可的專業支援",
      heroTitle: "【專家支援】旅行・旅館業務指南",
      metaTitle: "旅行・旅館業務 | Fortia行政書士事務所",
      metaDescription: "旅行業登記、旅館業許可、民宿申報等旅行・住宿業相關的許可認證手續專家支援。",
      services: [
        {
          id: "travel-agency",
          title: "旅行業登記申請",
          target: "從事旅行業時需要的登記申請。根據業務範圍有第1種~第3種・地域限定等登記區分。需要營業保證金的供託。",
          priceMin: 200000,
          priceMax: 500000
        },
        {
          id: "hotel-permit",
          title: "旅館業許可申請",
          target: "從事旅館・飯店營業時需要的許可申請。結構設備基準的確認和與保健所的事前協商是重要過程。",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "minpaku-permit",
          title: "住宅住宿事業申報（民宿）",
          target: "基於住宅住宿事業法的民宿營業申報手續。有年間營業日數180日以內的限制。需要對周邊居民的配慮。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "travel-agent-manager",
          title: "旅行業務處理管理者選任屆",
          target: "各營業所需要配置的旅行業務處理管理者的選任・變更申報。義務配置國家資格保有者。",
          priceMin: 30000,
          priceMax: 50000
        },
        {
          id: "accommodation-registration",
          title: "簡易住所營業許可申請",
          target: "青年旅社、膠囊飯店等簡易住所營業許可申請。適用比一般旅館業更緩和的標準。",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "travel-renewal",
          title: "旅行業登記更新",
          target: "每5年需要進行的旅行業登記更新手續。是持續事業運營必要的重要手續。",
          priceMin: 100000,
          priceMax: 200000
        }
      ],
      faq: [
        {
          question: "旅行業登記和旅行業代理店業務處理管理者的區別是什麼？",
          answer: "旅行業登記是事業者的登記，旅行業務處理管理者是各營業所需要的有資格者。兩者都是必需的。"
        },
        {
          question: "民宿和旅館業許可的區別是什麼？",
          answer: "民宿是年間180日以內的營業採用申報制，旅館業可以全年營業採用許可制。根據營業規模和形態選擇適當的制度。"
        }
      ],
      breadcrumbs: {
        home: "首頁",
        services: "服務"
      },
      tableHeaders: {
        serviceName: "服務名稱",
        serviceOverview: "服務概要",
        pricingGuide: "費用指南"
      },
      faqTitle: "常見問題"
    },
    "business-license": {
      title: "營業許可",
      catchphrase: "各種營業許可申請的專業支援",
      heroTitle: "【專家支援】營業許可指南",
      metaTitle: "營業許可 | Fortia行政書士事務所",
      metaDescription: "從各種營業許可的取得到更新，專家全程支援。廣泛對應各行業的許可申請。",
      services: [
        {
          id: "warehouse-registration",
          title: "倉庫業登記",
          target: "經營倉庫業時需要的登記申請。需要整備保管設施的設置標準和業務管理體制。",
          priceMin: 200000,
          priceMax: 400000
        },
        {
          id: "financial-instruments-registration",
          title: "金融產品交易業登記",
          target: "經營投資諧詢業、投資管理業等金融產品交易業的登記申請。需要高度的專業性和嚴格的條件。",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "telecommunications-notification",
          title: "電信事業者申報",
          target: "網際網路服務提供商、電信服務事業者的申報手續。根據服務種類的不同，手續也有所不同。",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "money-lending-registration",
          title: "貸金業登記",
          target: "經營貸金業時需要的登記申請。對財務基礎、人員素質、業務運營體制進行審查。",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "used-goods-permit",
          title: "古物商許可",
          target: "進行二手品買賣、交換、委託銷售時需要的許可申請。網上拍賣和回收店運營也需要此許可。",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "liquor-sales-license",
          title: "酒類銷售業許可",
          target: "經營酒類零售業、批發業時需要的許可申請。根據業態類型和銷售地點，許可類別不同。",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "哪些行業需要營業許可？",
          answer: "餐飲業、理髪美容業、乾洗業、古物營業、保安業等眾多行業。不同行業的許可條件不同，詳細情況請詢問。"
        },
        {
          question: "獲取許可的條件是什麼？",
          answer: "條件因行業而異，但通常包括設施標準、人員條件、財務基礎等。我們會事先確認條件並進行準備。"
        }
      ],
      breadcrumbs: { home: "首頁", services: "服務" },
      tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" },
      faqTitle: "常見問題"
    },
    land: { title: "土地相關業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    "legal-documentation": { title: "權利義務・事實證明", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    "medical-care": { title: "醫療・護理相關業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" },
    other: { title: "其他業務", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "首頁", services: "服務" }, tableHeaders: { serviceName: "服務名稱", serviceOverview: "服務概要", pricingGuide: "費用指南" }, faqTitle: "常見問題" }
  },
  vi: {
    foreign: { 
      title: "Dịch vụ dành cho người nước ngoài", 
      catchphrase: "Hỗ trợ chuyên nghiệp về tư cách lưu trú・đơn xin visa", 
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ dành cho người nước ngoài", 
      metaTitle: "Dịch vụ người nước ngoài | Văn phòng Hành chính Fortia", 
      metaDescription: "Hỗ trợ chuyên nghiệp về tư cách lưu trú・đơn xin visa cho người nước ngoài", 
      services: [
        {
          id: "business-manager",
          title: "Visa Kinh doanh・Quản lý",
          target: "Tư cách lưu trú mà các nhà kinh doanh hoặc quản lý của doanh nghiệp v.v. có được."
        },
        {
          id: "designated-activities",
          title: "Visa Hoạt động đặc định",
          target: "Người giúp việc nhà của ngoại giao viên v.v., kỳ nghỉ làm việc, ứng viên điều dưỡng phúc lợi v.v., có phạm vi rộng các đối tượng áp dụng. Có trường hợp hoàn toàn không thể làm việc, cũng có trường hợp có thể làm việc trong nhiều lựa chọn. (「Hoạt động đặc định số 46／Người tốt nghiệp đại học Nhật Bản」có thể làm việc trong nhiều lĩnh vực. Điều kiện lấy: tốt nghiệp đại học Nhật Bản, đậu kỳ thi năng lực tiếng Nhật N1)."
        },
        {
          id: "intra-company-transfer",
          title: "Visa Chuyển nhượng nội bộ doanh nghiệp",
          target: "Tư cách lưu trú mà người chuyển từ pháp nhân nước ngoài có trụ sở chính, chi nhánh, văn phòng đại diện tại Nhật Bản có được."
        },
        {
          id: "student",
          title: "Visa Du học",
          target: "Sinh viên của đại học, trường chuyên môn, trường tiếng Nhật v.v. (tức du học sinh) có được."
        },
        {
          id: "dependent",
          title: "Visa Gia đình lưu trú",
          target: "Vợ/chồng・con cái của người nước ngoài đang lưu trú áp dụng."
        },
        {
          id: "long-term-resident",
          title: "Visa Định cư",
          target: "Người Nhật gốc đời thứ 3, người Nhật còn lại ở Trung Quốc, người tị nạn định cư quốc gia thứ ba v.v. áp dụng."
        },
        {
          id: "specified-skilled-worker",
          title: "Visa Kỹ năng đặc định",
          target: "Tư cách lưu trú mà người đậu kỳ thi được chỉ định trong lĩnh vực đặc định có thể có được. Lĩnh vực bao gồm chăm sóc, vệ sinh tòa nhà, nông nghiệp, thủy sản, sản xuất thực phẩm đồ uống, ngành ăn uống, ngành vật liệu thô, sản xuất máy móc công nghiệp, ngành điện・điện tử thông tin, xây dựng, đóng tàu, sửa chữa ô tô, hàng không, khách sạn - tổng cộng 14 nghề. Ngay cả khi phù hợp với các lĩnh vực, nếu không thực hiện công việc quy định rõ ràng của từng lĩnh vực thì sẽ bị từ chối, xin lưu ý. Chế độ kỹ năng đặc định là chế độ để giải quyết tình trạng thiếu hụt lao động."
        },
        {
          id: "highly-skilled-professional",
          title: "Visa Nhân tài cao cấp",
          target: "Nhân tài cao cấp theo chế độ điểm số. Có 3 loại hoạt động: nhà kinh doanh, nhà nghiên cứu, kỹ thuật viên. Người nước ngoài hoạt động từ 3 năm trở lên với tư cách chuyên gia cao cấp số 1 có thể có được chuyên gia cao cấp số 2 và nhận được các biện pháp ưu đãi."
        },
        {
          id: "permanent-resident",
          title: "Visa Thường trú",
          target: "Tư cách lưu trú mà người nước ngoài được cấp phép thường trú có thể có được. Điều kiện để có được như sau: ・Phẩm hạnh tốt (tuân thủ pháp luật, sống cuộc sống không bị xã hội lên án) ・Có tài sản hoặc kỹ năng đủ để sinh sống (bao gồm tài sản và kỹ năng của vợ/chồng) ・Được công nhận phù hợp với lợi ích của Nhật Bản. Về nguyên tắc cần lưu trú tại Nhật Bản từ 10 năm trở lên. Nếu có nợ thuế hoặc phí bảo hiểm, khả năng bị từ chối sẽ cao."
        },
        {
          id: "engineer-humanities",
          title: "Visa Kỹ thuật・Tri thức nhân văn・Nghiệp vụ quốc tế",
          target: "Tư cách lưu trú cho người nước ngoài tham gia công việc đòi hỏi kỹ thuật và tri thức trong lĩnh vực kỹ thuật, khoa học tự nhiên, luật học, kinh tế học, xã hội học và các khoa học nhân văn khác (kỹ thuật・tri thức nhân văn), công việc đòi hỏi tư duy và cảm thụ dựa trên nền tảng văn hóa nước ngoài (nghiệp vụ quốc tế). Kỹ thuật viên kỹ thuật cơ khí v.v., kỹ sư, nhân viên tiếp thị, thiết kế viên, phiên dịch, giáo viên ngoại ngữ doanh nghiệp tư nhân v.v. áp dụng. Phạm vi áp dụng rộng, nhưng nếu công việc không thuộc「kỹ thuật・tri thức nhân văn」「nghiệp vụ quốc tế」hoặc được đánh giá là không có năng lực tương xứng từ học vấn・kinh nghiệm・bằng cấp v.v. thì không thể có được tư cách lưu trú."
        },
        {
          id: "skilled-labor",
          title: "Visa Kỹ năng",
          target: "Người nước ngoài cần kỹ năng thành thạo thuộc lĩnh vực đặc biệt trong ngành công nghiệp áp dụng. Đầu bếp, huấn luyện viên thể thao, phi công, thợ gia công kim loại quý v.v. là đối tượng, xin lưu ý sự phân biệt với「kỹ thuật・tri thức nhân văn・nghiệp vụ quốc tế」."
        },
        {
          id: "entertainer",
          title: "Visa Biểu diễn",
          target: "Tư cách lưu trú cho diễn viên, ca sĩ, vũ công, vận động viên thể thao chuyên nghiệp v.v., người nước ngoài đến Nhật để biểu diễn."
        },
        {
          id: "artist",
          title: "Visa Nghệ thuật",
          target: "Tư cách lưu trú để thực hiện hoạt động kiếm thu nhập trong lĩnh vực nghệ thuật như âm nhạc, mỹ thuật, văn học v.v. Trừ trường hợp thuộc「biểu diễn」."
        },
        {
          id: "spouse-of-japanese",
          title: "Vợ/chồng của người Nhật v.v.",
          target: "Vợ/chồng, con ruột, con nuôi đặc biệt của người Nhật áp dụng."
        },
        {
          id: "spouse-of-permanent-resident",
          title: "Vợ/chồng của người thường trú v.v.",
          target: "Vợ/chồng của người thường trú・thường trú đặc biệt, con ruột sinh tại Nhật và tiếp tục lưu trú áp dụng."
        },
        {
          id: "long-term-resident-final",
          title: "Định cư",
          target: "Người Nhật gốc đời thứ 3, người Nhật còn lại ở Trung Quốc, người tị nạn định cư quốc gia thứ ba v.v. áp dụng."
        }
      ],
      faq: [
        {
          question: "Đơn xin visa mất bao lâu?",
          answer: "Tùy theo nội dung đơn xin nhưng thông thường khoảng 1〜3 tháng. Visa kỹ năng đặc định tương đối nhanh, đơn xin phép thường trú có xu hướng mất thời gian."
        },
        {
          question: "Cần những giấy tờ gì?",
          answer: "Tùy theo loại visa đăng ký mà khác nhau. Chi tiết xin tư vấn qua tư vấn miễn phí. Thông thường cần hộ chiếu, thẻ lưu trú, giấy chứng nhận thu nhập, hợp đồng lao động v.v."
        },
        {
          question: "Nếu đơn xin bị từ chối thì sao?",
          answer: "Phân tích lý do từ chối, hỗ trợ chuẩn bị đơn xin lại. Văn phòng chúng tôi tự hào về tỷ lệ phê duyệt cao, xin yên tâm giao phó."
        }
      ], 
      breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" }, 
      tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" }, 
      faqTitle: "Câu hỏi thường gặp" 
    },
    construction: {
      title: "Dịch vụ xây dựng・bất động sản",
      catchphrase: "Hỗ trợ chuyên nghiệp về giấy phép xây dựng・giấy phép kinh doanh bất động sản",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ xây dựng・bất động sản",
      metaTitle: "Dịch vụ xây dựng・bất động sản | Văn phòng Hành chính Fortia",
      metaDescription: "Hỗ trợ từ việc lấy đến gia hạn giấy phép xây dựng, giấy phép kinh doanh bất động sản. Luật sư hành chính giàu kinh nghiệm cung cấp thủ tục đáng tin cậy.",
      services: [
        {
          id: "construction-permit",
          title: "Đơn xin giấy phép kinh doanh xây dựng",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh ngành xây dựng. Đối ứng giấy phép xây dựng chung・giấy phép xây dựng đặc định.",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "construction-renewal",
          title: "Gia hạn giấy phép kinh doanh xây dựng",
          target: "Thủ tục gia hạn giấy phép xây dựng cần thiết mỗi 5 năm. Hỗ trợ hoàn toàn từ quản lý thời hạn đến đơn xin.",
          priceMin: 80000,
          priceMax: 120000
        },
        {
          id: "real-estate-license",
          title: "Đơn xin giấy phép kinh doanh bất động sản",
          target: "Đơn xin lấy mới giấy phép kinh doanh bất động sản cần thiết khi kinh doanh mua bán・môi giới bất động sản.",
          priceMin: 120000,
          priceMax: 180000
        },
        {
          id: "construction-change",
          title: "Các loại thông báo thay đổi",
          target: "Các thủ tục thông báo thay đổi như di chuyển văn phòng kinh doanh, thay đổi cán bộ quản lý, thay đổi tên thương hiệu.",
          priceMin: 30000,
          priceMax: 80000
        }
      ],
      faq: [
        {
          question: "Giấy phép xây dựng cần từ khi nào?",
          answer: "Cần khi thực hiện công trình xây dựng tổng hợp từ 15 triệu yên trở lên, các công trình khác từ 5 triệu yên trở lên."
        },
        {
          question: "Thời hạn hiệu lực của giấy phép là bao lâu?",
          answer: "Cả giấy phép xây dựng và giấy phép kinh doanh bất động sản đều có thời hạn 5 năm. Cần thực hiện thủ tục gia hạn trước khi hết hạn."
        }
      ],
      breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" },
      tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" },
      faqTitle: "Câu hỏi thường gặp"
    },
    automotive: {
      title: "Dịch vụ liên quan đến ô tô",
      catchphrase: "Hỗ trợ nhanh chóng cho chứng nhận nhà để xe・đăng ký ô tô",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ liên quan đến ô tô",
      metaTitle: "Dịch vụ liên quan đến ô tô | Văn phòng Hành chính Fortia",
      metaDescription: "Hỗ trợ nhanh chóng cho chứng nhận nhà để xe, thủ tục đăng ký ô tô. Thực hiện thủ tục đáng tin cậy thay cho những người bận rộn.",
      services: [
        {
          id: "garage-certificate",
          title: "Chứng nhận nơi để xe ô tô (chứng nhận nhà để xe)",
          target: "Đơn xin chứng nhận nhà để xe cần thiết khi mua xe mới・xe cũ. Hỗ trợ thủ tục nhanh chóng cho đăng ký xe.",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "vehicle-registration",
          title: "Đăng ký ô tô・thay đổi danh nghĩa",
          target: "Các thủ tục đăng ký khác nhau như thay đổi chủ sở hữu xe, thay đổi địa chỉ. Hoàn thành chắc chắn thủ tục qua việc làm tài liệu chính xác.",
          priceMin: 20000,
          priceMax: 35000
        },
        {
          id: "mini-vehicle-notification",
          title: "Ký báo xe nhỏ",
          target: "Thủ tục đăng ký・thay đổi danh nghĩa xe nhỏ. Thực hiện các ký báo khác nhau tại Hiệp hội kiểm tra xe nhỏ.",
          priceMin: 15000,
          priceMax: 25000
        },
        {
          id: "auto-dismantling-permit",
          title: "Giấy phép ngành tách rời ô tô",
          target: "Đơn xin giấy phép cần thiết cho các doanh nghiệp thực hiện tách rời・phá dỡ ô tô. Yêu cầu cân nhắc môi trường và hệ thống xử lý thích hợp.",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "freight-transport-permit",
          title: "Giấy phép ngành vận tải hàng hóa bằng ô tô",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh vận tải hàng hóa bằng xe tải. Yêu cầu thiết lập hệ thống quản lý vận hành.",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "passenger-transport-permit",
          title: "Giấy phép ngành vận tải hành khách bằng ô tô",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh vận tải hành khách như taxi hoặc xe buýt. Có kiểm duyệt an toàn và kế hoạch kinh doanh.",
          priceMin: 250000,
          priceMax: 450000
        }
      ],
      faq: [
        {
          question: "Lấy chứng nhận nhà để xe mất bao lâu?",
          answer: "Từ khi nộp đơn đến khi cấp thường mất khoảng 3〜7 ngày. Tùy theo khu vực có thể hơi khác."
        },
        {
          question: "Cần những giấy tờ nào?",
          answer: "Chứng nhận nhà để xe cần giấy tờ chứng minh quyền sử dụng nơi để xe, sơ đồ vị tríヿsơ đồ bố trí, v.v. Vui lòng liên hệ để biết chi tiết."
        }
      ],
      breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" },
      tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" },
      faqTitle: "Câu hỏi thường gặp"
    },
    corporate: {
      title: "Dịch vụ thành lập pháp nhân",
      catchphrase: "Hỗ trợ chuyên nghiệp cho việc thành lập công ty cổ phần・LLC",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ thành lập pháp nhân",
      metaTitle: "Dịch vụ thành lập pháp nhân | Văn phòng Hành chính Fortia",
      metaDescription: "Từ việc thành lập công ty cổ phần, LLC đến các thủ tục sau thành lập, chuyên gia cung cấp dịch vụ một cửa.",
      services: [
        {
          id: "corporation-establishment",
          title: "Thành lập công ty cổ phần",
          target: "Thủ tục thành lập mới công ty cổ phần. Hỗ trợ một loạt thủ tục từ làm điều lệ công ty đến đăng ký.",
          priceMin: 150000,
          priceMax: 250000
        },
        {
          id: "llc-establishment",
          title: "Thành lập công ty hợp danh",
          target: "Thủ tục thành lập mới công ty hợp danh. Phí thành lập thấp, có thể điều hành linh hoạt.",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "npo-certification",
          title: "Chứng nhận thành lập NPO",
          target: "Đơn xin chứng nhận thành lập pháp nhân hoạt động phi lợi nhuận đặc định. Hỗ trợ pháp nhân hóa các tổ chức thực hiện hoạt động công ích.",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "general-incorporated-association",
          title: "Thành lập hiệp hội chính thức",
          target: "Đơn xin đăng ký thành lập hiệp hội chính thức. Thích hợp cho pháp nhân hóa các hoạt động công ích và tổ chức tương trợ.",
          priceMin: 100000,
          priceMax: 150000
        },
        {
          id: "corporate-change",
          title: "Đăng ký thay đổi khác nhau",
          target: "Thủ tục thay đổi các mục đăng ký pháp nhân như thay đổi quản lý viên, di chuyển trụ sở chính, thay đổi vốn điều lệ.",
          priceMin: 30000,
          priceMax: 80000
        },
        {
          id: "corporate-dissolution",
          title: "Giải tán pháp nhân・thanh lý",
          target: "Đăng ký giải tán pháp nhân và thủ tục thanh lý. Hỗ trợ thủ tục thích hợp khi kết thúc kinh doanh.",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "Sự khác biệt giữa công ty cổ phần và công ty hợp danh là gì?",
          answer: "Công ty cổ phần có độ tin cậy xã hội cao hơn, công ty hợp danh có phí thành lập thấp hơn và thủ tục đơn giản hơn. Chọn lựa dựa trên nội dung kinh doanh và triển vọng tương lai."
        },
        {
          question: "Thành lập mất bao lâu?",
          answer: "Từ chuẩn bị tài liệu đến hoàn thành đăng ký thường mất 2〜4 tuần. Thời gian sẽ thay đổi tùy thuộc vào lịch trình xác thực điều lệ công ty và đơn đăng ký."
        }
      ],
      breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" },
      tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" },
      faqTitle: "Câu hỏi thường gặp"
    },
    "food-entertainment": {
      title: "Dịch vụ ăn uống・giải trí",
      catchphrase: "Hỗ trợ chuyên nghiệp cho giấy phép kinh doanh nhà hàng・giải trí",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ ăn uống・giải trí",
      metaTitle: "Dịch vụ ăn uống・giải trí | Văn phòng Hành chính Fortia",
      metaDescription: "Hỗ trợ chuyên nghiệp từ việc lấy đến gia hạn giấy phép nhà hàng, giấy phép kinh doanh giải trí. Thủ tục đáng tin cậy đảm bảo bắt đầu kinh doanh.",
      services: [
        {
          id: "restaurant-permit",
          title: "Đơn xin giấy phép kinh doanh nhà hàng",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh nhà hàng, quán cà phê, izakaya và các cửa hàng ăn uống. Hỗ trợ khai báo với sở y tế và lấy giấy phép kinh doanh.",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "liquor-license",
          title: "Đơn xin giấy phép kinh doanh bán rượu",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh bán đồ uống có cồn. Đối ứng bán lẻ rượu nói chung・bán lẻ rượu qua thông tin liên lạc, v.v.",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "food-manufacturing-permit",
          title: "Đơn xin giấy phép sản xuất thực phẩm",
          target: "Đơn xin giấy phép cần thiết cho ngành sản xuất thực phẩm như sản xuất bánh mì, bánh kẹo, sản phẩm thịt. Quản lý vệ sinh theo HACCP.",
          priceMin: 100000,
          priceMax: 180000
        },
        {
          id: "late-night-alcohol-notification",
          title: "Khai báo bắt đầu kinh doanh nhà hàng phục vụ rượu ban đêm",
          target: "Khai báo bắt đầu kinh doanh nhà hàng phục vụ đồ uống có cồn sau 12 giờ đêm. Cần khai báo với sở cảnh sát.",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "entertainment-permit",
          title: "Đơn xin giấy phép kinh doanh phong tục",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh tiếp đón ăn uống (karaoke, bar, v.v.). Cần đáp ứng các yêu cầu nghiêm ngặt về nhân sự・cấu trúc.",
          priceMin: 200000,
          priceMax: 350000
        },
        {
          id: "adult-entertainment-notification",
          title: "Khai báo bắt đầu kinh doanh phong tục đặc biệt tình dục",
          target: "Khai báo bắt đầu kinh doanh đặc biệt liên quan đến phong tục tình dục. Hỗ trợ thủ tục khai báo thích hợp theo loại hình kinh doanh.",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "Mất bao lâu để lấy giấy phép kinh doanh nhà hàng?",
          answer: "Từ đơn xin đến cấp phép thường mất khoảng 2〜4 tuần. Bao gồm thời gian tư vấn trước và làm bản vẽ, khuyến nghị dự trữ khoảng 1〜2 tháng."
        },
        {
          question: "Giấy phép có thời hạn không?",
          answer: "Giấy phép kinh doanh nhà hàng có hiệu lực 5〜8 năm (khác nhau tùy địa phương), giấy phép kinh doanh bán rượu có hiệu lực 6 năm. Cần làm thủ tục gia hạn trước thời hạn."
        }
      ],
      breadcrumbs: {
        home: "Trang chủ",
        services: "Dịch vụ"
      },
      tableHeaders: {
        serviceName: "Tên dịch vụ",
        serviceOverview: "Tổng quan dịch vụ",
        pricingGuide: "Hướng dẫn giá cả"
      },
      faqTitle: "Câu hỏi thường gặp"
    },
    "waste-management": {
      title: "Dịch vụ giấy phép xử lý chất thải",
      catchphrase: "Hỗ trợ chuyên nghiệp cho giấy phép thu gom vận chuyển chất thải công nghiệp",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ giấy phép xử lý chất thải",
      metaTitle: "Dịch vụ giấy phép xử lý chất thải | Văn phòng Hành chính Fortia",
      metaDescription: "Hỗ trợ chuyên nghiệp từ việc lấy đến gia hạn giấy phép thu gom vận chuyển chất thải công nghiệp, giấy phép xử lý chất thải sinh hoạt.",
      services: [
        {
          id: "industrial-waste-transport-permit",
          title: "Đơn xin giấy phép thu gom vận chuyển chất thải công nghiệp",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh thu gom・vận chuyển chất thải công nghiệp phát sinh từ hoạt động kinh doanh. Yêu cầu khác nhau tùy có hay không có chuyển tải bảo quản.",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "industrial-waste-permit",
          title: "Đơn xin giấy phép xử lý chất thải công nghiệp",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh xử lý trung gian・xử lý cuối cùng chất thải công nghiệp. Cần đáp ứng tiêu chuẩn cơ sở và bố trí người quản lý kỹ thuật.",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "general-waste-permit",
          title: "Đơn xin giấy phép xử lý chất thải sinh hoạt",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh thu gom vận chuyển・xử lý chất thải sinh hoạt do thị xã thành phố xử lý. Cần giấy phép từng thị xã thành phố.",
          priceMin: 100000,
          priceMax: 200000
        },
        {
          id: "industrial-waste-facility-permit",
          title: "Đơn xin giấy phép thiết lập cơ sở xử lý chất thải công nghiệp",
          target: "Đơn xin giấy phép cần thiết khi thiết lập cơ sở xử lý chất thải công nghiệp. Yêu cầu đánh giá tác động môi trường và quan tâm đến cư dân xung quanh.",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "general-waste-facility-permit",
          title: "Đơn xin giấy phép thiết lập cơ sở xử lý chất thải sinh hoạt",
          target: "Đơn xin giấy phép cần thiết khi thiết lập cơ sở xử lý chất thải sinh hoạt. Có kiểm tra nghiêm ngặt như điều tra tác động môi trường sống.",
          priceMin: 400000,
          priceMax: 800000
        },
        {
          id: "waste-permit-renewal",
          title: "Đơn xin gia hạn giấy phép xử lý chất thải",
          target: "Thủ tục gia hạn giấy phép xử lý chất thải cần thiết mỗi 5 năm. Là thủ tục quan trọng cho việc vận hành kinh doanh liên tục.",
          priceMin: 80000,
          priceMax: 150000
        }
      ],
      faq: [
        {
          question: "Cần những yêu cầu gì để lấy giấy phép?",
          answer: "Cần các điều kiện như không thuộc yêu cầu thiếu tư cách, tham gia khóa học, có cơ sở・thiết bị thích hợp, có nền tảng tài chính."
        },
        {
          question: "Thời hạn hiệu lực của giấy phép là bao lâu?",
          answer: "Thời hạn hiệu lực của giấy phép xử lý chất thải là 5 năm. Cần làm đơn gia hạn trước thời hạn 2 tháng."
        }
      ],
      breadcrumbs: {
        home: "Trang chủ",
        services: "Dịch vụ"
      },
      tableHeaders: {
        serviceName: "Tên dịch vụ",
        serviceOverview: "Tổng quan dịch vụ",
        pricingGuide: "Hướng dẫn giá cả"
      },
      faqTitle: "Câu hỏi thường gặp"
    },
    "travel-hospitality": {
      title: "Dịch vụ du lịch・khách sạn",
      catchphrase: "Hỗ trợ chuyên nghiệp cho đăng ký kinh doanh du lịch・giấy phép kinh doanh khách sạn",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn dịch vụ du lịch・khách sạn",
      metaTitle: "Dịch vụ du lịch・khách sạn | Văn phòng Hành chính Fortia",
      metaDescription: "Hỗ trợ chuyên nghiệp cho đăng ký kinh doanh du lịch, giấy phép kinh doanh khách sạn, khai báo nhà nghỉ dưỡng và các thủ tục cấp phép liên quan đến du lịch・lưu trú.",
      services: [
        {
          id: "travel-agency",
          title: "Đơn đăng ký kinh doanh du lịch",
          target: "Đơn đăng ký cần thiết khi kinh doanh du lịch. Có phân loại đăng ký từ loại 1~loại 3・giới hạn khu vực theo phạm vi nghiệp vụ. Cần ký quỹ tiền bảo đảm kinh doanh.",
          priceMin: 200000,
          priceMax: 500000
        },
        {
          id: "hotel-permit",
          title: "Đơn xin giấy phép kinh doanh khách sạn",
          target: "Đơn xin giấy phép cần thiết khi kinh doanh khách sạn・nhà nghỉ. Việc xác nhận tiêu chuẩn cơ cấu thiết bị và trao đổi trước với sở y tế là quá trình quan trọng.",
          priceMin: 150000,
          priceMax: 300000
        },
        {
          id: "minpaku-permit",
          title: "Khai báo kinh doanh lưu trú tại nhà (minpaku)",
          target: "Thủ tục khai báo kinh doanh minpaku dựa trên luật kinh doanh lưu trú tại nhà. Có giới hạn số ngày kinh doanh trong năm dưới 180 ngày. Cần quan tâm đến cư dân lân cận.",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "travel-agent-manager",
          title: "Khai báo chọn người quản lý xử lý nghiệp vụ du lịch",
          target: "Khai báo chọn・thay đổi người quản lý xử lý nghiệp vụ du lịch cần thiết bố trí tại mỗi văn phòng kinh doanh. Bắt buộc bố trí người có tư cách quốc gia.",
          priceMin: 30000,
          priceMax: 50000
        },
        {
          id: "accommodation-registration",
          title: "Đơn xin giấy phép kinh doanh chỗ ở đơn giản",
          target: "Đơn xin giấy phép kinh doanh chỗ ở đơn giản như guest house, khách sạn con nhộng. Áp dụng tiêu chuẩn được nới lỏng hơn so với nghiệp vụ khách sạn thông thường.",
          priceMin: 120000,
          priceMax: 200000
        },
        {
          id: "travel-renewal",
          title: "Gia hạn đăng ký kinh doanh du lịch",
          target: "Thủ tục gia hạn đăng ký kinh doanh du lịch cần thiết mỗi 5 năm. Là thủ tục quan trọng cần thiết cho việc vận hành kinh doanh liên tục.",
          priceMin: 100000,
          priceMax: 200000
        }
      ],
      faq: [
        {
          question: "Sự khác biệt giữa đăng ký kinh doanh du lịch và người quản lý xử lý nghiệp vụ đại lý du lịch là gì?",
          answer: "Đăng ký kinh doanh du lịch là đăng ký của doanh nghiệp, người quản lý xử lý nghiệp vụ du lịch là người có tư cách cần thiết tại mỗi văn phòng kinh doanh. Cả hai đều cần thiết."
        },
        {
          question: "Sự khác biệt giữa minpaku và giấy phép kinh doanh khách sạn là gì?",
          answer: "Minpaku áp dụng chế độ khai báo cho kinh doanh dưới 180 ngày trong năm, kinh doanh khách sạn có thể kinh doanh quanh năm áp dụng chế độ cấp phép. Lựa chọn chế độ thích hợp theo quy mô và hình thức kinh doanh."
        }
      ],
      breadcrumbs: {
        home: "Trang chủ",
        services: "Dịch vụ"
      },
      tableHeaders: {
        serviceName: "Tên dịch vụ",
        serviceOverview: "Tổng quan dịch vụ",
        pricingGuide: "Hướng dẫn giá cả"
      },
      faqTitle: "Câu hỏi thường gặp"
    },
    "business-license": {
      title: "Giấy phép kinh doanh",
      catchphrase: "Hỗ trợ chuyên nghiệp cho các đơn xin giấy phép kinh doanh",
      heroTitle: "【Hỗ trợ chuyên gia】Hướng dẫn giấy phép kinh doanh",
      metaTitle: "Giấy phép kinh doanh | Văn phòng Hành chính Fortia",
      metaDescription: "Từ việc lấy đến gia hạn các loại giấy phép kinh doanh, chuyên gia hỗ trợ toàn diện. Đối ứng rộng rãi các đơn xin giấy phép của nhiều ngành nghề.",
      services: [
        {
          id: "warehouse-registration",
          title: "Đăng ký ngành kho bãi",
          target: "Đơn đăng ký cần thiết khi kinh doanh ngành kho bãi. Cần thiết lập tiêu chuẩn thiết lập các thiết bị bảo quản và hệ thống quản lý nghiệp vụ.",
          priceMin: 200000,
          priceMax: 400000
        },
        {
          id: "financial-instruments-registration",
          title: "Đăng ký ngành giao dịch sản phẩm tài chính",
          target: "Đơn đăng ký khi kinh doanh tư vấn đầu tư, quản lý đầu tư và các ngành giao dịch sản phẩm tài chính khác. Yêu cầu chuyên môn cao và điều kiện nghiêm ngặt.",
          priceMin: 500000,
          priceMax: 1000000
        },
        {
          id: "telecommunications-notification",
          title: "Ký báo người kinh doanh viễn thông",
          target: "Thủ tục ký báo cho nhà cung cấp dịch vụ internet và các doanh nghiệp dịch vụ viễn thông. Thủ tục khác nhau tùy thuộc loại dịch vụ.",
          priceMin: 80000,
          priceMax: 150000
        },
        {
          id: "money-lending-registration",
          title: "Đăng ký ngành cho vay tiền",
          target: "Đơn đăng ký cần thiết khi kinh doanh ngành cho vay tiền. Kiểm tra nền tảng tài chính, phẩm chất nhân sự, hệ thống quản lý kinh doanh.",
          priceMin: 300000,
          priceMax: 600000
        },
        {
          id: "used-goods-permit",
          title: "Giấy phép kinh doanh hàng cũ",
          target: "Giấy phép cần thiết khi mua bán, trao đổi, ủy thác bán hàng cũ. Cần thiết cho việc kinh doanh đấu giá trực tuyến và cửa hàng tái chế.",
          priceMin: 60000,
          priceMax: 100000
        },
        {
          id: "liquor-sales-license",
          title: "Giấy phép kinh doanh bán rượu",
          target: "Giấy phép cần thiết khi kinh doanh bán lẻ, bán sỉ rượu. Tùy thuộc vào loại hình kinh doanh và địa điểm bán, phân loại giấy phép khác nhau.",
          priceMin: 80000,
          priceMax: 120000
        }
      ],
      faq: [
        {
          question: "Những ngành nghề nào cần giấy phép kinh doanh?",
          answer: "Nhiều ngành như nhà hàng, tiệm cắt tóc làm đẹp, giặt khô, kinh doanh hàng cũ, dịch vụ bảo vệ, v.v. Điều kiện giấy phép khác nhau cho từng ngành, vui lòng tư vấn chi tiết."
        },
        {
          question: "Điều kiện để lấy giấy phép là gì?",
          answer: "Điều kiện khác nhau theo ngành nhưng thường bao gồm tiêu chuẩn thiết bị, điều kiện nhân sự, nền tảng tài chính, v.v. Chúng tôi sẽ xác nhận điều kiện trước và tiến hành chuẩn bị."
        }
      ],
      breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" },
      tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" },
      faqTitle: "Câu hỏi thường gặp"
    },
    land: { title: "Dịch vụ liên quan đến đất đai", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" }, tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" }, faqTitle: "Câu hỏi thường gặp" },
    "legal-documentation": { title: "Chứng minh quyền nghĩa vụ・sự thật", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" }, tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" }, faqTitle: "Câu hỏi thường gặp" },
    "medical-care": { title: "Dịch vụ y tế・chăm sóc", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" }, tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" }, faqTitle: "Câu hỏi thường gặp" },
    other: { title: "Dịch vụ khác", catchphrase: "", heroTitle: "", metaTitle: "", metaDescription: "", services: [], faq: [], breadcrumbs: { home: "Trang chủ", services: "Dịch vụ" }, tableHeaders: { serviceName: "Tên dịch vụ", serviceOverview: "Tổng quan dịch vụ", pricingGuide: "Hướng dẫn giá cả" }, faqTitle: "Câu hỏi thường gặp" }
  }
};

export type { ServiceItem, FaqItem, CategoryPageContent };