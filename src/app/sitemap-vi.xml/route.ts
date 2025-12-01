import { client } from '@/lib/sanity'

// ベトナム語版サイトマップ
export async function GET() {
  const baseUrl = 'https://fortia-office.com'
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/features',
    '/contact',
    '/news',
  ]
  
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
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  // 静的ページ
  staticRoutes.forEach(route => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}/vi${route}</loc>\n`
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`
    xml += `    <changefreq>monthly</changefreq>\n`
    xml += `    <priority>0.5</priority>\n`
    xml += '  </url>\n'
  })
  
  // サービスページ
  serviceCategories.forEach(category => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}/vi/services/${category}</loc>\n`
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`
    xml += `    <changefreq>monthly</changefreq>\n`
    xml += `    <priority>0.4</priority>\n`
    xml += '  </url>\n'
  })
  
  // ニュース記事
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
          xml += '  <url>\n'
          xml += `    <loc>${baseUrl}/vi/news/${article.slug}</loc>\n`
          xml += `    <lastmod>${article._updatedAt ? new Date(article._updatedAt).toISOString() : new Date().toISOString()}</lastmod>\n`
          xml += `    <changefreq>monthly</changefreq>\n`
          xml += `    <priority>0.3</priority>\n`
          xml += '  </url>\n'
        }
      })
    }
  } catch (error) {
    console.error('Failed to fetch news articles for Vietnamese sitemap:', error)
  }
  
  xml += '</urlset>'
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}