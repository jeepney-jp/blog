// ファイル名: lib/queries.ts
// 目的: Sanity CMSからデータを取得するためのGROQクエリ定義ファイル
// 対象: serviceCategory および serviceDetail コレクション

// 1. すべてのカテゴリーのスラッグを取得（動的ルート生成用）
export const categorySlugsQuery = `
  *[_type == "serviceCategory" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// 2. すべてのサービス詳細のスラッグを取得（動的ルート生成用）
export const allServiceDetailSlugsQuery = `
  *[_type == "serviceDetail" && defined(slug.current) && defined(parentCategory->slug.current)] {
    "slug": slug.current,
    "categorySlug": parentCategory->slug.current
  }
`;

// 3. サービスカテゴリー一覧を取得（階層1ページ用）
export const allServiceCategoriesQuery = `
  *[_type == "serviceCategory"] | order(orderRank asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    catchphrase,
    "iconUrl": icon.asset->url + "?w=400&h=300&fit=max&auto=format",
    icon {
      asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    "previewServices": *[_type == "serviceDetail" && references(^._id)] | order(orderRank asc, _createdAt asc)[0...3] {
      _id,
      title
    }
  }
`;

// 4. 特定カテゴリーの詳細と関連サービスを取得（階層2ページ用）
export const categoryPageQuery = `
  *[_type == "serviceCategory" && (slug.current == $slug || slug.current == $slug + " ")][0] {
    _id,
    title,
    "slug": slug.current,
    catchphrase,
    faq[] {
      question,
      answer
    },
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url,
    "iconUrl": icon.asset->url,
    "imageUrl": image.asset->url,
    "services": *[_type == "serviceDetail" && references(^._id)] | order(orderRank asc, _createdAt asc) {
      _id,
      title,
      "slug": slug.current,
      overview,
      target,
      price,
      priceMin,
      priceMax,
      priceNote,
      orderRank,
      tag
    }
  }
`;

// 5. 特定サービス詳細を取得（階層3ページ用）
export const serviceDetailQuery = `
  *[_type == "serviceDetail" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    overview,
    target,
    price,
    priceMin,
    priceMax,
    priceNote,
    orderRank,
    content,
    showToc,
    tocTitle,
    faq[] {
      question,
      answer
    },
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url,
    tag,
    "parentCategory": parentCategory-> {
      _id,
      title,
      "slug": slug.current
    },
    "parentCategoryRef": parentCategory._ref,
    "related": *[_type == "serviceDetail" && _id != ^._id && count(tag[@ in ^.tag]) > 0][0...4] {
      title,
      "slug": slug.current,
      overview,
      "parentCategory": parentCategory-> {
        "slug": slug.current
      }
    }
  }
`;

// 6. トップページ用：カテゴリー一覧（シンプル版）
export const topPageCategoriesQuery = `
  *[_type == "serviceCategory"] | order(orderRank asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    "iconUrl": icon.asset->url
  }
`;

// 7. 関連サービスを取得（同じタグを持つ他のサービス）
export const relatedServicesByTagQuery = `
  *[_type == "serviceDetail" && _id != $currentServiceId && count(tag[@in $tags]) > 0] | order(count(tag[@in $tags]) desc, _createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    overview,
    "categorySlug": parentCategory->slug.current
  }
`;

// 8. 関連サービスを取得（同じカテゴリ内でタグが共通のサービス）
export const relatedServicesQuery = `
  *[_type == "serviceDetail" && references($parentCategoryId) && $currentSlug != slug.current && count(tag[@ in $tags]) > 0][0...4]{
    _id,
    title,
    "slug": slug.current,
    overview,
    target,
    price,
    tag
  }
`;

// 9. サイトマップ用：全カテゴリーと全サービスのURL
export const sitemapQuery = `
  {
    "categories": *[_type == "serviceCategory"] {
      "slug": slug.current,
      _updatedAt
    },
    "services": *[_type == "serviceDetail"] {
      "slug": slug.current,
      "categorySlug": parentCategory->slug.current,
      _updatedAt
    }
  }
`;

// 10. お客様の声一覧を取得（サービス詳細の関連情報付き）
export const testimonialsListQuery = `
  *[_type == "testimonials"] | order(publishedAt desc) {
    _id,
    clientName,
    "slug": slug.current,
    comment,
    serviceDetail,
    clientIndustry,
    clientLocation,
    featured,
    publishedAt,
    "clientImageUrl": clientImage.asset->url
  }
`;

// 11. 特定のお客様の声を取得
export const testimonialDetailQuery = `
  *[_type == "testimonials" && slug.current == $slug][0] {
    _id,
    clientName,
    "slug": slug.current,
    comment,
    content,
    serviceDetail,
    clientIndustry,
    clientLocation,
    featured,
    publishedAt,
    "clientImageUrl": clientImage.asset->url
  }
`;

// 12. トップページ用のお客様の声を取得（featured = true）
export const featuredTestimonialsQuery = `
  *[_type == "testimonials" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    clientName,
    "slug": slug.current,
    comment,
    serviceDetail,
    "clientImageUrl": clientImage.asset->url
  }
`;

// 13. フッター用のサービスカテゴリーとサブカテゴリーを取得
export const serviceCategoriesWithSubcategoriesQuery = `
  *[_type == "serviceCategory"] | order(orderRank asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    "subcategories": *[_type == "serviceDetail" && references(^._id)] | order(orderRank asc, _createdAt asc) {
      _id,
      title,
      "slug": slug.current
    }
  }
`;

// 14. サービス名に基づくお客様の声を取得
export const testimonialsByServiceQuery = `
  *[_type == "testimonials" && serviceDetail == $serviceName] | order(publishedAt desc) {
    _id,
    clientName,
    "slug": slug.current,
    comment,
    serviceDetail,
    publishedAt,
    "clientImageUrl": clientImage.asset->url
  }
`;

// 15. カテゴリ名に基づくお役立ち記事を取得
export const newsByCategoryQuery = `
  *[_type == "blog" && category == $categoryName] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "thumbnailUrl": featuredImage.asset->url
  }
`;

// 16. サービス検索用のクエリ（タイトルとタグ情報を含む）
export const allServicesForSearchQuery = `
  *[_type == "serviceDetail"] | order(orderRank asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    "categorySlug": parentCategory->slug.current,
    "tags": tag
  }
`;