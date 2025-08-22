import { Locale } from '@/lib/i18n/types';

interface ServiceCardContent {
  title: string;
  description: string;
  examples: string[];
  altText: string;
  serviceExamplesLabel: string;
  learnMoreLabel: string;
}

type ServiceCardsContent = {
  [K in Locale]: {
    [categorySlug: string]: ServiceCardContent;
  };
};

export const serviceCardsContent: ServiceCardsContent = {
  ja: {
    foreign: {
      title: "外国人関連業務",
      description: "外国人を受け入れる企業や日本で暮らす方のために、在留や身分に関わる手続きを幅広くサポートします。",
      examples: ["特定技能ビザ", "高度人材ビザ", "技術・人文知識・国際業務ビザ"],
      altText: "外国人関連業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    construction: {
      title: "建設・宅建業関連",
      description: "建設業や不動産業を営む事業者様のために、許可申請から更新手続きまで幅広くサポートいたします。",
      examples: ["建設業許可申請", "宅地建物取引業免許申請", "経営事項審査申請"],
      altText: "建設・宅建業関連",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    automotive: {
      title: "自動車関連業務",
      description: "自動車の購入や移転に伴う各種手続きを迅速かつ確実にサポートいたします。",
      examples: ["車庫証明申請", "自動車登録手続き", "名義変更手続き"],
      altText: "自動車関連業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "food-entertainment": {
      title: "飲食・風俗営業",
      description: "飲食店や娯楽施設の開業に必要な許可申請を専門的にサポートいたします。",
      examples: ["飲食店営業許可", "風俗営業許可", "深夜酒類提供飲食店営業届出"],
      altText: "飲食・風俗営業",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "waste-management": {
      title: "廃棄物処理業許可",
      description: "産業廃棄物の適正処理に必要な許可申請を確実にサポートいたします。",
      examples: ["産業廃棄物収集運搬業許可", "産業廃棄物処分業許可", "一般廃棄物処理業許可"],
      altText: "廃棄物処理業許可",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "travel-hospitality": {
      title: "旅行・旅館業",
      description: "旅行業や宿泊業の開業に必要な登録・許可申請をサポートいたします。",
      examples: ["旅行業登録", "旅館業許可", "住宅宿泊事業届出"],
      altText: "旅行・旅館業",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    corporate: {
      title: "法人設立業務",
      description: "起業をお考えの方に、法人設立の手続きを総合的にサポートいたします。",
      examples: ["株式会社設立", "合同会社設立", "定款作成"],
      altText: "法人設立業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "business-license": {
      title: "営業許可",
      description: "様々な業種の営業許可申請を専門知識でサポートいたします。",
      examples: ["古物商許可申請", "酒類販売業免許", "理美容所開設届"],
      altText: "営業許可",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    land: {
      title: "土地関連業務",
      description: "土地の有効活用や開発に関する許可申請をサポートいたします。",
      examples: ["農地転用許可", "開発許可申請", "土地利用計画書作成"],
      altText: "土地関連業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "legal-documentation": {
      title: "権利義務・事実証明",
      description: "契約書作成や法的文書の作成を専門的にサポートいたします。",
      examples: ["契約書作成", "内容証明郵便", "公正証書作成"],
      altText: "権利義務・事実証明",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    "medical-care": {
      title: "医療・介護関連業務",
      description: "医療・介護事業の開設や運営に必要な許可申請をサポートいたします。",
      examples: ["医療法人設立", "介護事業所指定申請", "診療所開設届"],
      altText: "医療・介護関連業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    },
    other: {
      title: "その他の業務",
      description: "上記以外の各種許認可や手続きについてもお気軽にご相談ください。",
      examples: ["各種許認可申請", "手続き代行", "相談・コンサルティング"],
      altText: "その他の業務",
      serviceExamplesLabel: "サービス例",
      learnMoreLabel: "詳しく見る"
    }
  },
  en: {
    foreign: {
      title: "Foreign Resident Services",
      description: "We provide comprehensive support for residence and status procedures for companies accepting foreign workers and individuals living in Japan.",
      examples: ["Specified Skills Visa", "Highly Skilled Professional Visa", "Engineer/Specialist in Humanities/International Services Visa"],
      altText: "Foreign Resident Services",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    construction: {
      title: "Construction & Real Estate",
      description: "We provide comprehensive support for construction and real estate businesses, from permit applications to renewal procedures.",
      examples: ["Construction Business License Application", "Real Estate License Application", "Management Evaluation Application"],
      altText: "Construction & Real Estate",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    automotive: {
      title: "Automotive Services",
      description: "We provide quick and reliable support for various procedures related to vehicle purchases and transfers.",
      examples: ["Garage Certificate Application", "Vehicle Registration Procedures", "Ownership Transfer Procedures"],
      altText: "Automotive Services",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "food-entertainment": {
      title: "Food & Entertainment",
      description: "We provide specialized support for permit applications required for opening restaurants and entertainment facilities.",
      examples: ["Restaurant Business License", "Entertainment Business License", "Late-night Alcohol Service Notification"],
      altText: "Food & Entertainment",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "waste-management": {
      title: "Waste Management",
      description: "We provide reliable support for permit applications required for proper industrial waste management.",
      examples: ["Industrial Waste Collection/Transport License", "Industrial Waste Disposal License", "General Waste Management License"],
      altText: "Waste Management",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "travel-hospitality": {
      title: "Travel & Hospitality",
      description: "We support registration and permit applications required for starting travel and accommodation businesses.",
      examples: ["Travel Agency Registration", "Hotel Business License", "Private Lodging Business Notification"],
      altText: "Travel & Hospitality",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    corporate: {
      title: "Corporate Establishment",
      description: "We provide comprehensive support for corporate establishment procedures for those considering starting a business.",
      examples: ["Stock Company Incorporation", "LLC Incorporation", "Articles of Incorporation Drafting"],
      altText: "Corporate Establishment",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "business-license": {
      title: "Business Licenses",
      description: "We support various business license applications with specialized knowledge across different industries.",
      examples: ["Used Goods Dealer License", "Liquor Sales License", "Beauty Salon Opening Notification"],
      altText: "Business Licenses",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    land: {
      title: "Land-related Services",
      description: "We support permit applications for effective land use and development projects.",
      examples: ["Agricultural Land Conversion Permit", "Development Permit Application", "Land Use Plan Preparation"],
      altText: "Land-related Services",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "legal-documentation": {
      title: "Legal Documentation",
      description: "We provide specialized support for contract drafting and legal document preparation.",
      examples: ["Contract Drafting", "Certified Mail", "Notarial Document Preparation"],
      altText: "Legal Documentation",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    "medical-care": {
      title: "Medical & Care Services",
      description: "We support permit applications required for establishing and operating medical and care services.",
      examples: ["Medical Corporation Establishment", "Care Facility Designation Application", "Clinic Opening Notification"],
      altText: "Medical & Care Services",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    },
    other: {
      title: "Other Services",
      description: "Please feel free to consult us about various permits and procedures not listed above.",
      examples: ["Various Permit Applications", "Administrative Procedures", "Consultation & Consulting"],
      altText: "Other Services",
      serviceExamplesLabel: "Service Examples",
      learnMoreLabel: "Learn More"
    }
  },
  'zh-CN': {
    foreign: {
      title: "外国人相关业务",
      description: "为接受外国人的企业和在日本生活的人员，提供在留和身份相关手续的全面支持。",
      examples: ["特定技能签证", "高度人才签证", "技术・人文知识・国际业务签证"],
      altText: "外国人相关业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    construction: {
      title: "建设・不动产相关",
      description: "为从事建筑业和不动产业的事业者，从许可申请到更新手续提供全面支持。",
      examples: ["建设业许可申请", "不动产交易业许可申请", "经营事项审查申请"],
      altText: "建设・不动产相关",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    automotive: {
      title: "汽车相关业务",
      description: "对汽车购买和转移相关的各种手续提供迅速且可靠的支持。",
      examples: ["车库证明申请", "汽车登记手续", "名义变更手续"],
      altText: "汽车相关业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "food-entertainment": {
      title: "餐饮・风俗营业",
      description: "为餐饮店和娱乐设施开业所需的许可申请提供专业支持。",
      examples: ["餐饮店营业许可", "风俗营业许可", "深夜酒类提供餐饮店营业届出"],
      altText: "餐饮・风俗营业",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "waste-management": {
      title: "废弃物处理业许可",
      description: "为产业废弃物适当处理所需的许可申请提供可靠支持。",
      examples: ["产业废弃物收集运输业许可", "产业废弃物处理业许可", "一般废弃物处理业许可"],
      altText: "废弃物处理业许可",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "travel-hospitality": {
      title: "旅行・旅馆业",
      description: "支持旅行业和住宿业开业所需的登记・许可申请。",
      examples: ["旅行业登记", "旅馆业许可", "住宅住宿事业届出"],
      altText: "旅行・旅馆业",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    corporate: {
      title: "法人设立业务",
      description: "为考虑创业的人士，提供法人设立手续的综合支持。",
      examples: ["股份公司设立", "有限责任公司设立", "章程制作"],
      altText: "法人设立业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "business-license": {
      title: "营业许可",
      description: "用专业知识为各种行业的营业许可申请提供支持。",
      examples: ["古物商许可申请", "酒类销售业许可", "理美容所开设届"],
      altText: "营业许可",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    land: {
      title: "土地相关业务",
      description: "为土地有效利用和开发相关的许可申请提供支持。",
      examples: ["农地转用许可", "开发许可申请", "土地利用计划书制作"],
      altText: "土地相关业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "legal-documentation": {
      title: "权利义务・事实证明",
      description: "为合同制作和法律文书制作提供专业支持。",
      examples: ["合同制作", "内容证明邮件", "公证书制作"],
      altText: "权利义务・事实证明",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    "medical-care": {
      title: "医疗・护理相关业务",
      description: "为医疗・护理事业的开设和运营所需的许可申请提供支持。",
      examples: ["医疗法人设立", "护理事业所指定申请", "诊疗所开设届"],
      altText: "医疗・护理相关业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    },
    other: {
      title: "其他业务",
      description: "对于上述以外的各种许可证和手续，也请随时咨询。",
      examples: ["各种许可证申请", "手续代办", "咨询・顾问"],
      altText: "其他业务",
      serviceExamplesLabel: "服务实例",
      learnMoreLabel: "详细了解"
    }
  },
  'zh-TW': {
    foreign: {
      title: "外國人相關業務",
      description: "為接受外國人的企業和在日本生活的人員，提供在留和身分相關手續的全面支援。",
      examples: ["特定技能簽證", "高度人才簽證", "技術・人文知識・國際業務簽證"],
      altText: "外國人相關業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    construction: {
      title: "建設・不動產相關",
      description: "為從事建築業和不動產業的事業者，從許可申請到更新手續提供全面支援。",
      examples: ["建設業許可申請", "不動產交易業許可申請", "經營事項審查申請"],
      altText: "建設・不動產相關",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    automotive: {
      title: "汽車相關業務",
      description: "對汽車購買和轉移相關的各種手續提供迅速且可靠的支援。",
      examples: ["車庫證明申請", "汽車登記手續", "名義變更手續"],
      altText: "汽車相關業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "food-entertainment": {
      title: "餐飲・風俗營業",
      description: "為餐飲店和娛樂設施開業所需的許可申請提供專業支援。",
      examples: ["餐飲店營業許可", "風俗營業許可", "深夜酒類提供餐飲店營業屆出"],
      altText: "餐飲・風俗營業",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "waste-management": {
      title: "廢棄物處理業許可",
      description: "為產業廢棄物適當處理所需的許可申請提供可靠支援。",
      examples: ["產業廢棄物收集運輸業許可", "產業廢棄物處理業許可", "一般廢棄物處理業許可"],
      altText: "廢棄物處理業許可",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "travel-hospitality": {
      title: "旅行・旅館業",
      description: "支援旅行業和住宿業開業所需的登記・許可申請。",
      examples: ["旅行業登記", "旅館業許可", "住宅住宿事業屆出"],
      altText: "旅行・旅館業",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    corporate: {
      title: "法人設立業務",
      description: "為考慮創業的人士，提供法人設立手續的綜合支援。",
      examples: ["股份公司設立", "有限責任公司設立", "章程製作"],
      altText: "法人設立業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "business-license": {
      title: "營業許可",
      description: "用專業知識為各種行業的營業許可申請提供支援。",
      examples: ["古物商許可申請", "酒類銷售業許可", "理美容所開設屆"],
      altText: "營業許可",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    land: {
      title: "土地相關業務",
      description: "為土地有效利用和開發相關的許可申請提供支援。",
      examples: ["農地轉用許可", "開發許可申請", "土地利用計劃書製作"],
      altText: "土地相關業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "legal-documentation": {
      title: "權利義務・事實證明",
      description: "為合約製作和法律文書製作提供專業支援。",
      examples: ["合約製作", "內容證明郵件", "公證書製作"],
      altText: "權利義務・事實證明",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    "medical-care": {
      title: "醫療・護理相關業務",
      description: "為醫療・護理事業的開設和運營所需的許可申請提供支援。",
      examples: ["醫療法人設立", "護理事業所指定申請", "診療所開設屆"],
      altText: "醫療・護理相關業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    },
    other: {
      title: "其他業務",
      description: "對於上述以外的各種許可證和手續，也請隨時諮詢。",
      examples: ["各種許可證申請", "手續代辦", "諮詢・顧問"],
      altText: "其他業務",
      serviceExamplesLabel: "服務實例",
      learnMoreLabel: "詳細了解"
    }
  },
  vi: {
    foreign: {
      title: "Dịch vụ người nước ngoài",
      description: "Hỗ trợ toàn diện các thủ tục liên quan đến tư cách lưu trú và thân phận cho doanh nghiệp tiếp nhận người nước ngoài và những người sống tại Nhật Bản.",
      examples: ["Visa kỹ năng đặc định", "Visa nhân tài cao cấp", "Visa kỹ thuật・tri thức nhân văn・nghiệp vụ quốc tế"],
      altText: "Dịch vụ người nước ngoài",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    construction: {
      title: "Xây dựng & Bất động sản",
      description: "Hỗ trợ toàn diện cho các doanh nghiệp xây dựng và bất động sản, từ đơn xin phép đến thủ tục gia hạn.",
      examples: ["Đơn xin giấy phép kinh doanh xây dựng", "Đơn xin giấy phép kinh doanh bất động sản", "Đơn xin đánh giá điều hành"],
      altText: "Xây dựng & Bất động sản",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    automotive: {
      title: "Dịch vụ ô tô",
      description: "Hỗ trợ nhanh chóng và đáng tin cậy cho các thủ tục liên quan đến mua bán và chuyển nhượng xe.",
      examples: ["Đơn xin giấy chứng nhận garage", "Thủ tục đăng ký ô tô", "Thủ tục chuyển nhượng sở hữu"],
      altText: "Dịch vụ ô tô",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "food-entertainment": {
      title: "Ẩm thực & Giải trí",
      description: "Hỗ trợ chuyên môn cho các đơn xin phép cần thiết để mở nhà hàng và cơ sở giải trí.",
      examples: ["Giấy phép kinh doanh nhà hàng", "Giấy phép kinh doanh giải trí", "Thông báo kinh doanh rượu đêm khuya"],
      altText: "Ẩm thực & Giải trí",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "waste-management": {
      title: "Quản lý chất thải",
      description: "Hỗ trợ đáng tin cậy cho các đơn xin phép cần thiết để quản lý chất thải công nghiệp phù hợp.",
      examples: ["Giấy phép thu gom/vận chuyển chất thải công nghiệp", "Giấy phép xử lý chất thải công nghiệp", "Giấy phép quản lý chất thải chung"],
      altText: "Quản lý chất thải",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "travel-hospitality": {
      title: "Du lịch & Khách sạn",
      description: "Hỗ trợ đăng ký và đơn xin phép cần thiết để bắt đầu kinh doanh du lịch và lưu trú.",
      examples: ["Đăng ký đại lý du lịch", "Giấy phép kinh doanh khách sạn", "Thông báo kinh doanh lưu trú tư nhân"],
      altText: "Du lịch & Khách sạn",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    corporate: {
      title: "Thành lập công ty",
      description: "Hỗ trợ toàn diện các thủ tục thành lập công ty cho những ai đang cân nhắc khởi nghiệp.",
      examples: ["Thành lập công ty cổ phần", "Thành lập công ty TNHH", "Soạn thảo điều lệ"],
      altText: "Thành lập công ty",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "business-license": {
      title: "Giấy phép kinh doanh",
      description: "Hỗ trợ các đơn xin giấy phép kinh doanh khác nhau bằng kiến thức chuyên môn trong nhiều ngành.",
      examples: ["Giấy phép kinh doanh hàng cũ", "Giấy phép bán rượu", "Thông báo mở salon làm đẹp"],
      altText: "Giấy phép kinh doanh",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    land: {
      title: "Dịch vụ đất đai",
      description: "Hỗ trợ đơn xin phép cho việc sử dụng đất hiệu quả và các dự án phát triển.",
      examples: ["Giấy phép chuyển đổi đất nông nghiệp", "Đơn xin giấy phép phát triển", "Chuẩn bị kế hoạch sử dụng đất"],
      altText: "Dịch vụ đất đai",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "legal-documentation": {
      title: "Tài liệu pháp lý",
      description: "Hỗ trợ chuyên môn cho việc soạn thảo hợp đồng và chuẩn bị tài liệu pháp lý.",
      examples: ["Soạn thảo hợp đồng", "Thư chứng nhận", "Chuẩn bị tài liệu công chứng"],
      altText: "Tài liệu pháp lý",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    "medical-care": {
      title: "Y tế & Chăm sóc",
      description: "Hỗ trợ đơn xin phép cần thiết để thành lập và vận hành các dịch vụ y tế và chăm sóc.",
      examples: ["Thành lập tập đoàn y tế", "Đơn xin chỉ định cơ sở chăm sóc", "Thông báo mở phòng khám"],
      altText: "Y tế & Chăm sóc",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    },
    other: {
      title: "Dịch vụ khác",
      description: "Xin vui lòng thoải mái tư vấn về các loại phép và thủ tục khác không được liệt kê ở trên.",
      examples: ["Đơn xin các loại phép khác", "Thủ tục hành chính", "Tư vấn & Consulting"],
      altText: "Dịch vụ khác",
      serviceExamplesLabel: "Ví dụ dịch vụ",
      learnMoreLabel: "Tìm hiểu thêm"
    }
  }
};