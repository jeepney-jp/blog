import { Metadata } from 'next';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHeader from '@/components/PageHeader';
import { FaqAccordion } from '@/components/FaqAccordion';
import NewCTASection from '@/components/NewCTASection';
import UnifiedFooter from '@/components/UnifiedFooter';
import { Locale } from '@/lib/i18n/types';
import { breadcrumbContent } from '@/data/breadcrumb-content';
import { featuresFaqContent } from '@/data/features-faq-content';

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  
  const metaContent = {
    ja: {
      title: 'よくあるご質問 | フォルティア行政書士事務所',
      description: 'フォルティア行政書士事務所に寄せられる、よくあるご質問と回答をまとめました。初回相談、料金、対応言語、申請期間などについてご案内します。',
    },
    en: {
      title: 'FAQ | Fortia Administrative Law Office',
      description: 'Frequently asked questions and answers about Fortia Administrative Law Office. Learn about initial consultations, fees, supported languages, and application periods.',
    },
    'zh-CN': {
      title: '常见问题 | Fortia行政书士事务所',
      description: 'Fortia行政书士事务所的常见问题和答案。了解初次咨询、费用、支持语言、申请期间等信息。',
    },
    'zh-TW': {
      title: '常見問題 | Fortia行政書士事務所',
      description: 'Fortia行政書士事務所的常見問題和答案。了解初次諮詢、費用、支援語言、申請期間等資訊。',
    },
    vi: {
      title: 'Câu hỏi thường gặp | Văn phòng Hành chính Fortia',
      description: 'Các câu hỏi thường gặp và câu trả lời về Văn phòng Hành chính Fortia. Tìm hiểu về tư vấn ban đầu, phí, ngôn ngữ hỗ trợ và thời gian xử lý đơn.',
    },
  };

  const baseUrl = 'https://fortia-office.com';
  const currentMeta = metaContent[lang] || metaContent.ja;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    alternates: {
      canonical: `${baseUrl}/ja/faq`, // Always use Japanese version as canonical
      languages: {
        'ja': `${baseUrl}/ja/faq`,
        'en': `${baseUrl}/en/faq`,
        'zh-CN': `${baseUrl}/zh-CN/faq`,
        'zh-TW': `${baseUrl}/zh-TW/faq`,
        'vi': `${baseUrl}/vi/faq`,
        'x-default': `${baseUrl}/ja/faq`, // Set Japanese as default
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${lang}/faq`,
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

export default async function FaqPage({ params }: PageProps) {
  const { lang } = await params;
  const content = featuresFaqContent[lang];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={lang} />
      
      <PageHeader 
        title={content.title}
        description={content.subtitle}
      />
      
      {/* Breadcrumb */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            segments={[
              { name: breadcrumbContent[lang].home, href: `/${lang}` },
              { name: breadcrumbContent[lang].faq || content.title, href: `/${lang}/faq` }
            ]}
          />
        </div>
      </nav>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <FaqAccordion faqs={content.faqs} />
          </div>
        </div>
      </section>

      <NewCTASection lang={lang} />
      <UnifiedFooter lang={lang} />
    </div>
  );
}