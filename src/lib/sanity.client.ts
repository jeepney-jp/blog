// ファイル名: lib/sanity.client.ts
// 目的: Sanity API との接続クライアント設定

import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // .env に設定
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-07-01', // バージョンは固定で OK（最近の日付）
  useCdn: true, // SSG 時は true で高速化（草稿を表示しない）
});