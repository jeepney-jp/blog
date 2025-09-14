import { Locale } from '@/lib/i18n/types';

type BreadcrumbContent = {
  [K in Locale]: {
    home: string;
    about: string;
    contact: string;
    features: string;
    news: string;
    services: string;
    faq: string;
  };
};

export const breadcrumbContent: BreadcrumbContent = {
  ja: {
    home: 'ホーム',
    about: '事務所概要',
    contact: 'お問い合わせ',
    features: '特徴・強み',
    news: 'ニュース',
    services: 'サービス',
    faq: 'よくあるご質問'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    features: 'Features',
    news: 'News',
    services: 'Services',
    faq: 'FAQ'
  },
  'zh-CN': {
    home: '首页',
    about: '事务所概要',
    contact: '联系我们',
    features: '特色・优势',
    news: '新闻',
    services: '服务',
    faq: '常见问题'
  },
  'zh-TW': {
    home: '首頁',
    about: '事務所概要',
    contact: '聯絡我們',
    features: '特色・優勢',
    news: '新聞',
    services: '服務',
    faq: '常見問題'
  },
  vi: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    features: 'Đặc điểm・Ưu thế',
    news: 'Tin tức',
    services: 'Dịch vụ',
    faq: 'Câu hỏi thường gặp'
  }
};