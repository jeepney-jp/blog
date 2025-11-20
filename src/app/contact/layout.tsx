import { Metadata } from 'next';
import { Locale } from '@/lib/i18n/types';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  
  const metaContent = {
    ja: {
      title: 'お問い合わせ | フォルティア行政書士事務所',
      description: '茂原市のフォルティア行政書士事務所へのお問い合わせ。無料相談受付中。電話、メール、FAXでお気軽にご相談ください。',
    },
    en: {
      title: 'Contact | Fortia Administrative Law Office',
      description: 'Contact Fortia Administrative Law Office in Mobara City. Free consultation available. Feel free to contact us by phone, email, or FAX.',
    },
    'zh-CN': {
      title: '联系我们 | Fortia行政书士事务所',
      description: '联系茂原市的Fortia行政书士事务所。免费咨询受理中。请通过电话、邮件、传真随时咨询。',
    },
    'zh-TW': {
      title: '聯絡我們 | Fortia行政書士事務所',
      description: '聯絡茂原市的Fortia行政書士事務所。免費諮詢受理中。請透過電話、郵件、傳真隨時諮詢。',
    },
    vi: {
      title: 'Liên hệ | Văn phòng Hành chính Fortia',
      description: 'Liên hệ với Văn phòng Hành chính Fortia tại thành phố Mobara. Tư vấn miễn phí. Vui lòng liên hệ qua điện thoại, email hoặc FAX.',
    },
  };

  const baseUrl = 'https://fortia-office.com';
  const currentMeta = metaContent[lang] || metaContent.ja;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    alternates: {
      canonical: `${baseUrl}/ja/contact`, // Always use Japanese version as canonical
      languages: {
        'ja': `${baseUrl}/ja/contact`,
        'en': `${baseUrl}/en/contact`,
        'zh-CN': `${baseUrl}/zh-CN/contact`,
        'zh-TW': `${baseUrl}/zh-TW/contact`,
        'vi': `${baseUrl}/vi/contact`,
        'x-default': `${baseUrl}/ja/contact`, // Set Japanese as default
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${lang}/contact`,
      siteName: 'フォルティア行政書士事務所',
      locale: lang === 'ja' ? 'ja_JP' : lang === 'en' ? 'en_US' : lang === 'zh-CN' ? 'zh_CN' : lang === 'zh-TW' ? 'zh_TW' : 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}