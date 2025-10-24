import { defineType } from 'sanity'

export const tableBlock = defineType({
  name: 'tableBlock',
  title: 'テーブル',
  type: 'object',
  fields: [
    {
      name: 'rows',
      title: '行',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cells',
              title: 'セル',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'content',
                      title: '内容',
                      type: 'text',
                      rows: 3,
                    },
                    {
                      name: 'isHeader',
                      title: 'ヘッダーセル',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'テーブル',
      }
    },
  },
})