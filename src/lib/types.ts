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
  priceMin?: number;
  priceMax?: number;
  priceNote?: string;
  orderRank?: number;
  tag?: string[];
}

// Sanity Image Asset型定義
export interface SanityImageAsset {
  _id: string;
  url: string;
}

// Portable Text Block型定義
export interface PortableTextBlock {
  _type: 'block';
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  style?: string;
  markDefs?: Array<{
    _key: string;
    _type: string;
    [key: string]: unknown;
  }>;
}

export interface ServiceCategory {
  _id: string;
  title: string;
  slug: string;
  icon?: SanityImageAsset;
  image?: SanityImageAsset;
  imageUrl?: string;
  iconUrl?: string;
  catchphrase?: string;
  expertiseDescription?: PortableTextBlock[];
  faq?: FaqItem[];
  services?: ServiceDetailLite[];
  previewServices?: Array<{
    _id: string;
    title: string;
  }>;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageAsset;
  ogImageUrl?: string;
}

export interface ServiceDetail {
  _id: string;
  title: string;
  slug: string;
  overview?: string;
  target?: string;
  price?: string;
  priceMin?: number;
  priceMax?: number;
  priceNote?: string;
  orderRank?: number;
  problemStatement?: PortableTextBlock[];
  serviceMerits?: PortableTextBlock[];
  serviceFlow?: PortableTextBlock[];
  priceTable?: PortableTextBlock[];
  requiredDocuments?: PortableTextBlock[];
  faq?: FaqItem[];
  tag?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageAsset;
  ogImageUrl?: string;
  parentCategory?: {
    _id: string;
    title: string;
    slug: string;
  };
  related?: Array<{
    title: string;
    slug: string;
    overview?: string;
    parentCategory: {
      slug: string;
    };
  }>;
}