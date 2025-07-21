import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: EmailData) {
  const { name, email, phone, service, message } = data;

  // メール本文の作成（HTML形式）
  const htmlContent = `
    <h2>新しいお問い合わせが届きました</h2>
    
    <h3>【お客様情報】</h3>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; width: 150px;"><strong>お名前</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>メールアドレス</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>電話番号</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${phone || '未入力'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>ご相談内容</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${service || '未選択'}</td>
      </tr>
    </table>
    
    <h3>【メッセージ】</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
    
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p style="color: #666; font-size: 12px;">このメールは自動送信されています。</p>
  `;

  // テキスト版も用意
  const textContent = `
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

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: `行政書士サイト <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.EMAIL_TO || '',
      subject: `【お問い合わせ】${name}様より`,
      text: textContent,
      html: htmlContent,
      reply_to: email,
    });

    if (error) {
      console.error('Resendエラー:', error);
      throw new Error(error.message);
    }

    console.log('メール送信成功:', emailData?.id);
    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error('メール送信エラー:', error);
    throw new Error('メール送信に失敗しました');
  }
}