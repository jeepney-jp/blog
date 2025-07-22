import {definePlugin} from 'sanity'
import {DocumentActionComponent, useDocumentOperation} from 'sanity'
import {TrashIcon} from '@sanity/icons'

const DeleteAction: DocumentActionComponent = (props) => {
  const {id, type, published, draft} = props
  const {delete: deleteOp} = useDocumentOperation(id, type)

  return {
    label: '削除',
    icon: TrashIcon,
    tone: 'critical',
    onHandle: () => {
      const docTitle = draft?.name || published?.name || draft?.title || published?.title || 'このドキュメント'
      
      if (confirm(`「${docTitle}」を削除してもよろしいですか？この操作は取り消せません。`)) {
        deleteOp.execute()
        return {
          label: '削除中...',
          tone: 'critical',
        }
      }
    },
  }
}

export const customActionsPlugin = definePlugin({
  name: 'custom-actions',
  document: {
    actions: (prev, context) => {
      // 常にカスタム削除アクションを追加
      return [...prev, DeleteAction]
    },
  },
})