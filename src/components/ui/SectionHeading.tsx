'use client';

import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#333333]'
        }`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-lg md:text-xl max-w-2xl mx-auto ${
            light ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
