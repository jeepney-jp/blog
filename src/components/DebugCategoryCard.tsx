'use client';

import { useEffect } from 'react';
import { ServiceCategory } from '@/lib/types';

interface DebugCategoryCardProps {
  categories: ServiceCategory[];
}

export default function DebugCategoryCard({ categories }: DebugCategoryCardProps) {
  useEffect(() => {
    console.log('=== Debug: Categories Data ===');
    categories.forEach((category, index) => {
      console.log(`Category ${index + 1}: ${category.title}`);
      console.log('- image:', category.image);
      console.log('- icon:', category.icon);
      console.log('- iconUrl:', category.iconUrl);
    });
  }, [categories]);

  return null;
}