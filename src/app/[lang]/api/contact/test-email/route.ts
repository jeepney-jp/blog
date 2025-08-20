import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function GET() {
  // 環境変数のチェック
  const requiredEnvVars = ['LOLIPOP_EMAIL', 'LOLIPOP_PASSWORD', 'EMAIL_TO'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    return NextResponse.json({
      error: '環境変数が設定されていません',
      missing: missingVars,
      instructions: '.env.localファイルに以下の環境変数を設定してください：\n' +
        '- LOLIPOP_EMAIL: ロリポップのメールアドレス（例：info@fortia-office.com）\n' +
        '- LOLIPOP_PASSWORD: ロリポップのメールパスワード\n' +
        '- EMAIL_TO: 通知を受け取るメールアドレス'
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
        from: process.env.LOLIPOP_EMAIL,
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
        '1. ロリポップのメールパスワードが正しいか確認',
        '2. メールアドレスが正しく設定されているか確認',
        '3. ロリポップの管理画面でメールアカウントが有効か確認',
        '4. SMTPポート（465）がブロックされていないか確認'
      ]
    }, { status: 500 });
  }
}