// Debug script to check Sanity images
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'njgo6ucb',
  dataset: 'production',
  apiVersion: '2024-07-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN // Optional, for authenticated requests
});

// Query from queries.ts
const allServiceCategoriesQuery = `
  *[_type == "serviceCategory"] | order(orderRank asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    catchphrase,
    "iconUrl": icon.asset->url,
    image {
      asset-> {
        _id,
        url
      }
    },
    "previewServices": *[_type == "serviceDetail" && references(^._id)] | order(orderRank asc, _createdAt asc)[0...3] {
      _id,
      title
    }
  }
`;

// Simpler query to check image field directly
const simpleImageQuery = `
  *[_type == "serviceCategory"] {
    _id,
    title,
    "hasIcon": defined(icon),
    "hasImage": defined(image),
    icon,
    image
  }
`;

async function debugImages() {
  try {
    console.log('=== Checking Service Categories Images ===\n');
    
    // First, check if images are defined
    console.log('1. Checking if image fields are defined:');
    const simpleData = await client.fetch(simpleImageQuery);
    
    simpleData.forEach((cat) => {
      console.log(`\nCategory: ${cat.title}`);
      console.log(`  Has icon field: ${cat.hasIcon}`);
      console.log(`  Has image field: ${cat.hasImage}`);
      if (cat.icon) {
        console.log(`  Icon reference:`, JSON.stringify(cat.icon, null, 2));
      }
      if (cat.image) {
        console.log(`  Image reference:`, JSON.stringify(cat.image, null, 2));
      }
    });
    
    console.log('\n\n2. Checking resolved image URLs:');
    const fullData = await client.fetch(allServiceCategoriesQuery);
    
    fullData.forEach((cat) => {
      console.log(`\nCategory: ${cat.title}`);
      console.log(`  Icon URL: ${cat.iconUrl || 'NOT RESOLVED'}`);
      console.log(`  Image object:`, JSON.stringify(cat.image, null, 2));
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

debugImages();