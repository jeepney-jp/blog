import { Rule } from 'sanity'
import { tableBlock } from '../customBlocks/tableBlock'

export const richContentArray = {
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: '通常', value: 'normal'},
        {title: '見出し1', value: 'h1'},
        {title: '見出し2', value: 'h2'},
        {title: '見出し3', value: 'h3'},
        {title: '見出し4', value: 'h4'},
        {title: '見出し5', value: 'h5'},
        {title: '見出し6', value: 'h6'},
      ],
      lists: [
        {title: '箇条書き', value: 'bullet'},
        {title: '番号付きリスト', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: '太字', value: 'strong'},
          {title: '斜体', value: 'em'},
          {title: '下線', value: 'underline'},
          {title: 'コード', value: 'code'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'リンク',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
            ],
          },
          {
            name: 'color',
            type: 'object',
            title: '文字色',
            fields: [
              {
                name: 'hex',
                type: 'string',
                title: '色',
                description: '例: #ff0000',
                validation: (rule: Rule) => rule.regex(/^#[0-9a-fA-F]{6}$/),
              },
            ],
          },
          {
            name: 'highlight',
            type: 'object',
            title: '背景色',
            fields: [
              {
                name: 'color',
                type: 'string',
                title: '色',
                options: {
                  list: [
                    {title: '黄色', value: 'yellow'},
                    {title: 'ピンク', value: 'pink'},
                    {title: '水色', value: 'lightblue'},
                    {title: '薄緑', value: 'lightgreen'},
                  ],
                },
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
          description: 'アクセシビリティのために重要です',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'キャプション',
        },
      ],
    },
    {
      type: 'object',
      name: 'youtube',
      title: 'YouTube動画',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube URL',
        },
      ],
    },
    {
      type: 'object',
      name: 'code',
      title: 'コードブロック',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: '言語',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'Python', value: 'python'},
              {title: 'その他', value: 'text'},
            ],
          },
        },
        {
          name: 'code',
          type: 'text',
          title: 'コード',
        },
      ],
    },
    {
      type: 'object',
      name: 'quote',
      title: '引用',
      fields: [
        {
          name: 'text',
          type: 'text',
          title: '引用文',
        },
        {
          name: 'author',
          type: 'string',
          title: '引用元',
        },
      ],
    },
    {
      type: 'object',
      name: 'tableOfContents',
      title: '目次',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'タイトル',
          initialValue: '目次',
        },
      ],
      preview: {
        prepare() {
          return {
            title: '目次',
            subtitle: 'ここに目次が表示されます',
          };
        },
      },
    },
    tableBlock,
  ],
}