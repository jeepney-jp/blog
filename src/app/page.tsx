import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default function RootPage() {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  const detectedLocale = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'ja'
  
  redirect(`/${detectedLocale}`)
}