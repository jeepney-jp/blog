import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
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
  };

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    openGraph: {
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
