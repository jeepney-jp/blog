"use client";

import { useState } from 'react';
import { FaqItem } from '@/lib/types';

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-4 sm:px-6 py-4 text-left flex items-start gap-3 sm:gap-4 hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
          >
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#004080] rounded-full flex items-center justify-center mt-0.5">
              <span className="text-white font-bold text-sm sm:text-base">Q</span>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span className="font-medium text-gray-900 pr-2 leading-relaxed">{faq.question}</span>
              <svg
                className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-4 sm:px-6 py-4 bg-gray-50">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#F39800] rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white font-bold text-sm sm:text-base">A</span>
                </div>
                <p className="text-gray-700 flex-1 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}