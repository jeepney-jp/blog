import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import UnifiedFooter from "@/components/UnifiedFooter";
import NewCTASection from "@/components/NewCTASection";
import { getBlogs } from "@/lib/sanity";
import { Locale } from "@/lib/i18n/types";

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

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  // Sanityからブログ記事を取得
  const blogs: Blog[] = await getBlogs();

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
      <Header lang={lang} />

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

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">注目記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.filter(blog => blog.featured).map((blog) => (
              <article key={blog._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {blog.featuredImage && (
                  <Link href={`/blog/${blog.slug.current}`} className="block">
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                      <Image
                        src={blog.featuredImage.asset.url}
                        alt={blog.featuredImage.alt || blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                )}
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
                {blog.featuredImage && (
                  <Link href={`/blog/${blog.slug.current}`} className="block">
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                      <Image
                        src={blog.featuredImage.asset.url}
                        alt={blog.featuredImage.alt || blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                )}
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

      </main>

      <NewCTASection />
      <UnifiedFooter />
    </div>
  );
}