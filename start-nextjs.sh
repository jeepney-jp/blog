#!/bin/bash

# Next.js開発サーバー起動スクリプト

echo "🚀 Next.js開発サーバーを起動します..."

# プロジェクトディレクトリに移動
cd "$(dirname "$0")"

# 環境変数の確認
if [ ! -f .env.local ]; then
    echo "❌ エラー: .env.localファイルが見つかりません"
    exit 1
fi

# ポート3000が使用中かチェック
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  ポート3000が既に使用されています"
    echo "既存のプロセスを終了しますか？ (y/n)"
    read answer
    if [ "$answer" = "y" ]; then
        kill $(lsof -Pi :3000 -sTCP:LISTEN -t)
        echo "✅ 既存のプロセスを終了しました"
        sleep 2
    else
        echo "❌ 起動を中止します"
        exit 1
    fi
fi

# Next.js開発サーバーを起動
echo "📦 Next.js開発サーバーを起動中..."
echo "🌐 http://localhost:3000 でアクセスできます"
echo ""
echo "📧 メール送信テスト: http://localhost:3000/api/contact/test-email"
echo ""

npm run dev