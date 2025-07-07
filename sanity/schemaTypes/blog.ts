import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'お役立ち情報',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '要約',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
      description: '記事の概要（150文字程度）',
    }),
    defineField({
      name: 'content',
      title: '本文',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '標準', value: 'normal'},
            {title: '見出し1', value: 'h1'},
            {title: '見出し2', value: 'h2'},
            {title: '見出し3', value: 'h3'},
            {title: '見出し4', value: 'h4'},
            {title: '引用', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: '太字', value: 'strong'},
              {title: '斜体', value: 'em'},
              {title: '下線', value: 'underline'},
            ],
            annotations: [
              {
                title: 'リンク',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: '画像の説明（SEO用）',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          {title: '許認可・申請', value: 'license'},
          {title: '相続・遺言', value: 'inheritance'},
          {title: '会社設立・経営', value: 'business'},
          {title: '契約・法務', value: 'legal'},
          {title: '税務・手続き', value: 'tax'},
          {title: 'その他', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: '記事に関連するキーワード（例：建設業許可、相続放棄など）',
    }),
    defineField({
      name: 'featured',
      title: '注目記事',
      type: 'boolean',
      description: 'チェックするとトップページに表示されます',
    }),
    defineField({
      name: 'readingTime',
      title: '読了時間（分）',
      type: 'number',
      validation: (rule) => rule.min(1).max(60),
      description: '記事を読むのにかかる時間（目安）',
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: '更新日',
      type: 'datetime',
      description: '記事を更新した場合の日時',
    }),
    defineField({
      name: 'metaDescription',
      title: 'メタディスクリプション',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(160),
      description: 'SEO用の説明文（160文字以内）',
    }),
    defineField({
      name: 'featuredImage',
      title: 'アイキャッチ画像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: '画像の説明（SEO用）',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, category, publishedAt} = selection
      const categories: { [key: string]: string } = {
        license: '許認可・申請',
        inheritance: '相続・遺言',
        business: '会社設立・経営',
        legal: '契約・法務',
        tax: '税務・手続き',
        other: 'その他'
      }
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('ja-JP') : ''
      return {
        title: title,
        subtitle: `${categories[category] || category} | ${date}`,
      }
    },
  },
  orderings: [
    {
      title: '公開日（新しい順）',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
    {
      title: '更新日（新しい順）',
      name: 'updatedAtDesc',
      by: [
        {field: 'updatedAt', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
    {
      title: 'カテゴリ別',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
  ],
})