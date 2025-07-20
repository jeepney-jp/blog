import { NextRequest, NextResponse } from 'next/server';

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

    // 一時的にSanity保存をスキップして、成功レスポンスを返す
    console.log('問い合わせ受信:', body);

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。',
      // 仮のIDを返す
      id: `contact_${Date.now()}`,
    });
  } catch (error) {
    console.error('問い合わせ送信エラー:', error);
    
    return NextResponse.json(
      { 
        error: '送信中にエラーが発生しました。時間をおいて再度お試しください。',
      },
      { status: 500 }
    );
  }
}