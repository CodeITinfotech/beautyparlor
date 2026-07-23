'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryImages } from '@/data/testimonials';
import { X, Sparkles, Scissors, Palette } from 'lucide-react';

const categories = ['All', 'Bridal', 'Hair', 'Makeup', 'Nails', 'Studio'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore our work and get inspired for your next look
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white'
                    : 'bg-[#F8E8EA] text-[#C58A73] hover:bg-[#C58A73] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="masonry-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center">
                      {image.category === 'Bridal' && <Sparkles className="w-16 h-16 text-white/30" />}
                      {image.category === 'Hair' && <Scissors className="w-16 h-16 text-white/30" />}
                      {image.category === 'Makeup' && <Sparkles className="w-16 h-16 text-white/30" />}
                      {image.category === 'Nails' && <Palette className="w-16 h-16 text-white/30" />}
                      {image.category === 'Studio' && <Sparkles className="w-16 h-16 text-white/30" />}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <span className="px-2 py-1 bg-[#C58A73] rounded text-xs mb-2 inline-block">
                          {image.category}
                        </span>
                        <h4 className="font-semibold">{image.alt}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#D6B25E] transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-[#C58A73] to-[#D6B25E] rounded-xl flex items-center justify-center">
                <span className="text-white/50 text-xl">{selectedImage.alt}</span>
              </div>
              <div className="mt-4 text-center text-white">
                <span className="px-3 py-1 bg-[#C58A73] rounded-full text-sm mb-2 inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
