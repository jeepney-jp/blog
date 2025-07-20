// 新しいドキュメントを作成して古いものを置き換える
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production', 
  apiVersion: '2024-07-01',
  useCdn: false
});

async function createNewDocuments() {
  console.log('Creating replacement documents...\n');

  try {
    // 1. 既存の営業許可ドキュメントを取得
    const businessDoc = await client.fetch(`
      *[_type == "serviceCategory" && title == "営業許可"][0] {
        _id,
        title,
        slug,
        catchphrase,
        icon,
        orderRank,
        expertiseDescription,
        faq,
        metaTitle,
        metaDescription,
        ogImage
      }
    `);

    console.log('Found business permit document:', businessDoc.title);

    // 2. 既存の旅行・旅館業関連業務ドキュメントを取得
    const travelDoc = await client.fetch(`
      *[_type == "serviceCategory" && title == "旅行・旅館業関連業務"][0] {
        _id,
        title,
        slug,
        catchphrase,
        icon,
        orderRank,
        expertiseDescription,
        faq,
        metaTitle,
        metaDescription,
        ogImage
      }
    `);

    console.log('Found travel document:', travelDoc.title);

    // 既存データを表示して確認
    console.log('\n営業許可の既存データ:');
    console.log('- OrderRank:', businessDoc.orderRank);
    console.log('- Slug:', businessDoc.slug?.current);
    
    console.log('\n旅行・旅館業関連業務の既存データ:');
    console.log('- OrderRank:', travelDoc.orderRank);
    console.log('- Slug:', travelDoc.slug?.current);

    console.log('\n\n=== 解決方法 ===');
    console.log('Sanity Studioで以下の手順を実行してください：\n');
    
    console.log('【営業許可の修正】');
    console.log('1. Sanity Studioで「+」ボタンをクリック');
    console.log('2. 「サービスカテゴリ」を選択');
    console.log('3. 以下の情報を入力:');
    console.log('   - 表示順: ' + (businessDoc.orderRank || 8));
    console.log('   - カテゴリー名: 営業許可（修正版）');
    console.log('   - スラッグ: business-license-temp');
    console.log('   - キャッチコピー: ' + (businessDoc.catchphrase || ''));
    console.log('4. 画像をアップロード');
    console.log('5. 「Publish」ボタンをクリック');
    console.log('6. 古い「営業許可」を削除');
    console.log('7. 「営業許可（修正版）」を「営業許可」に名前変更');
    console.log('8. スラッグを「business-license」に変更\n');

    console.log('【旅行・旅館業関連業務の修正】');
    console.log('1. 同様に新しいドキュメントを作成');
    console.log('2. 以下の情報を入力:');
    console.log('   - 表示順: ' + (travelDoc.orderRank || 6));
    console.log('   - カテゴリー名: 旅行・旅館業関連業務（修正版）');
    console.log('   - スラッグ: travel-business-temp');
    console.log('   - キャッチコピー: ' + (travelDoc.catchphrase || ''));
    console.log('3. 画像をアップロード');
    console.log('4. 「Publish」ボタンをクリック');
    console.log('5. 古い「旅行・旅館業関連業務」を削除');
    console.log('6. 新しいドキュメントの名前とスラッグを修正');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

createNewDocuments();