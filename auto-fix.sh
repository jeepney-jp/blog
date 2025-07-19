#!/bin/bash

echo "🔧 自動修復を開始します..."

# 1. Sanityプロセスのクリーンアップ
if pgrep -f "sanity dev" > /dev/null; then
    echo "既存のSanityプロセスを終了しています..."
    pkill -f "sanity dev"
    sleep 2
fi

# 2. ポートの解放確認
if lsof -i :3333 > /dev/null 2>&1; then
    echo "ポート3333を解放しています..."
    kill -9 $(lsof -t -i:3333) 2>/dev/null
fi

# 3. Sanityキャッシュのクリア
if [ -d "sanity" ]; then
    echo "Sanityキャッシュをクリアしています..."
    cd sanity
    rm -rf .sanity dist node_modules/.cache node_modules/.vite 2>/dev/null
    cd ..
fi

# 4. npmキャッシュのクリア
echo "npmキャッシュをクリアしています..."
npm cache clean --force 2>/dev/null

echo "✅ 自動修復が完了しました"
echo ""
echo "次のステップ:"
echo "1. ./start-sanity.sh でSanityを起動"
echo "2. 問題が続く場合は TROUBLESHOOTING.md を参照"