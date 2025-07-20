# Sanity自動更新設定（On-Demand Revalidation）

コードベースに自動更新の仕組みを実装しました。以下の手順で設定を完了してください。

## 手順1: Vercelに環境変数を追加

1. [Vercelダッシュボード](https://vercel.com/dashboard)にログイン
2. プロジェクト「blog」を選択
3. 「Settings」→「Environment Variables」
4. 以下を追加：
   - **Key**: `REVALIDATE_SECRET`
   - **Value**: `dAVSeXG89qf74JEPZILgBssgp2NuuWsTdjC52TEuqkc=`
   - **Environment**: Production, Preview, Development すべてにチェック
5. 「Save」をクリック

## 手順2: デプロイ

```bash
git add -A
git commit -m "feat: On-Demand Revalidation APIを追加"
git push
```

## 手順3: SanityでWebhookを設定

1. [Sanity管理画面](https://www.sanity.io/manage)にログイン
2. プロジェクト「フォルティア行政書士事務所」を選択
3. 「API」→「Webhooks」
4. 「Add webhook」をクリック
5. 以下を設定：
   - **Name**: `Next.js Revalidation`
   - **URL**: `https://blog-seven-delta-69.vercel.app/api/revalidate`
   - **Trigger on**: Create, Update, Delete すべてチェック
   - **Filter**: 空欄（すべてのドキュメント）
   - **HTTP Headers**: 
     ```
     x-revalidate-secret: dAVSeXG89qf74JEPZILgBssgp2NuuWsTdjC52TEuqkc=
     ```
   - **Enable webhook**: ON
6. 「Save」をクリック

## 動作確認

1. Sanity Studioでコンテンツを編集
2. 「Publish」をクリック
3. 数秒待つ
4. ブラウザをリフレッシュして変更が反映されることを確認

## メリット

- Vercelの全体再デプロイが不要（高速）
- ビルド時間を消費しない
- 必要なページのみキャッシュをクリア
- 即座に反映される