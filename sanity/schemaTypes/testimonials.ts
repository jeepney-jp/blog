import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'お客様の声',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'お客様名',
      type: 'string',
      validation: (rule) => rule.required(),
      description: '実名または「A様」などの匿名表記',
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'clientName',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: '評価',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
      description: '1〜5の星評価',
    }),
    defineField({
      name: 'comment',
      title: 'お客様のコメント',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceType',
      title: 'ご利用サービス',
      type: 'string',
      options: {
        list: [
          {title: '許認可申請', value: 'license'},
          {title: '相続手続き', value: 'inheritance'},
          {title: '会社設立', value: 'incorporation'},
          {title: '契約書作成', value: 'contracts'},
          {title: 'その他', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientIndustry',
      title: 'お客様の業種・職業',
      type: 'string',
      description: '例：建設業、飲食業、個人事業主など',
    }),
    defineField({
      name: 'clientLocation',
      title: 'お客様の地域',
      type: 'string',
      description: '例：東京都、千葉県など',
    }),
    defineField({
      name: 'featured',
      title: '注目の声',
      type: 'boolean',
      description: 'チェックするとトップページに表示されます',
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientImage',
      title: 'お客様の写真',
      type: 'image',
      description: '任意：お客様の許可がある場合のみ',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'serviceType',
      rating: 'rating',
      media: 'clientImage',
    },
    prepare(selection) {
      const {title, subtitle, rating} = selection
      const stars = '★'.repeat(rating || 0) + '☆'.repeat(5 - (rating || 0))
      const serviceTypes: { [key: string]: string } = {
        license: '許認可申請',
        inheritance: '相続手続き',
        incorporation: '会社設立',
        contracts: '契約書作成',
        other: 'その他'
      }
      return {
        title: `${title} (${stars})`,
        subtitle: serviceTypes[subtitle] || subtitle,
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
      title: '評価（高い順）',
      name: 'ratingDesc',
      by: [
        {field: 'rating', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
  ],
})