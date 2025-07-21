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
      slug,
      publishedAt,
      excerpt,
      category,
      featured
    }
  `)
}

// 個別ニュース取得用のクエリ
export async function getNewsBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      content,
      category,
      featured
    }
  `, { slug })
}

// 注目ニュース取得用のクエリ
export async function getFeaturedNews(limit: number = 3) {
  return await client.fetch(`
    *[_type == "news" && featured == true] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      category
    }
  `)
}

// お客様の声取得用のクエリ
export async function getTestimonials() {
  return await client.fetch(`
    *[_type == "testimonials"] | order(publishedAt desc) {
      _id,
      clientName,
      slug,
      rating,
      comment,
      serviceType,
      clientIndustry,
      clientLocation,
      featured,
      publishedAt,
      "clientImage": clientImage.asset->url
    }
  `)
}

// 個別お客様の声取得用のクエリ
export async function getTestimonialBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "testimonials" && slug.current == $slug][0] {
      _id,
      clientName,
      slug,
      rating,
      comment,
      serviceType,
      clientIndustry,
      clientLocation,
      featured,
      publishedAt,
      "clientImage": clientImage.asset->url
    }
  `, { slug })
}

// 注目お客様の声取得用のクエリ
export async function getFeaturedTestimonials(limit: number = 3) {
  return await client.fetch(`
    *[_type == "testimonials" && featured == true] | order(rating desc, publishedAt desc)[0...${limit}] {
      _id,
      clientName,
      slug,
      rating,
      comment,
      serviceType,
      clientIndustry,
      clientLocation,
      publishedAt
    }
  `)
}

// ブログ記事取得用のクエリ
export async function getBlogs() {
  return await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      tags,
      featured,
      readingTime,
      publishedAt,
      updatedAt,
      featuredImage
    }
  `)
}

// 個別ブログ記事取得用のクエリ
export async function getBlogBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      featured,
      readingTime,
      publishedAt,
      updatedAt,
      metaDescription,
      featuredImage
    }
  `, { slug })
}

// 注目ブログ記事取得用のクエリ
export async function getFeaturedBlogs(limit: number = 3) {
  return await client.fetch(`
    *[_type == "blog" && featured == true] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      category,
      tags,
      readingTime,
      publishedAt,
      featuredImage
    }
  `)
}

// カテゴリ別ブログ記事取得用のクエリ
export async function getBlogsByCategory(category: string) {
  return await client.fetch(`
    *[_type == "blog" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      tags,
      readingTime,
      publishedAt,
      featuredImage
    }
  `, { category })
}