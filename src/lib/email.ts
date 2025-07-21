import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// ロリポップ用のトランスポーター作成
const transporter = nodemailer.createTransport({
  host: 'smtp.lolipop.jp',
  port: 465,
  secure: true,
  auth: {
    user: process.env.LOLIPOP_EMAIL,
    pass: process.env.LOLIPOP_PASSWORD,
  },
});

export async function sendContactEmail(data: EmailData) {
  const { name, email, phone, service, message } = data;

  // メール本文の作成
  const mailContent = `
新しいお問い合わせが届きました。

【お客様情報】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
ご相談内容: ${service || '未選択'}

【メッセージ】
${message}

---
このメールは自動送信されています。
  `.trim();

  const mailOptions = {
    from: process.env.LOLIPOP_EMAIL,
    to: process.env.EMAIL_TO,
    subject: `【お問い合わせ】${name}様より`,
    text: mailContent,
    replyTo: email, // 返信先をお客様のメールアドレスに設定
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('メール送信成功:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('メール送信エラー:', error);
    throw new Error('メール送信に失敗しました');
  }
}