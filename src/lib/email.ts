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

// 管理者への通知メール送信
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
    console.log('管理者通知メール送信成功:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('管理者通知メール送信エラー:', error);
    throw new Error('メール送信に失敗しました');
  }
}

// お客様への自動返信メール送信
export async function sendAutoReplyEmail(data: EmailData) {
  const { name, email, phone, service, message } = data;

  // 自動返信メールの本文
  const autoReplyContent = `
${name}様

この度は、弊事務所にお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

【受付内容】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
ご相談内容: ${service || '未選択'}

【お問い合わせ内容】
${message}

担当者より2-3営業日以内にご連絡いたします。
お急ぎの場合は、下記までお電話ください。

【お問い合わせ先】
電話: 070-5462-6133
営業時間: 平日 9:00-18:00

---
このメールは自動送信されています。
本メールに返信いただいても確認できませんので、
ご質問等がございましたら上記連絡先までお願いいたします。

行政書士事務所
〒297-0024 千葉県茂原市八千代2丁目6番地の13
  `.trim();

  const autoReplyOptions = {
    from: process.env.LOLIPOP_EMAIL,
    to: email,
    subject: '【自動返信】お問い合わせを受け付けました - 行政書士事務所',
    text: autoReplyContent,
  };

  try {
    const info = await transporter.sendMail(autoReplyOptions);
    console.log('自動返信メール送信成功:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('自動返信メール送信エラー:', error);
    throw new Error('自動返信メール送信に失敗しました');
  }
}