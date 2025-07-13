import Link from 'next/link';
import Image from 'next/image';
import { ServiceCategory } from '@/lib/types';
import { getOptimizedImageProps } from '@/lib/sanityImage';

interface CategoryCardProps {
  category: ServiceCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageProps = getOptimizedImageProps(category.image, {
    width: 400,
    quality: 80,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
  });

  return (
    <Link
      href={`/services/${category.slug}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* カテゴリー画像 */}
      <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
        {imageProps ? (
          <Image
            src={imageProps.src}
            alt={category.title}
            width={imageProps.width}
            height={imageProps.height}
            sizes={imageProps.sizes}
            className="object-cover"
            fill
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* カテゴリー情報 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
        {category.catchphrase && (
          <p className="text-gray-600 text-sm mb-4">{category.catchphrase}</p>
        )}

        {/* 中項目プレビュー */}
        {category.previewServices && category.previewServices.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-1">
              {category.previewServices.map((service) => (
                <li key={service._id} className="text-sm text-gray-700 flex items-start">
                  <span className="text-[#004080] mr-2">・</span>
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 詳しく見るボタン */}
        <div className="flex items-center justify-end text-[#004080] hover:text-[#003366] font-medium">
          <span>詳しく見る</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}