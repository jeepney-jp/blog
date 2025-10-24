'use client';

import { useEffect, useState } from 'react';

interface ManualTableOfContentsProps {
  title?: string;
  includeLevels?: string[];
}

export default function ManualTableOfContents({ title = '目次', includeLevels = ['h2', 'h3'] }: ManualTableOfContentsProps) {
  const [tocItems, setTocItems] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // 記事本文のコンテナ内のみの見出しを検出（CTAやフッターを除外）
    const articleContent = document.querySelector('.prose');
    if (!articleContent) return;
    
    // 選択されたレベルの見出しセレクタを作成
    const selector = includeLevels.join(', ');
    const headings = articleContent.querySelectorAll(selector);
    const items = Array.from(headings).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      };
    });
    setTocItems(items);

    // IntersectionObserver for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -70% 0%',
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [includeLevels]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block py-1 text-sm hover:text-blue-600 transition-colors ${
                activeId === item.id
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-600'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}