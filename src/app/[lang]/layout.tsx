import type { Metadata } from "next";
import { Inter, Fira_Code, Noto_Sans_SC, Noto_Sans_TC, Noto_Sans } from "next/font/google";
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
      title: "フォルティア行政書士事務所",
      description: "茂原市の行政書士事務所。外国人ビザ、建設業許可、法人設立など幅広い業務に対応。",
    },
    en: {
      title: "Fortia Administrative Scrivener Office",
      description: "Administrative scrivener office in Mobara City. We handle foreign visas, construction business permits, corporate establishment, and a wide range of services.",
    },
    'zh-CN': {
      title: "Fortia行政书士事务所",
      description: "茂原市的行政书士事务所。处理外国人签证、建筑业许可、法人设立等广泛业务。",
    },
    'zh-TW': {
      title: "Fortia行政書士事務所",
      description: "茂原市的行政書士事務所。處理外國人簽證、建築業許可、法人設立等廣泛業務。",
    },
    vi: {
      title: "Văn phòng Hành chính Fortia",
      description: "Văn phòng hành chính tại thành phố Mobara. Xử lý visa người nước ngoài, giấy phép kinh doanh xây dựng, thành lập pháp nhân và nhiều dịch vụ khác.",
    },
  };

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    openGraph: {
      locale: lang === 'ja' ? 'ja_JP' : lang === 'en' ? 'en_US' : lang === 'zh-CN' ? 'zh_CN' : lang === 'zh-TW' ? 'zh_TW' : 'vi_VN',
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
      <body
        className={`${fontClass} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
