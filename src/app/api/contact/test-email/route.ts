import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  // 環境変数のチェック
  const requiredEnvVars = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'EMAIL_TO'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    return NextResponse.json({
      error: '環境変数が設定されていません',
      missing: missingVars,
      instructions: '.env.localファイルに以下の環境変数を設定してください：\n' +
        '- RESEND_API_KEY: ResendのAPIキー\n' +
        '- RESEND_FROM_EMAIL: 送信元メールアドレス（例：noreply@resend.dev）\n' +
        '- EMAIL_TO: 通知を受け取るメールアドレス（例：info@fortia-office.com）'
    }, { status: 500 });
  }

  try {
    // テストメール送信
    const testData = {
      name: 'テスト太郎',
      email: 'test@example.com',
      phone: '090-1234-5678',
      service: '相続・遺言に関するご相談',
      message: 'これはメール送信機能のテストです。\n正常に動作している場合、このメールが届きます。',
    };

    const result = await sendContactEmail(testData);

    return NextResponse.json({
      success: true,
      message: 'テストメールを送信しました',
      details: {
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.EMAIL_TO,
        messageId: result.messageId,
      },
    });
  } catch (error) {
    console.error('テストメール送信エラー:', error);
    
    return NextResponse.json({
      error: 'メール送信に失敗しました',
      details: error instanceof Error ? error.message : '不明なエラー',
      troubleshooting: [
        '1. ResendのAPIキーが正しいか確認',
        '2. Resendでドメインの認証が完了しているか確認',
        '3. 送信元メールアドレスが正しく設定されているか確認',
        '4. Resendダッシュボードでエラーログを確認'
      ]
    }, { status: 500 });
  }
}