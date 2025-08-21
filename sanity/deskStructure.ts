import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .id('root')
    .items([
      // すべてのドキュメントタイプを表示
      ...S.documentTypeListItems(),
    ])