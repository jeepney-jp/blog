import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity.client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // バリデーション
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field}は必須項目です` },
          { status: 400 }
        );
      }
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // Sanityに保存
    // 注意: 本番環境では書き込み権限のあるAPIトークンが必要です
    console.log('Attempting to save to Sanity:', {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    });
    
    const contact = await sanityClient.create({
      _type: 'contact',
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      service: body.service || '',
      message: body.message,
      status: 'pending',
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。',
      id: contact._id,
    });
  } catch (error) {
    console.error('問い合わせ送信エラー:', error);
    
    // エラーの詳細をログに出力
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }
    
    return NextResponse.json(
      { 
        error: '送信中にエラーが発生しました。時間をおいて再度お試しください。',
        // 開発環境でのみエラー詳細を返す
        ...(process.env.NODE_ENV === 'development' && { 
          details: error instanceof Error ? error.message : 'Unknown error' 
        })
      },
      { status: 500 }
    );
  }
}