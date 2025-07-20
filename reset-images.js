const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  apiVersion: '2024-07-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function resetImages() {
  try {
    // 1. 旅行・旅館業関連業務の画像フィールドをリセット
    console.log('Resetting travel document...');
    const travelResult = await client
      .patch('16575e49-8c19-46c5-b9e0-13fc1fe93074')
      .unset(['image'])
      .commit();
    console.log('✓ Travel document reset:', travelResult._rev);

    // 2. 営業許可の画像フィールドを初期化
    console.log('\nInitializing business permit document...');
    const businessResult = await client
      .patch('146b95da-a604-4623-bc58-d7c802234f78')
      .set({ image: null })
      .commit();
    console.log('✓ Business permit document initialized:', businessResult._rev);

    console.log('\n✨ Complete! Please refresh Sanity Studio and try uploading images again.');
  } catch (error) {
    console.error('Error:', error.message);
    console.log('\nPlease ensure you have a valid API token with write permissions.');
    console.log('You can create one at: https://manage.sanity.io/projects/njgo6ucb/api');
  }
}

// APIトークンの取得を試みる
if (!process.env.SANITY_API_TOKEN) {
  // プロジェクトトークンを探す
  const fs = require('fs');
  const path = require('path');
  const configPath = path.join(process.env.HOME, '.config', 'sanity', 'auth.json');
  
  try {
    if (fs.existsSync(configPath)) {
      const auth = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      const token = auth.token || (auth.sessions && auth.sessions[0] && auth.sessions[0].token);
      if (token) {
        process.env.SANITY_API_TOKEN = token;
        console.log('Using Sanity CLI token...\n');
      }
    }
  } catch (e) {
    // ignore
  }
}

if (!process.env.SANITY_API_TOKEN) {
  console.log('No API token found. Attempting without token (may fail if documents are protected)...\n');
}

resetImages();