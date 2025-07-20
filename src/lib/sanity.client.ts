// ファイル名: lib/sanity.client.ts
// 目的: Sanity API との接続クライアント設定

import { createClient } from 'next-sanity';

// 環境変数が設定されていない場合は、ダミーの値を使用
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// プロジェクトIDが設定されていない場合の警告
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn('⚠️ NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Please set it in your environment variables.');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-07-01', // バージョンは固定で OK（最近の日付）
  useCdn: true, // SSG 時は true で高速化（草稿を表示しない）
});

// 書き込み用クライアント（サーバーサイドのみで使用）
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-07-01',
  useCdn: false, // 書き込み時はCDNを使わない
  token: process.env.SANITY_API_WRITE_TOKEN, // 書き込み権限のあるトークン
});