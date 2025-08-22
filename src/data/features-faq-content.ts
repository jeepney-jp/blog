import { Locale } from '@/lib/i18n/types';

interface FeaturesFaqItem {
  _id: string;
  question: string;
  answer: string;
  order: number;
}

type FeaturesFaqContent = {
  [K in Locale]: {
    title: string;
    subtitle: string;
    faqs: FeaturesFaqItem[];
  };
};

export const featuresFaqContent: FeaturesFaqContent = {
  ja: {
    title: "よくあるご質問",
    subtitle: "よくご質問いただく内容をご紹介します",
    faqs: [
      {
        _id: "1",
        question: "初回相談は無料ですか？",
        answer: "はい、初回相談は無料で承っております。お客様のご状況をお伺いし、最適なサポート方法をご提案させていただきます。お気軽にお問い合わせください。",
        order: 1
      },
      {
        _id: "2",
        question: "オンラインでの相談は可能ですか？",
        answer: "はい、Zoom等のビデオ会議システムを使用してのオンライン相談に対応しております。全国どこからでも、事務所にお越しいただくことなくご相談いただけます。",
        order: 2
      },
      {
        _id: "3",
        question: "料金はどのように決まりますか？",
        answer: "料金は、お客様のご依頼内容や申請の複雑さによって異なります。初回相談時に詳細をお伺いした上で、明確な見積もりをご提示いたします。追加費用が発生する場合は、必ず事前にご説明いたします。",
        order: 3
      },
      {
        _id: "4",
        question: "どのような言語に対応していますか？",
        answer: "日本語、英語、中国語、ベトナム語、タガログ語、韓国語、ポルトガル語など、9言語での対応が可能です。母国語でのサポートをご希望の方は、お申し出ください。",
        order: 4
      },
      {
        _id: "5",
        question: "申請にかかる期間はどのくらいですか？",
        answer: "申請の種類や内容によって異なりますが、書類準備から申請完了まで、通常1〜3ヶ月程度です。お急ぎの案件については、可能な限り迅速に対応いたします。詳細なスケジュールは初回相談時にご説明いたします。",
        order: 5
      },
      {
        _id: "6",
        question: "土日祝日の対応は可能ですか？",
        answer: "土曜日は午前中のみ営業しております。日曜・祝日は定休日となりますが、事前予約により対応可能な場合もございます。お仕事で平日のご来所が難しい方は、ご相談ください。",
        order: 6
      },
      {
        _id: "7",
        question: "対応エリアはどこまでですか？",
        answer: "東京都、千葉県、埼玉県、神奈川県を中心に対応しておりますが、オンライン相談により全国からのご依頼も承っております。遠方の方もお気軽にご相談ください。",
        order: 7
      },
      {
        _id: "8",
        question: "支払い方法は何がありますか？",
        answer: "銀行振込、クレジットカード、現金でのお支払いに対応しております。分割払いのご相談も承っておりますので、お気軽にお申し出ください。",
        order: 8
      }
    ]
  },
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Introducing commonly asked questions",
    faqs: [
      {
        _id: "1",
        question: "Is the initial consultation free?",
        answer: "Yes, we offer free initial consultations. We will listen to your situation and propose the best support method for you. Please feel free to contact us.",
        order: 1
      },
      {
        _id: "2",
        question: "Is online consultation available?",
        answer: "Yes, we support online consultations using video conferencing systems such as Zoom. You can consult with us from anywhere in Japan without visiting our office.",
        order: 2
      },
      {
        _id: "3",
        question: "How are fees determined?",
        answer: "Fees vary depending on the content of your request and the complexity of the application. We will provide a clear estimate after understanding the details during the initial consultation. If additional costs arise, we will always explain them in advance.",
        order: 3
      },
      {
        _id: "4",
        question: "What languages do you support?",
        answer: "We can provide support in 9 languages including Japanese, English, Chinese, Vietnamese, Tagalog, Korean, and Portuguese. If you would like support in your native language, please let us know.",
        order: 4
      },
      {
        _id: "5",
        question: "How long does the application process take?",
        answer: "It varies depending on the type and content of the application, but typically takes 1-3 months from document preparation to application completion. We will respond as quickly as possible for urgent cases. We will explain the detailed schedule during the initial consultation.",
        order: 5
      },
      {
        _id: "6",
        question: "Are you available on weekends and holidays?",
        answer: "We are open on Saturday mornings only. Sundays and public holidays are closed, but we may be able to accommodate by appointment. Please consult with us if you have difficulty visiting on weekdays due to work.",
        order: 6
      },
      {
        _id: "7",
        question: "What areas do you cover?",
        answer: "We primarily cover Tokyo, Chiba, Saitama, and Kanagawa prefectures, but we also accept requests from all over Japan through online consultations. Please feel free to consult with us even if you are far away.",
        order: 7
      },
      {
        _id: "8",
        question: "What payment methods are available?",
        answer: "We accept bank transfers, credit cards, and cash payments. We also accept consultations for installment payments, so please feel free to ask.",
        order: 8
      }
    ]
  },
  'zh-CN': {
    title: "常见问题",
    subtitle: "介绍常见的问题内容",
    faqs: [
      {
        _id: "1",
        question: "初次咨询是否免费？",
        answer: "是的，初次咨询免费。我们会了解客户的情况，提出最佳的支持方法。请随时联系我们。",
        order: 1
      },
      {
        _id: "2",
        question: "是否可以在线咨询？",
        answer: "是的，我们支持使用Zoom等视频会议系统进行在线咨询。无论您在全国何处，都可以咨询，无需到访事务所。",
        order: 2
      },
      {
        _id: "3", 
        question: "费用如何确定？",
        answer: "费用根据客户的委托内容和申请的复杂程度而异。在初次咨询时详细了解后，会提供明确的报价。如有追加费用，必定会事先说明。",
        order: 3
      }
    ]
  },
  'zh-TW': {
    title: "常見問題",
    subtitle: "介紹常見的問題內容",
    faqs: [
      {
        _id: "1",
        question: "初次諮詢是否免費？",
        answer: "是的，初次諮詢免費。我們會了解客戶的情況，提出最佳的支援方法。請隨時聯繫我們。",
        order: 1
      },
      {
        _id: "2",
        question: "是否可以線上諮詢？",
        answer: "是的，我們支援使用Zoom等視訊會議系統進行線上諮詢。無論您在全國何處，都可以諮詢，無需到訪事務所。",
        order: 2
      },
      {
        _id: "3",
        question: "費用如何確定？",
        answer: "費用根據客戶的委託內容和申請的複雜程度而異。在初次諮詢時詳細了解後，會提供明確的報價。如有追加費用，必定會事先說明。",
        order: 3
      }
    ]
  },
  vi: {
    title: "Câu hỏi thường gặp",
    subtitle: "Giới thiệu những nội dung thường được hỏi",
    faqs: [
      {
        _id: "1",
        question: "Tư vấn lần đầu có miễn phí không?",
        answer: "Có, chúng tôi cung cấp tư vấn miễn phí lần đầu. Chúng tôi sẽ lắng nghe tình hình của khách hàng và đề xuất phương pháp hỗ trợ tối ưu. Xin vui lòng liên hệ thoải mái.",
        order: 1
      },
      {
        _id: "2",
        question: "Có thể tư vấn trực tuyến không?",
        answer: "Có, chúng tôi hỗ trợ tư vấn trực tuyến sử dụng hệ thống hội nghị video như Zoom. Bạn có thể tư vấn từ bất kỳ đâu trong cả nước mà không cần đến văn phòng.",
        order: 2
      },
      {
        _id: "3",
        question: "Phí được quyết định như thế nào?",
        answer: "Phí khác nhau tùy thuộc vào nội dung yêu cầu của khách hàng và độ phức tạp của đơn xin. Sau khi hiểu chi tiết trong buổi tư vấn đầu tiên, chúng tôi sẽ cung cấp báo giá rõ ràng. Nếu phát sinh chi phí bổ sung, chúng tôi nhất định sẽ giải thích trước.",
        order: 3
      },
      {
        _id: "4",
        question: "Hỗ trợ những ngôn ngữ nào?",
        answer: "Chúng tôi có thể hỗ trợ bằng 9 thứ tiếng bao gồm tiếng Nhật, tiếng Anh, tiếng Trung, tiếng Việt, tiếng Tagalog, tiếng Hàn, tiếng Bồ Đào Nha. Nếu muốn hỗ trợ bằng tiếng mẹ đẻ, xin vui lòng cho biết.",
        order: 4
      },
      {
        _id: "5",
        question: "Thời gian xử lý đơn xin mất bao lâu?",
        answer: "Tùy thuộc vào loại và nội dung đơn xin nhưng thường mất khoảng 1-3 tháng từ chuẩn bị tài liệu đến hoàn thành đơn xin. Đối với các vụ việc khẩn cấp, chúng tôi sẽ phản hồi nhanh nhất có thể. Lịch trình chi tiết sẽ được giải thích trong buổi tư vấn đầu tiên.",
        order: 5
      },
      {
        _id: "6",
        question: "Có thể đối ứng vào cuối tuần và ngày lễ không?",
        answer: "Thứ bảy chúng tôi chỉ mở cửa buổi sáng. Chủ nhật và ngày lễ là ngày nghỉ định kỳ, nhưng có thể đối ứng nếu đặt lịch trước. Những người khó đến văn phòng vào ngày thường vì công việc, xin vui lòng tư vấn.",
        order: 6
      },
      {
        _id: "7",
        question: "Khu vực đối ứng đến đâu?",
        answer: "Chúng tôi chủ yếu đối ứng Tokyo, Chiba, Saitama, Kanagawa nhưng cũng nhận yêu cầu từ toàn quốc thông qua tư vấn trực tuyến. Những người ở xa xin vui lòng tư vấn thoải mái.",
        order: 7
      },
      {
        _id: "8",
        question: "Có những phương thức thanh toán nào?",
        answer: "Chúng tôi chấp nhận chuyển khoản ngân hàng, thẻ tín dụng và thanh toán bằng tiền mặt. Cũng nhận tư vấn về thanh toán trả góp, xin vui lòng nói ra thoải mái.",
        order: 8
      }
    ]
  }
};