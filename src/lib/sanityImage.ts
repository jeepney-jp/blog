import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity.client';
import { SanityImageAsset } from './types';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageAsset | undefined | null) {
  if (!source) return null;
  return builder.image(source);
}

export function getImageDimensions(url: string): { width: number; height: number } | null {
  const match = url.match(/-(\d+)x(\d+)\./);
  if (match) {
    return {
      width: parseInt(match[1], 10),
      height: parseInt(match[2], 10),
    };
  }
  return null;
}

export function getOptimizedImageProps(
  source: SanityImageAsset | undefined | null,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    sizes?: string;
  } = {}
) {
  if (!source) return null;

  const { width = 800, quality = 75, sizes } = options;
  
  const imageUrl = urlFor(source);
  if (!imageUrl) return null;

  const url = imageUrl.width(width).quality(quality).url();
  const dimensions = getImageDimensions(url);

  return {
    src: url,
    width: dimensions?.width || width,
    height: dimensions?.height || Math.round(width * 0.75),
    sizes: sizes || `(max-width: ${width}px) 100vw, ${width}px`,
  };
}