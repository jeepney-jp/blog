import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET() {
  try {
    const query = `*[_type == "featuresFaq" && isPublished == true] | order(order asc) {
      _id,
      question,
      answer,
      order
    }`

    const faqs = await sanityClient.fetch(query)

    return NextResponse.json(faqs)
  } catch (error) {
    console.error('Error fetching features FAQs:', error)
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 })
  }
}