import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanityImage'

interface ImageValue {
  asset?: {
    _ref: string;
  };
  alt?: string;
  caption?: string;
}

interface YouTubeValue {
  url: string;
}

interface CodeValue {
  language?: string;
  code: string;
}

interface BlockquoteValue {
  text: string;
  cite?: string;
}

interface ColorValue {
  hex?: string;
}

interface HighlightValue {
  color?: string;
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null
      }
      const imageUrl = urlFor(value);
      if (!imageUrl) return null;
      
      return (
        <figure className="my-8">
          <Image
            src={imageUrl.width(800).url()}
            alt={value.alt || '画像'}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-600 text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    youtube: ({ value }: { value: YouTubeValue }) => {
      const { url } = value
      if (!url) return null
      
      // YouTubeのIDを抽出
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
      const videoId = match ? match[1] : null
      
      if (!videoId) return null
      
      return (
        <div className="my-8 relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg"
          />
        </div>
      )
    },
    code: ({ value }: { value: CodeValue }) => {
      return (
        <pre className="my-6 p-4 bg-gray-100 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || 'text'}`}>
            {value.code}
          </code>
        </pre>
      )
    },
    blockquote: ({ value }: { value: BlockquoteValue }) => {
      return (
        <blockquote className="my-6 pl-4 border-l-4 border-blue-500 italic">
          <p className="text-gray-700">{value.text}</p>
          {value.cite && (
            <cite className="block text-sm text-gray-600 mt-2 not-italic">
              — {value.cite}
            </cite>
          )}
        </blockquote>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-4 border-l-4 border-blue-500 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
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
      <code className="px-1 py-0.5 bg-gray-100 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      )
    },
    color: ({ value, children }: { value: ColorValue; children: React.ReactNode }) => {
      return (
        <span style={{ color: value?.hex || '#000000' }}>
          {children}
        </span>
      )
    },
    highlight: ({ value, children }: { value: HighlightValue; children: React.ReactNode }) => {
      const colors: { [key: string]: string } = {
        yellow: '#fef3c7',
        pink: '#fce7f3',
        lightblue: '#dbeafe',
        lightgreen: '#d1fae5',
      }
      return (
        <span style={{ backgroundColor: colors[value?.color] || colors.yellow }}>
          {children}
        </span>
      )
    },
  },
}