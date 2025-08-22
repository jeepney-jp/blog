#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc-js');

// 簡体字から繁体字への変換器
const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

// 翻訳マッピング（日本語 → 簡体字）
const translationMap = {
  // 共通
  'ホーム': '首页',
  '企業情報': '企业信息',
  'サービス': '服务',
  'サービス内容': '服务内容',
  '特徴': '特色',
  'お問い合わせ': '联系我们',
  'ニュース': '新闻',
  'メニュー': '菜单',
  'メニューを開く': '打开菜单',
  'メニューを閉じる': '关闭菜单',
  
  // ヘッダー・フッター
  '行政書士法人': '行政书士法人',
  '東京・横浜・川崎の会社設立、在留資格のご相談': '东京・横滨・川崎的公司设立、在留资格咨询',
  'プライバシーポリシー': '隐私政策',
  '営業時間': '营业时间',
  '平日': '工作日',
  '土日祝': '周末及节假日',
  '定休日': '休息日',
  'アクセス': '交通指南',
  '電話番号': '电话号码',
  'メールアドレス': '邮箱地址',
  
  // サービスカテゴリ
  '会社設立': '公司设立',
  '在留資格': '在留资格',
  '補助金・助成金': '补助金・资助金',
  '各種許認可': '各种许可认证',
  
  // CTA
  '無料相談はこちら': '免费咨询请点击这里',
  'お気軽にお問い合わせください': '请随时联系我们',
  'オンライン相談も承っております': '也提供在线咨询服务',
  
  // ニュース
  'ニュース一覧': '新闻列表',
  '最新のニュース': '最新新闻',
  '続きを読む': '阅读更多',
  '前のニュース': '上一条新闻',
  '次のニュース': '下一条新闻',
  'ニュース一覧に戻る': '返回新闻列表',
  
  // 日付
  '年': '年',
  '月': '月',
  '日': '日',
};

// ファイルを処理する関数
function processFile(filePath, translations) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 日本語と英語の翻訳を抽出
  const jaMatch = content.match(/ja:\s*{([^}]+)}/s);
  const enMatch = content.match(/en:\s*{([^}]+)}/s);
  
  if (!jaMatch) return null;
  
  // 日本語の内容から簡体字版を生成
  const jaContent = jaMatch[1];
  
  // 各行を処理
  const zhCNLines = jaContent.split('\n').map(line => {
    // キーと値を抽出
    const match = line.match(/(\s*)(\w+):\s*['"`]([^'"`]+)['"`]/);
    if (!match) return line;
    
    const [, indent, key, value] = match;
    
    // 翻訳マップから翻訳を取得、なければ元の値を使用
    let translated = value;
    for (const [ja, zhCN] of Object.entries(translationMap)) {
      translated = translated.replace(new RegExp(ja, 'g'), zhCN);
    }
    
    return `${indent}${key}: '${translated}'`;
  }).join('\n');
  
  // 繁体字版を生成
  const zhTWLines = jaContent.split('\n').map(line => {
    const match = line.match(/(\s*)(\w+):\s*['"`]([^'"`]+)['"`]/);
    if (!match) return line;
    
    const [, indent, key, value] = match;
    
    // まず簡体字に翻訳してから繁体字に変換
    let translated = value;
    for (const [ja, zhCN] of Object.entries(translationMap)) {
      translated = translated.replace(new RegExp(ja, 'g'), zhCN);
    }
    translated = converter(translated);
    
    return `${indent}${key}: '${translated}'`;
  }).join('\n');
  
  return { zhCN: zhCNLines, zhTW: zhTWLines };
}

// メイン処理
function main() {
  const srcDir = path.join(__dirname, '..', 'src');
  
  // 処理対象のファイルを検索
  const files = [
    'components/Header.tsx',
    'components/UnifiedFooter.tsx',
    'components/MobileMenu.tsx',
    'components/NewCTASection.tsx',
    'app/[lang]/page.tsx',
    'app/[lang]/news/page.tsx',
    'app/[lang]/news/[slug]/page.tsx',
    'app/[lang]/contact/page.tsx',
    'app/[lang]/about/page.tsx',
    'app/[lang]/features/page.tsx',
    'app/[lang]/services/page.tsx',
  ];
  
  console.log('🚀 中国語翻訳の生成を開始します...\n');
  
  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${file} が見つかりません`);
      return;
    }
    
    const result = processFile(filePath);
    
    if (result) {
      console.log(`✅ ${file} の翻訳を生成しました`);
      console.log('   簡体字版と繁体字版を手動で追加してください\n');
      
      // 結果を一時ファイルに保存（確認用）
      const outputDir = path.join(__dirname, 'translations');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const outputFile = path.join(outputDir, `${path.basename(file, '.tsx')}_translations.txt`);
      fs.writeFileSync(outputFile, `// 簡体字版\n'zh-CN': {${result.zhCN}\n},\n\n// 繁体字版\n'zh-TW': {${result.zhTW}\n}`);
    }
  });
  
  console.log('\n📁 翻訳結果は scripts/translations/ フォルダに保存されました');
  console.log('⚠️  注意: これは自動生成された翻訳です。必要に応じて手動で調整してください。');
}

// 実行
main();