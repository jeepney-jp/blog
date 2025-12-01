import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fortia-office.com'),
  title: 'フォルティア行政書士事務所 | 外国人ビザ・在留資格・許認可申請の専門家',
  description: '外国人ビザ・在留資格申請、許認可申請の専門家。フォルティア行政書士事務所は、企業様・個人様の国際業務と許認可をサポートします。豊富な実績と多言語対応で安心のサービスを提供。',
  keywords: 'フォルティア行政書士事務所,行政書士,ビザ申請,在留資格,許認可,外国人雇用,国際業務,千葉県,茂原市',
  openGraph: {
    title: 'フォルティア行政書士事務所 | 外国人ビザ・在留資格・許認可申請の専門家',
    description: '外国人ビザ・在留資格申請、許認可申請の専門家。企業様・個人様の国際業務と許認可をサポート。',
    images: ['/og-image.png'],
    url: 'https://fortia-office.com/',
    siteName: 'フォルティア行政書士事務所',
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フォルティア行政書士事務所',
    description: '外国人ビザ・在留資格申請、許認可申請の専門家',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://fortia-office.com/',
    languages: {
      'ja': 'https://fortia-office.com/',
      'en': 'https://fortia-office.com/en/',
      'zh-CN': 'https://fortia-office.com/zh-CN/',
      'zh-TW': 'https://fortia-office.com/zh-TW/',
      'vi': 'https://fortia-office.com/vi/'
    }
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
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-noto-sans">{children}</body>
    </html>
  )
}