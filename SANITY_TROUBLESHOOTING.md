# Sanity Studio トラブルシューティングガイド

## 起動方法

### 方法1: スクリプトを使用（推奨）
```bash
./start-sanity.sh
```

### 方法2: 手動で起動
```bash
cd sanity
npm run dev
```

## よくある問題と解決方法

### 1. localhost:3333 にアクセスできない

**原因と解決方法:**
- URLの最後にスラッシュを付ける: `http://localhost:3333/`
- ブラウザのキャッシュをクリア（Cmd+Shift+R）
- プライベート/シークレットウィンドウで開く

### 2. npm run dev が反応しない

**解決方法:**
```bash
cd sanity
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 3. ポート3333が既に使用されている

**確認方法:**
```bash
lsof -i :3333
```

**解決方法:**
既存のプロセスを終了するか、別のポートを使用

### 4. "Cannot find module" エラー

**解決方法:**
```bash
cd sanity
npm install
```

## 正常に起動した時の表示

```
✓ Checking configuration files...
✓ Starting dev server
Sanity Studio using vite@X.X.X ready in XXXms and running at http://localhost:3333/
```

## 毎回スムーズに起動するためのチェックリスト

1. ✅ ターミナルで正しいディレクトリにいるか確認
2. ✅ node_modulesが存在するか確認
3. ✅ URLの最後にスラッシュ（/）を付ける
4. ✅ 前回のプロセスが残っていないか確認