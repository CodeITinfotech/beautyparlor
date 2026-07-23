'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Image Slider */}
      <div 
        className="absolute inset-0"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{ 
                backgroundImage: `url(${image.url})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1.1)'
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-[#C58A73]/80 backdrop-blur-sm rounded-full text-white mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Welcome to {businessInfo.name}</span>
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reveal Your Natural{' '}
            <span className="text-[#D6B25E]">Beauty</span> with Professional Makeup & Beauty Services
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Bridal Makeup, Party Makeup, Hair Styling, Skin Care and Beauty Treatments in Pune's Premier Beauty Studio.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact#booking">
              <Button size="lg" className="bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white hover:shadow-lg hover:shadow-[#C58A73]/30">
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
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/20 border border-white/30">
                <span className="flex items-center gap-2">
                  📞 {businessInfo.phone}
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '50+', label: 'Services' },
              { number: '4.9', label: 'Google Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#D6B25E] w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ display: 'none' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
