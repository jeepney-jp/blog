import {definePlugin} from 'sanity'
import {DocumentActionComponent, useDocumentOperation} from 'sanity'

const DeleteAction: DocumentActionComponent = (props) => {
  const {id, type} = props
  const {delete: deleteOp} = useDocumentOperation(id, type)

  return {
    label: '削除',
    tone: 'critical',
    onHandle: () => {
      if (confirm('このドキュメントを削除してもよろしいですか？')) {
        deleteOp.execute()
      }
    },
  }
}

export const customActionsPlugin = definePlugin({
  name: 'custom-actions',
  document: {
    actions: (prev) => {
      return [...prev, DeleteAction]
    },
  },
})