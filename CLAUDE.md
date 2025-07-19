# プロジェクト情報

## 環境
- Node.js: v22.17.0
- Sanity: v3.99.0

## 🚀 クイックコマンド
```bash
# システムチェック
./health-check.sh

# 自動修復
./auto-fix.sh

# Sanity起動
./start-sanity.sh

# キャッシュクリア付きSanity起動
./start-sanity.sh --clean
```

## 注意事項
1. **Sanityの起動方法**
   ```bash
   cd /Users/hidakatakurou/Desktop/blog/administrative-lawyer-site
   ./start-sanity.sh
   ```

2. **トラブルシューティング**
   - Sanityが起動しない場合：
     ```bash
     cd sanity
     rm -rf .sanity dist node_modules/.cache node_modules/.vite
     npm run dev
     ```

3. **新しいパッケージ追加時の注意**
   - 必ず別ブランチでテスト
   - package-lock.jsonも必ずコミット
   - 動作確認してからマージ

## 過去の問題
- `@sanity/orderable-document-list`との互換性問題でSanityが起動しなくなった
- 解決策：キャッシュクリアと依存関係の再インストール