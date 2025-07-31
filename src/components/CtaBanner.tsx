import Link from 'next/link';

interface CtaBannerProps {
  text?: string;
  href?: string;
  buttonText?: string;
  categoryTitle?: string;
  serviceTitle?: string;
}

export default function CtaBanner({ 
  text, 
  href, 
  buttonText,
  categoryTitle, 
  serviceTitle 
}: CtaBannerProps) {
  // 自動生成されるテキストとhref
  const generatedText = serviceTitle 
    ? `${serviceTitle}について相談する`
    : categoryTitle 
    ? `${categoryTitle}について無料で相談する`
    : '無料相談のお申込み';

  const queryParam = serviceTitle || categoryTitle;
  const generatedHref = queryParam 
    ? `/contact?service=${encodeURIComponent(queryParam)}`
    : '/contact';

  // 実際に使用する値（propsが優先）
  const finalText = text || generatedText;
  const finalHref = href || generatedHref;
  const finalButtonText = buttonText || '無料相談を申し込む';

  return (
    <section className="bg-[#004080] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {finalText}
        </h2>
        <p className="text-white mb-8 text-lg">
          業界最安水準の料金で、多言語対応可能。10,000件超の実績でサポートします。
        </p>
        <Link
          href={finalHref}
          className="inline-block bg-white text-[#004080] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          {finalButtonText}
        </Link>
      </div>
    </section>
  );
}