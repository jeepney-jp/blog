import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// シークレットトークンの設定（環境変数から取得）
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-token-here';

export async function POST(request: NextRequest) {
  try {
    // リクエストヘッダーからシークレットトークンを取得
    const secret = request.headers.get('x-revalidate-secret');
    
    // トークンの検証
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }
    
    // リクエストボディを取得
    const body = await request.json();
    const { _type } = body;
    
    // ドキュメントタイプに応じて再検証
    if (_type === 'news' || _type === 'staff') {
      // 関連ページを再検証
      revalidatePath('/', 'layout');
      
      return NextResponse.json({ 
        revalidated: true, 
        message: `Revalidated pages for ${_type}`,
        timestamp: new Date().toISOString()
      });
    }
    
    // その他のドキュメントタイプの場合はトップページのみ再検証
    revalidatePath('/');
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'Revalidated homepage',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ 
      revalidated: false, 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}