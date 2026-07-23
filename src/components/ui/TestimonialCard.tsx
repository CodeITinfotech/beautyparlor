'use client';

import { Testimonial } from '@/types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg card-hover relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-[#F8E8EA]" />
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-[#333333]">{testimonial.name}</h4>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? 'star-filled fill-current' : 'star-empty'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">&ldquo;{testimonial.review}&rdquo;</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(testimonial.date).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}
