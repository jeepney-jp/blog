import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

// メインサイトマップ - 日本語コンテンツのみ
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fortia-office.com'
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/features',
    '/contact',
    '/news',
  ]
  
  // サービスカテゴリのスラッグ（12カテゴリ）
  const serviceCategories = [
    'foreign',
    'construction',
    'automotive',
    'food-entertainment',
    'waste-management',
    'travel-hospitality',
    'corporate',
    'business-license',
    'land',
    'legal-documentation',
    'medical-care',
    'other',
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // 静的ルート（日本語のみ）
  staticRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : route === '/about' || route === '/services' ? 0.9 : 0.8,
    })
  })
  
  // サービスカテゴリページ（日本語のみ）
  serviceCategories.forEach(category => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })
  
  // ニュース記事の動的ページ（日本語のみ）
  try {
    const newsArticles = await client.fetch(`
      *[_type == "news"] {
        "slug": slug.current,
        _updatedAt
      }
    `)
    
    if (newsArticles && newsArticles.length > 0) {
      newsArticles.forEach((article: { slug: string; _updatedAt: string }) => {
        if (article.slug) {
          sitemapEntries.push({
            url: `${baseUrl}/news/${article.slug}`,
            lastModified: article._updatedAt ? new Date(article._updatedAt) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          })
        }
      })
    }
  } catch (error) {
    console.error('Failed to fetch news articles for sitemap:', error)
  }
  
  return sitemapEntries
}