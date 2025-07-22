import {StructureBuilder} from 'sanity/structure'
import {TrashIcon} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .items([
      // スタッフ with custom menu
      S.listItem()
        .title('スタッフ')
        .schemaType('staff')
        .child(
          S.documentTypeList('staff')
            .title('スタッフ')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('staff')
            )
            .menuItems([
              S.menuItem()
                .title('新規作成')
                .intent({type: 'create', params: {type: 'staff'}}),
              S.orderingMenuItem({
                title: '表示順で並び替え',
                name: 'orderAsc',
                by: [{field: 'order', direction: 'asc'}],
              }),
              S.divider(),
              S.menuItem()
                .title('全て削除')
                .icon(TrashIcon)
                .color('danger')
                .serialize()
                .action(async (context) => {
                  if (confirm('本当に全てのスタッフを削除しますか？')) {
                    // Note: This is just a placeholder for bulk delete
                    alert('一括削除機能は実装されていません。個別に削除してください。')
                  }
                })
            ])
        ),
      
      // 他のドキュメントタイプ
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem => !['staff'].includes(listItem.getId() as string)
      ),
    ])