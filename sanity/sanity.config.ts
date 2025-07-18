import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// orderableDocumentListを動的にインポート
let orderableDocumentListDeskItem: any = null
try {
  const orderableModule = require('@sanity/orderable-document-list')
  orderableDocumentListDeskItem = orderableModule.orderableDocumentListDeskItem
} catch (e) {
  console.log('Orderable document list plugin not installed, using default structure')
}

export default defineConfig({
  name: 'default',
  title: 'フォルティア行政書士事務所',

  projectId: 'njgo6ucb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        // プラグインがインストールされている場合のみドラッグ&ドロップを有効化
        if (orderableDocumentListDeskItem) {
          return S.list()
            .title('Content')
            .items([
              orderableDocumentListDeskItem({
                type: 'serviceCategory',
                title: 'サービスカテゴリ',
                S,
                context
              }),
              ...S.documentTypeListItems().filter(listItem => !['serviceCategory'].includes(listItem.getId() as string))
            ])
        }
        // プラグインがない場合はデフォルトの構造を使用
        return S.list()
          .title('Content')
          .items(S.documentTypeListItems())
      }
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
