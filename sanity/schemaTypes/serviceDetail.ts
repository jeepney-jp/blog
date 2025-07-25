// ファイル名: schemas/serviceDetail.ts
// 目的: 行政書士サイトの「中項目詳細ページ」用 Sanity スキーマ定義
// 関連: 各中項目は親カテゴリ（serviceCategory）と関連付けされる

import { Rule } from 'sanity'
import { richContentArray } from './shared/richContent'

export default {
  name: 'serviceDetail',
  type: 'document',
  title: 'サービス詳細',
  fields: [
    {
      name: 'orderRank',
      type: 'number',
      title: '表示順',
      description: '小さい数字が上位に表示されます',
      options: {
        isHighlighted: true,
      },
      validation: (Rule: Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'title',
      type: 'string',
      title: 'サービス名',
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
      name: 'parentCategory',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
      title: '親カテゴリ',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'overview',
      type: 'text',
      title: 'サービス概要（1〜2文）',
    },
    {
      name: 'target',
      type: 'string',
      title: '対象となる方',
    },
    {
      name: 'price',
      type: 'string',
      title: '料金目安',
    },
    {
      name: 'priceMin',
      title: '料金（最低）',
      type: 'number',
      description: '報酬額の下限値（円）'
    },
    {
      name: 'priceMax',
      title: '料金（最高）',
      type: 'number',
      description: '報酬額の上限値（円）'
    },
    {
      name: 'priceNote',
      title: '料金備考',
      type: 'string',
      description: '実費や特記事項など'
    },
    {
      name: 'content',
      title: '本文',
      description: 'ブログのようなリッチな本文を記載できます',
      ...richContentArray,
    },
    {
      name: 'showToc',
      type: 'boolean',
      title: '目次を表示',
      description: '本文にH2/H3見出しがある場合、自動的に目次を生成して表示します',
      initialValue: true,
    },
    {
      name: 'tocTitle',
      type: 'string',
      title: '目次タイトル',
      description: '目次のタイトル（デフォルト: 目次）',
      initialValue: '目次',
      hidden: ({document}: any) => !document?.showToc,
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
    {
      name: 'tag',
      type: 'array',
      title: 'タグ（複数可）',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'overview',
      category: 'parentCategory.title'
    },
    prepare(selection: any) {
      const {title, subtitle, category} = selection
      return {
        title,
        subtitle: category ? `${category} - ${subtitle || ''}` : subtitle
      }
    }
  },
  orderings: [
    {
      title: '表示順（昇順）',
      name: 'orderRankAsc',
      by: [{ field: 'orderRank', direction: 'asc' }],
    },
  ],
};