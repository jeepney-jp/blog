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

// ランダム文字列を検出する関数
function detectRandomString(text: string, isName: boolean = false): boolean {
  // 連続した子音が多い場合（通常の言語では稀）
  const consonantPattern = /[bcdfghjklmnpqrstvwxyz]{5,}/gi;
  if (consonantPattern.test(text)) return true;
  
  // 意味のない大文字小文字の混在
  const mixedCasePattern = /([A-Z][a-z]){5,}|([a-z][A-Z]){5,}/;
  if (mixedCasePattern.test(text)) return true;
  
  // メッセージの場合のみ、極端に短いテキストをチェック（名前では不適切）
  if (!isName && text.length < 10) return true;
  
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

    // 名前のバリデーション（3文字以上、50文字以下）
    if (body.name.length < 3 || body.name.length > 50) {
      return NextResponse.json(
        { error: 'お名前は3文字以上50文字以内で入力してください' },
        { status: 400 }
      );
    }
    
    // 名前がランダム文字列でないかチェック
    if (detectRandomString(body.name, true)) {
      console.log('Random string detected in name - potential spam');
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
    
    // 使い捨てメールアドレスの簡易チェック
    const disposableEmailDomains = ['tempmail', 'throwaway', 'guerrillamail', '10minutemail', 'mailinator'];
    const emailDomain = body.email.split('@')[1].toLowerCase();
    if (disposableEmailDomains.some(domain => emailDomain.includes(domain))) {
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

    // メッセージのバリデーション（10文字以上、2000文字以下）
    if (body.message.length < 10 || body.message.length > 2000) {
      return NextResponse.json(
        { error: 'メッセージは10文字以上2000文字以内で入力してください' },
        { status: 400 }
      );
    }
    
    // メッセージがランダム文字列でないかチェック
    if (detectRandomString(body.message)) {
      console.log('Random string detected in message - potential spam');
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