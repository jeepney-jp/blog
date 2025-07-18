import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'フォルティア行政書士事務所',

  projectId: 'njgo6ucb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'serviceCategory',
              title: 'サービスカテゴリ',
              S,
              context
            }),
            ...S.documentTypeListItems().filter(listItem => !['serviceCategory'].includes(listItem.getId()))
          ])
      }
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
