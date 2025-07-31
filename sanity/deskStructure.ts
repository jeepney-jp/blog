import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .items([
      // サービス詳細を展開したメニュー
      S.listItem()
        .title('サービス詳細')
        .child(
          S.list()
            .title('サービス詳細')
            .items([
              // 全体表示
              S.listItem()
                .title('すべてのサービス')
                .child(
                  S.documentList()
                    .title('すべてのサービス')
                    .filter('_type == "serviceDetail"')
                    .defaultOrdering([{field: 'parentCategory.orderRank', direction: 'asc'}, {field: 'orderRank', direction: 'asc'}])
                ),
              S.divider(),
              // カテゴリ別表示
              S.listItem()
                .title('外国人関連業務')
                .child(
                  S.documentList()
                    .title('外国人関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "外国人関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('建設・宅地建物取引業関連業務')
                .child(
                  S.documentList()
                    .title('建設・宅地建物取引業関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "建設・宅地建物取引業関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('自動車関連業務')
                .child(
                  S.documentList()
                    .title('自動車関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "自動車関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('飲食・風俗営業関連業務')
                .child(
                  S.documentList()
                    .title('飲食・風俗営業関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "飲食・風俗営業関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('廃棄物処理業許可関連業務')
                .child(
                  S.documentList()
                    .title('廃棄物処理業許可関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "廃棄物処理業許可関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('旅行・旅館業関連業務')
                .child(
                  S.documentList()
                    .title('旅行・旅館業関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "旅行・旅館業関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('法人設立業務')
                .child(
                  S.documentList()
                    .title('法人設立業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "法人設立業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('営業許可')
                .child(
                  S.documentList()
                    .title('営業許可')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "営業許可"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('土地関連業務')
                .child(
                  S.documentList()
                    .title('土地関連業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "土地関連業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('権利義務・事実証明業務')
                .child(
                  S.documentList()
                    .title('権利義務・事実証明業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "権利義務・事実証明業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
              S.listItem()
                .title('その他の業務')
                .child(
                  S.documentList()
                    .title('その他の業務')
                    .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "その他の業務"]._id)')
                    .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                ),
            ])
        ),
      S.divider(),
      // その他のドキュメントタイプ
      ...S.documentTypeListItems().filter(
        (listItem) => !['serviceDetail'].includes(listItem.getId() as string)
      ),
    ])