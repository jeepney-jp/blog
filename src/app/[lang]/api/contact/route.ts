import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity.client';
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/email';

// レート制限用のメモリキャッシュ
const rateLimitCache = new Map<string, { count: number; timestamp: number }>();

// IPアドレスを取得するヘルパー関数
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIp || 'unknown';
}

// 明らかなスパム/ランダム文字列を検出する関数
function detectObviousSpam(text: string): boolean {
  // 完全にランダムな文字列のパターン（例：XuudeNjUxmVFhBWXCuwQUtX）
  // 大文字小文字がランダムに混在し、母音が極端に少ない
  const randomPatternCount = (text.match(/[A-Z]/g) || []).length;
  const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
  const totalLetters = (text.match(/[a-zA-Z]/g) || []).length;
  
  // 英字が8文字以上ある場合で、母音が20%未満かつ大小文字が混在している
  if (totalLetters >= 8) {
    const vowelRatio = vowelCount / totalLetters;
    const hasUpperCase = /[A-Z]/.test(text);
    const hasLowerCase = /[a-z]/.test(text);
    
    // 母音が極端に少なく（20%未満）、かつ大小文字がランダムに混在
    if (vowelRatio < 0.2 && hasUpperCase && hasLowerCase && randomPatternCount >= 3) {
      return true;
    }
  }
  
  // 繰り返しパターン（例：abcabcabc, 123123123）
  const repeatPattern = /(.)\1{9,}/; // 同じ文字が10回以上連続
  if (repeatPattern.test(text)) return true;
  
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot チェック
    if (body.honeypot) {
      console.log('Honeypot triggered - blocking spam submission');
      // スパムと分からないようにあえて成功レスポンスを返す
      return NextResponse.json({
        success: true,
        message: 'お問い合わせを受け付けました。',
        id: 'blocked',
      });
    }

    // IPベースのレート制限
    const clientIp = getClientIp(request);
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    if (rateLimitCache.has(clientIp)) {
      const limit = rateLimitCache.get(clientIp)!;
      if (now - limit.timestamp < oneHour) {
        if (limit.count >= 3) {
          return NextResponse.json(
            { error: '送信回数の制限に達しました。しばらく時間をおいてからお試しください。' },
            { status: 429 }
          );
        }
        limit.count++;
      } else {
        rateLimitCache.set(clientIp, { count: 1, timestamp: now });
      }
    } else {
      rateLimitCache.set(clientIp, { count: 1, timestamp: now });
    }

    // 古いエントリをクリーンアップ（メモリリーク防止）
    if (rateLimitCache.size > 1000) {
      const entries = Array.from(rateLimitCache.entries());
      entries.forEach(([key, value]) => {
        if (now - value.timestamp > oneHour) {
          rateLimitCache.delete(key);
        }
      });
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

    // 名前のバリデーション（2文字以上、100文字以下に緩和）
    if (body.name.length < 2 || body.name.length > 100) {
      return NextResponse.json(
        { error: 'お名前は2文字以上100文字以内で入力してください' },
        { status: 400 }
      );
    }
    
    // 名前が明らかなスパムでないかチェック
    if (detectObviousSpam(body.name)) {
      console.log('Obvious spam detected in name:', body.name);
      return NextResponse.json(
        { error: '正しいお名前を入力してください' },
        { status: 400 }
      );
    }

    // メールアドレスの厳密なバリデーション
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }
    
    // 使い捨てメールアドレスの簡易チェック（完全一致のみ）
    const disposableEmailDomains = [
      'tempmail.com', 'throwawaymail.com', 'guerrillamail.com', 
      '10minutemail.com', 'mailinator.com', 'yopmail.com',
      'temp-mail.org', 'fakeinbox.com', 'trashmail.com'
    ];
    const emailDomain = body.email.split('@')[1]?.toLowerCase();
    if (disposableEmailDomains.includes(emailDomain)) {
      return NextResponse.json(
        { error: '一時的なメールアドレスは使用できません' },
        { status: 400 }
      );
    }

    // 電話番号のバリデーション（入力された場合のみ）
    if (body.phone) {
      // 日本の電話番号形式をチェック（ハイフンあり/なし両対応）
      const phoneRegex = /^(0[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{4}|\+81[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{4})$/;
      if (!phoneRegex.test(body.phone.replace(/[\s　]/g, ''))) {
        return NextResponse.json(
          { error: '有効な電話番号を入力してください' },
          { status: 400 }
        );
      }
    }

    // メッセージのバリデーション（5文字以上、5000文字以下に緩和）
    if (body.message.length < 5 || body.message.length > 5000) {
      return NextResponse.json(
        { error: 'メッセージは5文字以上5000文字以内で入力してください' },
        { status: 400 }
      );
    }
    
    // メッセージが明らかなスパムでないかチェック
    if (detectObviousSpam(body.message)) {
      console.log('Obvious spam detected in message:', body.message.substring(0, 50));
      return NextResponse.json(
        { error: '正しいメッセージを入力してください' },
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