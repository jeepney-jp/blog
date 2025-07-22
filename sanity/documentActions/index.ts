import {DocumentActionComponent, useDocumentOperation} from 'sanity'
import {TrashIcon} from '@sanity/icons'

export const createDeleteAction = (): DocumentActionComponent => {
  const DeleteAction: DocumentActionComponent = (props) => {
    const {id, type, published, draft} = props
    const {delete: deleteOperation} = useDocumentOperation(id, type)

    if (!deleteOperation) {
      return null
    }

    return {
      label: '削除',
      icon: TrashIcon,
      tone: 'critical',
      onHandle: () => {
        const title = draft?.name || published?.name || draft?.title || published?.title || 'このドキュメント'
        
        if (window.confirm(`「${title}」を削除してもよろしいですか？この操作は取り消せません。`)) {
          deleteOperation.execute()
        }
      },
    }
  }

  return DeleteAction
}