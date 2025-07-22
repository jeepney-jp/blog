import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'お知らせ',
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
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '概要',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: '内容',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          {title: '一般', value: 'general'},
          {title: '重要', value: 'important'},
          {title: '業務案内', value: 'service'},
          {title: 'その他', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: '注目記事',
      type: 'boolean',
      description: 'チェックするとトップページに表示されます',
    }),
    defineField({
      name: 'isPublished',
      title: '公開状態',
      type: 'boolean',
      initialValue: true,
      description: 'チェックを外すと非表示になります',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ja-JP') : '日付未設定',
      }
    },
  },
})