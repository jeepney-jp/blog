import Link from "next/link";
import { notFound } from "next/navigation";
// import { getBlogBySlug, getBlogs } from "../../../../lib/sanity";

// ブログ記事の型定義
interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content?: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  category: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
  publishedAt: string;
  updatedAt?: string;
  metaDescription?: string;
  featuredImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 一時的にテストデータを使用
  const blog: Blog | null = slug === "kensetsugyo-kyoka-shutoku-hoho" ? {
    _id: "test1",
    title: "建設業許可の取得方法と必要書類を徹底解説",
    slug: { current: "kensetsugyo-kyoka-shutoku-hoho" },
    excerpt: "建設業を営むために必要な許可の種類、取得要件、必要書類について分かりやすく解説します。一般建設業と特定建設業の違いも詳しく説明します。",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "建設業を営むためには、軽微な建設工事を除き、建設業許可を取得する必要があります。本記事では、建設業許可の基本的な仕組みから取得方法まで詳しく解説します。\n\n## 建設業許可とは\n\n建設業許可は、建設工事を請け負う事業者が必要な許可です。工事の規模や内容によって、一般建設業許可と特定建設業許可に分かれています。\n\n### 一般建設業許可\n下請代金の総額が4,000万円未満（建築一式工事の場合は6,000万円未満）の工事を請け負う場合に必要です。\n\n### 特定建設業許可\n下請代金の総額が4,000万円以上（建築一式工事の場合は6,000万円以上）の工事を請け負う場合に必要です。\n\n## 必要な要件\n\n1. **経営業務の管理責任者**\n   建設業に関する経営経験が5年以上ある者\n\n2. **専任技術者**\n   指定学科卒業後の実務経験または検定合格者\n\n3. **財産的基礎**\n   自己資本500万円以上または500万円以上の資金調達能力\n\n4. **誠実性**\n   契約に関して不正または不誠実な行為をするおそれがないこと\n\n## 申請に必要な書類\n\n建設業許可申請には多くの書類が必要です。主な書類は以下の通りです：\n\n- 建設業許可申請書\n- 役員等の一覧表\n- 営業所一覧表\n- 専任技術者一覧表\n- 工事経歴書\n- 直前3年の各事業年度における工事施工金額\n- 使用人数\n- 誓約書\n- 経営業務の管理責任者証明書\n- 専任技術者証明書\n- 財産的基礎確認資料\n\n## 申請の流れ\n\n1. **事前準備**\n   必要書類の収集と作成\n\n2. **申請書類の作成**\n   各種証明書類の準備\n\n3. **申請**\n   都道府県または国土交通大臣への申請\n\n4. **審査**\n   書類審査（約1ヶ月）\n\n5. **許可通知**\n   許可証の交付\n\n## 注意点\n\n- 許可の有効期間は5年間\n- 更新手続きは期限の3ヶ月前から可能\n- 変更届出が必要な場合がある\n- 廃業届の提出義務\n\n建設業許可の取得は複雑な手続きですが、適切な準備と専門家のサポートにより確実に取得することができます。ご不明な点がございましたら、お気軽にご相談ください。"
          }
        ]
      }
    ],
    category: "license",
    tags: ["建設業許可", "許認可申請", "一般建設業", "特定建設業"],
    featured: true,
    readingTime: 8,
    publishedAt: "2025-07-07",
    metaDescription: "建設業許可の取得方法、必要書類、申請の流れについて行政書士が詳しく解説します。一般建設業と特定建設業の違いや申請のポイントも説明。"
  } : slug === "sozoku-hoki-tetsuzuki" ? {
    _id: "test2",
    title: "相続放棄の手続きと注意点｜3ヶ月の期限に要注意",
    slug: { current: "sozoku-hoki-tetsuzuki" },
    excerpt: "相続放棄の手続き方法、必要書類、注意すべきポイントについて詳しく解説します。3ヶ月の期限や注意すべき行為についても説明します。",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "相続が発生した際、被相続人の負債が多い場合などに相続放棄を検討することがあります。相続放棄は重要な手続きですので、正しい知識を身につけましょう。\n\n## 相続放棄とは\n\n相続放棄とは、相続人が被相続人の財産及び債務を一切相続しないことを家庭裁判所に申述する手続きです。\n\n相続放棄をすると、その相続人は初めから相続人でなかったものとみなされます。そのため、被相続人の債務を負担する必要がなくなりますが、同時に財産も一切相続できません。\n\n## 手続きの流れ\n\n### 1. 申述書の作成\n家庭裁判所所定の申述書に必要事項を記入します。申述書は裁判所のウェブサイトからダウンロードできます。\n\n### 2. 必要書類の準備\n主な必要書類は以下の通りです：\n\n- 相続放棄申述書\n- 被相続人の除籍謄本\n- 相続人の戸籍謄本\n- 被相続人の住民票除票または戸籍附票\n- 申述人の住民票または戸籍附票\n\n### 3. 家庭裁判所への提出\n被相続人の最後の住所地を管轄する家庭裁判所に申述書と必要書類を提出します。\n\n### 4. 照会書への回答\n裁判所から照会書が送られてきた場合は、指定期日までに回答します。\n\n### 5. 受理通知\n問題がなければ、相続放棄申述受理通知書が送付されます。\n\n## 重要な注意点\n\n### 3ヶ月の期限\n相続放棄は、**相続の開始を知った時から3ヶ月以内**に行う必要があります。この期間を「熟慮期間」といいます。\n\n期限を過ぎると、原則として相続放棄はできなくなりますので注意が必要です。\n\n### 相続財産の処分禁止\n相続放棄を予定している場合、以下の行為は避けなければなりません：\n\n- 相続財産の売却\n- 預金の引き出し\n- 被相続人の債務の支払い\n- 家財道具の処分\n\nこれらの行為を行うと、相続を承認したとみなされ（単純承認）、相続放棄ができなくなる可能性があります。\n\n### 相続人の順位\n相続放棄により相続権が次の順位の人に移ることがあります：\n\n1. 第1順位：子（直系卑属）\n2. 第2順位：父母（直系尊属）\n3. 第3順位：兄弟姉妹（傍系血族）\n\n## 費用\n\n相続放棄の申述にかかる費用は以下の通りです：\n\n- 収入印紙：800円\n- 郵便切手：数百円程度\n- 書類取得費用：数千円程度\n\n## 専門家への相談\n\n相続放棄は一度行うと撤回できない重要な手続きです。判断に迷う場合は、行政書士や弁護士などの専門家にご相談することをお勧めします。\n\n当事務所では、相続放棄に関するご相談を承っております。お気軽にお問い合わせください。"
          }
        ]
      }
    ],
    category: "inheritance",
    tags: ["相続放棄", "相続手続き", "家庭裁判所", "3ヶ月期限"],
    featured: true,
    readingTime: 6,
    publishedAt: "2025-07-06"
  } : slug === "godo-kaisha-setsuritsu" ? {
    _id: "test3",
    title: "合同会社設立のメリット・デメリットと設立手続きの流れ",
    slug: { current: "godo-kaisha-setsuritsu" },
    excerpt: "合同会社の特徴、株式会社との違い、設立手続きの流れについて分かりやすく解説します。設立費用を抑えたい方におすすめの会社形態です。",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "近年、設立費用の安さから合同会社を選択する起業家が増えています。合同会社の特徴と設立手続きについて詳しく解説します。\n\n## 合同会社の特徴\n\n合同会社（LLC：Limited Liability Company）は、2006年の会社法改正で創設された比較的新しい会社形態です。\n\n### メリット\n\n1. **設立費用が安い**\n   定款認証が不要で、登録免許税も6万円と株式会社の15万円より安く済みます。\n\n2. **決算公告義務がない**\n   株式会社のような決算公告の義務がないため、維持費用を抑えられます。\n\n3. **役員任期の制限がない**\n   代表社員の任期に制限がないため、重任登記が不要です。\n\n4. **出資比率と損益分配比率を自由に決められる**\n   出資額に関係なく、損益分配や議決権の配分を自由に設定できます。\n\n5. **意思決定が迅速**\n   社員全員の同意があれば、迅速な意思決定が可能です。\n\n### デメリット\n\n1. **知名度が株式会社より低い**\n   取引先によっては信用面で不利になる場合があります。\n\n2. **上場できない**\n   証券取引所への上場はできません。\n\n3. **資金調達の選択肢が限られる**\n   株式発行による資金調達ができません。\n\n4. **社会保険の適用**\n   代表社員も厚生年金・健康保険への加入が必要です。\n\n## 株式会社との比較\n\n| 項目 | 合同会社 | 株式会社 |\n|------|----------|----------|\n| 設立費用 | 約10万円 | 約25万円 |\n| 定款認証 | 不要 | 必要（5万円） |\n| 登録免許税 | 6万円 | 15万円 |\n| 決算公告 | 不要 | 必要 |\n| 役員任期 | 制限なし | 最長10年 |\n| 上場 | 不可 | 可能 |\n\n## 設立手続きの流れ\n\n### 1. 基本事項の決定\n以下の事項を決定します：\n\n- 商号（会社名）\n- 本店所在地\n- 事業目的\n- 資本金額\n- 社員の構成\n- 代表社員\n- 事業年度\n\n### 2. 定款の作成\n合同会社の定款には以下の絶対的記載事項があります：\n\n- 目的\n- 商号\n- 本店所在地\n- 社員の氏名または名称及び住所\n- 社員の出資の目的及びその価額または評価の標準\n- 社員の有限責任について\n\n**注意**：合同会社の定款は公証人による認証が不要です。\n\n### 3. 出資金の払込み\n代表社員の個人口座に出資金を払込みます。通帳のコピーを取得し、払込証明書を作成します。\n\n### 4. 登記申請書類の作成\n以下の書類を作成します：\n\n- 合同会社設立登記申請書\n- 定款\n- 代表社員、本店所在地及び資本金を決定したことを証する書面\n- 代表社員の就任承諾書\n- 払込証明書\n- 印鑑届書\n- 登録免許税納付用台紙\n\n### 5. 法務局への登記申請\n本店所在地を管轄する法務局に設立登記申請を行います。登記申請日が会社設立日となります。\n\n### 6. 登記完了後の手続き\n登記完了後、以下の手続きを行います：\n\n- 登記事項証明書の取得\n- 印鑑証明書の取得\n- 税務署への法人設立届出書提出\n- 都道府県・市町村への法人設立届出\n- 社会保険の加入手続き\n- 労働保険の加入手続き（従業員がいる場合）\n\n## 設立後の注意点\n\n### 1. 税務・会計\n- 法人税の申告義務\n- 消費税の課税事業者判定\n- 適切な帳簿の作成・保存\n\n### 2. 社会保険\n- 厚生年金・健康保険への加入義務\n- 労災保険・雇用保険（従業員がいる場合）\n\n### 3. 各種届出\n- 決算期変更時の届出\n- 本店移転時の登記\n- 代表社員変更時の登記\n\n## まとめ\n\n合同会社は設立費用を抑えたい小規模事業や、自由度の高い経営を求める場合に適した会社形態です。ただし、将来的な上場や大規模な資金調達を考えている場合は、株式会社を選択することをお勧めします。\n\n設立手続きでご不明な点がございましたら、お気軽にご相談ください。"
          }
        ]
      }
    ],
    category: "business",
    tags: ["合同会社", "会社設立", "LLC", "設立費用"],
    featured: false,
    readingTime: 7,
    publishedAt: "2025-07-05"
  } : null;

  if (!blog) {
    notFound();
  }

  const categoryLabels: { [key: string]: string } = {
    license: "許認可・申請",
    inheritance: "相続・遺言",
    business: "会社設立・経営",
    legal: "契約・法務",
    tax: "税務・手続き",
    other: "その他"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-gray-900">フォルティア行政書士事務所</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
                お役立ち情報
              </Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
                お客様の声
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            </Link>
            <span>／</span>
            <Link href="/blog" className="hover:text-gray-700">
              お役立ち情報
            </Link>
            <span>／</span>
            <span className="text-gray-900">{blog.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <time className="text-sm text-gray-500">
                {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
              </time>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {categoryLabels[blog.category] || blog.category}
              </span>
              {blog.featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  注目記事
                </span>
              )}
              {blog.readingTime && (
                <span className="text-sm text-gray-500">
                  約{blog.readingTime}分
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{blog.excerpt}</p>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content && blog.content.map((block, index) => (
              <div key={index} className="mb-6">
                {block.children?.map((child, childIndex: number) => (
                  <div key={childIndex} className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {child.text}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            {blog.updatedAt && (
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  最終更新: {new Date(blog.updatedAt).toLocaleDateString('ja-JP')}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                ← お役立ち情報一覧に戻る
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                この件でご相談
              </Link>
            </div>
          </div>
        </article>

        {/* Related CTA */}
        <div className="mt-12">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              記事の内容についてご質問がございますか？
            </h2>
            <p className="text-gray-600 mb-6">
              具体的な手続きやご不明な点について、お気軽にご相談ください。初回相談は無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                無料相談のお申し込み
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">フォルティア行政書士事務所</h3>
              <p className="text-gray-400">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                TEL: 03-1234-5678
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">営業時間</h3>
              <p className="text-gray-400">
                平日: 9:00 - 18:00<br />
                土曜: 9:00 - 17:00<br />
                日祝: 休業
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">主要業務エリア</h3>
              <p className="text-gray-400">
                東京都、千葉県、埼玉県、神奈川県<br />
                ※その他地域もご相談ください
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 フォルティア行政書士事務所. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}