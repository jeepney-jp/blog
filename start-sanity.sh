#!/bin/bash

echo "🚀 Sanity Studioを起動します..."

# Sanityディレクトリに移動
cd /Users/hidakatakurou/Desktop/blog/administrative-lawyer-site/sanity

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