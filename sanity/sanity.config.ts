import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {customActionsPlugin} from './plugins/customActions'

export default defineConfig({
  name: 'default',
  title: 'フォルティア行政書士事務所',

  projectId: 'njgo6ucb',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), customActionsPlugin()],

  schema: {
    types: schemaTypes,
  },
})
