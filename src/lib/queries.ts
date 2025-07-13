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
  *[_type == "serviceDetail" && defined(slug.current)] {
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
    "iconUrl": icon.asset->url,
    "imageUrl": image.asset->url,
    "previewServices": *[_type == "serviceDetail" && references(^._id)] | order(orderRank asc, _createdAt asc)[0...3] {
      _id,
      title
    }
  }
`;

// 4. 特定カテゴリーの詳細と関連サービスを取得（階層2ページ用）
export const categoryPageQuery = `
  *[_type == "serviceCategory" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    catchphrase,
    expertiseDescription,
    faq,
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
      price
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
    problemStatement,
    serviceMerits,
    serviceFlow,
    priceTable,
    requiredDocuments,
    faq,
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url,
    tag,
    "parentCategory": parentCategory-> {
      _id,
      title,
      "slug": slug.current
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

// 7. 関連サービスを取得（同じカテゴリー内の他のサービス）
export const relatedServicesQuery = `
  *[_type == "serviceDetail" && parentCategory._ref == $categoryId && _id != $currentServiceId] | order(orderRank asc, _createdAt asc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    overview
  }
`;

// 8. サイトマップ用：全カテゴリーと全サービスのURL
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