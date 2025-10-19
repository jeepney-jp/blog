import Script from 'next/script'

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "フォルティア行政書士事務所",
    "alternateName": "Fortia Administrative Scrivener Office",
    "url": "https://fortia-office.com",
    "logo": "https://fortia-office.com/logo.png",
    "image": "https://fortia-office.com/office-image.jpg",
    "description": "茂原市の行政書士事務所。申請実績10,000件超、許可率99%の信頼。外国人ビザ・建設業許可・法人設立を業界最安水準で対応。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "茂原市中心部",
      "addressLocality": "茂原市",
      "addressRegion": "千葉県",
      "postalCode": "297-0000",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.4285,
      "longitude": 140.2878
    },
    "telephone": "+81-475-XX-XXXX",
    "email": "info@fortia-office.com",
    "priceRange": "¥¥",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "State",
      "name": "千葉県"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "行政書士サービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "外国人ビザ申請",
            "description": "就労ビザ、永住権、帰化申請などの手続き代行"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "建設業許可申請",
            "description": "建設業許可の新規取得・更新手続き"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "法人設立",
            "description": "株式会社・合同会社の設立手続き"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/fortia-office",
      "https://twitter.com/fortia_office"
    ]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}