#!/bin/bash

echo "📧 メール送信テストスクリプト"
echo "================================"

# APIキーの確認
if [ -z "$RESEND_API_KEY" ]; then
    source .env.local
    export RESEND_API_KEY
    export RESEND_FROM_EMAIL
    export EMAIL_TO
fi

# Node.jsでテストスクリプトを実行
node -e "
const { Resend } = require('resend');

async function testEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const { data, error } = await resend.emails.send({
      from: \`テスト送信 <\${process.env.RESEND_FROM_EMAIL}>\`,
      to: process.env.EMAIL_TO,
      subject: '【テスト】メール送信テスト',
      html: '<h1>テストメール</h1><p>このメールは正常に送信されました。</p>',
      text: 'テストメール\\nこのメールは正常に送信されました。'
    });

    if (error) {
      console.error('❌ エラー:', error);
    } else {
      console.log('✅ メール送信成功!');
      console.log('📧 送信先:', process.env.EMAIL_TO);
      console.log('🆔 メッセージID:', data.id);
    }
  } catch (err) {
    console.error('❌ エラー:', err.message);
  }
}

testEmail();
"