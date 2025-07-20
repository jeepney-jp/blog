import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: '問い合わせ',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'お名前',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'メールアドレス',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: '電話番号',
      type: 'string'
    }),
    defineField({
      name: 'service',
      title: 'ご相談内容',
      type: 'string',
      options: {
        list: [
          { title: '許認可申請', value: 'permit' },
          { title: '相続手続き', value: 'inheritance' },
          { title: '会社設立', value: 'company' },
          { title: '契約書作成', value: 'contract' },
          { title: 'その他', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'message',
      title: 'メッセージ',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: '対応状況',
      type: 'string',
      options: {
        list: [
          { title: '未対応', value: 'pending' },
          { title: '対応中', value: 'in_progress' },
          { title: '完了', value: 'completed' }
        ],
        layout: 'radio'
      },
      initialValue: 'pending'
    }),
    defineField({
      name: 'notes',
      title: '対応メモ',
      type: 'text',
      description: '内部管理用のメモ'
    }),
    defineField({
      name: 'receivedAt',
      title: '受信日時',
      type: 'datetime',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'service',
      date: 'receivedAt'
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      const serviceLabels: Record<string, string> = {
        permit: '許認可申請',
        inheritance: '相続手続き',
        company: '会社設立',
        contract: '契約書作成',
        other: 'その他'
      }
      return {
        title: title,
        subtitle: `${serviceLabels[subtitle] || subtitle} - ${new Date(date).toLocaleDateString('ja-JP')}`
      }
    }
  }
})