import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

export async function GET() {
  try {
    const staff = await client.fetch(`
      *[_type == "staff" && isActive == true && !(_id in path("drafts.**"))] | order(order asc) {
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