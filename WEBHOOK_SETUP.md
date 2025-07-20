# Sanity → Vercel 自動デプロイ設定手順

## ステップ1: VercelでDeploy Hookを作成

1. [Vercelダッシュボード](https://vercel.com/dashboard)にログイン
2. プロジェクト「blog」を選択
3. 上部メニューから「Settings」をクリック
4. 左側メニューから「Git」を選択
5. 「Deploy Hooks」セクションまでスクロール
6. 「Create Hook」ボタンをクリック
7. 以下を入力：
   - **Hook Name**: `sanity-content-update`
   - **Git Branch**: `main`
8. 「Create Hook」をクリック
9. 生成されたWebhook URLをコピー（例: `https://api.vercel.com/v1/integrations/deploy/prj_xxxx/yyyy`）

## ステップ2: SanityでWebhookを設定

1. [Sanity管理画面](https://www.sanity.io/manage)にログイン
2. プロジェクト「フォルティア行政書士事務所」を選択
3. 「API」タブをクリック
4. 「Webhooks」セクションを選択
5. 「Add webhook」ボタンをクリック
6. 以下を設定：
   - **Name**: `Vercel Auto Deploy`
   - **URL**: Vercelでコピーした Deploy Hook URL
   - **Trigger on**: 以下をすべてチェック
     - ✅ Create
     - ✅ Update
     - ✅ Delete
   - **Filter**: 空欄のまま（すべてのドキュメントタイプに適用）
   - **Projection**: 空欄のまま
   - **HTTP method**: POST（デフォルト）
   - **HTTP headers**: 空欄のまま
   - **Secret**: 空欄のまま
   - **Enable webhook**: ONにする

7. 「Save」をクリック

## ステップ3: 動作確認

1. Sanity Studioで任意のコンテンツを編集
2. 「Publish」ボタンをクリック
3. Vercelダッシュボードの「Deployments」タブを確認
4. 新しいデプロイメントが自動的に開始されることを確認

## トラブルシューティング

### Webhookが動作しない場合
1. Sanityの「API」→「Webhooks」で該当Webhookの「Activity」タブを確認
2. エラーメッセージがある場合は内容を確認
3. Webhook URLが正しくコピーされているか再確認

### デプロイが頻繁すぎる場合
Sanityの「Filter」に以下を追加して、特定のドキュメントタイプのみトリガー：
```
_type in ["serviceCategory", "serviceDetail"]
```

## 設定完了後の注意事項
- Publishボタンを押すと約1-2分でVercelに反映されます
- 複数の変更をまとめてPublishすることを推奨
- Vercelの無料プランには月間のビルド時間制限があります