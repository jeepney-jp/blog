import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fortia-office.com'
  const languages = ['ja', 'en', 'zh-CN', 'zh-TW', 'vi']
  
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
  
  // 静的ルート
  languages.forEach(lang => {
    staticRoutes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  // サービスカテゴリページ
  languages.forEach(lang => {
    serviceCategories.forEach(category => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/services/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })
  
  // ニュース記事の動的ページを追加
  try {
    const newsArticles = await client.fetch(`
      *[_type == "news"] {
        "slug": slug.current
      }
    `)
    
    if (newsArticles && newsArticles.length > 0) {
      languages.forEach(lang => {
        newsArticles.forEach((article: { slug: string }) => {
          if (article.slug) {
            sitemapEntries.push({
              url: `${baseUrl}/${lang}/news/${article.slug}`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.6,
            })
          }
        })
      })
    }
  } catch (error) {
    console.error('Failed to fetch news articles for sitemap:', error)
    // エラーが発生してもサイトマップ生成を続行
  }
  
  return sitemapEntries
}