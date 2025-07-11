import Link from "next/link";
import { notFound } from "next/navigation";
// import { getTestimonialBySlug, getTestimonials } from "../../../../lib/sanity";

// お客様の声の型定義
interface Testimonial {
  _id: string;
  clientName: string;
  slug: { current: string };
  rating: number;
  comment: string;
  serviceType: string;
  clientIndustry?: string;
  clientLocation?: string;
  featured?: boolean;
  publishedAt: string;
  clientImage?: {
    asset: {
      url: string;
    };
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TestimonialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 一時的にテストデータを使用
  const testimonial: Testimonial | null = slug === "tanaka-san" ? {
    _id: "test1",
    clientName: "田中様",
    slug: { current: "tanaka-san" },
    rating: 5,
    comment: "許認可申請でお世話になりました。複雑な手続きでしたが、丁寧に説明していただき、スムーズに許可が下りました。\n\n最初は自分で手続きを進めようと思っていましたが、必要書類の多さと複雑さに困り果てていました。フォルティア行政書士事務所事務所にご相談したところ、必要な書類を整理して教えていただき、作成まで代行していただけました。\n\n担当の方は非常に親切で、分からないことがあると何度でも丁寧に説明してくださいました。料金も事前に明確に提示していただき、追加費用もなく安心できました。\n\nおかげで予定よりも早く許可が下り、事業を開始することができました。本当にありがとうございました。同じような手続きでお困りの方には、ぜひお勧めしたいと思います。",
    serviceType: "license",
    clientIndustry: "建設業",
    clientLocation: "東京都",
    featured: true,
    publishedAt: "2025-07-06"
  } : slug === "sato-san" ? {
    _id: "test2",
    clientName: "佐藤様",
    slug: { current: "sato-san" },
    rating: 5,
    comment: "相続手続きが想像以上に複雑で困っていましたが、親切に対応していただき、無事に完了できました。料金も明確で安心でした。\n\n父が亡くなり、相続手続きを進める必要がありましたが、何から始めれば良いか全く分からない状態でした。インターネットで調べても情報が多すぎて混乱するばかりでした。\n\nフォルティア行政書士事務所事務所にご相談したところ、最初の面談で手続きの全体像を分かりやすく説明していただき、とても安心しました。必要な書類の取得から各種手続きまで、ステップバイステップでサポートしていただけました。\n\n特に印象的だったのは、家族の状況を丁寧にヒアリングしていただき、最適な手続き方法を提案してくださったことです。おかげで余計な費用をかけずに、効率的に手続きを完了することができました。",
    serviceType: "inheritance",
    clientIndustry: "個人",
    clientLocation: "千葉県",
    featured: false,
    publishedAt: "2025-07-05"
  } : slug === "suzuki-san" ? {
    _id: "test3",
    clientName: "鈴木様",
    slug: { current: "suzuki-san" },
    rating: 4,
    comment: "会社設立でお願いしました。必要書類の準備から法務局への提出まで、すべてサポートしていただきました。\n\n起業を決意したものの、会社設立の手続きについて全く知識がありませんでした。知人の紹介でフォルティア行政書士事務所事務所を知り、ご相談させていただきました。\n\n定款の作成から必要書類の準備、法務局への提出まで、一連の手続きをワンストップでサポートしていただけました。特に、事業内容に応じた定款の内容についてアドバイスをいただけたのが非常に助かりました。\n\n手続きの進捗も随時報告していただき、安心してお任せすることができました。設立後の各種手続きについてもアドバイスをいただき、スムーズに事業をスタートすることができました。",
    serviceType: "incorporation",
    clientIndustry: "IT業",
    clientLocation: "神奈川県",
    featured: false,
    publishedAt: "2025-07-04"
  } : null;

  if (!testimonial) {
    notFound();
  }

  const serviceTypeLabels: { [key: string]: string } = {
    license: "許認可申請",
    inheritance: "相続手続き",
    incorporation: "会社設立",
    contracts: "契約書作成",
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
                <h1 className="text-xl font-bold"><span className="text-gray-600">フォルティア</span><span className="text-gray-600 ml-1">行政書士事務所</span></h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                事務所概要
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                お知らせ
              <Link href="/testimonials" className="text-blue-600 font-semibold">
                お客様の声
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
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
            <span>／</span>
            <Link href="/testimonials" className="hover:text-gray-700">
              お客様の声
            <span>／</span>
            <span className="text-gray-900">{testimonial.clientName}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Testimonial Header */}
          <header className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <time className="text-sm text-gray-500">
                  {new Date(testimonial.publishedAt).toLocaleDateString('ja-JP')}
                </time>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {serviceTypeLabels[testimonial.serviceType] || testimonial.serviceType}
                </span>
                {testimonial.featured && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    注目の声
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{testimonial.clientName}のご感想</h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <span className="text-lg text-gray-600">({testimonial.rating}/5)</span>
            </div>

            {/* Client Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">お客様情報</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">お客様名</dt>
                  <dd className="text-base text-gray-900">{testimonial.clientName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">ご利用サービス</dt>
                  <dd className="text-base text-gray-900">
                    {serviceTypeLabels[testimonial.serviceType] || testimonial.serviceType}
                  </dd>
                </div>
                {testimonial.clientIndustry && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">業種・職業</dt>
                    <dd className="text-base text-gray-900">{testimonial.clientIndustry}</dd>
                  </div>
                )}
                {testimonial.clientLocation && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">地域</dt>
                    <dd className="text-base text-gray-900">{testimonial.clientLocation}</dd>
                  </div>
                )}
              </dl>
            </div>
          </header>

          {/* Testimonial Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">お客様のご感想</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {testimonial.comment}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                ← お客様の声一覧に戻る
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                無料相談のお申し込み
            </div>
          </div>
        </div>

        {/* Related CTA */}
        <div className="mt-12">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              同じようなお悩みをお持ちですか？
            </h2>
            <p className="text-gray-600 mb-6">
              初回相談は無料です。お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                無料相談のお申し込み
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                サービス一覧を見る
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-base font-semibold mb-4 hover:text-gray-300 transition-colors cursor-pointer"><span className="text-gray-300">フォルティア</span><span className="text-gray-300 ml-1">行政書士事務所</span></h3>
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