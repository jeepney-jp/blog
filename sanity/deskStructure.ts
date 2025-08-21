import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .id('root')
    .items([
      // 明示的に表示するドキュメントタイプのみ
      S.documentTypeListItem('news'),
      S.documentTypeListItem('contact'),
    ])