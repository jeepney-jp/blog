// ファイル名: lib/queries.ts
// 目的: Sanity CMSからデータを取得するためのGROQクエリ定義ファイル
// 注意: サービス関連のクエリは削除済み（ハードコード化されたため）

// ニュース記事取得用のクエリ
export const newsQuery = `
  *[_type == "news"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    _createdAt
  }
`;

