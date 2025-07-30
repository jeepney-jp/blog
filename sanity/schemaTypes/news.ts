import {defineField, defineType} from 'sanity'
import { richContentArray } from './shared/richContent'

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
      title: '本文',
      description: 'ブログのようなリッチな本文を記載できます',
      ...richContentArray,
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      description: 'サービス詳細ページのタイトルと完全一致させることで紐付けができます（例：就労ビザ申請）',
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