// ファイル名: types.ts
// 目的: GROQクエリで取得したSanityデータの型定義

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailLite {
  _id: string;
  title: string;
  slug: string;
  overview: string;
  target: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  icon?: any; // Sanity Image Object (修正可)
  image?: any; // Sanity Image Object (修正可)
  catchphrase?: string;
  expertiseDescription?: any; // Portable Text（Block Content）
  faq?: FaqItem[];
  services?: ServiceDetailLite[];
}

export interface ServiceDetail {
  title: string;
  slug: string;
  overview?: string;
  target?: string;
  price?: string;
  problemStatement?: any;
  serviceMerits?: any;
  serviceFlow?: any;
  priceTable?: any;
  requiredDocuments?: any;
  faq?: FaqItem[];
  tag?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: any;
  category?: {
    title: string;
    slug: string;
  };
}