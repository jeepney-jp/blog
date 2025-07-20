const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  apiVersion: '2024-07-01',
  useCdn: false
});

async function deleteIncompleteUploads() {
  console.log('Checking for incomplete uploads...\n');

  // 旅行・旅館業関連業務のドキュメントを取得
  const travelDoc = await client.fetch(`
    *[_type == "serviceCategory" && title == "旅行・旅館業関連業務"][0] {
      _id,
      _rev,
      title,
      image
    }
  `);

  console.log('Travel document:', JSON.stringify(travelDoc, null, 2));

  // 営業許可のドキュメントを取得
  const businessDoc = await client.fetch(`
    *[_type == "serviceCategory" && title == "営業許可"][0] {
      _id,
      _rev,
      title,
      image
    }
  `);

  console.log('\nBusiness permit document:', JSON.stringify(businessDoc, null, 2));

  // 不完全なアップロードを探す
  const incompleteUploads = await client.fetch(`
    *[_type == "sanity.imageAsset" && _id in path("uploads/**")] {
      _id,
      _createdAt,
      originalFilename
    }
  `);

  if (incompleteUploads.length > 0) {
    console.log('\nFound incomplete uploads:', incompleteUploads);
  } else {
    console.log('\nNo incomplete uploads found in database.');
  }
}

deleteIncompleteUploads().catch(console.error);