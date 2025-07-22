import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

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
    // デフォルトのアクションを有効化（削除を含む）
    actions: (prev) => prev,
    
    // 削除の確認ダイアログをカスタマイズ
    unstable_comments: {
      enabled: true,
    },
  },
})
