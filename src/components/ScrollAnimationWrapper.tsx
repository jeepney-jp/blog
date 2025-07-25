'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollAnimationWrapper({ 
  children, 
  delay = 0,
  className = ''
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  return (
    <div 
      ref={ref}
      className={`scroll-animation ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}