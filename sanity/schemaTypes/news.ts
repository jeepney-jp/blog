import {defineField, defineType} from 'sanity'
import { richContentArray } from './shared/richContent'

export default defineType({
  name: 'news',
  title: 'お知らせ',
  type: 'document',
  fields: [
    // 日本語フィールド
    defineField({
      name: 'title',
      title: 'タイトル（日本語）',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'タイトル（英語）',
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
      title: '概要（日本語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptEn',
      title: '概要（英語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: '本文（日本語）',
      description: 'ブログのようなリッチな本文を記載できます',
      ...richContentArray,
    }),
    defineField({
      name: 'contentEn',
      title: '本文（英語）',
      description: 'Rich content for English version',
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
      titleEn: 'titleEn',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, titleEn, subtitle} = selection
      return {
        title: `${title} / ${titleEn || 'No English title'}`,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ja-JP') : '日付未設定',
      }
    },
  },
})