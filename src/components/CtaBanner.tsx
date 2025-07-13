import Link from 'next/link';

interface CtaBannerProps {
  text: string;
  href: string;
  buttonText?: string;
}

export default function CtaBanner({ text, href, buttonText = 'お問い合わせ' }: CtaBannerProps) {
  return (
    <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">{text}</h3>
      <Link
        href={href}
        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}