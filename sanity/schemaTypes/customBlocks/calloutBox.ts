import { defineType } from 'sanity'

export const calloutBox = defineType({
  name: 'calloutBox',
  title: 'コールアウトボックス',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'タイプ',
      type: 'string',
      options: {
        list: [
          { title: '情報', value: 'info' },
          { title: '警告', value: 'warning' },
          { title: 'エラー・注意', value: 'error' },
          { title: '成功', value: 'success' },
          { title: 'ヒント', value: 'tip' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
    },
    {
      name: 'title',
      title: 'タイトル',
      type: 'string',
      description: '空白の場合は自動でタイトルが設定されます',
    },
    {
      name: 'content',
      title: '内容',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().error('内容は必須です'),
    },
  ],
  preview: {
    select: {
      type: 'type',
      title: 'title',
      content: 'content',
    },
    prepare({ type, title, content }: { type?: string; title?: string; content?: string }) {
      const typeLabels: { [key: string]: string } = {
        info: '情報',
        warning: '警告',
        error: 'エラー・注意',
        success: '成功',
        tip: 'ヒント',
      };
      
      const displayTitle = title || typeLabels[type || 'info'];
      const preview = content ? content.substring(0, 50) + (content.length > 50 ? '...' : '') : '';
      
      return {
        title: `${typeLabels[type || 'info']}: ${displayTitle}`,
        subtitle: preview,
      };
    },
  },
})