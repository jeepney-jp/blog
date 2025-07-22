import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'staff',
  title: 'スタッフ',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名前',
      type: 'string',
      validation: (rule) => rule.required(),
      description: '日本語の名前（例：山田 太郎）',
    }),
    defineField({
      name: 'nameRomaji',
      title: 'ローマ字名前',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'ローマ字の名前（例：YAMADA Taro）',
    }),
    defineField({
      name: 'position',
      title: '役職',
      type: 'string',
      description: '例：代表行政書士、行政書士、事務員など',
    }),
    defineField({
      name: 'photo',
      title: '写真',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: '画像の説明（SEO用）',
        },
      ],
    }),
    defineField({
      name: 'introduction',
      title: '紹介文',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '標準', value: 'normal'},
            {title: '見出し3', value: 'h3'},
            {title: '見出し4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: '太字', value: 'strong'},
              {title: '斜体', value: 'em'},
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
      description: 'プラスボタンを押したときに表示される詳細な紹介文',
    }),
    defineField({
      name: 'order',
      title: '表示順',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      description: '数字が小さいほど先に表示されます',
    }),
    defineField({
      name: 'isActive',
      title: '表示する',
      type: 'boolean',
      description: 'チェックを外すとウェブサイトに表示されません',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'photo',
      order: 'order',
    },
    prepare(selection) {
      const {title, subtitle, order} = selection
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle || '役職未設定',
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: '表示順',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})