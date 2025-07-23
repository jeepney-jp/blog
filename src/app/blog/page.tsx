import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import UnifiedFooter from "@/components/UnifiedFooter";
// import { getBlogs } from "../../../lib/sanity";

// ブログ記事の型定義
interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

export default async function BlogPage() {
  // 一時的にテストデータを使用
  const blogs: Blog[] = [
    {
      _id: "test1",
      title: "建設業許可の取得方法と必要書類を徹底解説",
      slug: { current: "kensetsugyo-kyoka-shutoku-hoho" },
      excerpt: "建設業を営むために必要な許可の種類、取得要件、必要書類について分かりやすく解説します。一般建設業と特定建設業の違いも詳しく説明します。",
      category: "license",
      tags: ["建設業許可", "許認可申請", "一般建設業", "特定建設業"],
      featured: true,
      readingTime: 8,
      publishedAt: "2025-07-07"
    },
    {
      _id: "test2",
      title: "相続放棄の手続きと注意点｜3ヶ月の期限に要注意",
      slug: { current: "sozoku-hoki-tetsuzuki" },
      excerpt: "相続放棄の手続き方法、必要書類、注意すべきポイントについて詳しく解説します。3ヶ月の期限や注意すべき行為についても説明します。",
      category: "inheritance",
      tags: ["相続放棄", "相続手続き", "家庭裁判所", "3ヶ月期限"],
      featured: true,
      readingTime: 6,
      publishedAt: "2025-07-06"
    },
    {
      _id: "test3",
      title: "合同会社設立のメリット・デメリットと設立手続きの流れ",
      slug: { current: "godo-kaisha-setsuritsu" },
      excerpt: "合同会社の特徴、株式会社との違い、設立手続きの流れについて分かりやすく解説します。設立費用を抑えたい方におすすめの会社形態です。",
      category: "business",
      tags: ["合同会社", "会社設立", "LLC", "設立費用"],
      featured: false,
      readingTime: 7,
      publishedAt: "2025-07-05"
    }
  ];

  const categoryLabels: { [key: string]: string } = {
    license: "許認可・申請",
    inheritance: "相続・遺言",
    business: "会社設立・経営",
    legal: "契約・法務",
    tax: "税務・手続き",
    other: "その他"
  };

  const categories = [
    { value: "all", label: "すべて" },
    { value: "license", label: "許認可・申請" },
    { value: "inheritance", label: "相続・遺言" },
    { value: "business", label: "会社設立・経営" },
    { value: "legal", label: "契約・法務" },
    { value: "tax", label: "税務・手続き" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <PageHeader 
        title="お役立ち情報"
        description="行政書士業務に関する有用な情報や法改正のポイントなど、皆様のお役に立つ情報をお届けします"
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              ホーム
            </Link>
            <span>／</span>
            <span className="text-gray-900">お役立ち情報</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  category.value === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">注目記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.filter(blog => blog.featured).map((blog) => (
              <article key={blog._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {categoryLabels[blog.category] || blog.category}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      注目記事
                    </span>
                    {blog.readingTime && (
                      <span className="text-sm text-gray-500">
                        約{blog.readingTime}分
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/blog/${blog.slug.current}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                    </time>
                    <Link
                      href={`/blog/${blog.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">すべての記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {categoryLabels[blog.category] || blog.category}
                    </span>
                    {blog.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        注目
                      </span>
                    )}
                    {blog.readingTime && (
                      <span className="text-sm text-gray-500">
                        約{blog.readingTime}分
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/blog/${blog.slug.current}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                    </time>
                    <Link
                      href={`/blog/${blog.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お困りの手続きはございませんか？
            </h2>
            <p className="text-gray-600 mb-6">
              記事でご不明な点や具体的なご相談がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              無料相談のお申し込み
            </Link>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}