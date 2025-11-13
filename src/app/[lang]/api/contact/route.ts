import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity.client';
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/email';

// reCAPTCHA検証関数
async function verifyRecaptcha(token: string): Promise<number> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return 0;
  }
  
  if (!token) {
    console.warn('reCAPTCHA token is missing');
    return 0;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('reCAPTCHA verification successful, score:', data.score);
      return data.score || 0;
    } else {
      console.warn('reCAPTCHA verification failed:', data['error-codes']);
      return 0;
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return 0;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // reCAPTCHA検証
    const recaptchaScore = await verifyRecaptcha(body.recaptchaToken);
    
    // スコアが0.5未満の場合はスパムと判定
    if (recaptchaScore < 0.5) {
      console.log('Blocked submission due to low reCAPTCHA score:', recaptchaScore);
      return NextResponse.json(
        { 
          error: 'セキュリティチェックに失敗しました。しばらく時間をおいてから再度お試しください。',
          recaptchaScore 
        },
        { status: 429 }
      );
    }

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

    // メール送信（管理者への通知と自動返信）
    const emailData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
    };

    try {
      // 管理者への通知メール
      await sendContactEmail(emailData);
      console.log('管理者通知メールを送信しました');
    } catch (emailError) {
      console.error('管理者通知メール送信エラー:', emailError);
      // メール送信失敗は通知しない（UXを考慮）
    }

    try {
      // お客様への自動返信メール
      await sendAutoReplyEmail(emailData);
      console.log('自動返信メールを送信しました');
    } catch (autoReplyError) {
      console.error('自動返信メール送信エラー:', autoReplyError);
      // 自動返信失敗は通知しない（UXを考慮）
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