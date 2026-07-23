'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';
import { generateWhatsAppLink } from '@/lib/utils';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
    alt: 'Luxury Beauty Salon Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&q=80',
    alt: 'Professional Makeup Artist'
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
    alt: 'Bridal Makeup'
  },
  {
    url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1920&q=80',
    alt: 'Hair Styling'
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80',
    alt: 'Nail Art'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleWhatsApp = () => {
    const message = `Hello ${businessInfo.name}! I'm interested in your services and would like to book an appointment.`;
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container-custom px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-[#C58A73] rounded-full text-white">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Welcome to {businessInfo.name}</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Reveal Your Natural{' '}
            <span className="text-[#D6B25E]">Beauty</span> with Professional Makeup & Beauty Services
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional Bridal Makeup, Party Makeup, Hair Styling, Skin Care & Beauty Treatments in Pune's Premier Beauty Studio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact#booking">
              <Button size="lg" className="bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white hover:shadow-lg">
                Book Appointment
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="border-white text-white hover:bg-white hover:text-[#C58A73]"
            >
              <span className="flex items-center gap-2">
                WhatsApp Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '50+', label: 'Services' },
              { number: '4.9', label: 'Google Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#D6B25E] w-6 sm:w-8' : 'bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
