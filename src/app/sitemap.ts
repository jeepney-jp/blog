import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fortia-office.com'
  const languages = ['ja', 'en', 'zh-CN', 'zh-TW', 'vi']
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/news',
    '/faq',
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
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
  
  return sitemapEntries
}