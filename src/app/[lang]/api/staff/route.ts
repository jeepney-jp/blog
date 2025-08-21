import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export async function GET() {
  // Sanityが設定されていない場合は空配列を返す
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id') {
    return NextResponse.json([]);
  }

  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      apiVersion: '2024-01-01',
      useCdn: false,
    });

    const staff = await client.fetch(`
      *[_type == "staff" && isActive == true] | order(order asc) {
        _id,
        name,
        nameRomaji,
        position,
        photo {
          asset-> {
            url
          },
          alt
        },
        introduction,
        order
      }
    `);

    return NextResponse.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json({ error: 'Failed to fetch staff' }, { status: 500 });
  }
}