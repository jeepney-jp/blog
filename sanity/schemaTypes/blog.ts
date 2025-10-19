import {defineField, defineType} from 'sanity'
import { richContentArray } from './shared/richContent'

export default defineType({
  name: 'blog',
  title: 'ブログ',
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
      name: 'thumbnail',
      title: 'サムネイル画像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          {title: '外国人ビザ・在留資格', value: 'visa'},
          {title: '建設業許可', value: 'construction'},
          {title: '会社設立・法人設立', value: 'company'},
          {title: '古物商許可', value: 'antique'},
          {title: '建築士事務所登録', value: 'architect'},
          {title: '宅建業免許', value: 'real-estate'},
          {title: '産業廃棄物収集運搬業許可', value: 'waste'},
          {title: '運送業許可', value: 'transport'},
          {title: '飲食店営業許可', value: 'restaurant'},
          {title: '旅館業許可', value: 'hotel'},
          {title: '遺言・相続', value: 'inheritance'},
          {title: '農地転用', value: 'farmland'},
        ]
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: '本文',
      description: 'ブログの本文を記載してください',
      ...richContentArray,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isPublished',
      title: '公開済み',
      type: 'boolean',
      description: 'チェックを入れるとサイトに表示されます',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'thumbnail',
      category: 'category',
      isPublished: 'isPublished',
    },
    prepare(selection) {
      const {title, subtitle, category, isPublished} = selection
      const categoryLabels: Record<string, string> = {
        visa: '外国人ビザ・在留資格',
        construction: '建設業許可',
        company: '会社設立・法人設立',
        antique: '古物商許可',
        architect: '建築士事務所登録',
        'real-estate': '宅建業免許',
        waste: '産業廃棄物収集運搬業許可',
        transport: '運送業許可',
        restaurant: '飲食店営業許可',
        hotel: '旅館業許可',
        inheritance: '遺言・相続',
        farmland: '農地転用',
      }
      return {
        title: `${isPublished ? '✅' : '⚪'} ${title}`,
        subtitle: `${categoryLabels[category] || category} | ${subtitle ? new Date(subtitle).toLocaleDateString('ja-JP') : '日付未設定'}`,
      }
    },
  },
  orderings: [
    {
      title: '公開日（新しい順）',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: '公開日（古い順）',
      name: 'publishedAtAsc', 
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
  ],
})