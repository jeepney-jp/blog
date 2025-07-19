#!/bin/bash

echo "🔍 システム健全性チェックを開始します..."
echo "================================"

# 1. Node.jsバージョンチェック
echo "1. Node.js環境チェック"
node_version=$(node -v)
npm_version=$(npm -v)
echo "   Node.js: $node_version (推奨: v20以上)"
echo "   npm: $npm_version"
echo ""

# 2. 依存関係の整合性チェック
echo "2. 依存関係チェック"
if [ -f "package-lock.json" ]; then
    echo "   ✅ package-lock.json が存在します"
else
    echo "   ❌ package-lock.json が存在しません"
fi

# 3. Sanity設定チェック
echo ""
echo "3. Sanity設定チェック"
if [ -f ".env.local" ]; then
    echo "   ✅ .env.local が存在します"
    grep -q "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local && echo "   ✅ Sanity Project ID が設定されています" || echo "   ❌ Sanity Project ID が未設定"
else
    echo "   ❌ .env.local が存在しません"
fi

# 4. Sanityプロセスチェック
echo ""
echo "4. Sanityプロセスチェック"
if pgrep -f "sanity dev" > /dev/null; then
    echo "   ⚠️  Sanityプロセスが実行中です"
    echo "   実行中のプロセス:"
    ps aux | grep -E "sanity dev" | grep -v grep
else
    echo "   ✅ Sanityプロセスは実行されていません"
fi

# 5. ポート使用状況チェック
echo ""
echo "5. ポート使用状況チェック"
lsof -i :3333 > /dev/null 2>&1 && echo "   ⚠️  ポート3333が使用中" || echo "   ✅ ポート3333は空いています"
lsof -i :3000 > /dev/null 2>&1 && echo "   ⚠️  ポート3000が使用中" || echo "   ✅ ポート3000は空いています"

# 6. Git状態チェック
echo ""
echo "6. Git状態チェック"
if [ -d ".git" ]; then
    current_branch=$(git branch --show-current)
    echo "   現在のブランチ: $current_branch"
    uncommitted=$(git status --porcelain | wc -l)
    if [ $uncommitted -gt 0 ]; then
        echo "   ⚠️  コミットされていない変更が $uncommitted 件あります"
    else
        echo "   ✅ 全ての変更がコミット済みです"
    fi
fi

echo ""
echo "================================"
echo "✅ チェック完了"