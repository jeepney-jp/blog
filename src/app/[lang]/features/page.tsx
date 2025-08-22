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
  },
  'zh-CN': {
    pageTitle: "本事务所特色",
    pageDescription: "介绍Fortia行政书士事务所的优势和独特服务",
    breadcrumbHome: "首页",
    breadcrumbFeatures: "特色",
    heroTitle1: "申请的不安，",
    heroTitle2: "全部由我们解决。",
    heroSubtitle: "从繁琐的手续中解放出来，专注于业务和生活",
    keyPoint1: { title: "压倒性实绩", subtitle: "超过10,000件申请实绩" },
    keyPoint2: { title: "业界最低价格", subtitle: "比一般行情便宜30%" },
    keyPoint3: { title: "可靠的多语言支持", subtitle: "9种语言完全消除语言障碍" },
    keyPoint4: { title: "快速响应", subtitle: "在线完成，无需到访事务所" },
    concernsTitle: "您是否有这些烦恼？",
    concerns: [
      { title: "初次申请感到不安", description: "想委托给实绩丰富的事务所，但不知道该选择哪家..." },
      { title: "复杂案例的应对", description: "我的案例有点复杂。真的能获得许可吗，担心得夜不能寐..." },
      { title: "费用与品质的平衡", description: "想尽可能控制费用，但便宜没好货也很困扰..." },
      { title: "费用体系不透明", description: "不知道最终会收费多少，无法制定预算..." }
    ],
    solutionTitle: "解决这些烦恼的关键在于本事务所的",
    solutionHighlight: "「4大优势」",
    solutionTitle2: "",
    solutionDescription: "下面将详细说明各项优势如何解决客户的课题。",
    strengthsGrid: [
      { title: "超过10,000件申请实绩的信赖", description: "凭借丰富经验和专业知识，应对复杂案例" },
      { title: "业界最低价格结构", description: "通过高效运营实现低价格，同时提供高品质服务" },
      { title: "可靠的多语言支持", description: "9种语言支持完全消除语言障碍" },
      { title: "快速响应和在线完成", description: "对紧急案件快速响应，无需到访事务所" }
    ],
    strengths: [
      { title: "超过10,000件申请实绩的信赖", description: "自2008年设立以来支持了10,000件以上的申请，拥有99%的批准率实绩和信赖" },
      { title: "业界最低价格结构", description: "通过消除浪费的高效运营实现了业界最低价格，同时提供高品质服务" },
      { title: "可靠的多语言支持", description: "9种语言支持完全消除语言障碍" },
      { title: "快速响应和在线完成", description: "对紧急案件快速响应，无需到访事务所" }
    ],
    detailedStrengths: {
      point1: { label: "要点1", title: "超过10,000件申请实绩的信赖", statsTitle1: "申请实绩", statsTitle2: "批准率", description: "自2008年设立以来，支持了10,000件以上的申请，拥有99%批准率的实绩和信赖。" },
      point2: { label: "要点2", title: "业界最低价格结构", savingsText: "与一般市场价格相比", savingsAmount: "便宜30%", guarantee1: "🔒 透明价格", guarantee2: "👍 无追加费用", description: "以低价格提供高品质服务" },
      point3: { label: "要点3", title: "可靠的多语言支持", languagesTitle: "支持语言（9种语言）", languages: ["英语", "中文", "越南语", "他加禄语", "韩语", "葡萄牙语"], description: "多语言工作人员用您的母语提供支持" },
      point4: { label: "要点4", title: "快速响应和在线完成便利性", feature1: "当日响应", feature1Sub: "紧急案件安全处理", feature2: "在线完成", feature2Sub: "无需到访事务所", description: "对紧急申请快速响应" }
    },
    trustTitle: "信赖的理由",
    trustSubtitle: "在客户企业数量和行业份额方面都拥有丰富实绩",
    trustCompanies: "全行业超过0000家客户企业",
    trustLogo: "客户企业标志",
    faqTitle: "常见问题",
    faqSubtitle: "介绍常见问题",
    faqEmpty: "目前正在准备常见问题。"
  },
  'zh-TW': {
    pageTitle: "本事務所特色",
    pageDescription: "介紹Fortia行政書士事務所的優勢和獨特服務",
    breadcrumbHome: "首頁",
    breadcrumbFeatures: "特色",
    heroTitle1: "申請的不安，",
    heroTitle2: "全部由我們解決。",
    heroSubtitle: "從繁瑣的手續中解放出來，專注於業務和生活",
    keyPoint1: { title: "壓倒性實績", subtitle: "超過10,000件申請實績" },
    keyPoint2: { title: "業界最低價格", subtitle: "比一般行情便宜30%" },
    keyPoint3: { title: "可靠的多語言支援", subtitle: "9種語言完全消除語言障礙" },
    keyPoint4: { title: "快速響應", subtitle: "線上完成，無需到訪事務所" },
    concernsTitle: "您是否有這些煩惱？",
    concerns: [
      { title: "初次申請感到不安", description: "想委託給實績豐富的事務所，但不知道該選擇哪家..." },
      { title: "複雜案例的應對", description: "我的案例有點複雜。真的能獲得許可嗎，擔心得夜不能寐..." },
      { title: "費用與品質的平衡", description: "想儘可能控制費用，但便宜沒好貨也很困擾..." },
      { title: "費用體系不透明", description: "不知道最終會收費多少，無法制定預算..." }
    ],
    solutionTitle: "解決這些煩惱的關鍵在於本事務所的",
    solutionHighlight: "「4大優勢」",
    solutionTitle2: "",
    solutionDescription: "下面將詳細說明各項優勢如何解決客戶的課題。",
    strengthsGrid: [
      { title: "超過10,000件申請實績的信賴", description: "憑藉豐富經驗和專業知識，應對複雜案例" },
      { title: "業界最低價格結構", description: "透過高效運營實現低價格，同時提供高品質服務" },
      { title: "可靠的多語言支援", description: "9種語言支援完全消除語言障礙" },
      { title: "快速響應和線上完成", description: "對緊急案件快速響應，無需到訪事務所" }
    ],
    strengths: [
      { title: "超過10,000件申請實績的信賴", description: "自2008年設立以來支援了10,000件以上的申請，擁有99%的批准率實績和信賴" },
      { title: "業界最低價格結構", description: "透過消除浪費的高效運營實現了業界最低價格，同時提供高品質服務" },
      { title: "可靠的多語言支援", description: "9種語言支援完全消除語言障礙" },
      { title: "快速響應和線上完成", description: "對緊急案件快速響應，無需到訪事務所" }
    ],
    detailedStrengths: {
      point1: { label: "要點1", title: "超過10,000件申請實績的信賴", statsTitle1: "申請實績", statsTitle2: "批准率", description: "自2008年設立以來，支援了10,000件以上的申請，擁有99%批准率的實績和信賴。" },
      point2: { label: "要點2", title: "業界最低價格結構", savingsText: "與一般市場價格相比", savingsAmount: "便宜30%", guarantee1: "🔒 透明價格", guarantee2: "👍 無追加費用", description: "以低價格提供高品質服務" },
      point3: { label: "要點3", title: "可靠的多語言支援", languagesTitle: "支援語言（9種語言）", languages: ["英語", "中文", "越南語", "他加祿語", "韓語", "葡萄牙語"], description: "多語言工作人員用您的母語提供支援" },
      point4: { label: "要點4", title: "快速響應和線上完成便利性", feature1: "當日響應", feature1Sub: "緊急案件安全處理", feature2: "線上完成", feature2Sub: "無需到訪事務所", description: "對緊急申請快速響應" }
    },
    trustTitle: "信賴的理由",
    trustSubtitle: "在客戶企業數量和行業份額方面都擁有豐富實績",
    trustCompanies: "全行業超過0000家客戶企業",
    trustLogo: "客戶企業標誌",
    faqTitle: "常見問題",
    faqSubtitle: "介紹常見問題",
    faqEmpty: "目前正在準備常見問題。"
  },
  vi: {
    pageTitle: "Đặc điểm văn phòng chúng tôi",
    pageDescription: "Giới thiệu đặc điểm của Văn phòng Hành chính Fortia",
    breadcrumbHome: "Trang chủ",
    breadcrumbFeatures: "Đặc điểm",
    heroTitle1: "Lo lắng về đơn xin,",
    heroTitle2: "chúng tôi sẽ giải quyết tất cả.",
    heroSubtitle: "Được giải phóng khỏi các thủ tục phức tạp, tập trung vào kinh doanh và cuộc sống",
    keyPoint1: {
      title: "Thành tích áp đảo",
      subtitle: "Hơn 10,000 thành tích xử lý đơn"
    },
    keyPoint2: {
      title: "Mức giá thấp nhất ngành",
      subtitle: "Kế toán minh bạch với giá an tâm"
    },
    keyPoint3: {
      title: "Hỗ trợ đa ngôn ngữ",
      subtitle: "Hỗ trợ hoàn toàn bằng 9 thứ tiếng"
    },
    concernsTitle: "Bạn có đang lo lắng về những điều này không?",
    concerns: [
      {
        title: "Lo lắng về đơn xin đầu tiên",
        description: "Muốn giao cho văn phòng có thành tích phong phú nhưng không biết chọn nơi nào..."
      },
      {
        title: "Đối ứng với trường hợp phức tạp",
        description: "Trường hợp của tôi hơi phức tạp. Lo lắng liệu có thể lấy được giấy phép thật sự không đến mức không ngủ được..."
      },
      {
        title: "Chi phí không rõ ràng",
        description: "Không hiểu được hệ thống phí. Lo lắng có thể bị tính phí bổ sung..."
      },
      {
        title: "Rào cản ngôn ngữ",
        description: "Tiếng Nhật không tự tin. Liệu có thể tư vấn bằng tiếng mẹ đẻ không..."
      },
      {
        title: "Giao tiếp đa ngôn ngữ",
        description: "Muốn tiến hành trao đổi với nhân viên nước ngoài một cách suôn sẻ nhưng cảm thấy rào cản ngôn ngữ..."
      },
      {
        title: "Hạn chót đơn xin đang đến gần",
        description: "Hạn chót đơn xin đang đến gần, dù sao cũng đang vội vã về thủ tục..."
      },
      {
        title: "Hạn chế về thời gian",
        description: "Ngày thường bận rộn với công việc, không có thời gian để đến văn phòng nhiều lần..."
      }
    ],
    solutionTitle: "Lo lắng đó, chìa khóa giải quyết nằm ở",
    solutionHighlight: "「4 điểm mạnh」",
    solutionTitle2: "của văn phòng chúng tôi",
    solutionDescription: "Mỗi điểm mạnh có thể giải quyết vấn đề của khách hàng như thế nào, chúng tôi sẽ giải thích chi tiết ngay bên dưới.",
    strengthsGrid: [
      {
        title: "Niềm tin với hơn 10,000 thành tích xử lý",
        description: "Với kinh nghiệm và bí quyết phong phú, đối ứng cả các trường hợp phức tạp"
      },
      {
        title: "Mức giá thấp nhất ngành",
        description: "Hệ thống phí minh bạch, không lo lắng về chi phí bổ sung"
      },
      {
        title: "Hỗ trợ an tâm với đa ngôn ngữ",
        description: "Hỗ trợ 9 thứ tiếng, loại bỏ hoàn toàn rào cản ngôn ngữ"
      },
      {
        title: "Đối ứng nhanh chóng và hoàn thành trực tuyến",
        description: "Đối ứng nhanh chóng cả các vụ việc khẩn cấp, không cần đến văn phòng"
      }
    ],
    detailedStrengths: {
      point1: {
        label: "Điểm 1",
        title: "Niềm tin với hơn 10,000 thành tích xử lý",
        statsTitle1: "Số thành tích xử lý",
        statsTitle2: "Tỷ lệ phê duyệt",
        description: "Từ khi thành lập năm 2008, chúng tôi đã hỗ trợ hơn 10,000 đơn xin với tỷ lệ phê duyệt 99%, có thành tích và uy tín vững chắc. Với kinh nghiệm và bí quyết phong phú, chúng tôi đề xuất chiến lược đơn xin tối ưu phù hợp với tình hình của khách hàng."
      },
      point2: {
        label: "Điểm 2", 
        title: "Mức giá thấp nhất ngành",
        savingsText: "So với giá thị trường",
        savingsAmount: "Rẻ hơn 30%",
        guarantee1: "Không có phí ẩn",
        guarantee2: "Kế toán minh bạch",
        description: "Thông qua hoạt động hiệu quả loại bỏ lãng phí, chúng tôi đạt được mức giá thấp nhất ngành. Hệ thống phí minh bạch không có phí ẩn, bạn có thể yên tâm về ngân sách."
      },
      point3: {
        label: "Điểm 3",
        title: "Hỗ trợ an tâm với đa ngôn ngữ", 
        languagesTitle: "Các ngôn ngữ hỗ trợ",
        languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Việt", "Tiếng Tagalog", "Tiếng Nepal", "Tiếng Sinhala", "Tiếng Hàn", "Tiếng Ý", "Tiếng Tây Ban Nha"],
        description: "Nhân viên hỗ trợ đa ngôn ngữ sẽ hỗ trợ bằng tiếng mẹ đẻ. Ngay cả những người lo lắng về tiếng Nhật cũng có thể tư vấn một cách yên tâm."
      },
      point4: {
        label: "Điểm 4",
        title: "Đối ứng nhanh chóng và hoàn thành trực tuyến",
        feature1: "Phản hồi trong ngày",
        feature1Sub: "Xử lý an toàn các vụ việc khẩn cấp",
        feature2: "Hoàn thành trực tuyến",
        feature2Sub: "Không cần đến văn phòng",
        description: "Đối với các đơn xin khẩn cấp, chúng tôi đối ứng nhanh chóng. Có thể hoàn thành trực tuyến mà không cần đến văn phòng, tiết kiệm thời gian và công sức."
      }
    },
    achievement: {
      title: "Niềm tin với hơn 10,000 hồ sơ xử lý",
      description: "Từ khi thành lập năm 2008, chúng tôi đã hỗ trợ hơn 10,000 đơn xin với tỷ lệ phê duyệt 99%, thể hiện thành tích và uy tín vững chắc.",
      badge1: "Hơn 10,000 hồ sơ",
      badge2: "Tỷ lệ phê duyệt 99%",
      point1: { label: "Điểm 1", title: "Đối ứng nhanh chóng và hoàn thành trực tuyến tiện lợi", feature1: "Phản hồi trong ngày", feature1Sub: "Xử lý an toàn các vụ việc khẩn cấp", feature2: "Hoàn thành trực tuyến", feature2Sub: "Không cần đến văn phòng", description: "Phản hồi nhanh đối với đơn xin khẩn cấp" },
      point2: { label: "Điểm 2", title: "Mức giá thấp nhất ngành", feature1: "Rẻ hơn 30%", feature1Sub: "So với giá thị trường", feature2: "Minh bạch về phí", feature2Sub: "Không có phí ẩn", description: "Thông qua hoạt động hiệu quả, chúng tôi đạt được mức giá thấp nhất ngành" },
      point3: { label: "Điểm 3", title: "Hỗ trợ an tâm với nhiều ngôn ngữ", feature1: "Hỗ trợ 9 thứ tiếng", feature1Sub: "Bởi nhân viên tiếng mẹ đẻ", feature2: "Hỗ trợ văn hóa", feature2Sub: "Hiểu biết về văn hóa", description: "Nhân viên hỗ trợ đa ngôn ngữ sẽ hỗ trợ bằng tiếng mẹ đẻ" },
      point4: { label: "Điểm 4", title: "Đối ứng nhanh chóng và hoàn thành trực tuyến tiện lợi", feature1: "Phản hồi trong ngày", feature1Sub: "Xử lý an toàn các vụ việc khẩn cấp", feature2: "Hoàn thành trực tuyến", feature2Sub: "Không cần đến văn phòng", description: "Phản hồi nhanh đối với đơn xin khẩn cấp" }
    },
    trustTitle: "Lý do được tin tưởng",
    trustSubtitle: "Có thành tích phong phú về cả số lượng doanh nghiệp khách hàng và thị phần ngành",
    trustCompanies: "Hơn 0000 doanh nghiệp khách hàng trong tất cả các ngành",
    trustLogo: "Logo doanh nghiệp khách hàng",
    faqTitle: "Câu hỏi thường gặp",
    faqSubtitle: "Giới thiệu các câu hỏi thường gặp",
    faqEmpty: "Hiện đang chuẩn bị câu hỏi thường gặp."
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