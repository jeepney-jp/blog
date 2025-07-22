import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deleteAction} from './documentActions/deleteAction'

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
    actions: (prev, context) => {
      // スタッフドキュメントに削除アクションを追加
      if (context.schemaType === 'staff') {
        return [...prev, deleteAction]
      }
      // 他のドキュメントタイプにも削除アクションを追加
      return [...prev, deleteAction]
    },
  },
})
