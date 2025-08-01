import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .id('root')
    .items([
      // すべてのサービス
      S.listItem()
        .title('すべてのサービス')
        .id('allServices')
        .child(
          S.documentList()
            .title('すべてのサービス')
            .id('allServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail"')
            .defaultOrdering([{field: 'parentCategory.orderRank', direction: 'asc'}, {field: 'orderRank', direction: 'asc'}])
        ),
      
      S.divider(),
      
      // 外国人関連業務
      S.listItem()
        .title('外国人関連業務')
        .id('foreignerServices')
        .child(
          S.documentList()
            .title('外国人関連業務')
            .id('foreignerServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "外国人関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 建設・宅地建物取引業関連業務
      S.listItem()
        .title('建設・宅地建物取引業関連業務')
        .id('constructionServices')
        .child(
          S.documentList()
            .title('建設・宅地建物取引業関連業務')
            .id('constructionServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "建設・宅地建物取引業関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 自動車関連業務
      S.listItem()
        .title('自動車関連業務')
        .id('automobileServices')
        .child(
          S.documentList()
            .title('自動車関連業務')
            .id('automobileServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "自動車関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 飲食・風俗営業関連業務
      S.listItem()
        .title('飲食・風俗営業関連業務')
        .id('foodServices')
        .child(
          S.documentList()
            .title('飲食・風俗営業関連業務')
            .id('foodServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "飲食・風俗営業関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 医療・介護関連業務
      S.listItem()
        .title('医療・介護関連業務')
        .id('medicalServices')
        .child(
          S.documentList()
            .title('医療・介護関連業務')
            .id('medicalServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "医療・介護関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 廃棄物処理業許可関連業務
      S.listItem()
        .title('廃棄物処理業許可関連業務')
        .id('wasteServices')
        .child(
          S.documentList()
            .title('廃棄物処理業許可関連業務')
            .id('wasteServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "廃棄物処理業許可関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 旅行・旅館業関連業務
      S.listItem()
        .title('旅行・旅館業関連業務')
        .id('travelServices')
        .child(
          S.documentList()
            .title('旅行・旅館業関連業務')
            .id('travelServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "旅行・旅館業関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 法人設立業務
      S.listItem()
        .title('法人設立業務')
        .id('corporationServices')
        .child(
          S.documentList()
            .title('法人設立業務')
            .id('corporationServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "法人設立業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 営業許可
      S.listItem()
        .title('営業許可')
        .id('businessPermitServices')
        .child(
          S.documentList()
            .title('営業許可')
            .id('businessPermitServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "営業許可"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 土地関連業務
      S.listItem()
        .title('土地関連業務')
        .id('landServices')
        .child(
          S.documentList()
            .title('土地関連業務')
            .id('landServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "土地関連業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // 権利義務・事実証明業務
      S.listItem()
        .title('権利義務・事実証明業務')
        .id('rightsServices')
        .child(
          S.documentList()
            .title('権利義務・事実証明業務')
            .id('rightsServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "権利義務・事実証明業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      // その他の業務
      S.listItem()
        .title('その他の業務')
        .id('otherServices')
        .child(
          S.documentList()
            .title('その他の業務')
            .id('otherServicesList')
            .schemaType('serviceDetail')
            .filter('_type == "serviceDetail" && references(*[_type == "serviceCategory" && title == "その他の業務"]._id)')
            .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
        ),
      
      S.divider(),
      
      // その他のドキュメントタイプ
      ...S.documentTypeListItems().filter(
        (listItem) => !['serviceDetail'].includes(listItem.getId() as string)
      ),
    ])