import React from 'react'
import {Button} from '@sanity/ui'
import {TrashIcon} from '@sanity/icons'
import {useDocumentOperation} from 'sanity'

interface DeleteButtonProps {
  id: string
  type: string
  title?: string
}

export function DeleteButton({id, type, title}: DeleteButtonProps) {
  const {delete: deleteOp} = useDocumentOperation(id, type)

  const handleDelete = () => {
    if (confirm(`「${title || 'このドキュメント'}」を削除してもよろしいですか？`)) {
      deleteOp.execute()
    }
  }

  return (
    <Button
      tone="critical"
      icon={TrashIcon}
      text="削除"
      onClick={handleDelete}
    />
  )
}