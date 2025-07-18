// ファイル名: schemas/serviceCategory.ts
// 目的: 行政書士サイトの階層2ページ「カテゴリー一覧」用のSanityスキーマ定義
// 注意: 順序制御のため orderRank, SEO強化のため metaTitle, metaDescription, ogImage を含む

import { Rule } from 'sanity'

export default {
  name: 'serviceCategory',
  type: 'document',
  title: 'サービスカテゴリ',
  fields: [
    {
      name: 'orderRank',
      type: 'number',
      title: '表示順',
      hidden: true, // ドラッグ&ドロップで管理するため非表示
    },
    {
      name: 'title',
      type: 'string',
      title: 'カテゴリー名',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ（URL）',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'image',
      title: 'トップページ用アイコン',
    },
    {
      name: 'image',
      type: 'image',
      title: '階層1カード用画像',
    },
    {
      name: 'catchphrase',
      type: 'string',
      title: 'キャッチコピー',
    },
    {
      name: 'expertiseDescription',
      type: 'array',
      title: '専門性のアピール',
      of: [{ type: 'block' }],
    },
    {
      name: 'faq',
      type: 'array',
      title: 'よくある質問',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            { name: 'question', type: 'string', title: '質問' },
            { name: 'answer', type: 'text', title: '回答' },
          ],
        },
      ],
      options: {
        sortable: true,
      },
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'SEOタイトル',
      description: '検索エンジンやブラウザタブに表示されるタイトル'
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'SEOディスクリプション',
      description: '検索結果に表示されるページの説明文（120〜160字推奨）'
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'OGP画像',
      description: 'SNSなどでシェアされた時に表示される画像'
    },
  ],
  orderings: [
    {
      title: '表示順（昇順）',
      name: 'orderRankAsc',
      by: [{ field: 'orderRank', direction: 'asc' }],
    },
  ],
};