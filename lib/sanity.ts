import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  useCdn: true,
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
      clientImage
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
      clientImage
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