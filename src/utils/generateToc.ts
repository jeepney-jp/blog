import { PortableTextBlock } from '@portabletext/types';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function generateTocFromContent(content: PortableTextBlock[]): TocItem[] {
  const tocItems: TocItem[] = [];
  let headingIndex = 0;

  content.forEach((block) => {
    if (block._type === 'block' && block.style && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children
        ?.filter((child) => child._type === 'span' && 'text' in child)
        .map((child) => (child as { text: string }).text)
        .join('');

      if (text) {
        const id = `heading-${headingIndex}`;
        const level = block.style === 'h2' ? 2 : 3;
        
        tocItems.push({
          id,
          text,
          level,
        });
        
        headingIndex++;
      }
    }
  });

  return tocItems;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}