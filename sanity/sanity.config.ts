import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {TrashIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'フォルティア行政書士事務所',

  projectId: 'njgo6ucb',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, {schemaType}) => {
      const deleteAction = {
        action: 'delete',
        label: '削除',
        icon: TrashIcon,
        tone: 'critical',
        onHandle: async () => {
          if (window.confirm('このドキュメントを削除してもよろしいですか？')) {
            // Sanityの標準削除処理を呼び出す
            const defaultDelete = prev.find(a => a.action === 'delete')
            if (defaultDelete && defaultDelete.onHandle) {
              return defaultDelete.onHandle()
            }
          }
        },
      }

      // 既存のアクションに削除を追加
      return [...prev.filter(a => a.action !== 'delete'), deleteAction]
    },
  },
})
