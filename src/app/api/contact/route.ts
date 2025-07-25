import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity.client';
import { sendContactEmail } from '@/lib/email';

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
    const contact = await writeClient.create({
      _type: 'contact',
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      service: body.service || '',
      message: body.message,
      status: 'pending',
      receivedAt: new Date().toISOString(),
    });

    console.log('問い合わせをSanityに保存しました:', contact._id);

    // メール送信
    try {
      await sendContactEmail({
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
      });
      console.log('通知メールを送信しました');
    } catch (emailError) {
      // メール送信に失敗してもSanityには保存されているため、エラーログのみ出力
      console.error('メール送信エラー:', emailError);
      // メール送信失敗は通知しない（UXを考慮）
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。',
      id: contact._id,
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