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
          {title: '営業に関するお知らせ', value: 'business_notice'},
          {title: '新サービス・対応業務のご案内', value: 'new_services'},
          {title: '法改正・制度変更のお知らせ', value: 'legal_update'},
          {title: '料金・報酬変更のお知らせ', value: 'price_update'},
          {title: 'メディア掲載・登壇情報', value: 'media_appearance'},
          {title: 'ウェブサイト関連のお知らせ', value: 'website_info'},
          {title: '外国人関連機関からの通知', value: 'immigration_notice'},
          {title: 'お客様の声・実績紹介（速報型）', value: 'case_study'},
          {title: 'プレスリリース（イベント・リリース含む）', value: 'press_release'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: '注目記事',
      type: 'boolean',
      description: 'チェックするとトップページに表示されます',
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