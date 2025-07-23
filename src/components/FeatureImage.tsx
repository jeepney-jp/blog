'use client';

import { useState } from 'react';

interface FeatureImageProps {
  src: string;
  alt: string;
  fallbackSvg: string;
}

export default function FeatureImage({ src, alt, fallbackSvg }: FeatureImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <img 
        src={fallbackSvg}
        alt={alt}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <img 
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}