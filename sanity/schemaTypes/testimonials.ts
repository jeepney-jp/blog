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
      type: 'array',
      description: 'ブログのようなリッチな本文を記載できます',
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
                    validation: (rule) => rule.regex(/^#[0-9a-fA-F]{6}$/),
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
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '代替テキスト',
              description: 'アクセシビリティのための画像説明',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'キャプション',
              description: '画像の下に表示される説明文',
            },
          ],
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube動画',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube URL',
              validation: (rule) => rule.required(),
            },
          ],
        },
        {
          name: 'code',
          type: 'object',
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
              rows: 10,
            },
          ],
        },
        {
          name: 'blockquote',
          type: 'object',
          title: '引用',
          fields: [
            {
              name: 'text',
              type: 'text',
              title: '引用文',
              rows: 3,
            },
            {
              name: 'cite',
              type: 'string',
              title: '引用元',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'serviceDetail',
      title: 'ご利用サービス',
      type: 'reference',
      to: [{type: 'serviceDetail'}],
      validation: (rule) => rule.required(),
      description: 'お客様が利用されたサービスを選択してください',
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
  ],
  preview: {
    select: {
      title: 'clientName',
      serviceTitle: 'serviceDetail.title',
      categoryTitle: 'serviceDetail.category.title',
      featured: 'featured',
      media: 'clientImage',
    },
    prepare(selection) {
      const {title, serviceTitle, categoryTitle, featured} = selection
      const subtitle = serviceTitle 
        ? `${categoryTitle || ''} - ${serviceTitle}`
        : '未設定'
      return {
        title: title,
        subtitle: `${subtitle}${featured ? ' (トップページ掲載)' : ''}`,
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