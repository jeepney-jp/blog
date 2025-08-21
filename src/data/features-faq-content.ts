import { Locale } from '@/lib/i18n/types';
import { FaqItem } from '@/lib/types';

type FeaturesFaqContent = {
  [K in Locale]: {
    title: string;
    subtitle: string;
    faqs: FaqItem[];
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
  }
};