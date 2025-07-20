const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  apiVersion: '2024-07-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN // 書き込み権限が必要
});

async function fixDocuments() {
  console.log('=== Fixing Sanity Documents ===\n');
  
  // 1. 営業許可のドキュメントをリセット
  console.log('1. Resetting 営業許可 document...');
  try {
    await client
      .patch('146b95da-a604-4623-bc58-d7c802234f78')
      .unset(['image'])
      .commit();
    console.log('   ✓ Image field unset for 営業許可');
  } catch (error) {
    console.error('   ✗ Error:', error.message);
  }
  
  // 2. 旅行・旅館業関連業務のドキュメントをリセット
  console.log('\n2. Resetting 旅行・旅館業関連業務 document...');
  try {
    await client
      .patch('16575e49-8c19-46c5-b9e0-13fc1fe93074')
      .unset(['image'])
      .commit();
    console.log('   ✓ Image field unset for 旅行・旅館業関連業務');
  } catch (error) {
    console.error('   ✗ Error:', error.message);
  }
  
  console.log('\n=== Complete ===');
  console.log('Please go back to Sanity Studio and upload the images again.');
}

// 環境変数チェック
if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is required');
  console.log('\nTo fix this issue manually:');
  console.log('1. Go to https://manage.sanity.io');
  console.log('2. Select your project');
  console.log('3. Go to API → Tokens');
  console.log('4. Create a token with write permissions');
  console.log('5. Run: export SANITY_WRITE_TOKEN="your-token-here"');
  console.log('6. Run this script again');
  process.exit(1);
}

fixDocuments();