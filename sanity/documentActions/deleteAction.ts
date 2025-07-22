import {DocumentActionComponent, useDocumentOperation} from 'sanity'

export const deleteAction: DocumentActionComponent = (props) => {
  const {id, type, published, draft} = props
  const {delete: deleteOperation} = useDocumentOperation(id, type)

  return {
    label: '削除',
    icon: () => '🗑️',
    tone: 'critical',
    onHandle: async () => {
      const docTitle = draft?.name || published?.name || draft?.title || published?.title || 'このドキュメント'
      
      if (confirm(`「${docTitle}」を削除してもよろしいですか？この操作は取り消せません。`)) {
        deleteOperation.execute()
        return {
          label: '削除中...',
          tone: 'critical'
        }
      }
    }
  }
}