# トラブルシューティングガイド

## よくある問題と解決方法

### 1. Sanityが起動しない
```bash
# 解決手順
1. 全てのSanityプロセスを終了
   pkill -f "sanity dev"

2. キャッシュをクリア
   cd sanity
   rm -rf .sanity dist node_modules/.cache node_modules/.vite

3. 依存関係を再インストール
   rm -rf node_modules package-lock.json
   npm install

4. Sanityを起動
   npm run dev
```

### 2. 画像が表示されない
```bash
# チェックポイント
1. Sanity Studioで画像がアップロードされているか確認
2. ブラウザの開発者ツールでエラーを確認
3. 画像URLが正しい形式か確認（https://cdn.sanity.io/...）
```

### 3. ドラッグ&ドロップが効かない
```bash
# 可能な原因
1. JavaScriptエラーが発生している
2. ブラウザの拡張機能が干渉している
3. Sanityのバージョンが古い
```

### 4. Git pushがタイムアウトする
```bash
# 解決方法
1. インターネット接続を確認
2. GitHubの認証情報を更新
   git config --global credential.helper osxkeychain
3. HTTPSではなくSSHを使用
```

## 推奨される作業フロー

### 開発開始時
```bash
./health-check.sh  # システムチェック
cd /Users/hidakatakurou/Desktop/blog/administrative-lawyer-site
./start-sanity.sh  # Sanity起動
```

### 作業終了時
```bash
# Sanityを正しく終了（Ctrl+C）
# ターミナルを閉じる前に必ずCtrl+C
```

### 問題発生時
```bash
./health-check.sh  # 問題の特定
# 上記の解決方法を試す
```

## 定期メンテナンス（週1回推奨）

```bash
# 1. 依存関係の更新
npm update

# 2. キャッシュクリア
npm cache clean --force

# 3. 不要なブランチの削除
git branch -d [不要なブランチ名]
```

## 緊急時のリセット手順

```bash
# 全てをリセットして最初からやり直す
pkill -f "sanity dev"
cd /Users/hidakatakurou/Desktop/blog/administrative-lawyer-site
rm -rf node_modules package-lock.json
rm -rf sanity/node_modules sanity/package-lock.json
rm -rf sanity/.sanity sanity/dist
npm install
cd sanity && npm install
```