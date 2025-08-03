import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featuresFaq',
  title: '特徴ページのよくある質問',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: '質問',
      type: 'string',
      validation: (Rule) => Rule.required().error('質問は必須です'),
    }),
    defineField({
      name: 'answer',
      title: '回答',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('回答は必須です'),
    }),
    defineField({
      name: 'order',
      title: '表示順',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0).error('表示順は0以上の数値を入力してください'),
    }),
    defineField({
      name: 'isPublished',
      title: '公開',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: '表示順',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
      order: 'order',
      isPublished: 'isPublished',
    },
    prepare(selection) {
      const { title, subtitle, order, isPublished } = selection
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle ? subtitle.substring(0, 100) + '...' : '',
      }
    },
  },
})