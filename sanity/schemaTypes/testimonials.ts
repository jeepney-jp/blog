import {defineField, defineType} from 'sanity'
import { richContentArray } from './shared/richContent'

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
      name: 'comment',
      title: 'お客様のコメント（見出し）',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
      description: '写真と一緒に表示される短い見出し的なコメント',
    }),
    defineField({
      name: 'content',
      title: '本文',
      description: 'ブログのようなリッチな本文を記載できます',
      ...richContentArray,
    }),
    defineField({
      name: 'serviceDetail',
      title: 'ご利用サービス',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'お客様が利用されたサービスを入力してください（例：永住ビザ申請、建設業許可申請など）',
    }),
    // 旧フィールドを隠しフィールドとして保持（データ移行用）
    defineField({
      name: 'serviceType',
      title: '旧ご利用サービス（非表示）',
      type: 'string',
      hidden: true,
      options: {
        list: [
          {title: '許認可申請', value: 'license'},
          {title: '相続手続き', value: 'inheritance'},
          {title: '会社設立', value: 'incorporation'},
          {title: '契約書作成', value: 'contracts'},
          {title: 'その他', value: 'other'},
        ],
      },
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
      title: 'トップページ掲載',
      type: 'boolean',
      description: 'チェックするとトップページに表示されます（最大3件）',
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
    defineField({
      name: 'showToc',
      title: '目次を表示',
      type: 'boolean',
      description: '本文にH2/H3見出しがある場合、自動的に目次を生成して表示します',
      initialValue: true,
    }),
    defineField({
      name: 'tocTitle',
      title: '目次タイトル',
      type: 'string',
      description: '目次のタイトル（デフォルト: 目次）',
      initialValue: '目次',
      hidden: ({document}) => !document?.showToc,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      serviceDetail: 'serviceDetail',
      featured: 'featured',
      media: 'clientImage',
    },
    prepare(selection) {
      const {title, serviceDetail, featured} = selection
      return {
        title: title,
        subtitle: `${serviceDetail || '未設定'}${featured ? ' (トップページ掲載)' : ''}`,
        media: selection.media,
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
  ],
})