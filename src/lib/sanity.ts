import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  useCdn: false, // CDNを無効化して常に最新データを取得
  apiVersion: '2024-01-01',
})

// News取得用のクエリ
export async function getNews() {
  return await client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      titleEn,
      slug,
      publishedAt,
      excerpt,
      excerptEn,
      category
    }
  `)
}

// 個別ニュース取得用のクエリ
export async function getNewsBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      titleEn,
      slug,
      publishedAt,
      excerpt,
      excerptEn,
      content,
      contentEn,
      category,
      featured
    }
  `, { slug })
}
