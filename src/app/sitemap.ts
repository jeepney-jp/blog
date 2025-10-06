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
  
  // 静的ルート（日本語を優先）
  staticRoutes.forEach(route => {
    // 日本語ページを最優先
    sitemapEntries.push({
      url: `${baseUrl}/ja${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.9,
    })
  })
  
  // その他の言語は優先度を下げる
  languages.filter(lang => lang !== 'ja').forEach(lang => {
    staticRoutes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
      })
    })
  })
  
  // サービスカテゴリページ（日本語を優先）
  serviceCategories.forEach(category => {
    // 日本語サービスページを優先
    sitemapEntries.push({
      url: `${baseUrl}/ja/services/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })
  
  // その他の言語のサービスページ
  languages.filter(lang => lang !== 'ja').forEach(lang => {
    serviceCategories.forEach(category => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/services/${category}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.2,
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