#!/bin/bash

echo "📧 ロリポップメール送信テスト"
echo "================================"

# 環境変数を読み込む
export $(grep -v '^#' .env.local | xargs)

# Node.jsでテストスクリプトを実行
node -e "
const nodemailer = require('nodemailer');

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.lolipop.jp',
    port: 465,
    secure: true,
    auth: {
      user: process.env.LOLIPOP_EMAIL,
      pass: process.env.LOLIPOP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.LOLIPOP_EMAIL,
    to: process.env.EMAIL_TO,
    subject: '【テスト】ロリポップからのメール送信テスト',
    text: 'このメールはロリポップのSMTPサーバーから正常に送信されました。\\ninfo@fortia-office.com宛に届いています。',
    replyTo: process.env.LOLIPOP_EMAIL,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ メール送信成功!');
    console.log('📧 送信元:', process.env.LOLIPOP_EMAIL);
    console.log('📧 送信先:', process.env.EMAIL_TO);
    console.log('🆔 メッセージID:', info.messageId);
  } catch (error) {
    console.error('❌ エラー:', error.message);
  }
}

testEmail();
"