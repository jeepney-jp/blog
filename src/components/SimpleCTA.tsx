import Link from 'next/link';

interface SimpleCTAProps {
  serviceName: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function SimpleCTA({ serviceName, variant = 'primary', className = '' }: SimpleCTAProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-300";
  const variantClasses = variant === 'primary' 
    ? "bg-[#F39800] text-white hover:bg-[#E88700] shadow-lg hover:shadow-xl"
    : "bg-white text-[#004080] border-2 border-[#004080] hover:bg-[#004080] hover:text-white";

  return (
    <div className={`text-center ${className}`}>
      <p className="text-gray-700 mb-4">
        {serviceName}についてのご相談・お問い合わせはお気軽に
      </p>
      <Link
        href="/contact"
        className={`${baseClasses} ${variantClasses}`}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        無料相談はこちら
      </Link>
    </div>
  );
}