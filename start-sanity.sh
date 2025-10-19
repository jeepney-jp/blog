#!/bin/bash

echo "🚀 Sanity Studioを起動します..."

# Sanityディレクトリに移動
cd /Users/hidakatakurou/Development/fresh-blog/sanity

# 既存のSanityプロセスをチェック
if pgrep -f "sanity dev" > /dev/null; then
    echo "⚠️  既存のSanityプロセスが検出されました。終了します..."
    pkill -f "sanity dev"
    sleep 2
fi

# キャッシュクリア（問題がある場合）
if [ "$1" = "--clean" ]; then
    echo "🧹 キャッシュをクリアしています..."
    rm -rf .sanity dist node_modules/.cache node_modules/.vite
fi

# node_modulesが存在しない場合はインストール
if [ ! -d "node_modules" ]; then
    echo "📦 依存関係をインストールしています..."
    npm install
fi

# Sanity Studioを起動
echo "✨ Sanity Studioを起動中..."
npm run dev

# 起動後のメッセージ
echo "📌 Sanity Studioは http://localhost:3333/ で利用可能です"