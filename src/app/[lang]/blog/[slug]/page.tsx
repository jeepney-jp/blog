import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from '@/components/Header';
import UnifiedFooter from '@/components/UnifiedFooter';
import NewCTASection from '@/components/NewCTASection';
import { Locale } from '@/lib/i18n/types';
import TableOfContents from '@/components/TableOfContents';
import PortableTextWithToc from '@/components/PortableTextWithToc';
import { generateTocFromContent } from '@/utils/generateToc';
import { getBlogBySlug, getBlogs } from "@/lib/sanity";


interface PageProps {
  params: Promise<{ slug: string; lang: Locale }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug, lang } = await params;
  
  // Sanityからブログ記事を取得
  const blog = await getBlogBySlug(slug);

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
      <Header lang={lang} />

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Article Content */}
          <article className="lg:col-span-3 bg-white rounded-lg shadow-sm p-8">
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

            {/* Featured Image */}
            {blog.featuredImage && blog.featuredImage.asset && (
              <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={blog.featuredImage.asset.url}
                  alt={blog.featuredImage.alt || blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  className="object-cover"
                />
              </div>
            )}

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{blog.excerpt}</p>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Table of Contents for Mobile */}
          {blog.showToc !== false && blog.content && blog.content.length > 0 && (() => {
            const tocItems = generateTocFromContent(blog.content);
            if (tocItems.length > 0) {
              return (
                <div className="lg:hidden mb-8">
                  <TableOfContents 
                    items={tocItems} 
                    title={blog.tocTitle || '目次'}
                  />
                </div>
              );
            }
            return null;
          })()}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content && blog.content.length > 0 && (
              <PortableTextWithToc
                content={blog.content}
                headingIndexRef={{ current: 0 }}
              />
            )}
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

            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              ← お役立ち情報一覧に戻る
            </Link>
          </div>
          </article>

          {/* Sidebar with Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {blog.showToc !== false && blog.content && blog.content.length > 0 && (() => {
                const tocItems = generateTocFromContent(blog.content);
                if (tocItems.length > 0) {
                  return (
                    <TableOfContents 
                      items={tocItems} 
                      title={blog.tocTitle || '目次'}
                    />
                  );
                }
                return null;
              })()}
            </div>
          </aside>
        </div>
      </main>

      {/* CTA Section */}
      <NewCTASection lang={lang} />

      {/* Footer */}
      <UnifiedFooter />
    </div>
  );
}

// 静的パスの生成
export async function generateStaticParams() {
  const blogs = await getBlogs();
  
  return blogs.map((blog: { slug: { current: string } }) => ({
    slug: blog.slug.current,
  }));
}