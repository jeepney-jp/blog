import { getStaff } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const staff = await getStaff()
    return NextResponse.json(staff)
  } catch (error) {
    console.error('Error fetching staff:', error)
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
      { status: 500 }
    )
  }
}