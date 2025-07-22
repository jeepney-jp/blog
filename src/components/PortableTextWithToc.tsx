import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

interface PortableTextWithTocProps {
  content: PortableTextBlock[];
  headingIndexRef: { current: number };
}

export default function PortableTextWithToc({ content, headingIndexRef }: PortableTextWithTocProps) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
      h2: ({ children }) => {
        const id = `heading-${headingIndexRef.current++}`;
        return <h2 id={id} className="text-2xl font-bold mt-8 mb-4 scroll-mt-24">{children}</h2>;
      },
      h3: ({ children }) => {
        const id = `heading-${headingIndexRef.current++}`;
        return <h3 id={id} className="text-xl font-bold mt-6 mb-3 scroll-mt-24">{children}</h3>;
      },
      h4: ({ children }) => <h4 className="text-lg font-bold mt-6 mb-3">{children}</h4>,
      h5: ({ children }) => <h5 className="text-base font-bold mt-4 mb-2">{children}</h5>,
      h6: ({ children }) => <h6 className="text-sm font-bold mt-4 mb-2">{children}</h6>,
      normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="ml-4">{children}</li>,
      number: ({ children }) => <li className="ml-4">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <span className="underline">{children}</span>,
      code: ({ children }) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
      color: ({ value, children }) => (
        <span style={{ color: value?.hex }}>{children}</span>
      ),
      highlight: ({ value, children }) => {
        const colors: { [key: string]: string } = {
          yellow: 'bg-yellow-200',
          pink: 'bg-pink-200',
          lightblue: 'bg-blue-200',
          lightgreen: 'bg-green-200',
        };
        return (
          <span className={`${colors[value?.color] || 'bg-yellow-200'} px-1`}>
            {children}
          </span>
        );
      },
    },
    types: {
      image: ({ value }) => (
        <figure className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ),
      youtube: ({ value }) => {
        const videoId = value.url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
        if (!videoId) return null;
        return (
          <div className="my-8 aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      },
      code: ({ value }) => (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
          <code className="text-sm">{value.code}</code>
        </pre>
      ),
      blockquote: ({ value }) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic">
          <p className="mb-2">{value.text}</p>
          {value.cite && (
            <cite className="text-sm text-gray-600 not-italic">— {value.cite}</cite>
          )}
        </blockquote>
      ),
    },
  };

  return <PortableText value={content} components={components} />;
}