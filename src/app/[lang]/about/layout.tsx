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
      title: '事務所概要 | フォルティア行政書士事務所',
      description: 'フォルティア行政書士事務所の概要、代表挨拶、スタッフ紹介、アクセス情報をご案内します。',
    },
    en: {
      title: 'About Us | Fortia Administrative Law Office',
      description: 'Learn about Fortia Administrative Law Office, our CEO message, staff introduction, and access information.',
    },
    'zh-CN': {
      title: '事务所概要 | Fortia行政书士事务所',
      description: 'Fortia行政书士事务所的概要、代表致词、员工介绍、交通信息指南。',
    },
    'zh-TW': {
      title: '事務所概要 | Fortia行政書士事務所',
      description: 'Fortia行政書士事務所的概要、代表致詞、員工介紹、交通資訊指南。',
    },
    vi: {
      title: 'Giới thiệu | Văn phòng Hành chính Fortia',
      description: 'Tìm hiểu về Văn phòng Hành chính Fortia, lời chào từ CEO, giới thiệu nhân viên và thông tin truy cập.',
    },
  };

  const baseUrl = 'https://fortia-office.com';
  const currentMeta = metaContent[lang] || metaContent.ja;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    alternates: {
      canonical: `${baseUrl}/ja/about`, // Always use Japanese version as canonical
      languages: {
        'ja': `${baseUrl}/ja/about`,
        'en': `${baseUrl}/en/about`,
        'zh-CN': `${baseUrl}/zh-CN/about`,
        'zh-TW': `${baseUrl}/zh-TW/about`,
        'vi': `${baseUrl}/vi/about`,
        'x-default': `${baseUrl}/ja/about`, // Set Japanese as default
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${lang}/about`,
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}