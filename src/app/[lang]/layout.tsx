import type { Metadata } from "next";
import { Inter, Fira_Code, Noto_Sans_SC, Noto_Sans_TC, Noto_Sans } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { Locale } from '@/lib/i18n/types';
import { locales } from '@/lib/i18n/constants';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin", "vietnamese"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const metadata = {
    ja: {
      title: "フォルティア行政書士事務所【公式】茂原市 | 外国人ビザ・建設業許可専門",
      description: "【公式サイト】茂原市のフォルティア行政書士事務所。申請実績10,000件超、許可率99%の信頼。外国人ビザ・建設業許可・法人設立を業界最安水準で対応。英語・中国語・ベトナム語など多言語サポート。初回相談無料。",
    },
    en: {
      title: "Fortia Administrative Scrivener Office | Mobara City",
      description: "Administrative scrivener office in Mobara City. We handle foreign visas, construction business permits, corporate establishment, and a wide range of services. Free initial consultation.",
    },
    'zh-CN': {
      title: "Fortia行政书士事务所 | 茂原市",
      description: "茂原市的行政书士事务所。处理外国人签证、建筑业许可、法人设立等广泛业务。完全成果报酬制，首次咨询免费。",
    },
    'zh-TW': {
      title: "Fortia行政書士事務所 | 茂原市",
      description: "茂原市的行政書士事務所。處理外國人簽證、建築業許可、法人設立等廣泛業務。完全成果報酬制，首次諮詢免費。",
    },
    vi: {
      title: "Văn phòng Hành chính Fortia | Thành phố Mobara",
      description: "Văn phòng hành chính tại thành phố Mobara. Xử lý visa người nước ngoài, giấy phép kinh doanh xây dựng, thành lập pháp nhân và nhiều dịch vụ khác. Tư vấn miễn phí lần đầu.",
    },
  };

  const baseUrl = 'https://fortia-office.com';

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}/`,
      languages: {
        'ja': `${baseUrl}/`,
        'en': `${baseUrl}/en/`,
        'zh-CN': `${baseUrl}/zh-CN/`,
        'zh-TW': `${baseUrl}/zh-TW/`,
        'vi': `${baseUrl}/vi/`,
        'x-default': `${baseUrl}/`,
      },
    },
    openGraph: {
      title: metadata[lang].title,
      description: metadata[lang].description,
      url: `${baseUrl}/${lang}/`,
      siteName: 'フォルティア行政書士事務所',
      locale: lang === 'ja' ? 'ja_JP' : lang === 'en' ? 'en_US' : lang === 'zh-CN' ? 'zh_CN' : lang === 'zh-TW' ? 'zh_TW' : 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata[lang].title,
      description: metadata[lang].description,
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

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  
  // 言語に応じてフォントクラスを選択
  const fontClass = lang === 'zh-CN' 
    ? `${notoSansSC.variable} ${firaCode.variable}`
    : lang === 'zh-TW'
    ? `${notoSansTC.variable} ${firaCode.variable}`
    : lang === 'vi'
    ? `${notoSans.variable} ${firaCode.variable}`
    : `${inter.variable} ${firaCode.variable}`;
  
  return (
    <html lang={lang}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LGKR992');
            `,
          }}
        />
      </head>
      <body
        className={`${fontClass} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LGKR992"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
