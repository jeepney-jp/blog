import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity.client';

export async function GET() {
  try {
    // 環境変数の確認
    const config = {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      hasProjectId: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      hasDataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
    };

    // Sanityへの接続テスト（読み取りのみ）
    let canConnect = false;
    let connectionError = null;
    
    try {
      // contactスキーマの存在確認
      const query = `*[_type == "contact"][0...1]`;
      await sanityClient.fetch(query);
      canConnect = true;
    } catch (err) {
      connectionError = err instanceof Error ? err.message : 'Unknown error';
    }

    return NextResponse.json({
      status: 'ok',
      config,
      sanityConnection: {
        canConnect,
        error: connectionError,
      },
      message: 'This is a test endpoint for debugging Sanity connection',
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}