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
          {title: '営業案内', value: 'business_notice'},
          {title: '新サービス', value: 'new_services'},
          {title: '制度改正', value: 'legal_update'},
          {title: '料金改定', value: 'price_update'},
          {title: 'メディア', value: 'media_appearance'},
          {title: '実績紹介', value: 'case_study'},
        ],
      },
      validation: (rule) => rule.required(),
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